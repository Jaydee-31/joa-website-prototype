/*
 * JOA Spa & Salon — prototype runtime
 * A tiny template engine for the prototype pages. Each page has:
 *   <template id="view">…markup…</template>
 *   <script> class Component extends JOA.Component { renderVals() { … } } JOA.mount(Component); </script>
 *
 * Template features:
 *   {{path.to.value}}            text or attribute value
 *   onClick="{{fn}}"             event handler (any on* attribute)
 *   disabled="{{flag}}"          boolean attributes
 *   <sc-for list="{{xs}}" as="x">…</sc-for>   repeat
 *   <sc-if value="{{cond}}">…</sc-if>         show when truthy
 */
(function () {
  'use strict';

  const HOLE = /\{\{\s*([^}]+?)\s*\}\}/g;
  const WHOLE = /^\s*\{\{\s*([^}]+?)\s*\}\}\s*$/;
  const BOOL_ATTRS = new Set(['disabled', 'checked', 'selected', 'readonly', 'required', 'hidden', 'open', 'multiple']);

  function lookup(scope, path) {
    const parts = path.split('.');
    let v = scope[parts[0]];
    for (let i = 1; i < parts.length && v != null; i++) v = v[parts[i]];
    return v;
  }

  function interpolate(str, scope) {
    return str.replace(HOLE, function (_, p) {
      const v = lookup(scope, p);
      return v == null ? '' : String(v);
    });
  }

  function wholeValue(str, scope) {
    const m = str && str.match(WHOLE);
    return m ? lookup(scope, m[1]) : undefined;
  }

  function renderChildren(srcParent, scope, out) {
    srcParent.childNodes.forEach(function (n) { renderNode(n, scope, out); });
  }

  function renderNode(node, scope, out) {
    if (node.nodeType === Node.TEXT_NODE) {
      out.appendChild(document.createTextNode(interpolate(node.nodeValue, scope)));
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;

    const tag = node.localName;

    if (tag === 'sc-for') {
      const list = wholeValue(node.getAttribute('list'), scope) || [];
      const as = node.getAttribute('as') || 'item';
      Array.from(list).forEach(function (item, i) {
        const child = Object.create(scope);
        child[as] = item;
        child.$index = i;
        renderChildren(node, child, out);
      });
      return;
    }

    if (tag === 'sc-if') {
      if (wholeValue(node.getAttribute('value'), scope)) renderChildren(node, scope, out);
      return;
    }

    const ns = node.namespaceURI;
    const el = ns && ns !== 'http://www.w3.org/1999/xhtml'
      ? document.createElementNS(ns, node.tagName)
      : document.createElement(tag);

    Array.from(node.attributes).forEach(function (a) {
      const name = a.name;
      if (name.startsWith('hint-')) return;
      if (/^on[a-z]/i.test(name)) {
        const fn = wholeValue(a.value, scope);
        if (typeof fn === 'function') {
          el.addEventListener(name.slice(2).toLowerCase(), function (e) { fn(e); });
        }
        return;
      }
      if (BOOL_ATTRS.has(name.toLowerCase())) {
        const v = WHOLE.test(a.value) ? wholeValue(a.value, scope) : true;
        if (v && v !== 'false') el.setAttribute(name, '');
        return;
      }
      const val = interpolate(a.value, scope);
      if (ns && ns !== 'http://www.w3.org/1999/xhtml') el.setAttributeNS(null, name, val);
      else el.setAttribute(name, val);
    });

    // <template> content lives in .content; everything else in childNodes
    renderChildren(tag === 'template' ? node.content : node, scope, el);
    out.appendChild(el);
  }

  // Keep what the visitor typed when the page re-renders
  function snapshotFields(root) {
    return Array.from(root.querySelectorAll('input, textarea, select')).map(function (f) {
      return { tag: f.tagName, type: f.type, value: f.value, checked: f.checked };
    });
  }
  function restoreFields(root, snap) {
    const fields = root.querySelectorAll('input, textarea, select');
    fields.forEach(function (f, i) {
      const s = snap[i];
      if (!s || s.tag !== f.tagName || s.type !== f.type) return;
      if (f.type === 'checkbox' || f.type === 'radio') f.checked = s.checked;
      else f.value = s.value;
    });
  }

  class Component {
    constructor(props) {
      this.props = props || {};
      this.state = {};
      this._queued = false;
    }
    setState(patch) {
      const next = typeof patch === 'function' ? patch(this.state, this.props) : patch;
      this.state = Object.assign({}, this.state, next);
      if (!this._queued) {
        this._queued = true;
        Promise.resolve().then(() => { this._queued = false; this._render(); });
      }
    }
    forceUpdate() { this._render(); }
    renderVals() { return {}; }
    _render() {
      const root = this._root;
      const tpl = this._template;
      const snap = snapshotFields(root);
      const frag = document.createDocumentFragment();
      renderChildren(tpl.content, this.renderVals() || {}, frag);
      root.replaceChildren(frag);
      restoreFields(root, snap);
    }
  }

  function mount(Ctor, opts) {
    opts = opts || {};
    const tpl = document.getElementById(opts.template || 'view');
    const root = document.getElementById(opts.root || 'app');
    const c = new Ctor(opts.props || {});
    c._template = tpl;
    c._root = root;
    c._render();
    if (typeof c.componentDidMount === 'function') c.componentDidMount();
    return c;
  }

  window.JOA = { Component: Component, mount: mount };
  // Alias so page scripts can keep `extends DCLogic`
  window.DCLogic = Component;
})();

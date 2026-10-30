import { useEffect } from 'react';

const REDUCED = '(prefers-reduced-motion: reduce)';

// Public pages: the content blocks inside each section fade in as they scroll into view
const PUBLIC_TARGETS = '#app section > div > *';
// Admin pages: the panels in the main column play a page-enter transition. Never the topbar
// or main itself: a filter or translate there would trap the topbar's fixed menu and dialog.
const ADMIN_TARGETS = '#app main > :not(.admin-topbar)';

// Grids of cards reveal item by item instead of as one block
function expand(el) {
  const display = getComputedStyle(el).display;
  return display === 'grid' && el.children.length >= 3 ? [...el.children] : [el];
}

// Admin: blur + slide up on every page change. The class comes off when the animation ends,
// so no filter is left behind on the panels.
function enterAdmin() {
  const panels = [...document.querySelectorAll(ADMIN_TARGETS)];
  const done = (e) => {
    if (e.target !== e.currentTarget) return;
    e.currentTarget.classList.remove('page-enter');
    e.currentTarget.removeEventListener('animationend', done);
  };
  panels.forEach((el, n) => {
    el.style.setProperty('--enter-delay', Math.min(n, 5) * 50 + 'ms');
    el.classList.add('page-enter');
    el.addEventListener('animationend', done);
  });
  return () =>
    panels.forEach((el) => {
      el.classList.remove('page-enter');
      el.removeEventListener('animationend', done);
    });
}

// Public: fades blocks up into place as they scroll into view. Only adds classes, so a block
// React mounts later (a new step, an opened panel) simply appears without motion.
function revealOnScroll() {
  if (!('IntersectionObserver' in window)) return undefined;
  const targets = [...document.querySelectorAll(PUBLIC_TARGETS)].flatMap((el) =>
    expand(el).map((item, i) => [item, i]),
  );
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-revealed');
        io.unobserve(e.target);
      });
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.08 },
  );
  targets.forEach(([el, i]) => {
    el.style.setProperty('--reveal-delay', Math.min(i, 6) * 60 + 'ms');
    el.classList.add('reveal');
    io.observe(el);
  });
  return () => io.disconnect();
}

export function useReveal(pathname) {
  useEffect(() => {
    if (window.matchMedia(REDUCED).matches) return undefined;
    return pathname.startsWith('/admin') ? enterAdmin() : revealOnScroll();
  }, [pathname]);
}

/* ====== Smart, performant JS for interactivity ====== */

/* Utility */
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

/* NAV TOGGLE (mobile) - event delegation */
const navToggle = $('#navToggle');
const primaryNav = $('#primaryNav');
if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    primaryNav.style.display = expanded ? '' : 'flex';
  }, { passive:true });
}

/* Smooth scrolling for internal links (native smooth via CSS fallback may be present) */
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const hash = a.getAttribute('href');
  if (hash.length > 1) {
    e.preventDefault();
    const target = document.querySelector(hash);
    if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
    // close mobile nav if open
    if (primaryNav && window.innerWidth <= 640) {
      primaryNav.style.display = '';
      navToggle.setAttribute('aria-expanded', 'false');
    }
  }
}, { passive:false });

/* IntersectionObserver: reveal animations (lightweight) */
const revealItems = $$('.section, .card, .gallery-item');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, {threshold: 0.09});
  revealItems.forEach(it => io.observe(it));
} else {
  revealItems.forEach(it => it.classList.add('is-visible'));
}

/* ===== Global Image Viewer =====
   - Opens original image (data-full preferred)
   - Keyboard accessible (Esc to close, ←/→ to navigate)
   - Focus management (restore focus after close)
   - Event delegation for all clickable images (.clickable-image)
*/
const viewer = $('#imageViewer');
const viewerImg = $('#viewerImg');
const viewerClose = $('#viewerClose');
const viewerPrev = $('#viewerPrev');
const viewerNext = $('#viewerNext');

let gallery = []; // ordered list of clickable images
let currentIndex = -1;
let lastFocused = null;

function buildGallery() {
  gallery = $$('.clickable-image').map(img => {
    return {
      el: img,
      src: img.dataset.full ? img.dataset.full : img.src,
      alt: img.alt || ''
    };
  });
}
buildGallery();

/* open viewer with index */
function openViewer(index) {
  if (index < 0 || index >= gallery.length) return;
  lastFocused = document.activeElement;
  currentIndex = index;
  const item = gallery[currentIndex];
  viewerImg.src = item.src;
  viewerImg.alt = item.alt || 'Image preview';
  viewer.setAttribute('aria-hidden', 'false');
  viewer.style.opacity = '1';
  viewer.style.pointerEvents = 'auto';
  viewerClose.focus();

  // Preload neighbors for speed
  preloadIndex(currentIndex - 1);
  preloadIndex(currentIndex + 1);
}

function closeViewer() {
  viewer.setAttribute('aria-hidden', 'true');
  viewerImg.src = '';
  viewerImg.alt = '';
  viewer.style.opacity = '';
  viewer.style.pointerEvents = '';
  if (lastFocused && lastFocused.focus) lastFocused.focus();
}

/* navigation */
function goPrev() {
  if (currentIndex > 0) openViewer(currentIndex - 1);
}
function goNext() {
  if (currentIndex < gallery.length - 1) openViewer(currentIndex + 1);
}

function preloadIndex(i) {
  if (i < 0 || i >= gallery.length) return;
  const src = gallery[i].src;
  const img = new Image();
  img.src = src;
}

/* click handler via delegation */
document.addEventListener('click', (e) => {
  const img = e.target.closest('.clickable-image');
  if (!img) return;
  // find index
  const idx = gallery.findIndex(g => g.el === img);
  if (idx !== -1) {
    openViewer(idx);
    e.preventDefault();
  }
});

/* viewer controls */
viewerClose.addEventListener('click', closeViewer, {passive:true});
viewerPrev.addEventListener('click', goPrev, {passive:true});
viewerNext.addEventListener('click', goNext, {passive:true});

/* click outside to close */
viewer.addEventListener('click', (e) => {
  if (e.target === viewer) closeViewer();
});

/* keyboard navigation */
document.addEventListener('keydown', (e) => {
  if (viewer.getAttribute('aria-hidden') === 'false') {
    if (e.key === 'Escape') closeViewer();
    if (e.key === 'ArrowLeft') goPrev();
    if (e.key === 'ArrowRight') goNext();
  }
});

/* Rebuild gallery if DOM changes (in case dynamic images are inserted later) */
const mutationObserver = new MutationObserver(() => buildGallery());
mutationObserver.observe(document.body, {childList:true, subtree:true});

/* IAMS legacy modal behavior (preserve existing functionality) */
const iamsLink = $('#iams-link');
const legacyModal = $('#iams-modal');
if (iamsLink && legacyModal) {
  const legacyClose = legacyModal.querySelector('.legacy-close');
  iamsLink.addEventListener('click', (e) => {
    e.preventDefault();
    legacyModal.style.display = 'flex';
    legacyModal.setAttribute('aria-hidden','false');
  });
  legacyClose && legacyClose.addEventListener('click', () => {
    legacyModal.style.display = 'none';
    legacyModal.setAttribute('aria-hidden','true');
  });
  legacyModal.addEventListener('click', (ev) => {
    if (ev.target === legacyModal) {
      legacyModal.style.display = 'none';
      legacyModal.setAttribute('aria-hidden','true');
    }
  });
}

/* lightweight resize handling: hide nav on resize larger screens */
window.addEventListener('resize', () => {
  if (window.innerWidth > 640 && primaryNav) primaryNav.style.display = '';
}, {passive:true});

/* Optional: reduce motion respect */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.style.scrollBehavior = 'auto';
}

// ── Nav scroll effect ────────────────────────────────────────────────────
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ── Mobile nav toggle ────────────────────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ── Lightbox ─────────────────────────────────────────────────────────────
const lightbox     = document.getElementById('lightbox');
const lightboxImg  = document.getElementById('lightboxImg');
const lightboxCap  = document.getElementById('lightboxCaption');
const lightboxClose= document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let photoItems = [];
let currentIdx = 0;

function openLightbox(idx) {
  currentIdx = idx;
  const item = photoItems[idx];
  lightboxImg.src = item.dataset.src || item.querySelector('img')?.src || '';
  lightboxCap.textContent = item.dataset.caption || '';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  lightboxImg.src = '';
}

function showPrev() {
  currentIdx = (currentIdx - 1 + photoItems.length) % photoItems.length;
  openLightbox(currentIdx);
}

function showNext() {
  currentIdx = (currentIdx + 1) % photoItems.length;
  openLightbox(currentIdx);
}

document.addEventListener('DOMContentLoaded', () => {
  photoItems = Array.from(document.querySelectorAll('.photo-item'));

  photoItems.forEach((item, idx) => {
    item.addEventListener('click', () => openLightbox(idx));
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev)  lightboxPrev.addEventListener('click', showPrev);
  if (lightboxNext)  lightboxNext.addEventListener('click', showNext);

  if (lightbox) {
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', e => {
    if (!lightbox?.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   showPrev();
    if (e.key === 'ArrowRight')  showNext();
  });
});

/* ═══════════════════════════════════════════════════
   COOKER — js/ui.js
   Navigation, sections, modals, cursor, particles, toast
═══════════════════════════════════════════════════ */

/* ─── Custom Cursor ─────────────────────────── */
var cursor     = document.getElementById('cursor');
var cursorRing = document.getElementById('cursorRing');
var mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', function(e) {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.transform = 'translate(' + (mx - 6) + 'px,' + (my - 6) + 'px)';
});

function animateRing() {
  rx += (mx - rx) * 0.15;
  ry += (my - ry) * 0.15;
  cursorRing.style.transform = 'translate(' + (rx - 20) + 'px,' + (ry - 20) + 'px)';
  requestAnimationFrame(animateRing);
}
animateRing();

function addCursorHover(selector) {
  var els = document.querySelectorAll(selector);
  for (var i = 0; i < els.length; i++) {
    els[i].addEventListener('mouseenter', function() {
      cursor.classList.add('hovered');
      cursorRing.classList.add('hovered');
    });
    els[i].addEventListener('mouseleave', function() {
      cursor.classList.remove('hovered');
      cursorRing.classList.remove('hovered');
    });
  }
}

/* ─── Particles ──────────────────────────────── */
function createParticles() {
  var container = document.getElementById('particles');
  var items = ['🌶️', '🧄', '🧅', '🌿', '⭐', '✨', '🫙'];
  for (var i = 0; i < 20; i++) {
    var p = document.createElement('div');
    p.className = 'particle';
    if (Math.random() > 0.5) {
      p.textContent = items[Math.floor(Math.random() * items.length)];
      p.style.background = 'none';
      p.style.width = 'auto';
      p.style.height = 'auto';
      p.style.fontSize = (0.8 + Math.random() * 0.8) + 'rem';
    }
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 8 + 's';
    p.style.animationDuration = (5 + Math.random() * 8) + 's';
    container.appendChild(p);
  }
}

/* ─── Nav scroll effect ──────────────────────── */
window.addEventListener('scroll', function() {
  var nav = document.getElementById('mainNav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

/* ─── Section switcher ───────────────────────── */
function showSection(section) {
  var home   = document.getElementById('homePage');
  var browse = document.getElementById('browsePage');
  var equip  = document.getElementById('equipPage');
  var about  = document.getElementById('aboutPage');
  var recipe = document.getElementById('recipePage');

  home.style.display = 'none';
  browse.classList.remove('active');
  equip.classList.remove('active');
  about.classList.remove('active');
  recipe.classList.remove('active');
  document.body.style.overflow = '';

  if (section === 'home') {
    home.style.display = 'block';
  } else if (section === 'browse') {
    browse.classList.add('active');
  } else if (section === 'equipment') {
    equip.classList.add('active');
  } else if (section === 'about') {
    about.classList.add('active');
  }
}

/* ─── Recipe detail page ─────────────────────── */
var currentRecipe = null;

function openRecipe(id) {
  var recipe = null;
  for (var i = 0; i < RECIPES.length; i++) {
    if (RECIPES[i].id === id) { recipe = RECIPES[i]; break; }
  }
  if (!recipe) return;
  currentRecipe = recipe;

  renderRecipePage(recipe);

  document.getElementById('recipePage').classList.add('active');
  document.body.style.overflow = 'hidden';

  /* Animate steps in */
  setTimeout(function() {
    var steps = document.querySelectorAll('.step-item');
    for (var i = 0; i < steps.length; i++) {
      (function(el, delay) {
        setTimeout(function() { el.classList.add('visible'); }, delay);
      })(steps[i], i * 150);
    }
  }, 400);

  initVoiceWithRecipe(recipe);

  setTimeout(function() {
    addCursorHover('button, a, .recipe-card, .state-card, .equip-card, .big-card');
  }, 300);
}

function closeRecipePage() {
  document.getElementById('recipePage').classList.remove('active');
  document.body.style.overflow = '';
}

/* ─── Cook Now — step-by-step mode ─────────── */
function startCooking() {
  if (!currentRecipe) return;
  activateStep(0);
  showToast('Cooking mode started! Follow each step &#128104;&#8205;&#127859;');
}

function activateStep(idx) {
  if (!currentRecipe || idx >= currentRecipe.steps.length) return;
  var cards = document.querySelectorAll('.step-card');
  for (var i = 0; i < cards.length; i++) { cards[i].classList.remove('active'); }
  var card = document.getElementById('stepCard-' + idx);
  if (card) {
    card.classList.add('active');
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

/* ─── Browse filter ──────────────────────────── */
var activeFilter = 'All';

function setFilter(el, filter) {
  var chips = document.querySelectorAll('.chip');
  for (var i = 0; i < chips.length; i++) { chips[i].classList.remove('active'); }
  el.classList.add('active');
  activeFilter = filter;
  filterRecipes();
}

function filterRecipes() {
  var input = document.getElementById('searchInput');
  var q = input ? input.value.toLowerCase() : '';
  var filtered = [];
  for (var i = 0; i < RECIPES.length; i++) {
    var r = RECIPES[i];
    var catMatch = (activeFilter === 'All' || r.category === activeFilter);
    var qMatch   = !q ||
      r.name.toLowerCase().indexOf(q) >= 0 ||
      r.state.toLowerCase().indexOf(q) >= 0 ||
      r.category.toLowerCase().indexOf(q) >= 0;
    if (catMatch && qMatch) filtered.push(r);
  }
  renderBrowseGrid(filtered);
}

function filterByState(stateName) {
  showSection('browse');
  setTimeout(function() {
    var input = document.getElementById('searchInput');
    if (input) { input.value = stateName; }
    filterRecipes();
  }, 300);
}

/* ─── Modals ─────────────────────────────────── */
function openModal(type) {
  if (type === 'login') {
    document.getElementById('loginModal').classList.add('active');
  } else {
    document.getElementById('signupModal').classList.add('active');
  }
}
function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}
function switchModal(id) {
  var overlays = document.querySelectorAll('.modal-overlay');
  for (var i = 0; i < overlays.length; i++) { overlays[i].classList.remove('active'); }
  document.getElementById(id).classList.add('active');
}
function fakeLogin() {
  var overlays = document.querySelectorAll('.modal-overlay');
  for (var i = 0; i < overlays.length; i++) { overlays[i].classList.remove('active'); }
  showToast('Welcome to COOKER! &#127859;');
}

/* ─── Mobile nav ─────────────────────────────── */
function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('open');
}
function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
}

/* ─── Toast ──────────────────────────────────── */
function showToast(msg) {
  var t = document.getElementById('toast');
  t.innerHTML = msg;
  t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 3000);
}

/* ─── Keyboard shortcuts ─────────────────────── */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeRecipePage();
    var overlays = document.querySelectorAll('.modal-overlay');
    for (var i = 0; i < overlays.length; i++) { overlays[i].classList.remove('active'); }
    closeMobileNav();
  }
});

/* ─── Video fallback ─────────────────────────── */
function initHeroVideo() {
  var video = document.getElementById('heroVideo');
  var fallback = document.getElementById('dishFallback');
  if (!video) return;
  video.addEventListener('error', function() {
    video.style.display = 'none';
    if (fallback) fallback.classList.add('visible');
  });
  /* If no sources or video can't play, show fallback */
  setTimeout(function() {
    if (video.readyState === 0) {
      video.style.display = 'none';
      if (fallback) fallback.classList.add('visible');
    }
  }, 2000);
}

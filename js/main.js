/* ═══════════════════════════════════════════════════
   COOKER — js/main.js
   App initialisation — runs after all other scripts.
═══════════════════════════════════════════════════ */

function init() {

  /* Render all sections */
  renderCards('trendingRow', filterTag('trending'));
  renderCards('popularRow',  filterTag('popular').slice(0, 10));
  renderCards('quickRow',    filterTag('quick'));
  renderCards('festiveRow',  filterTag('festive'));
  renderBigCards();
  renderStates();
  renderBrowseGrid(RECIPES);
  renderFilterChips();
  renderEquipment();

  /* Cursor hover for static elements */
  addCursorHover('button, a, .recipe-card, .state-card, .equip-card, .big-card');

  /* Modal overlay click-to-close */
  var overlays = document.querySelectorAll('.modal-overlay');
  for (var i = 0; i < overlays.length; i++) {
    (function(overlay) {
      overlay.addEventListener('click', function(e) {
        if (e.target === overlay) overlay.classList.remove('active');
      });
    })(overlays[i]);
  }

  /* Cook Now button */
  var cookBtn = document.getElementById('cookNowBtn');
  if (cookBtn) {
    cookBtn.addEventListener('click', startCooking);
  }

  /* Hero video fallback */
  initHeroVideo();

  /* Particles */
  createParticles();

  /* Remove loading screen */
  setTimeout(function() {
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('homePage').style.display = 'block';
  }, 2200);
}

/* ─── Helper: filter by tag ──────────────────── */
function filterTag(tag) {
  var result = [];
  for (var i = 0; i < RECIPES.length; i++) {
    if (RECIPES[i].tags.indexOf(tag) >= 0) result.push(RECIPES[i]);
  }
  return result;
}

/* ─── Run init when DOM is ready ─────────────── */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

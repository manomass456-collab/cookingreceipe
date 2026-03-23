/* ═══════════════════════════════════════════════════
   COOKER — js/render.js
   All DOM rendering / HTML-building functions.
   Uses plain string concatenation — no nested backticks.
═══════════════════════════════════════════════════ */

/* ─── Helper: build card background style ─────── */
function cardBgStyle(recipe) {
  if (recipe.image) {
    return 'background-image:url("images/recipes/' + recipe.image + '");background-size:cover;background-position:center;';
  }
  return 'background:radial-gradient(ellipse at 30% 30%,' + recipe.color2 + '88,' + recipe.color + '),linear-gradient(135deg,' + recipe.color + ',' + recipe.color2 + '44);';
}

/* ─── Helper: thumb HTML ──────────────────────── */
function thumbHtml(recipe, height) {
  var h = height || '140px';
  if (recipe.image) {
    return '<img class="card-thumb-img" src="images/recipes/' + recipe.image + '" alt="' + recipe.name + '" style="height:' + h + ';" onerror="this.parentNode.innerHTML=\'<div class=card-thumb-emoji style=height:' + h + ';>' + recipe.emoji + '</div>\'">';
  }
  return '<div class="card-thumb-emoji" style="height:' + h + ';' + cardBgStyle(recipe) + '">' + recipe.emoji + '</div>';
}

/* ─── Render horizontal card rows ────────────── */
function renderCards(containerId, recipes) {
  var container = document.getElementById(containerId);
  if (!container) return;
  var html = '';
  for (var i = 0; i < recipes.length; i++) {
    var r = recipes[i];
    var badge = r.tags.indexOf('trending') >= 0 ? 'TRENDING' : 'HOT';
    var badgeClass = r.tags.indexOf('trending') >= 0 ? 'card-badge' : 'card-badge gold';
    html += '<div class="recipe-card" onclick="openRecipe(' + r.id + ')">';
    html +=   '<div class="card-thumb">';
    html +=     thumbHtml(r, '140px');
    html +=     '<div class="' + badgeClass + '">' + badge + '</div>';
    html +=   '</div>';
    html +=   '<div class="card-info">';
    html +=     '<div class="card-name">' + r.name + '</div>';
    html +=     '<div class="card-meta">';
    html +=       '<span class="card-rating">&#9733; ' + r.rating + '</span>';
    html +=       '<span>&middot; ' + r.time + '</span>';
    html +=       '<span>&middot; ' + r.serves + ' serves</span>';
    html +=     '</div>';
    html +=     '<div class="card-state">' + r.state + '</div>';
    html +=   '</div>';
    html +=   '<div class="card-overlay">';
    html +=     '<div class="card-overlay-name">' + r.name + '</div>';
    html +=     '<div class="card-overlay-btns">';
    html +=       '<button class="btn-play" onclick="event.stopPropagation();openRecipe(' + r.id + ')">&#9654;</button>';
    html +=       '<button class="btn-add"  onclick="event.stopPropagation();showToast(\'Added to My List!\')">+</button>';
    html +=     '</div>';
    html +=   '</div>';
    html += '</div>';
  }
  container.innerHTML = html;
}

/* ─── Render browse grid ─────────────────────── */
function renderBrowseGrid(recipes) {
  var container = document.getElementById('browseGrid');
  if (!container) return;
  var html = '';
  for (var i = 0; i < recipes.length; i++) {
    var r = recipes[i];
    var diffClass = r.difficulty === 'Easy' ? 'card-badge gold' : 'card-badge';
    html += '<div class="recipe-card" onclick="openRecipe(' + r.id + ')" style="flex:unset;">';
    html +=   '<div class="card-thumb">';
    html +=     thumbHtml(r, '140px');
    html +=     '<div class="' + diffClass + '">' + r.difficulty + '</div>';
    html +=   '</div>';
    html +=   '<div class="card-info">';
    html +=     '<div class="card-name">' + r.name + '</div>';
    html +=     '<div class="card-meta">';
    html +=       '<span class="card-rating">&#9733; ' + r.rating + '</span>';
    html +=       '<span>&middot; ' + r.time + '</span>';
    html +=     '</div>';
    html +=     '<div class="card-state">' + r.state + ' &middot; ' + r.category + '</div>';
    html +=   '</div>';
    html += '</div>';
  }
  container.innerHTML = html;
}

/* ─── Render featured big cards ─────────────── */
function renderBigCards() {
  var container = document.getElementById('featuredGrid');
  if (!container) return;
  var featured = [];
  for (var i = 0; i < RECIPES.length; i++) {
    var r = RECIPES[i];
    if (r.tags.indexOf('festive') >= 0 || r.rating >= 4.8) {
      featured.push(r);
      if (featured.length >= 4) break;
    }
  }
  if (!featured.length) return;
  var html = '';
  for (var j = 0; j < featured.length; j++) {
    var rec = featured[j];
    var isMain = (j === 0);
    var cardClass = isMain ? 'big-card main' : 'big-card';
    var minH = isMain ? '400px' : '200px';
    html += '<div class="' + cardClass + '" onclick="openRecipe(' + rec.id + ')">';
    if (rec.image) {
      html += '<img class="big-card-img" src="images/recipes/' + rec.image + '" alt="' + rec.name + '" style="min-height:' + minH + ';" onerror="this.style.display=\'none\'">';
    } else {
      html += '<div class="big-card-thumb" style="' + cardBgStyle(rec) + 'min-height:' + minH + ';display:flex;align-items:center;justify-content:center;font-size:' + (isMain ? '7rem' : '4rem') + ';">' + rec.emoji + '</div>';
    }
    html += '<div class="big-card-overlay">';
    html +=   '<h3 class="big-card-title">' + rec.name + '</h3>';
    if (isMain) {
      html += '<p class="big-card-desc">' + rec.desc + '</p>';
    }
    html +=   '<div class="big-card-actions">';
    html +=     '<button class="btn-start" onclick="event.stopPropagation();openRecipe(' + rec.id + ')" style="padding:10px 24px;font-size:0.85rem;">&#9654; Cook Now</button>';
    html +=     '<button class="cta-secondary" onclick="event.stopPropagation();showToast(\'Added!\')" style="padding:10px 16px;font-size:0.85rem;">+ List</button>';
    html +=   '</div>';
    html += '</div>';
    html += '</div>';
  }
  container.innerHTML = html;
}

/* ─── Render states grid ─────────────────────── */
function renderStates() {
  var container = document.getElementById('statesGrid');
  if (!container) return;
  var html = '';
  for (var i = 0; i < STATES.length; i++) {
    var s = STATES[i];
    html += '<div class="state-card" onclick="filterByState(\'' + s.name + '\')">';
    html +=   '<div class="state-img-wrap">';
    if (s.image) {
      html += '<img class="state-img" src="images/states/' + s.image + '" alt="' + s.name + '" onerror="this.parentNode.innerHTML=\'<div class=state-img-placeholder>' + s.fallbackEmoji + '</div>\'">';
    } else {
      html += '<div class="state-img-placeholder">' + s.fallbackEmoji + '</div>';
    }
    html +=   '</div>';
    html +=   '<div class="state-info">';
    html +=     '<div class="state-name">' + s.name + '</div>';
    html +=     '<div class="state-count">' + s.count + ' recipes</div>';
    html +=   '</div>';
    html += '</div>';
  }
  container.innerHTML = html;
}

/* ─── Render equipment grid ─────────────────── */
function renderEquipment() {
  var container = document.getElementById('equipGrid');
  if (!container) return;
  var html = '';
  for (var i = 0; i < EQUIPMENT.length; i++) {
    var e = EQUIPMENT[i];
    html += '<div class="equip-card">';
    html +=   '<div class="equip-img-wrap">';
    if (e.image) {
      html += '<img class="equip-img" src="images/equipment/' + e.image + '" alt="' + e.name + '" onerror="this.parentNode.innerHTML=\'<div class=equip-img-placeholder>' + e.fallbackEmoji + '</div>\'">';
    } else {
      html += '<div class="equip-img-placeholder">' + e.fallbackEmoji + '</div>';
    }
    html +=   '</div>';
    html +=   '<div class="equip-body">';
    html +=     '<div class="equip-name">' + e.name + '</div>';
    html +=     '<div class="equip-desc">' + e.desc + '</div>';
    html +=     '<div class="equip-price">' + e.price + '</div>';
    html +=     '<button class="btn-buy" onclick="showToast(\'Added to cart! &#128722;\')">Add to Cart</button>';
    html +=   '</div>';
    html += '</div>';
  }
  container.innerHTML = html;
}

/* ─── Render filter chips ────────────────────── */
function renderFilterChips() {
  var categories = ['All'];
  for (var i = 0; i < RECIPES.length; i++) {
    if (categories.indexOf(RECIPES[i].category) < 0) {
      categories.push(RECIPES[i].category);
    }
  }
  var container = document.getElementById('filterChips');
  if (!container) return;
  var html = '';
  for (var j = 0; j < categories.length; j++) {
    var active = (categories[j] === 'All') ? ' active' : '';
    html += '<button class="chip' + active + '" onclick="setFilter(this,\'' + categories[j] + '\')">' + categories[j] + '</button>';
  }
  container.innerHTML = html;
}

/* ─── Render recipe detail page ──────────────── */
function renderRecipePage(recipe) {
  /* Hero background */
  var heroBg = document.getElementById('recipeHeroBg');
  if (recipe.image) {
    heroBg.style.cssText = 'position:absolute;inset:0;transform:scale(1.1);filter:brightness(0.4) saturate(1.5);';
    heroBg.innerHTML = '<img src="images/recipes/' + recipe.image + '" alt="' + recipe.name + '" style="width:100%;height:100%;object-fit:cover;">';
  } else {
    heroBg.style.cssText = 'position:absolute;inset:0;transform:scale(1.1);filter:brightness(0.6);display:flex;align-items:center;justify-content:center;font-size:12rem;' + cardBgStyle(recipe);
    heroBg.textContent = recipe.emoji;
  }

  /* Meta row */
  document.getElementById('recipeTitleBig').textContent = recipe.name;
  document.getElementById('recipeMetaRow').innerHTML =
    '<div class="meta-item"><span class="icon">&#9733;</span> ' + recipe.rating + '</div>' +
    '<div class="meta-item"><span class="icon">&#9201;</span> ' + recipe.time + '</div>' +
    '<div class="meta-item"><span class="icon">&#128101;</span> Serves ' + recipe.serves + '</div>' +
    '<div class="meta-item"><span class="icon">&#128202;</span> ' + recipe.difficulty + '</div>' +
    '<div class="meta-item"><span class="icon">&#128205;</span> ' + recipe.state + '</div>';

  /* Ingredients */
  var ingHtml = '<div class="ing-title">&#128717; INGREDIENTS</div><div class="ing-grid">';
  for (var i = 0; i < recipe.ingredients.length; i++) {
    var ing = recipe.ingredients[i];
    ingHtml += '<div class="ing-item">';
    ingHtml +=   '<span class="ing-emoji">' + ing.emoji + '</span>';
    ingHtml +=   '<div><div class="ing-name">' + ing.name + '</div><div class="ing-amount">' + ing.amount + '</div></div>';
    ingHtml += '</div>';
  }
  ingHtml += '</div>';
  document.getElementById('ingredientsSection').innerHTML = ingHtml;

  /* Steps */
  var stepsHtml = '<div class="steps-title">&#128104;&#8205;&#127859; STEP-BY-STEP GUIDE</div><div class="timeline">';
  for (var j = 0; j < recipe.steps.length; j++) {
    var step = recipe.steps[j];
    stepsHtml += '<div class="step-item" id="step-' + j + '" style="animation-delay:' + (j * 0.1) + 's;">';
    stepsHtml +=   '<div class="step-number">' + (j + 1) + '</div>';
    stepsHtml +=   '<div class="step-card" id="stepCard-' + j + '">';
    stepsHtml +=     '<div class="step-top">';
    stepsHtml +=       '<div class="step-name">' + step.name + '</div>';
    stepsHtml +=       '<div class="step-timer">&#9201; ' + step.time + '</div>';
    stepsHtml +=     '</div>';
    stepsHtml +=     '<div class="step-text">' + step.desc + '</div>';
    stepsHtml +=     '<div class="step-animation">';
    stepsHtml +=       '<div class="cooking-emoji-anim">' + (step.cook || step.emoji) + '</div>';
    stepsHtml +=       '<div class="anim-bar" id="bar-' + j + '"></div>';
    stepsHtml +=     '</div>';
    stepsHtml +=   '</div>';
    stepsHtml += '</div>';
  }
  stepsHtml += '</div>';
  document.getElementById('stepsSection').innerHTML = stepsHtml;

  /* Nutrition */
  if (recipe.nutrition) {
    var keys = Object.keys(recipe.nutrition);
    var nutHtml = '<div class="ing-title">&#128202; NUTRITION (per serving)</div><div class="nutrition-grid">';
    for (var k = 0; k < keys.length; k++) {
      nutHtml += '<div class="nutrition-item">';
      nutHtml +=   '<div class="nutrition-val">' + recipe.nutrition[keys[k]] + '</div>';
      nutHtml +=   '<div class="nutrition-key">' + keys[k] + '</div>';
      nutHtml += '</div>';
    }
    nutHtml += '</div>';
    document.getElementById('nutritionSection').innerHTML = nutHtml;
  }
}

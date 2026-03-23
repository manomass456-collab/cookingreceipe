/* ═══════════════════════════════════════════════════
   COOKER — js/voice.js
   AI Chef voice agent / chatbot
═══════════════════════════════════════════════════ */

var voiceOpen = false;

function toggleVoicePanel() {
  voiceOpen = !voiceOpen;
  document.getElementById('voicePanel').classList.toggle('open', voiceOpen);
}

/* ─── Greet when recipe opens ────────────────── */
function initVoiceWithRecipe(recipe) {
  var msgs = document.getElementById('voiceMessages');
  /* Remove old recipe greetings (keep only first welcome) */
  var old = msgs.querySelectorAll('.ai-recipe-greeting');
  for (var i = 0; i < old.length; i++) { old[i].remove(); }

  var div = document.createElement('div');
  div.className = 'voice-msg ai ai-recipe-greeting';
  div.textContent = 'Chef AI: Ready to help you cook ' + recipe.name + '! Ask me about any step, ingredient, or substitution.';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

/* ─── Response knowledge base ────────────────── */
var RESPONSES = {
  'substitut':  [
    'For most Indian curries, yogurt can replace cream for a lighter version. Paneer can substitute chicken. Coconut milk works instead of dairy cream.',
    'You can substitute ghee with butter, or coconut oil for a healthier option. Kashmiri chilli can be replaced with paprika + a pinch of cayenne.'
  ],
  'how long':   [
    'Timing varies by heat level. Medium heat is safest. Dal should mash between fingers, meat should pull away from bone, rice grains should have no white centre.',
    'For dum biryani, err longer — 25-30 min on low is better than rushing. The steam inside does the work.'
  ],
  'spic':       [
    'Reduce chilli powder and increase turmeric (colour without heat). Adding cream or coconut milk tames spice well.',
    'Add a small raw potato cube while cooking — it absorbs excess spice naturally. A squeeze of lemon also balances heat.'
  ],
  'salt':       [
    'If over-salted, add a raw potato cube and simmer 10 minutes — it absorbs excess salt. Or add cream/coconut milk to dilute.'
  ],
  'temp':       [
    'Low and slow is the rule for Indian cooking. Dals and curries develop depth at medium-low heat. High heat is only for sauteing.',
    'For biryani dum, use a heavy griddle (tawa) under the pot to distribute heat evenly and prevent burning the bottom.'
  ],
  'biryani':    [
    'Key to perfect biryani: properly marinated meat, par-cooked rice at exactly 70%, and patience during dum. Never open the pot early!',
    'Saffron soaked in warm milk gives biryani its golden colour and floral aroma. Use original Kashmiri saffron for best results.'
  ],
  'dosa':       [
    'Secret to crispy dosa: hot tawa, fermented batter, and spreading quickly in one circular motion. Never spread twice on the same spot.',
    'If dosa sticks, wipe tawa with half an onion between each dosa. The onion\'s natural sulfur prevents sticking.'
  ],
  'sambar':     [
    'Key to good sambar: well-cooked dal whisked smooth, good quality sambar powder, and tamarind extract cooked until the raw smell is gone.'
  ],
  'ghee':       [
    'Ghee adds richness and depth. Add it at the end of cooking for maximum flavour impact — it enhances all spices and aromas.',
    'For authenticity, use desi ghee. Clarified butter is an acceptable substitute. Never use oil as a ghee replacement in desserts.'
  ],
  'oil':        [
    'Use cold-pressed groundnut oil for South Indian cooking, mustard oil for Bengali and North Indian curries, and coconut oil for Kerala recipes.',
    'For deep frying, groundnut or sunflower oil works best — they have a high smoke point and neutral flavour.'
  ],
  'marinate':   [
    'Longer marination = deeper flavour. Acid (yogurt, lemon) tenderises the meat. Salt draws out moisture which then reabsorbs with the spices.',
    'Always marinate in the refrigerator for food safety. For chicken, 2-4 hours is ideal. For mutton, overnight is best.'
  ],
  'crispy':     [
    'For crispy dosa or vada: batter consistency is key — not too thin, not too thick. Oil temperature must be correct (180C for frying).',
    'Pat ingredients dry before frying. Any moisture will prevent crispiness and cause oil splatter.'
  ],
  'ferment':    [
    'Fermentation is the backbone of South Indian cooking. Ideal temperature is 28-32C. In cold climates, place batter near a warm oven.',
    'Well-fermented batter smells slightly sour and tangy. It should have doubled in volume and look bubbly on top.'
  ],
  'default':    [
    'Great question! The secret to great Indian food is patience and layering flavours at each step.',
    'Remember: cooking is intuitive. Taste as you go, adjust seasoning, and trust your senses.',
    'Indian cooking is about building layers. Each spice has its moment — add them in sequence, never all at once.',
    'Great chefs focus on three things: heat control, proper seasoning at each stage, and never rushing the process.'
  ]
};

function getAIResponse(msg) {
  var lower = msg.toLowerCase();

  /* Check knowledge base */
  var keys = Object.keys(RESPONSES);
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] !== 'default' && lower.indexOf(keys[i]) >= 0) {
      var arr = RESPONSES[keys[i]];
      return arr[Math.floor(Math.random() * arr.length)];
    }
  }

  /* Recipe-specific step/ingredient lookup */
  if (currentRecipe) {
    for (var s = 0; s < currentRecipe.steps.length; s++) {
      var stepWord = currentRecipe.steps[s].name.toLowerCase().split(' ')[0];
      if (lower.indexOf(stepWord) >= 0) {
        return 'For "' + currentRecipe.steps[s].name + '": ' + currentRecipe.steps[s].desc;
      }
    }
    for (var g = 0; g < currentRecipe.ingredients.length; g++) {
      var ingWord = currentRecipe.ingredients[g].name.toLowerCase().split(' ')[0];
      if (lower.indexOf(ingWord) >= 0) {
        return 'You need ' + currentRecipe.ingredients[g].amount + ' of ' + currentRecipe.ingredients[g].name + ' for this recipe. Measure precisely for best results!';
      }
    }
  }

  /* Default fallback */
  var def = RESPONSES['default'];
  return def[Math.floor(Math.random() * def.length)];
}

function sendVoiceMsg() {
  var input = document.getElementById('voiceInput');
  var msgs  = document.getElementById('voiceMessages');
  var text  = input.value.trim();
  if (!text) return;

  /* User message */
  var userDiv = document.createElement('div');
  userDiv.className = 'voice-msg user';
  userDiv.textContent = text;
  msgs.appendChild(userDiv);
  input.value = '';
  msgs.scrollTop = msgs.scrollHeight;

  /* Typing indicator */
  var typing = document.createElement('div');
  typing.className = 'voice-typing';
  typing.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
  msgs.appendChild(typing);
  msgs.scrollTop = msgs.scrollHeight;

  var delay = 900 + Math.floor(Math.random() * 700);
  setTimeout(function() {
    typing.remove();
    var aiDiv = document.createElement('div');
    aiDiv.className = 'voice-msg ai';
    aiDiv.textContent = 'Chef AI: ' + getAIResponse(text);
    msgs.appendChild(aiDiv);
    msgs.scrollTop = msgs.scrollHeight;
  }, delay);
}

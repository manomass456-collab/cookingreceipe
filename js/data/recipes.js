

var RECIPES = [

  /* ─────────────────────────────────────────────
     RECIPE 1 — Hyderabad Dum Biryani
  ───────────────────────────────────────────── */
  {
    id: 1,
    name: "Hyderabad Dum Biryani",
    state: "Telangana",
    category: "Rice",
    tags: ["trending", "popular", "festive"],
    time: "120 min",
    rating: 4.9,
    serves: 4,
    difficulty: "Hard",
    emoji: "🍛",
    color: "#8B2500",
    color2: "#f4a261",
    image: "biryani.jpg",
    desc: "The legendary dum-cooked biryani with aromatic basmati rice and slow-cooked mutton.",
    ingredients: [
      { emoji:"🍚", name:"Basmati Rice",      amount:"500g"  },
      { emoji:"🥩", name:"Mutton",            amount:"700g"  },
      { emoji:"🧅", name:"Onions",            amount:"300g"  },
      { emoji:"🧄", name:"Garlic paste",      amount:"30g"   },
      { emoji:"🫚", name:"Ginger paste",      amount:"20g"   },
      { emoji:"🥛", name:"Yogurt",            amount:"200ml" },
      { emoji:"🫙", name:"Ghee",              amount:"80ml"  },
      { emoji:"🌿", name:"Mint leaves",       amount:"50g"   },
      { emoji:"🌶️", name:"Red chilli powder", amount:"15g"   },
      { emoji:"🫙", name:"Biryani masala",    amount:"25g"   },
      { emoji:"🧵", name:"Saffron",           amount:"1g"    },
      { emoji:"🥛", name:"Warm milk",         amount:"50ml"  },
      { emoji:"🧂", name:"Salt",              amount:"15g"   },
      { emoji:"🫒", name:"Oil",               amount:"100ml" }
    ],
    steps: [
      { name:"Marinate the Mutton", time:"60 min", emoji:"🥩",
        desc:"Mix mutton with yogurt (200ml), ginger-garlic paste, red chilli powder (15g), biryani masala (25g) and salt (10g). Marinate for at least 1 hour.", cook:"🥩➜🫙" },
      { name:"Soak the Rice",       time:"30 min", emoji:"🍚",
        desc:"Wash basmati rice (500g) until water runs clear. Soak in cold water for 30 minutes.", cook:"🍚➜💧" },
      { name:"Fry the Onions",      time:"20 min", emoji:"🧅",
        desc:"Heat oil (100ml). Fry sliced onions (300g) until deep golden-brown and crispy. This is the soul of the biryani.", cook:"🧅➜🔥" },
      { name:"Cook the Mutton",     time:"40 min", emoji:"🥘",
        desc:"Add marinated mutton. Cook on high heat 5 min, then reduce and cook 35 minutes until 80% done.", cook:"🥘➜⏱️" },
      { name:"Par-Boil Rice",       time:"8 min",  emoji:"🍚",
        desc:"Boil water with whole spices. Add soaked rice. Cook until 70% done — grains should have a small white dot in centre. Drain immediately.", cook:"🍚➜♨️" },
      { name:"Layer the Biryani",   time:"5 min",  emoji:"🏗️",
        desc:"Layer mutton at the bottom. Add fried onions, mint (50g), saffron milk. Top with par-boiled rice. Seal the pot with dough or foil.", cook:"🏗️➜🫙" },
      { name:"Dum Cooking",         time:"25 min", emoji:"♨️",
        desc:"Place sealed pot on a hot tawa. Cook on high 5 min, then lowest heat 20 minutes.", cook:"♨️➜🍛" },
      { name:"Rest and Serve",      time:"10 min", emoji:"🍛",
        desc:"Open gently. Mix from bottom using a flat spatula. Garnish with fried onions and mint.", cook:"🍛✨" }
    ],
    nutrition: { calories:520, protein:"32g", carbs:"58g", fat:"18g", fiber:"3g" }
  },

  /* ─────────────────────────────────────────────
     RECIPE 2 — Masala Dosa
  ───────────────────────────────────────────── */
  {
    id: 2,
    name: "Masala Dosa",
    state: "Karnataka",
    category: "Breakfast",
    tags: ["trending", "popular", "quick"],
    time: "45 min",
    rating: 4.8,
    serves: 4,
    difficulty: "Medium",
    emoji: "🫓",
    color: "#8B6914",
    color2: "#f5c842",
    image: "masala-dosa.jpg",   
    desc: "Crispy golden dosa stuffed with spiced potato filling, served with coconut chutney and sambar.",
    ingredients: [
      { emoji:"🌾", name:"Dosa batter",    amount:"400ml" },
      { emoji:"🥔", name:"Potatoes",       amount:"400g"  },
      { emoji:"🧅", name:"Onion",          amount:"150g"  },
      { emoji:"🌶️", name:"Green chillies", amount:"3 pcs" },
      { emoji:"🌿", name:"Curry leaves",   amount:"10g"   },
      { emoji:"🫙", name:"Mustard seeds",  amount:"5g"    },
      { emoji:"🟡", name:"Turmeric",       amount:"3g"    },
      { emoji:"🫒", name:"Oil",            amount:"30ml"  },
      { emoji:"🧂", name:"Salt",           amount:"8g"    },
      { emoji:"🌿", name:"Coriander",      amount:"20g"   }
    ],
    steps: [
      { name:"Prepare Potato Filling", time:"15 min", emoji:"🥔",
        desc:"Boil potatoes (400g). Mash roughly. Temper oil with mustard seeds, curry leaves, green chillies, onions. Add turmeric and mashed potatoes.", cook:"🥔➜🍳" },
      { name:"Heat the Tawa",          time:"3 min",  emoji:"🔥",
        desc:"Heat a cast iron tawa on medium-high. Sprinkle water — if it evaporates instantly it is ready. Rub with half an onion.", cook:"🔥➜⬛" },
      { name:"Pour the Batter",        time:"2 min",  emoji:"🫙",
        desc:"Pour one ladle (100ml) in the centre. Quickly spread in circles from centre outward using the back of the ladle.", cook:"🫙➜⬛" },
      { name:"Cook the Dosa",          time:"3 min",  emoji:"🫓",
        desc:"Drizzle oil (5ml) along edges. Cook until edges turn golden and start lifting.", cook:"🫓➜🔥" },
      { name:"Add Filling and Fold",   time:"1 min",  emoji:"🥔",
        desc:"Place 2 tablespoons of filling in the centre. Fold the dosa over. Serve immediately while crispy.", cook:"🥔➜🫓" }
    ],
    nutrition: { calories:280, protein:"8g", carbs:"52g", fat:"6g", fiber:"4g" }
  },

  /* ─────────────────────────────────────────────
     RECIPE 3 — Sambar
  ───────────────────────────────────────────── */
  {
    id: 3,
    name: "Sambar",
    state: "Tamil Nadu",
    category: "Side Dish",
    tags: ["popular", "trending"],
    time: "40 min",
    rating: 4.7,
    serves: 6,
    difficulty: "Easy",
    emoji: "🥣",
    color: "#7B2D00",
    color2: "#f4845f",
    image: "sambar.jpg",  
    desc: "Tangy tamarind lentil stew packed with vegetables and aromatic sambar powder.",
    ingredients: [
      { emoji:"🫘", name:"Toor dal",        amount:"200g"  },
      { emoji:"🍅", name:"Tomatoes",        amount:"200g"  },
      { emoji:"🧅", name:"Shallots",        amount:"150g"  },
      { emoji:"🥬", name:"Drumstick",       amount:"100g"  },
      { emoji:"🟡", name:"Tamarind",        amount:"30g"   },
      { emoji:"🫙", name:"Sambar powder",   amount:"20g"   },
      { emoji:"🟡", name:"Turmeric",        amount:"5g"    },
      { emoji:"🌿", name:"Curry leaves",    amount:"10g"   },
      { emoji:"🫙", name:"Mustard seeds",   amount:"5g"    },
      { emoji:"🌶️", name:"Dried red chilli",amount:"3 pcs" },
      { emoji:"🫚", name:"Ghee",            amount:"20ml"  },
      { emoji:"🧂", name:"Salt",            amount:"10g"   }
    ],
    steps: [
      { name:"Cook the Dal",        time:"20 min", emoji:"🫘",
        desc:"Pressure cook toor dal (200g) with turmeric (5g) and water (600ml) for 4-5 whistles. Whisk smooth.", cook:"🫘➜♨️" },
      { name:"Tamarind Extract",    time:"5 min",  emoji:"🟡",
        desc:"Soak tamarind (30g) in 200ml warm water for 5 minutes. Squeeze and extract juice. Discard pulp.", cook:"🟡➜💧" },
      { name:"Saute Aromatics",     time:"8 min",  emoji:"🧅",
        desc:"Temper mustard seeds, dried chillies, curry leaves in oil. Add shallots until golden. Add tomatoes and cook until mushy.", cook:"🧅➜🔥" },
      { name:"Add Tamarind",        time:"5 min",  emoji:"🥣",
        desc:"Add tamarind extract and sambar powder. Boil 5 minutes to remove raw tamarind taste.", cook:"🥣➜♨️" },
      { name:"Add Dal and Finish",  time:"5 min",  emoji:"🫘",
        desc:"Add cooked dal. Adjust water and consistency. Simmer 5 minutes. Finish with ghee tempering on top.", cook:"🫘➜🥣" }
    ],
    nutrition: { calories:180, protein:"10g", carbs:"28g", fat:"4g", fiber:"8g" }
  },

  /* ─────────────────────────────────────────────
     RECIPE 4 — Butter Chicken
  ───────────────────────────────────────────── */
  {
    id: 4,
    name: "Butter Chicken",
    state: "Punjab",
    category: "Curry",
    tags: ["trending", "popular", "festive"],
    time: "60 min",
    rating: 4.9,
    serves: 4,
    difficulty: "Medium",
    emoji: "🍗",
    color: "#B5451B",
    color2: "#ffb347",
    image: "butter-chicken.jpg",   
    desc: "Iconic creamy tomato-based curry with tender tandoori chicken pieces.",
    ingredients: [
      { emoji:"🍗", name:"Chicken",          amount:"700g"  },
      { emoji:"🍅", name:"Tomatoes",         amount:"400g"  },
      { emoji:"🥛", name:"Heavy cream",      amount:"200ml" },
      { emoji:"🧄", name:"Garlic",           amount:"30g"   },
      { emoji:"🫚", name:"Butter",           amount:"60g"   },
      { emoji:"🌶️", name:"Kashmiri chilli",  amount:"15g"   },
      { emoji:"🫙", name:"Garam masala",     amount:"10g"   },
      { emoji:"🥛", name:"Yogurt (marinade)",amount:"150ml" },
      { emoji:"🟠", name:"Cardamom",         amount:"5 pods"},
      { emoji:"🧂", name:"Salt",             amount:"12g"   },
      { emoji:"🫙", name:"Fenugreek leaves", amount:"10g"   }
    ],
    steps: [
      { name:"Marinate Chicken",   time:"120 min", emoji:"🍗",
        desc:"Mix chicken (700g) with yogurt (150ml), kashmiri chilli (10g), garam masala (5g), salt. Marinate 2+ hours.", cook:"🍗➜🫙" },
      { name:"Grill the Chicken",  time:"15 min",  emoji:"🔥",
        desc:"Grill marinated chicken in oven at 220C for 12-15 minutes until charred. The char gives deep smoky flavour.", cook:"🔥➜🍗" },
      { name:"Make Makhani Sauce", time:"20 min",  emoji:"🍅",
        desc:"Butter, onions, garlic, tomatoes (400g), cardamom, kashmiri chilli. Cook 15 min. Blend smooth. Strain.", cook:"🍅➜🍲" },
      { name:"Simmer the Sauce",   time:"10 min",  emoji:"🫙",
        desc:"Return strained sauce to pan. Add remaining butter (30g) and cream (200ml). Simmer on low 10 minutes.", cook:"🫙➜♨️" },
      { name:"Add Chicken",        time:"5 min",   emoji:"🍗",
        desc:"Add grilled chicken. Simmer 5 minutes. Add crushed dried fenugreek leaves (kasuri methi) — the secret ingredient!", cook:"🍗➜🍛" }
    ],
    nutrition: { calories:420, protein:"38g", carbs:"12g", fat:"26g", fiber:"2g" }
  },

  /* ─────────────────────────────────────────────
     RECIPE 5 — Pav Bhaji
  ───────────────────────────────────────────── */
  {
    id: 5,
    name: "Pav Bhaji",
    state: "Maharashtra",
    category: "Street Food",
    tags: ["popular", "quick", "trending"],
    time: "30 min",
    rating: 4.8,
    serves: 4,
    difficulty: "Easy",
    emoji: "🥖",
    color: "#7B3200",
    color2: "#ff8c42",
    image: "pav-bhaji.jpg",  
    desc: "Mumbai's legendary street food — spiced mashed vegetable curry with buttery toasted bread rolls.",
    ingredients: [
      { emoji:"🥔", name:"Potatoes",          amount:"300g" },
      { emoji:"🥦", name:"Mixed vegetables",  amount:"300g" },
      { emoji:"🍅", name:"Tomatoes",          amount:"250g" },
      { emoji:"🧅", name:"Onions",            amount:"200g" },
      { emoji:"🫚", name:"Butter",            amount:"80g"  },
      { emoji:"🫙", name:"Pav bhaji masala",  amount:"25g"  },
      { emoji:"🌶️", name:"Red chilli powder", amount:"10g"  },
      { emoji:"🌿", name:"Coriander",         amount:"30g"  },
      { emoji:"🍋", name:"Lemon juice",       amount:"30ml" },
      { emoji:"🥖", name:"Pav buns",          amount:"8 pcs"}
    ],
    steps: [
      { name:"Boil and Mash",    time:"15 min", emoji:"🥦",
        desc:"Pressure cook potatoes, cauliflower, peas, carrots (600g total) until very soft. Mash completely.", cook:"🥦➜🥔" },
      { name:"Make the Base",    time:"10 min", emoji:"🍅",
        desc:"Heat butter (50g). Saute onions (200g) until golden. Add tomatoes, pav bhaji masala (25g), red chilli. Cook until oil separates.", cook:"🍅➜🔥" },
      { name:"Combine and Bhuno",time:"8 min",  emoji:"🥘",
        desc:"Add mashed vegetables. Mix vigorously and press with a masher on high heat. Add butter throughout for richness.", cook:"🥘➜🔥" },
      { name:"Toast the Pav",    time:"3 min",  emoji:"🥖",
        desc:"Butter pav buns on both sides. Toast on hot flat pan until golden and crispy.", cook:"🥖➜🔥" }
    ],
    nutrition: { calories:310, protein:"9g", carbs:"48g", fat:"10g", fiber:"6g" }
  },

  /* ─────────────────────────────────────────────
     RECIPE 6 — Chole Bhature
  ───────────────────────────────────────────── */
  {
    id: 6,
    name: "Chole Bhature",
    state: "Punjab",
    category: "Main Course",
    tags: ["popular", "festive"],
    time: "50 min",
    rating: 4.8,
    serves: 4,
    difficulty: "Medium",
    emoji: "🫘",
    color: "#5C3317",
    color2: "#d4a453",
    image: "chole-bhature.jpg",   
    desc: "Hearty spiced chickpea curry with fluffy deep-fried bread — a Punjabi breakfast icon.",
    ingredients: [
      { emoji:"🫘", name:"Chickpeas",       amount:"400g"  },
      { emoji:"🍅", name:"Tomatoes",        amount:"300g"  },
      { emoji:"🧅", name:"Onions",          amount:"250g"  },
      { emoji:"🫙", name:"Chole masala",    amount:"30g"   },
      { emoji:"🌾", name:"All-purpose flour",amount:"300g" },
      { emoji:"🥛", name:"Yogurt",          amount:"100ml" },
      { emoji:"🫙", name:"Ghee",            amount:"30ml"  },
      { emoji:"🌶️", name:"Black cardamom",  amount:"3 pcs" },
      { emoji:"🧂", name:"Salt",            amount:"12g"   },
      { emoji:"🫚", name:"Oil (frying)",    amount:"500ml" }
    ],
    steps: [
      { name:"Prepare Chickpeas",   time:"8 hr",  emoji:"🫘",
        desc:"Soak dried chickpeas overnight. Pressure cook with black cardamom, tea bag (for colour) and salt for 6-8 whistles.", cook:"🫘➜♨️" },
      { name:"Onion-Tomato Masala", time:"20 min", emoji:"🧅",
        desc:"Cook blended onions 10 min. Add tomato puree, chole masala. Cook until oil separates.", cook:"🧅➜🍅" },
      { name:"Add Chickpeas",       time:"15 min", emoji:"🥘",
        desc:"Add cooked chickpeas. Mash a few for thickness. Simmer 15 minutes.", cook:"🥘➜🫘" },
      { name:"Make Bhatura Dough",  time:"20 min", emoji:"🌾",
        desc:"Mix flour (300g), yogurt (100ml), salt. Knead into soft dough. Rest 30 minutes. Roll into ovals.", cook:"🌾➜⬜" },
      { name:"Deep Fry Bhaturas",   time:"10 min", emoji:"🫓",
        desc:"Heat oil to 180C. Fry bhatura — it will puff dramatically. Fry 1-2 minutes until golden.", cook:"🫓➜🔥" }
    ],
    nutrition: { calories:580, protein:"18g", carbs:"82g", fat:"20g", fiber:"14g" }
  },

  /* ─────────────────────────────────────────────
     RECIPE 7 — Kerala Fish Curry
  ───────────────────────────────────────────── */
  {
    id: 7,
    name: "Kerala Fish Curry",
    state: "Kerala",
    category: "Curry",
    tags: ["popular", "trending"],
    time: "35 min",
    rating: 4.7,
    serves: 4,
    difficulty: "Medium",
    emoji: "🐟",
    color: "#1B4332",
    color2: "#52b788",
    image: "kerala-fish-curry.jpg",   
    desc: "Kerala-style tangy fish curry cooked in raw coconut oil with kodampuli.",
    ingredients: [
      { emoji:"🐟", name:"Fish (Kingfish)",    amount:"600g"  },
      { emoji:"🥥", name:"Coconut milk",       amount:"300ml" },
      { emoji:"🟡", name:"Kodampuli",          amount:"5 pcs" },
      { emoji:"🌶️", name:"Red chilli powder",  amount:"20g"   },
      { emoji:"🟡", name:"Turmeric",           amount:"5g"    },
      { emoji:"🧄", name:"Garlic",             amount:"30g"   },
      { emoji:"🫚", name:"Coconut oil",        amount:"40ml"  },
      { emoji:"🌿", name:"Curry leaves",       amount:"15g"   },
      { emoji:"🧂", name:"Salt",               amount:"10g"   }
    ],
    steps: [
      { name:"Soak Kodampuli", time:"10 min", emoji:"🟡",
        desc:"Soak kodampuli (5 pieces) in 100ml warm water 10 minutes. This is Kerala's unique souring agent.", cook:"🟡➜💧" },
      { name:"Make Spice Paste",time:"5 min",  emoji:"🌶️",
        desc:"Blend red chilli powder (20g), turmeric, garlic (30g) with a little water into a thick paste.", cook:"🌶️➜🫙" },
      { name:"Start the Curry", time:"10 min", emoji:"🥥",
        desc:"Heat coconut oil in a clay pot. Add curry leaves. Add spice paste 3 minutes. Add kodampuli with soaking water. Add coconut milk.", cook:"🥥➜🔥" },
      { name:"Cook the Fish",   time:"12 min", emoji:"🐟",
        desc:"Add fish (600g). Shake the pot gently — do NOT stir or the fish will break. Simmer 10-12 minutes.", cook:"🐟➜🥘" }
    ],
    nutrition: { calories:320, protein:"36g", carbs:"8g", fat:"16g", fiber:"2g" }
  },

  /* ─────────────────────────────────────────────
     RECIPE 8 — Paneer Tikka Masala
  ───────────────────────────────────────────── */
  {
    id: 8,
    name: "Paneer Tikka Masala",
    state: "Delhi",
    category: "Curry",
    tags: ["popular", "festive", "trending"],
    time: "50 min",
    rating: 4.8,
    serves: 4,
    difficulty: "Medium",
    emoji: "🧀",
    color: "#8B1A1A",
    color2: "#ff6b6b",
    image: "paneer-tikka-masala.jpg",   
    desc: "Grilled paneer in a rich, creamy tomato-cashew gravy.",
    ingredients: [
      { emoji:"🧀", name:"Paneer",           amount:"400g"  },
      { emoji:"🥛", name:"Yogurt",           amount:"150ml" },
      { emoji:"🍅", name:"Tomatoes",         amount:"350g"  },
      { emoji:"🟤", name:"Cashews",          amount:"50g"   },
      { emoji:"🥛", name:"Cream",            amount:"150ml" },
      { emoji:"🧅", name:"Onions",           amount:"200g"  },
      { emoji:"🫙", name:"Tikka masala",     amount:"25g"   },
      { emoji:"🌶️", name:"Kashmiri chilli",  amount:"15g"   },
      { emoji:"🫚", name:"Butter",           amount:"40g"   },
      { emoji:"🌿", name:"Fenugreek leaves", amount:"10g"   }
    ],
    steps: [
      { name:"Marinate Paneer",     time:"30 min", emoji:"🧀",
        desc:"Cut paneer (400g) into 3cm cubes. Mix with yogurt (150ml), tikka masala (15g), kashmiri chilli (10g), salt. Marinate 30 minutes.", cook:"🧀➜🫙" },
      { name:"Grill the Paneer",    time:"10 min", emoji:"🔥",
        desc:"Grill at 220C for 8-10 minutes until charred on edges. Or cook in dry pan until golden marks appear.", cook:"🔥➜🧀" },
      { name:"Cashew-Tomato Gravy", time:"20 min", emoji:"🍅",
        desc:"Boil cashews (50g), tomatoes (350g), onions (200g) for 15 minutes. Blend smooth. Heat butter, add spices, add blended gravy. Cook 10 min.", cook:"🍅➜🥘" },
      { name:"Finish with Cream",   time:"5 min",  emoji:"🥛",
        desc:"Add cream (150ml). Add grilled paneer. Crush dried fenugreek leaves between palms and add. Simmer 3 minutes.", cook:"🥛➜🧀" }
    ],
    nutrition: { calories:390, protein:"22g", carbs:"15g", fat:"28g", fiber:"3g" }
  },

  /* ─────────────────────────────────────────────
     RECIPE 9 — Vada Pav
  ───────────────────────────────────────────── */
  {
    id: 9,
    name: "Vada Pav",
    state: "Maharashtra",
    category: "Street Food",
    tags: ["quick", "popular"],
    time: "20 min",
    rating: 4.6,
    serves: 4,
    difficulty: "Easy",
    emoji: "🫔",
    color: "#3D2B1F",
    color2: "#c8a96e",
    image: "vada-pav.jpg",   
    desc: "Mumbai's iconic street burger — spiced potato fritter in soft bread roll with three chutneys.",
    ingredients: [
      { emoji:"🥔", name:"Potatoes",        amount:"400g"  },
      { emoji:"🌾", name:"Chickpea flour",  amount:"200g"  },
      { emoji:"🌶️", name:"Green chillies",  amount:"4 pcs" },
      { emoji:"🧄", name:"Garlic",          amount:"20g"   },
      { emoji:"🌿", name:"Coriander",       amount:"25g"   },
      { emoji:"🫙", name:"Mustard seeds",   amount:"5g"    },
      { emoji:"🟡", name:"Turmeric",        amount:"4g"    },
      { emoji:"🥖", name:"Pav buns",        amount:"8 pcs" },
      { emoji:"🫚", name:"Oil (frying)",    amount:"500ml" },
      { emoji:"🧂", name:"Salt",            amount:"8g"    }
    ],
    steps: [
      { name:"Spiced Potato Filling", time:"10 min", emoji:"🥔",
        desc:"Mash boiled potatoes. Temper mustard seeds, curry leaves, green chillies, garlic. Mix with potatoes, coriander, turmeric, salt. Form into round balls.", cook:"🥔➜🫔" },
      { name:"Make Batter",           time:"3 min",  emoji:"🌾",
        desc:"Mix chickpea flour (200g) with turmeric, salt, chilli powder. Add water to make a thick coating batter.", cook:"🌾➜🫙" },
      { name:"Deep Fry Vadas",        time:"8 min",  emoji:"🔥",
        desc:"Dip potato balls in batter. Deep fry at 180C until golden and crispy.", cook:"🔥➜🫔" },
      { name:"Assemble",              time:"2 min",  emoji:"🫔",
        desc:"Slit pav buns. Apply garlic chutney and green chutney. Place hot vada inside. Serve immediately.", cook:"🫔➜✨" }
    ],
    nutrition: { calories:340, protein:"9g", carbs:"52g", fat:"12g", fiber:"5g" }
  },

  /* ─────────────────────────────────────────────
     RECIPE 10 — Gulab Jamun
  ───────────────────────────────────────────── */
  {
    id: 10,
    name: "Gulab Jamun",
    state: "Rajasthan",
    category: "Dessert",
    tags: ["festive", "popular"],
    time: "40 min",
    rating: 4.9,
    serves: 8,
    difficulty: "Medium",
    emoji: "🍮",
    color: "#8B1A1A",
    color2: "#f4a460",
    image: "gulab-jamun.jpg",   
    desc: "Soft milk-solid dumplings soaked in rose-cardamom sugar syrup.",
    ingredients: [
      { emoji:"🥛", name:"Milk powder",     amount:"200g"  },
      { emoji:"🌾", name:"All-purpose flour",amount:"40g"  },
      { emoji:"🥛", name:"Ghee",            amount:"20g"   },
      { emoji:"🥛", name:"Milk",            amount:"80ml"  },
      { emoji:"🍬", name:"Sugar",           amount:"400g"  },
      { emoji:"💧", name:"Water",           amount:"400ml" },
      { emoji:"🌹", name:"Rose water",      amount:"15ml"  },
      { emoji:"🟠", name:"Cardamom",        amount:"6 pods"},
      { emoji:"🫚", name:"Oil (frying)",    amount:"600ml" },
      { emoji:"🧵", name:"Saffron",         amount:"pinch" }
    ],
    steps: [
      { name:"Make the Dough",    time:"10 min", emoji:"🌾",
        desc:"Mix milk powder (200g), flour (40g), ghee (20g). Add warm milk gradually. Knead into smooth crack-free dough. Rest 5 minutes.", cook:"🌾➜⬜" },
      { name:"Make the Syrup",    time:"8 min",  emoji:"🍬",
        desc:"Boil sugar (400g) and water (400ml) until one-string consistency. Add rose water, cardamom, saffron. Keep warm.", cook:"🍬➜💧" },
      { name:"Shape the Balls",   time:"5 min",  emoji:"⚪",
        desc:"Divide dough into 24 equal balls. Roll between palms until completely smooth — any crack will break the jamun during frying.", cook:"⚪➜🟤" },
      { name:"Deep Fry",          time:"12 min", emoji:"🔥",
        desc:"Heat oil to 130C ONLY — low temperature is the secret. Fry 6-8 balls at a time, stirring constantly for 8-10 minutes until deep mahogany brown.", cook:"🔥➜🟤" },
      { name:"Soak in Syrup",     time:"2 hr",   emoji:"🍮",
        desc:"Drop hot fried jamuns directly into warm syrup. Soak at room temperature 2 hours — they will double in size.", cook:"🍮➜🌹" }
    ],
    nutrition: { calories:280, protein:"5g", carbs:"48g", fat:"8g", fiber:"0g" }
  },

  /* ─────────────────────────────────────────────
     RECIPE 11 — Dal Makhani
  ───────────────────────────────────────────── */
  {
    id: 11,
    name: "Dal Makhani",
    state: "Punjab",
    category: "Main Course",
    tags: ["popular", "festive"],
    time: "90 min",
    rating: 4.8,
    serves: 4,
    difficulty: "Medium",
    emoji: "🫘",
    color: "#3D0000",
    color2: "#8B1A1A",
    image: "dal-makhani.jpg",   
    desc: "Slow-cooked black lentils in a rich creamy tomato sauce.",
    ingredients: [
      { emoji:"⚫", name:"Black urad dal",   amount:"200g"  },
      { emoji:"🔴", name:"Kidney beans",     amount:"50g"   },
      { emoji:"🍅", name:"Tomatoes",         amount:"300g"  },
      { emoji:"🧅", name:"Onion",            amount:"150g"  },
      { emoji:"🧄", name:"Garlic",           amount:"25g"   },
      { emoji:"🫚", name:"Butter",           amount:"80g"   },
      { emoji:"🥛", name:"Heavy cream",      amount:"150ml" },
      { emoji:"🫙", name:"Garam masala",     amount:"8g"    },
      { emoji:"🌶️", name:"Kashmiri chilli",  amount:"12g"   },
      { emoji:"🧂", name:"Salt",             amount:"10g"   }
    ],
    steps: [
      { name:"Soak and Pressure Cook", time:"8 hr",  emoji:"⚫",
        desc:"Soak black urad dal (200g) and kidney beans (50g) overnight. Pressure cook with salt for 8-10 whistles until completely soft.", cook:"⚫➜♨️" },
      { name:"Make Makhani Base",      time:"20 min", emoji:"🍅",
        desc:"Blend tomatoes. Melt butter (40g), saute onions, garlic. Add tomato puree, kashmiri chilli, garam masala. Cook on high until oil surfaces.", cook:"🍅➜🔥" },
      { name:"Slow Simmer",            time:"60 min", emoji:"🫘",
        desc:"Add cooked dal to makhani base. Mash 20% of the dal for thickness. Add remaining butter (40g). Simmer on lowest heat 60 minutes, stirring every 10 minutes.", cook:"🫘➜⏱️" },
      { name:"Cream Finish",           time:"5 min",  emoji:"🥛",
        desc:"Add cream (150ml) and stir in circles. The dal should be thick enough to coat a spoon. Finish with a swirl of cream and butter on top.", cook:"🥛➜🫘" }
    ],
    nutrition: { calories:450, protein:"18g", carbs:"45g", fat:"24g", fiber:"12g" }
  },

  /* ─────────────────────────────────────────────
     RECIPE 12 — Aloo Paratha
  ───────────────────────────────────────────── */
  {
    id: 12,
    name: "Aloo Paratha",
    state: "Punjab",
    category: "Breakfast",
    tags: ["quick", "popular"],
    time: "30 min",
    rating: 4.7,
    serves: 4,
    difficulty: "Easy",
    emoji: "🫓",
    color: "#5C3317",
    color2: "#d4a453",
    image: "aloo-paratha.jpg",   
    desc: "Whole wheat flatbread stuffed with spiced mashed potato.",
    ingredients: [
      { emoji:"🌾", name:"Whole wheat flour", amount:"300g" },
      { emoji:"🥔", name:"Potatoes",          amount:"400g" },
      { emoji:"🌿", name:"Coriander",         amount:"20g"  },
      { emoji:"🌶️", name:"Green chillies",    amount:"3 pcs"},
      { emoji:"🫚", name:"Butter/ghee",       amount:"60g"  },
      { emoji:"🧂", name:"Salt",              amount:"8g"   },
      { emoji:"🫙", name:"Carom seeds",       amount:"3g"   },
      { emoji:"🌶️", name:"Chilli powder",     amount:"5g"   }
    ],
    steps: [
      { name:"Make Dough",          time:"10 min", emoji:"🌾",
        desc:"Mix flour (300g), salt, carom seeds. Add water (150ml). Knead 8 minutes until smooth. Cover and rest 15 minutes.", cook:"🌾➜⬜" },
      { name:"Spiced Filling",      time:"8 min",  emoji:"🥔",
        desc:"Mash boiled potatoes. Mix with coriander, green chillies, chilli powder, salt.", cook:"🥔➜🫙" },
      { name:"Stuff and Roll",      time:"5 min",  emoji:"🫓",
        desc:"Roll dough to 10cm circle. Place filling in centre. Seal edges. Roll out to 20cm circle evenly.", cook:"🫓➜⬛" },
      { name:"Cook on Tawa",        time:"5 min",  emoji:"🔥",
        desc:"Cook on hot tawa 2 minutes until brown spots appear. Flip. Apply ghee (15g) generously. Flip again. Cook until both sides are golden.", cook:"🔥➜🫓" }
    ],
    nutrition: { calories:320, protein:"8g", carbs:"52g", fat:"10g", fiber:"6g" }
  },

  /* ─────────────────────────────────────────────
     RECIPE 13 — Idli
  ───────────────────────────────────────────── */
  {
    id: 13,
    name: "Idli",
    state: "Tamil Nadu",
    category: "Breakfast",
    tags: ["quick", "popular"],
    time: "20 min",
    rating: 4.6,
    serves: 4,
    difficulty: "Easy",
    emoji: "🫓",
    color: "#3a3a3a",
    color2: "#888888",
    image: "idli.jpg",   
    desc: "Fluffy steamed rice cakes — a nutritious South Indian breakfast staple.",
    ingredients: [
      { emoji:"🍚", name:"Idli batter",      amount:"600ml" },
      { emoji:"🫙", name:"Fenugreek seeds",  amount:"5g"    },
      { emoji:"🧂", name:"Salt",             amount:"8g"    }
    ],
    steps: [
      { name:"Prepare Batter", time:"8 hr",  emoji:"🍚",
        desc:"Soak 3:1 ratio parboiled rice to urad dal overnight. Grind smooth. Ferment 8+ hours in warm place. Batter should double.", cook:"🍚➜🫙" },
      { name:"Season",         time:"2 min",  emoji:"🧂",
        desc:"Add salt (8g) to fermented batter. Mix gently from bottom to top — do not overmix or you'll deflate the air bubbles.", cook:"🧂➜🫙" },
      { name:"Steam",          time:"15 min", emoji:"♨️",
        desc:"Grease moulds with oil. Fill 3/4 full with batter. Steam 12-15 minutes. Insert toothpick — if it comes out clean, idlis are done.", cook:"♨️➜🍚" }
    ],
    nutrition: { calories:120, protein:"4g", carbs:"24g", fat:"1g", fiber:"2g" }
  },

  /* ─────────────────────────────────────────────
     RECIPE 14 — Dhokla
  ───────────────────────────────────────────── */
  {
    id: 14,
    name: "Dhokla",
    state: "Gujarat",
    category: "Snack",
    tags: ["quick", "popular"],
    time: "25 min",
    rating: 4.7,
    serves: 6,
    difficulty: "Easy",
    emoji: "🟡",
    color: "#B8860B",
    color2: "#FFD700",
    image: "dhokla.jpg",   
    desc: "Soft steamed savory chickpea flour cake — Gujarat's pride.",
    ingredients: [
      { emoji:"🌾", name:"Chickpea flour",  amount:"250g"  },
      { emoji:"🥛", name:"Yogurt",          amount:"150ml" },
      { emoji:"🍋", name:"Lemon juice",     amount:"30ml"  },
      { emoji:"🫙", name:"Eno fruit salt",  amount:"10g"   },
      { emoji:"🌿", name:"Coriander",       amount:"20g"   },
      { emoji:"🌶️", name:"Green chillies",  amount:"3 pcs" },
      { emoji:"🫙", name:"Mustard seeds",   amount:"5g"    },
      { emoji:"🫒", name:"Oil",             amount:"20ml"  }
    ],
    steps: [
      { name:"Make Batter", time:"10 min", emoji:"🌾",
        desc:"Mix chickpea flour, yogurt, lemon juice, salt, turmeric. Add water to make thick pouring batter. Rest 5 minutes.", cook:"🌾➜🫙" },
      { name:"Steam",        time:"15 min", emoji:"♨️",
        desc:"Add eno fruit salt and mix quickly — batter will foam. Pour immediately into greased steamer plate. Steam 12-15 minutes until firm.", cook:"♨️➜🟡" },
      { name:"Tempering",    time:"2 min",  emoji:"🌶️",
        desc:"Heat oil, add mustard seeds, green chillies, curry leaves. Pour over dhokla. Garnish with coriander and coconut.", cook:"🌶️➜🟡" }
    ],
    nutrition: { calories:180, protein:"8g", carbs:"28g", fat:"4g", fiber:"5g" }
  },

  /* ─────────────────────────────────────────────
     RECIPE 15 — Palak Paneer
  ───────────────────────────────────────────── */
  {
    id: 15,
    name: "Palak Paneer",
    state: "Delhi",
    category: "Curry",
    tags: ["popular"],
    time: "35 min",
    rating: 4.7,
    serves: 4,
    difficulty: "Easy",
    emoji: "🥬",
    color: "#1B5E20",
    color2: "#4CAF50",
    image: "palak-paneer.jpg",   
    desc: "Fresh spinach curry with soft paneer — a nutritional powerhouse.",
    ingredients: [
      { emoji:"🥬", name:"Spinach",      amount:"500g" },
      { emoji:"🧀", name:"Paneer",       amount:"300g" },
      { emoji:"🧅", name:"Onion",        amount:"150g" },
      { emoji:"🍅", name:"Tomatoes",     amount:"150g" },
      { emoji:"🥛", name:"Cream",        amount:"60ml" },
      { emoji:"🫙", name:"Garam masala", amount:"8g"   },
      { emoji:"🧄", name:"Garlic",       amount:"20g"  },
      { emoji:"🫚", name:"Butter",       amount:"30g"  }
    ],
    steps: [
      { name:"Blanch Spinach",   time:"5 min",  emoji:"🥬",
        desc:"Boil water, add spinach (500g) for 2 minutes. Shock in ice cold water immediately. Blend to smooth puree.", cook:"🥬➜💚" },
      { name:"Paneer and Gravy", time:"15 min", emoji:"🧀",
        desc:"Fry paneer cubes golden. Make onion-tomato-garlic masala. Add garam masala. Add spinach puree and simmer 8 minutes.", cook:"🧀➜🥬" },
      { name:"Finish",           time:"3 min",  emoji:"🥛",
        desc:"Add fried paneer, cream (60ml), butter (30g). Simmer gently 3 minutes. Season and serve.", cook:"🥛➜🧀" }
    ],
    nutrition: { calories:340, protein:"20g", carbs:"10g", fat:"25g", fiber:"5g" }
  },

  /* ─────────────────────────────────────────────
     RECIPE 16 — Jalebi
  ───────────────────────────────────────────── */
  {
    id: 16,
    name: "Jalebi",
    state: "Uttar Pradesh",
    category: "Dessert",
    tags: ["festive", "popular"],
    time: "30 min",
    rating: 4.7,
    serves: 6,
    difficulty: "Medium",
    emoji: "🌀",
    color: "#FF8C00",
    color2: "#FFD700",
    image: "jalebi.jpg",   
    desc: "Crispy fermented batter spirals soaked in saffron sugar syrup.",
    ingredients: [
      { emoji:"🌾", name:"All-purpose flour", amount:"200g"  },
      { emoji:"🫙", name:"Yogurt",            amount:"50ml"  },
      { emoji:"🍬", name:"Sugar",             amount:"300g"  },
      { emoji:"💧", name:"Water",             amount:"300ml" },
      { emoji:"🧵", name:"Saffron",           amount:"pinch" },
      { emoji:"🫒", name:"Oil (frying)",      amount:"500ml" },
      { emoji:"🌹", name:"Rose water",        amount:"10ml"  },
      { emoji:"🟠", name:"Cardamom",          amount:"4 pods"}
    ],
    steps: [
      { name:"Ferment Batter", time:"12 hr", emoji:"🌾",
        desc:"Mix flour (200g), yogurt (50ml) with water (~150ml) to make thick flowing batter. Ferment 8-12 hours in warm place.", cook:"🌾➜🫙" },
      { name:"Sugar Syrup",    time:"8 min",  emoji:"🍬",
        desc:"Make one-string sugar syrup. Add saffron, cardamom, rose water. Keep hot throughout frying.", cook:"🍬➜💧" },
      { name:"Fry Spirals",    time:"10 min", emoji:"🌀",
        desc:"Heat oil to 180C. Pipe batter in spiral circles into hot oil. Fry until crispy and light golden.", cook:"🌀➜🔥" },
      { name:"Soak in Syrup",  time:"2 min",  emoji:"🌹",
        desc:"Drop hot jalebis into warm syrup. Soak 30 seconds. Remove and serve — crispy outside, juicy inside.", cook:"🌹➜🌀" }
    ],
    nutrition: { calories:320, protein:"3g", carbs:"62g", fat:"7g", fiber:"1g" }
  },

  /* ─────────────────────────────────────────────
     RECIPE 17 — Rasam
  ───────────────────────────────────────────── */
  {
    id: 17,
    name: "Rasam",
    state: "Tamil Nadu",
    category: "Soup",
    tags: ["quick", "popular"],
    time: "20 min",
    rating: 4.6,
    serves: 4,
    difficulty: "Easy",
    emoji: "🍵",
    color: "#5C0000",
    color2: "#ff4444",
    image: "rasam.jpg",   
    desc: "Thin peppery tamarind soup — great for immunity and digestion.",
    ingredients: [
      { emoji:"🟡", name:"Tamarind",       amount:"25g" },
      { emoji:"🫘", name:"Toor dal",       amount:"50g" },
      { emoji:"🍅", name:"Tomatoes",       amount:"150g"},
      { emoji:"⚫", name:"Black pepper",   amount:"10g" },
      { emoji:"🫙", name:"Cumin",          amount:"8g"  },
      { emoji:"🧄", name:"Garlic",         amount:"15g" },
      { emoji:"🌿", name:"Curry leaves",   amount:"10g" },
      { emoji:"🌶️", name:"Dried red chilli",amount:"3 pcs"},
      { emoji:"🫚", name:"Ghee",           amount:"15ml"},
      { emoji:"🧂", name:"Salt",           amount:"8g"  }
    ],
    steps: [
      { name:"Tamarind Base",      time:"8 min", emoji:"🟡",
        desc:"Dissolve tamarind in 500ml warm water. Boil with tomatoes, salt, and cooked toor dal water 5 minutes.", cook:"🟡➜💧" },
      { name:"Pepper-Cumin Paste", time:"2 min", emoji:"⚫",
        desc:"Coarsely grind black pepper (10g) and cumin (8g). Do not grind too fine.", cook:"⚫➜🫙" },
      { name:"Combine and Simmer", time:"5 min", emoji:"🍵",
        desc:"Add ground pepper-cumin and crushed garlic to tamarind base. Simmer until frothy on top.", cook:"🍵➜♨️" },
      { name:"Tempering",          time:"2 min", emoji:"🫚",
        desc:"Heat ghee until smoking. Add mustard seeds, dried chilli, curry leaves. Pour over rasam. Cover 1 minute.", cook:"🫚➜🍵" }
    ],
    nutrition: { calories:90, protein:"4g", carbs:"14g", fat:"3g", fiber:"3g" }
  },

  /* ─────────────────────────────────────────────
     RECIPE 18 — Malai Kofta
  ───────────────────────────────────────────── */
  {
    id: 18,
    name: "Malai Kofta",
    state: "Rajasthan",
    category: "Curry",
    tags: ["festive", "popular"],
    time: "60 min",
    rating: 4.8,
    serves: 4,
    difficulty: "Hard",
    emoji: "⚪",
    color: "#8B4513",
    color2: "#DEB887",
    image: "malai-kofta.jpg",   
    desc: "Fried paneer-potato dumplings in a royal Mughlai-style cream and cashew gravy.",
    ingredients: [
      { emoji:"🧀", name:"Paneer",       amount:"200g"  },
      { emoji:"🥔", name:"Potatoes",     amount:"200g"  },
      { emoji:"🟤", name:"Cashews",      amount:"80g"   },
      { emoji:"🥛", name:"Cream",        amount:"200ml" },
      { emoji:"🍅", name:"Tomatoes",     amount:"300g"  },
      { emoji:"🧅", name:"Onions",       amount:"200g"  },
      { emoji:"🫙", name:"Mawa/khoya",   amount:"50g"   },
      { emoji:"🫙", name:"Mixed spices", amount:"25g"   },
      { emoji:"🫒", name:"Oil (frying)", amount:"400ml" }
    ],
    steps: [
      { name:"Make Koftas",    time:"15 min", emoji:"⚪",
        desc:"Mash paneer (200g) and boiled potatoes (200g). Mix with khoya (50g), salt, garam masala, raisins, cashew pieces. Form balls, deep fry until golden.", cook:"⚪➜🔥" },
      { name:"Cashew Gravy",   time:"20 min", emoji:"🟤",
        desc:"Boil cashews (80g), tomatoes, onions. Blend smooth with cream (100ml). Strain for silky texture.", cook:"🟤➜🍮" },
      { name:"Makhani Base",   time:"15 min", emoji:"🍅",
        desc:"Heat butter, add spices, add cashew-tomato gravy. Cook until thick. Add remaining cream (100ml).", cook:"🍅➜🥘" },
      { name:"Assemble",       time:"2 min",  emoji:"🍮",
        desc:"Pour hot gravy into serving dish. Place koftas gently on top — do NOT boil koftas in gravy or they will dissolve.", cook:"🍮➜⚪" }
    ],
    nutrition: { calories:520, protein:"16g", carbs:"30g", fat:"38g", fiber:"3g" }
  },

  /* ─────────────────────────────────────────────
     RECIPE 19 — Meen Molee
  ───────────────────────────────────────────── */
  {
    id: 19,
    name: "Meen Molee",
    state: "Kerala",
    category: "Curry",
    tags: ["popular"],
    time: "30 min",
    rating: 4.7,
    serves: 4,
    difficulty: "Easy",
    emoji: "🐟",
    color: "#2E7D32",
    color2: "#81C784",
    image: "meen-molee.jpg",   
    desc: "Delicate white coconut milk fish curry — gentle, aromatic and uniquely Kerala.",
    ingredients: [
      { emoji:"🐟", name:"White fish",    amount:"600g"  },
      { emoji:"🥥", name:"Coconut milk",  amount:"400ml" },
      { emoji:"🌿", name:"Curry leaves",  amount:"15g"   },
      { emoji:"🟡", name:"Turmeric",      amount:"5g"    },
      { emoji:"🌶️", name:"Green chillies",amount:"4 pcs" },
      { emoji:"🧅", name:"Shallots",      amount:"150g"  },
      { emoji:"🍋", name:"Lemon juice",   amount:"20ml"  },
      { emoji:"🫚", name:"Coconut oil",   amount:"30ml"  }
    ],
    steps: [
      { name:"Saute Aromatics",  time:"8 min",  emoji:"🧅",
        desc:"Heat coconut oil, add curry leaves. Add shallots, green chillies, saute until soft. Add turmeric. Do not brown — this is a white curry.", cook:"🧅➜🌿" },
      { name:"Add Coconut Milk", time:"5 min",  emoji:"🥥",
        desc:"Add coconut milk (400ml). Bring to gentle simmer — do NOT boil coconut milk or it will split and curdle.", cook:"🥥➜♨️" },
      { name:"Cook Fish",        time:"10 min", emoji:"🐟",
        desc:"Add fish (600g). Simmer gently 8-10 minutes. Shake pot rather than stirring. Finish with lemon juice and black pepper.", cook:"🐟➜🥘" }
    ],
    nutrition: { calories:290, protein:"34g", carbs:"6g", fat:"14g", fiber:"1g" }
  },

  /* ─────────────────────────────────────────────
     RECIPE 20 — Biryani Pulao
  ───────────────────────────────────────────── */
  {
    id: 20,
    name: "Andhra Biryani Pulao",
    state: "Andhra Pradesh",
    category: "Rice",
    tags: ["popular"],
    time: "45 min",
    rating: 4.5,
    serves: 4,
    difficulty: "Medium",
    emoji: "🍛",
    color: "#6B3A1F",
    color2: "#e8a87c",
    image: "andhra-pulao.jpg",   
    desc: "Aromatic one-pot rice dish with vegetables and whole spices from Andhra.",
    ingredients: [
      { emoji:"🍚", name:"Basmati rice",      amount:"400g"  },
      { emoji:"🥕", name:"Mixed vegetables",  amount:"300g"  },
      { emoji:"🧅", name:"Onions",            amount:"150g"  },
      { emoji:"🫙", name:"Whole spices",      amount:"mix"   },
      { emoji:"🫚", name:"Ghee",              amount:"50ml"  },
      { emoji:"🥛", name:"Coconut milk",      amount:"200ml" }
    ],
    steps: [
      { name:"Saute Base",    time:"10 min", emoji:"🧅",
        desc:"Heat ghee, add whole spices, fry onions golden. Add ginger-garlic paste, cook 3 min.", cook:"🧅➜🔥" },
      { name:"Add Vegetables",time:"8 min",  emoji:"🥕",
        desc:"Add chopped vegetables, season with salt and spices. Saute on high heat 5 minutes.", cook:"🥕➜🥘" },
      { name:"Cook Rice",     time:"20 min", emoji:"🍚",
        desc:"Add soaked rice, coconut milk and water. Bring to boil, then lowest heat, cover and cook 15 min.", cook:"🍚➜♨️" }
    ],
    nutrition: { calories:380, protein:"8g", carbs:"65g", fat:"10g", fiber:"4g" }
  }


];

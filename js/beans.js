/**
 * Coffee bean database and search function.
 * Each bean maps to a roast level used by the grind algorithm.
 */

const BEANS = [
  // --- Verve Coffee Roasters (Santa Cruz, CA) ---
  {
    id: "verve-sermon",
    roaster: "Verve Coffee Roasters",
    name: "Sermon",
    roastLevel: "medium",
    notes: "Chocolate, caramel, citrus"
  },
  {
    id: "verve-streetlevel",
    roaster: "Verve Coffee Roasters",
    name: "Streetlevel",
    roastLevel: "medium",
    notes: "Toffee, milk chocolate, stone fruit"
  },
  {
    id: "verve-the-1950",
    roaster: "Verve Coffee Roasters",
    name: "The 1950",
    roastLevel: "medium-dark",
    notes: "Dark chocolate, molasses, walnut"
  },
  {
    id: "verve-buena-vista",
    roaster: "Verve Coffee Roasters",
    name: "Buena Vista",
    roastLevel: "light",
    notes: "Bright berry, floral, citrus"
  },

  // --- Blue Bottle Coffee (Oakland, CA) ---
  {
    id: "blue-bottle-hayes-valley",
    roaster: "Blue Bottle Coffee",
    name: "Hayes Valley Espresso",
    roastLevel: "medium",
    notes: "Cocoa, orange zest, vanilla"
  },
  {
    id: "blue-bottle-bella-donovan",
    roaster: "Blue Bottle Coffee",
    name: "Bella Donovan",
    roastLevel: "medium",
    notes: "Chocolate, fruit, creamy body"
  },
  {
    id: "blue-bottle-giant-steps",
    roaster: "Blue Bottle Coffee",
    name: "Giant Steps",
    roastLevel: "medium",
    notes: "Cocoa, dried fig, brown sugar"
  },
  {
    id: "blue-bottle-three-africas",
    roaster: "Blue Bottle Coffee",
    name: "Three Africas",
    roastLevel: "medium-light",
    notes: "Berry, jasmine, tart sweetness"
  },
  {
    id: "blue-bottle-beta-blend",
    roaster: "Blue Bottle Coffee",
    name: "Beta Blend",
    roastLevel: "light",
    notes: "Bright, fruity, complex"
  },

  // --- Equator Coffees (San Rafael, CA) ---
  {
    id: "equator-tigerwalk",
    roaster: "Equator Coffees",
    name: "Tigerwalk Espresso",
    roastLevel: "medium",
    notes: "Chocolate, cherry, smooth body"
  },
  {
    id: "equator-mocha-java",
    roaster: "Equator Coffees",
    name: "Mocha Java",
    roastLevel: "medium-dark",
    notes: "Rich cocoa, berry, spice"
  },
  {
    id: "equator-jaguar",
    roaster: "Equator Coffees",
    name: "Jaguar Espresso",
    roastLevel: "medium",
    notes: "Caramel, nut, dark fruit"
  },

  // --- Sightglass Coffee (San Francisco, CA) ---
  {
    id: "sightglass-banner-dark",
    roaster: "Sightglass Coffee",
    name: "Banner Dark",
    roastLevel: "dark",
    notes: "Bittersweet chocolate, smoky, bold"
  },
  {
    id: "sightglass-owls-howl",
    roaster: "Sightglass Coffee",
    name: "Owl's Howl",
    roastLevel: "medium",
    notes: "Toffee, almond, citrus"
  },
  {
    id: "sightglass-crown-point",
    roaster: "Sightglass Coffee",
    name: "Crown Point",
    roastLevel: "medium-light",
    notes: "Bright acidity, stone fruit, floral"
  },

  // --- Ritual Coffee Roasters (San Francisco, CA) ---
  {
    id: "ritual-sweet-tooth",
    roaster: "Ritual Coffee Roasters",
    name: "Sweet Tooth",
    roastLevel: "medium",
    notes: "Brown sugar, hazelnut, balanced"
  },
  {
    id: "ritual-amagasa",
    roaster: "Ritual Coffee Roasters",
    name: "Amagasa",
    roastLevel: "light",
    notes: "Delicate, tea-like, floral"
  },
  {
    id: "ritual-estrella",
    roaster: "Ritual Coffee Roasters",
    name: "Estrella",
    roastLevel: "medium-light",
    notes: "Citrus, honey, clean finish"
  },

  // --- Chromatic Coffee Roasters (San Jose, CA) ---
  {
    id: "chromatic-gamut",
    roaster: "Chromatic Coffee Roasters",
    name: "Gamut",
    roastLevel: "medium",
    notes: "Chocolate, caramel, balanced"
  },
  {
    id: "chromatic-procession",
    roaster: "Chromatic Coffee Roasters",
    name: "Procession",
    roastLevel: "medium-light",
    notes: "Bright, fruity, complex"
  },
  {
    id: "chromatic-waypoint",
    roaster: "Chromatic Coffee Roasters",
    name: "Waypoint",
    roastLevel: "light",
    notes: "Lively acidity, berry, floral"
  },

  // --- Cat & Cloud (Santa Cruz, CA) ---
  {
    id: "cat-cloud-the-answer",
    roaster: "Cat & Cloud",
    name: "The Answer",
    roastLevel: "medium",
    notes: "Chocolate, caramel, nutty"
  },
  {
    id: "cat-cloud-night-shift",
    roaster: "Cat & Cloud",
    name: "Night Shift",
    roastLevel: "dark",
    notes: "Smoky, dark chocolate, bold"
  },
  {
    id: "cat-cloud-cascara-effect",
    roaster: "Cat & Cloud",
    name: "The Cascara Effect",
    roastLevel: "medium-light",
    notes: "Fruity, sweet, tea-like"
  },

  // --- Peet's Coffee (Berkeley, CA) ---
  {
    id: "peets-major-dickasons",
    roaster: "Peet's Coffee",
    name: "Major Dickason's Blend",
    roastLevel: "dark",
    notes: "Full-bodied, rich, complex"
  },
  {
    id: "peets-big-bang",
    roaster: "Peet's Coffee",
    name: "Big Bang",
    roastLevel: "medium-dark",
    notes: "Bright, layered, smooth"
  },
  {
    id: "peets-espresso-forte",
    roaster: "Peet's Coffee",
    name: "Espresso Forte",
    roastLevel: "dark",
    notes: "Rich crema, smoky, intense"
  },

  // --- Philz Coffee (San Francisco, CA) ---
  {
    id: "philz-tesora",
    roaster: "Philz Coffee",
    name: "Tesora",
    roastLevel: "medium-dark",
    notes: "Caramel, brown sugar, hints of cherry"
  },
  {
    id: "philz-ether",
    roaster: "Philz Coffee",
    name: "Ether",
    roastLevel: "light",
    notes: "Bright, honey, delicate floral"
  },

  // --- Four Barrel Coffee (San Francisco, CA) ---
  {
    id: "four-barrel-friendo-blendo",
    roaster: "Four Barrel Coffee",
    name: "Friendo Blendo",
    roastLevel: "medium",
    notes: "Balanced, sweet, approachable"
  },

  // --- Andytown Coffee Roasters (San Francisco, CA) ---
  {
    id: "andytown-wind-and-sea",
    roaster: "Andytown Coffee Roasters",
    name: "Wind & Sea",
    roastLevel: "medium",
    notes: "Smooth, chocolate, toasted nut"
  },

  // --- Wrecking Ball Coffee Roasters (San Francisco, CA) ---
  {
    id: "wrecking-ball-trade-winds",
    roaster: "Wrecking Ball Coffee Roasters",
    name: "Trade Winds",
    roastLevel: "medium-light",
    notes: "Bright, clean, citrus"
  },

  // --- Popular national brands available in CA ---

  // Stumptown Coffee Roasters (Portland, OR)
  {
    id: "stumptown-hair-bender",
    roaster: "Stumptown Coffee Roasters",
    name: "Hair Bender",
    roastLevel: "medium",
    notes: "Citrus, dark chocolate, caramel"
  },
  {
    id: "stumptown-holler-mountain",
    roaster: "Stumptown Coffee Roasters",
    name: "Holler Mountain",
    roastLevel: "medium",
    notes: "Creamy, fruity, caramel"
  },
  {
    id: "stumptown-french-roast",
    roaster: "Stumptown Coffee Roasters",
    name: "French Roast",
    roastLevel: "dark",
    notes: "Smoky, bittersweet, bold"
  },

  // Intelligentsia Coffee (Chicago, IL)
  {
    id: "intelligentsia-black-cat",
    roaster: "Intelligentsia Coffee",
    name: "Black Cat Espresso",
    roastLevel: "medium",
    notes: "Milk chocolate, cola, sweet"
  },
  {
    id: "intelligentsia-frequency",
    roaster: "Intelligentsia Coffee",
    name: "Frequency Blend",
    roastLevel: "medium-light",
    notes: "Caramel, milk chocolate, bright"
  },
  {
    id: "intelligentsia-el-diablo",
    roaster: "Intelligentsia Coffee",
    name: "El Diablo",
    roastLevel: "dark",
    notes: "Dark chocolate, roasted nut, intense"
  },

  // Counter Culture Coffee (Durham, NC)
  {
    id: "counter-culture-hologram",
    roaster: "Counter Culture Coffee",
    name: "Hologram",
    roastLevel: "medium",
    notes: "Caramel, chocolate, silky body"
  },
  {
    id: "counter-culture-big-trouble",
    roaster: "Counter Culture Coffee",
    name: "Big Trouble",
    roastLevel: "medium",
    notes: "Rich, sweet, full-bodied"
  }
];

/**
 * Search beans by query string.
 * Tokenizes query, matches ALL tokens as substrings, ranks by prefix matches.
 * Returns top 8 results.
 */
function searchBeans(query) {
  var q = query.toLowerCase().trim();
  if (!q) return [];

  var tokens = q.split(/\s+/).filter(function (t) { return t.length > 0; });
  if (tokens.length === 0) return [];

  var scored = [];

  for (var i = 0; i < BEANS.length; i++) {
    var bean = BEANS[i];
    var searchStr = (bean.roaster + " " + bean.name).toLowerCase();
    var allMatch = true;
    var score = 0;

    for (var j = 0; j < tokens.length; j++) {
      var token = tokens[j];
      var idx = searchStr.indexOf(token);
      if (idx === -1) {
        allMatch = false;
        break;
      }
      // Bonus for matching at word boundary
      if (idx === 0 || searchStr[idx - 1] === " ") {
        score += 2;
      } else {
        score += 1;
      }
    }

    if (allMatch) {
      scored.push({ bean: bean, score: score });
    }
  }

  // Sort by score descending, then alphabetically by roaster+name
  scored.sort(function (a, b) {
    if (b.score !== a.score) return b.score - a.score;
    var nameA = a.bean.roaster + a.bean.name;
    var nameB = b.bean.roaster + b.bean.name;
    return nameA.localeCompare(nameB);
  });

  var results = [];
  for (var k = 0; k < Math.min(scored.length, 8); k++) {
    results.push(scored[k].bean);
  }
  return results;
}

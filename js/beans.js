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
  {
    id: "verve-bronson",
    roaster: "Verve Coffee Roasters",
    name: "Bronson",
    roastLevel: "medium-light",
    notes: "Honey, stone fruit, milk chocolate"
  },
  {
    id: "verve-seabright",
    roaster: "Verve Coffee Roasters",
    name: "Seabright House",
    roastLevel: "medium",
    notes: "Brown sugar, almond, balanced"
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
  {
    id: "blue-bottle-night-light",
    roaster: "Blue Bottle Coffee",
    name: "Night Light",
    roastLevel: "medium-dark",
    notes: "Rich, chocolatey, roasted almond"
  },
  {
    id: "blue-bottle-17ft-ceiling",
    roaster: "Blue Bottle Coffee",
    name: "17ft Ceiling",
    roastLevel: "medium",
    notes: "Balanced, nutty, brown sugar"
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
  {
    id: "equator-blueprint",
    roaster: "Equator Coffees",
    name: "Blueprint",
    roastLevel: "medium-light",
    notes: "Citrus, honey, clean"
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
  {
    id: "sightglass-blueboon",
    roaster: "Sightglass Coffee",
    name: "Blueboon",
    roastLevel: "medium",
    notes: "Blueberry, chocolate, creamy"
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
  {
    id: "peets-french-roast",
    roaster: "Peet's Coffee",
    name: "French Roast",
    roastLevel: "dark",
    notes: "Smoky, bold, bittersweet"
  },
  {
    id: "peets-cafe-domingo",
    roaster: "Peet's Coffee",
    name: "Cafe Domingo",
    roastLevel: "medium-dark",
    notes: "Smooth, mellow, sweet"
  },
  {
    id: "peets-house-blend",
    roaster: "Peet's Coffee",
    name: "House Blend",
    roastLevel: "medium-dark",
    notes: "Spicy, full-bodied, complex"
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
  {
    id: "philz-jacob-wonderbar",
    roaster: "Philz Coffee",
    name: "Jacob's Wonderbar",
    roastLevel: "medium-dark",
    notes: "Rich, chocolatey, smooth"
  },
  {
    id: "philz-ambrosia",
    roaster: "Philz Coffee",
    name: "Ambrosia",
    roastLevel: "medium",
    notes: "Berry, chocolate, balanced"
  },
  {
    id: "philz-silken-splendor",
    roaster: "Philz Coffee",
    name: "Silken Splendor",
    roastLevel: "medium",
    notes: "Silky, sweet, caramel"
  },
  {
    id: "philz-dancing-water",
    roaster: "Philz Coffee",
    name: "Dancing Water",
    roastLevel: "medium-light",
    notes: "Bright, citrus, clean"
  },

  // --- Four Barrel Coffee (San Francisco, CA) ---
  {
    id: "four-barrel-friendo-blendo",
    roaster: "Four Barrel Coffee",
    name: "Friendo Blendo",
    roastLevel: "medium",
    notes: "Balanced, sweet, approachable"
  },
  {
    id: "four-barrel-brazil",
    roaster: "Four Barrel Coffee",
    name: "Brazil Fazenda Cachoeira",
    roastLevel: "medium",
    notes: "Nutty, chocolate, low acidity"
  },

  // --- Andytown Coffee Roasters (San Francisco, CA) ---
  {
    id: "andytown-wind-and-sea",
    roaster: "Andytown Coffee Roasters",
    name: "Wind & Sea",
    roastLevel: "medium",
    notes: "Smooth, chocolate, toasted nut"
  },
  {
    id: "andytown-snowy-plover",
    roaster: "Andytown Coffee Roasters",
    name: "Snowy Plover",
    roastLevel: "medium-light",
    notes: "Bright, caramel, citrus"
  },

  // --- Wrecking Ball Coffee Roasters (San Francisco, CA) ---
  {
    id: "wrecking-ball-trade-winds",
    roaster: "Wrecking Ball Coffee Roasters",
    name: "Trade Winds",
    roastLevel: "medium-light",
    notes: "Bright, clean, citrus"
  },
  {
    id: "wrecking-ball-espresso-blend",
    roaster: "Wrecking Ball Coffee Roasters",
    name: "Espresso Blend",
    roastLevel: "medium",
    notes: "Chocolate, cherry, syrupy body"
  },

  // --- Flywheel Coffee Roasters (San Francisco, CA) ---
  {
    id: "flywheel-house",
    roaster: "Flywheel Coffee Roasters",
    name: "House Blend",
    roastLevel: "medium",
    notes: "Balanced, sweet, approachable"
  },
  {
    id: "flywheel-espresso",
    roaster: "Flywheel Coffee Roasters",
    name: "Espresso Blend",
    roastLevel: "medium",
    notes: "Cocoa, caramel, smooth"
  },

  // --- Bicycle Coffee (Oakland, CA) ---
  {
    id: "bicycle-organic-espresso",
    roaster: "Bicycle Coffee",
    name: "Organic Espresso",
    roastLevel: "medium",
    notes: "Chocolate, brown sugar, smooth"
  },
  {
    id: "bicycle-dark-roast",
    roaster: "Bicycle Coffee",
    name: "Dark Roast",
    roastLevel: "dark",
    notes: "Bold, smoky, bittersweet"
  },

  // --- Temple Coffee Roasters (Sacramento, CA) ---
  {
    id: "temple-dharma",
    roaster: "Temple Coffee Roasters",
    name: "Dharma",
    roastLevel: "medium",
    notes: "Chocolate, dried fruit, balanced"
  },
  {
    id: "temple-fix",
    roaster: "Temple Coffee Roasters",
    name: "The Fix",
    roastLevel: "medium-dark",
    notes: "Rich, cocoa, roasted nut"
  },
  {
    id: "temple-awakening",
    roaster: "Temple Coffee Roasters",
    name: "Awakening",
    roastLevel: "light",
    notes: "Floral, citrus, bright"
  },

  // --- Klatch Coffee (Rancho Cucamonga, CA) ---
  {
    id: "klatch-belle-espresso",
    roaster: "Klatch Coffee",
    name: "Belle Espresso",
    roastLevel: "medium",
    notes: "Sweet, nutty, caramel"
  },
  {
    id: "klatch-world-best-espresso",
    roaster: "Klatch Coffee",
    name: "WBC Espresso",
    roastLevel: "medium-light",
    notes: "Complex, berry, floral"
  },
  {
    id: "klatch-crazy-goat",
    roaster: "Klatch Coffee",
    name: "Crazy Goat",
    roastLevel: "medium",
    notes: "Chocolate, walnut, smooth"
  },

  // --- Groundwork Coffee (Los Angeles, CA) ---
  {
    id: "groundwork-organic-espresso",
    roaster: "Groundwork Coffee",
    name: "Organic Espresso",
    roastLevel: "medium-dark",
    notes: "Rich, cocoa, earthy"
  },
  {
    id: "groundwork-venice",
    roaster: "Groundwork Coffee",
    name: "Venice Blend",
    roastLevel: "medium",
    notes: "Smooth, caramel, citrus"
  },
  {
    id: "groundwork-bitches-brew",
    roaster: "Groundwork Coffee",
    name: "Bitches Brew",
    roastLevel: "dark",
    notes: "Bold, smoky, dark chocolate"
  },

  // --- Lamill Coffee (Los Angeles, CA) ---
  {
    id: "lamill-signature-espresso",
    roaster: "Lamill Coffee",
    name: "Signature Espresso",
    roastLevel: "medium",
    notes: "Caramel, hazelnut, balanced"
  },
  {
    id: "lamill-silver-lake",
    roaster: "Lamill Coffee",
    name: "Silver Lake",
    roastLevel: "medium-light",
    notes: "Citrus, honey, delicate"
  },

  // --- Copa Vida (Pasadena, CA) ---
  {
    id: "copa-vida-espresso",
    roaster: "Copa Vida",
    name: "Espresso Blend",
    roastLevel: "medium",
    notes: "Dark chocolate, cherry, smooth"
  },
  {
    id: "copa-vida-filter",
    roaster: "Copa Vida",
    name: "Filter Blend",
    roastLevel: "medium-light",
    notes: "Bright, stone fruit, tea-like"
  },

  // --- Handlebar Coffee (Santa Barbara, CA) ---
  {
    id: "handlebar-espresso",
    roaster: "Handlebar Coffee",
    name: "Espresso Blend",
    roastLevel: "medium",
    notes: "Chocolate, nut, sweet"
  },
  {
    id: "handlebar-dark",
    roaster: "Handlebar Coffee",
    name: "Dark Roast",
    roastLevel: "dark",
    notes: "Bold, smoky, rich"
  },

  // --- Red Bay Coffee (Oakland, CA) ---
  {
    id: "red-bay-motherland",
    roaster: "Red Bay Coffee",
    name: "Motherland",
    roastLevel: "medium",
    notes: "Berry, cocoa, citrus"
  },
  {
    id: "red-bay-brazilian",
    roaster: "Red Bay Coffee",
    name: "Brazilian Cake Lady",
    roastLevel: "medium-dark",
    notes: "Chocolate cake, rich, nutty"
  },

  // --- Dune Coffee Roasters (Santa Barbara, CA) ---
  {
    id: "dune-espresso",
    roaster: "Dune Coffee Roasters",
    name: "Espresso Blend",
    roastLevel: "medium",
    notes: "Chocolate, caramel, sweet"
  },
  {
    id: "dune-weekender",
    roaster: "Dune Coffee Roasters",
    name: "Weekender",
    roastLevel: "medium-light",
    notes: "Citrus, floral, clean"
  },

  // --- Bird Rock Coffee Roasters (San Diego, CA) ---
  {
    id: "bird-rock-espresso",
    roaster: "Bird Rock Coffee Roasters",
    name: "Espresso Blend",
    roastLevel: "medium",
    notes: "Toffee, dark chocolate, sweet"
  },
  {
    id: "bird-rock-la-colombe",
    roaster: "Bird Rock Coffee Roasters",
    name: "Spirit Animal",
    roastLevel: "light",
    notes: "Bright, berry, complex"
  },
  {
    id: "bird-rock-monkey-bite",
    roaster: "Bird Rock Coffee Roasters",
    name: "Monkey Bite",
    roastLevel: "medium-dark",
    notes: "Full-bodied, dark chocolate, smoky"
  },

  // --- Dark Horse Coffee Roasters (San Diego, CA) ---
  {
    id: "dark-horse-thoroughbred",
    roaster: "Dark Horse Coffee Roasters",
    name: "Thoroughbred Espresso",
    roastLevel: "medium",
    notes: "Caramel, chocolate, balanced"
  },
  {
    id: "dark-horse-dark-roast",
    roaster: "Dark Horse Coffee Roasters",
    name: "Dark Roast",
    roastLevel: "dark",
    notes: "Smoky, bold, rich"
  },

  // --- Dragonfly Coffee Roasters (San Diego, CA) ---
  {
    id: "dragonfly-monarch",
    roaster: "Dragonfly Coffee Roasters",
    name: "Monarch Espresso",
    roastLevel: "medium",
    notes: "Chocolate, honey, sweet"
  },

  // --- Avid Coffee (Santa Cruz, CA) ---
  {
    id: "avid-house-espresso",
    roaster: "Avid Coffee",
    name: "House Espresso",
    roastLevel: "medium",
    notes: "Chocolate, caramel, smooth"
  },
  {
    id: "avid-night-owl",
    roaster: "Avid Coffee",
    name: "Night Owl",
    roastLevel: "medium-dark",
    notes: "Rich, dark chocolate, roasted nut"
  },
  {
    id: "avid-light-roast",
    roaster: "Avid Coffee",
    name: "Daybreak",
    roastLevel: "light",
    notes: "Bright, citrus, floral"
  },

  // --- Barefoot Coffee Roasters (San Jose, CA) ---
  {
    id: "barefoot-espresso",
    roaster: "Barefoot Coffee Roasters",
    name: "Espresso Blend",
    roastLevel: "medium",
    notes: "Chocolate, toffee, balanced"
  },
  {
    id: "barefoot-dark-voyage",
    roaster: "Barefoot Coffee Roasters",
    name: "Dark Voyage",
    roastLevel: "dark",
    notes: "Smoky, bold, bittersweet"
  },

  // ---Devout Coffee (Fremont, CA) ---
  {
    id: "devout-loyal",
    roaster: "Devout Coffee",
    name: "Loyal Espresso",
    roastLevel: "medium",
    notes: "Caramel, brown sugar, nutty"
  },
  {
    id: "devout-faithful",
    roaster: "Devout Coffee",
    name: "Faithful",
    roastLevel: "medium-light",
    notes: "Stone fruit, honey, clean"
  },

  // --- Hearst Ranch Coffee (San Simeon, CA) ---
  {
    id: "hearst-cowboys-choice",
    roaster: "Hearst Ranch Coffee",
    name: "Cowboy's Choice",
    roastLevel: "dark",
    notes: "Bold, smoky, earthy"
  },
  {
    id: "hearst-san-simeon",
    roaster: "Hearst Ranch Coffee",
    name: "San Simeon Blend",
    roastLevel: "medium",
    notes: "Smooth, chocolate, walnut"
  },

  // --- Portola Coffee Roasters (Costa Mesa, CA) ---
  {
    id: "portola-opus",
    roaster: "Portola Coffee Roasters",
    name: "Opus Espresso",
    roastLevel: "medium",
    notes: "Milk chocolate, caramel, sweet"
  },
  {
    id: "portola-duet",
    roaster: "Portola Coffee Roasters",
    name: "Duet",
    roastLevel: "medium-light",
    notes: "Bright, floral, citrus"
  },
  {
    id: "portola-nocturne",
    roaster: "Portola Coffee Roasters",
    name: "Nocturne",
    roastLevel: "dark",
    notes: "Rich, cocoa, roasted almond"
  },

  // --- Augie's Coffee (Redlands, CA) ---
  {
    id: "augies-espresso",
    roaster: "Augie's Coffee",
    name: "Espresso Blend",
    roastLevel: "medium",
    notes: "Chocolate, berry, balanced"
  },
  {
    id: "augies-sierra",
    roaster: "Augie's Coffee",
    name: "Sierra",
    roastLevel: "light",
    notes: "Bright, tropical fruit, floral"
  },

  // --- Coffee Manufactory (San Francisco, CA) ---
  {
    id: "coffee-manufactory-espresso",
    roaster: "Coffee Manufactory",
    name: "Espresso Blend",
    roastLevel: "medium",
    notes: "Chocolate, dried cherry, sweet"
  },
  {
    id: "coffee-manufactory-filter",
    roaster: "Coffee Manufactory",
    name: "Filter Blend",
    roastLevel: "medium-light",
    notes: "Citrus, honey, tea-like"
  },

  // --- Weaver's Coffee & Tea (San Rafael, CA) ---
  {
    id: "weavers-italian-espresso",
    roaster: "Weaver's Coffee & Tea",
    name: "Italian Espresso",
    roastLevel: "medium-dark",
    notes: "Rich, cocoa, bittersweet"
  },
  {
    id: "weavers-mt-tam",
    roaster: "Weaver's Coffee & Tea",
    name: "Mt. Tam Blend",
    roastLevel: "medium",
    notes: "Smooth, nutty, caramel"
  },

  // --- Bodhi Leaf Coffee Traders (Westminster, CA) ---
  {
    id: "bodhi-leaf-espresso",
    roaster: "Bodhi Leaf Coffee Traders",
    name: "Espresso Classico",
    roastLevel: "medium",
    notes: "Chocolate, caramel, smooth"
  },
  {
    id: "bodhi-leaf-dark",
    roaster: "Bodhi Leaf Coffee Traders",
    name: "Dark Side",
    roastLevel: "dark",
    notes: "Bold, smoky, dark chocolate"
  },

  // --- Stonemill Matcha & Coffee (San Francisco, CA) ---
  {
    id: "saint-frank-espresso",
    roaster: "Saint Frank Coffee",
    name: "Espresso Blend",
    roastLevel: "medium",
    notes: "Chocolate, dried fruit, sweet"
  },
  {
    id: "saint-frank-single-origin",
    roaster: "Saint Frank Coffee",
    name: "Cyclops",
    roastLevel: "light",
    notes: "Bright, berry, complex"
  },

  // --- Elixr Coffee (Los Angeles, CA) ---
  {
    id: "madre-espresso",
    roaster: "Madre Oaxacan Coffee",
    name: "Espresso",
    roastLevel: "medium",
    notes: "Chocolate, agave, smooth"
  },
  {
    id: "madre-dark-roast",
    roaster: "Madre Oaxacan Coffee",
    name: "Dark Roast",
    roastLevel: "dark",
    notes: "Bold, earthy, cocoa"
  },

  // --- Rose Park Roasters (Long Beach, CA) ---
  {
    id: "rose-park-espresso",
    roaster: "Rose Park Roasters",
    name: "Espresso Blend",
    roastLevel: "medium",
    notes: "Caramel, chocolate, balanced"
  },
  {
    id: "rose-park-heartwood",
    roaster: "Rose Park Roasters",
    name: "Heartwood",
    roastLevel: "medium-dark",
    notes: "Rich, walnut, dark sugar"
  },

  // --- Nuvrei Coffee (San Francisco, CA) ---
  {
    id: "linea-caffe-espresso",
    roaster: "Linea Caffe",
    name: "Espresso Blend",
    roastLevel: "medium",
    notes: "Classic Italian style, chocolate, nutty"
  },

  // --- Thanksgiving Coffee (Fort Bragg, CA) ---
  {
    id: "thanksgiving-espresso-pacifico",
    roaster: "Thanksgiving Coffee",
    name: "Espresso Pacifico",
    roastLevel: "medium-dark",
    notes: "Dark chocolate, spice, rich"
  },
  {
    id: "thanksgiving-big-river",
    roaster: "Thanksgiving Coffee",
    name: "Big River Blend",
    roastLevel: "medium",
    notes: "Smooth, balanced, sweet"
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
  {
    id: "stumptown-founders-blend",
    roaster: "Stumptown Coffee Roasters",
    name: "Founder's Blend",
    roastLevel: "medium-light",
    notes: "Toffee, berry, bright"
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
  },
  {
    id: "counter-culture-apollo",
    roaster: "Counter Culture Coffee",
    name: "Apollo",
    roastLevel: "light",
    notes: "Bright, citrus, clean"
  },

  // La Colombe Coffee Roasters (Philadelphia, PA)
  {
    id: "la-colombe-corsica",
    roaster: "La Colombe Coffee Roasters",
    name: "Corsica",
    roastLevel: "medium-dark",
    notes: "Dark chocolate, baking spice, bold"
  },
  {
    id: "la-colombe-nizza",
    roaster: "La Colombe Coffee Roasters",
    name: "Nizza",
    roastLevel: "medium",
    notes: "Honey, milk chocolate, sweet"
  },
  {
    id: "la-colombe-monaco",
    roaster: "La Colombe Coffee Roasters",
    name: "Monaco",
    roastLevel: "medium-light",
    notes: "Citrus, cocoa, bright"
  },

  // Onyx Coffee Lab (Bentonville, AR)
  {
    id: "onyx-monarch",
    roaster: "Onyx Coffee Lab",
    name: "Monarch Espresso",
    roastLevel: "medium",
    notes: "Caramel, grape, chocolate"
  },
  {
    id: "onyx-geometry",
    roaster: "Onyx Coffee Lab",
    name: "Geometry",
    roastLevel: "light",
    notes: "Bright, berry, complex"
  },
  {
    id: "onyx-southern-weather",
    roaster: "Onyx Coffee Lab",
    name: "Southern Weather",
    roastLevel: "medium",
    notes: "Brown sugar, toffee, warm spice"
  },

  // Illy (Trieste, Italy — widely available in CA)
  {
    id: "illy-classico",
    roaster: "illy",
    name: "Classico",
    roastLevel: "medium",
    notes: "Caramel, orange blossom, smooth"
  },
  {
    id: "illy-intenso",
    roaster: "illy",
    name: "Intenso",
    roastLevel: "medium-dark",
    notes: "Cocoa, dried fruit, rich"
  },
  {
    id: "illy-forte",
    roaster: "illy",
    name: "Forte",
    roastLevel: "dark",
    notes: "Bold, roasted, intense"
  },

  // Lavazza (Turin, Italy — widely available in CA)
  {
    id: "lavazza-super-crema",
    roaster: "Lavazza",
    name: "Super Crema",
    roastLevel: "medium",
    notes: "Honey, almond, dried fruit"
  },
  {
    id: "lavazza-gran-espresso",
    roaster: "Lavazza",
    name: "Gran Espresso",
    roastLevel: "medium-dark",
    notes: "Dark chocolate, spice, full-bodied"
  },
  {
    id: "lavazza-qualita-oro",
    roaster: "Lavazza",
    name: "Qualita Oro",
    roastLevel: "medium",
    notes: "Floral, honey, sweet"
  },

  // Heart Coffee Roasters (Portland, OR)
  {
    id: "heart-stereo",
    roaster: "Heart Coffee Roasters",
    name: "Stereo",
    roastLevel: "light",
    notes: "Bright, juicy, berry"
  },
  {
    id: "heart-warm-sun",
    roaster: "Heart Coffee Roasters",
    name: "Warm Sun",
    roastLevel: "medium",
    notes: "Chocolate, brown sugar, balanced"
  },

  // Coava Coffee Roasters (Portland, OR)
  {
    id: "coava-kilenso",
    roaster: "Coava Coffee Roasters",
    name: "Kilenso",
    roastLevel: "light",
    notes: "Floral, peach, tea-like"
  },
  {
    id: "coava-mezcla",
    roaster: "Coava Coffee Roasters",
    name: "Mezcla",
    roastLevel: "medium",
    notes: "Chocolate, caramel, nutty"
  },

  // George Howell Coffee (Boston, MA)
  {
    id: "george-howell-tarrazu",
    roaster: "George Howell Coffee",
    name: "Tarrazu",
    roastLevel: "light",
    notes: "Citrus, almond, bright"
  },
  {
    id: "george-howell-alchemy",
    roaster: "George Howell Coffee",
    name: "Alchemy Espresso",
    roastLevel: "medium",
    notes: "Chocolate, cherry, sweet"
  },

  // Proud Mary Coffee (Portland, OR / Melbourne, AU)
  {
    id: "proud-mary-ghost-rider",
    roaster: "Proud Mary Coffee",
    name: "Ghost Rider",
    roastLevel: "medium",
    notes: "Chocolate, toffee, rich"
  },
  {
    id: "proud-mary-humbler",
    roaster: "Proud Mary Coffee",
    name: "Humbler",
    roastLevel: "light",
    notes: "Tropical fruit, bright, complex"
  },

  // Starbucks (Seattle, WA — for the masses)
  {
    id: "starbucks-espresso-roast",
    roaster: "Starbucks",
    name: "Espresso Roast",
    roastLevel: "dark",
    notes: "Rich, caramelly, bold"
  },
  {
    id: "starbucks-pike-place",
    roaster: "Starbucks",
    name: "Pike Place Roast",
    roastLevel: "medium",
    notes: "Smooth, chocolate, toasted nut"
  },
  {
    id: "starbucks-blonde-espresso",
    roaster: "Starbucks",
    name: "Blonde Espresso",
    roastLevel: "light",
    notes: "Soft, sweet, citrus"
  },
  {
    id: "starbucks-french-roast",
    roaster: "Starbucks",
    name: "French Roast",
    roastLevel: "dark",
    notes: "Smoky, intense, bold"
  },

  // --- v1.0.1 additions ---

  // --- Onyx Coffee Lab (Rogers, AR) ---
  {
    id: "onyx-southeastern",
    roaster: "Onyx Coffee Lab",
    name: "Southeastern Blend",
    roastLevel: "medium",
    notes: "Chocolate, hazelnut, brown sugar"
  },
  {
    id: "onyx-homestead",
    roaster: "Onyx Coffee Lab",
    name: "Homestead Blend",
    roastLevel: "medium-dark",
    notes: "Dark chocolate, molasses, walnut"
  },

  // --- Sey Coffee (Brooklyn, NY) ---
  {
    id: "sey-house-blend",
    roaster: "Sey Coffee",
    name: "House Blend",
    roastLevel: "light",
    notes: "Delicate, tea-like, floral"
  },
  {
    id: "sey-ethiopia-hambela",
    roaster: "Sey Coffee",
    name: "Ethiopia Hambela",
    roastLevel: "light",
    notes: "Jasmine, peach, bergamot"
  },
  {
    id: "sey-colombia-inmaculada",
    roaster: "Sey Coffee",
    name: "Colombia Inmaculada",
    roastLevel: "light",
    notes: "Red apple, honey, clean"
  },

  // --- Heart Coffee Roasters (Portland, OR) ---
  {
    id: "heart-ethiopia-gedeb",
    roaster: "Heart Coffee Roasters",
    name: "Ethiopia Gedeb",
    roastLevel: "light",
    notes: "Blueberry, floral, lemon"
  },

  // --- Tim Wendelboe (Oslo, Norway) ---
  {
    id: "wendelboe-finca-tamana",
    roaster: "Tim Wendelboe",
    name: "Finca Tamana",
    roastLevel: "light",
    notes: "Black tea, red currant, clean"
  },
  {
    id: "wendelboe-kieni",
    roaster: "Tim Wendelboe",
    name: "Kieni AA",
    roastLevel: "light",
    notes: "Black currant, citrus, complex"
  },

  // --- Square Mile Coffee Roasters (London, UK) ---
  {
    id: "square-mile-red-brick",
    roaster: "Square Mile Coffee Roasters",
    name: "Red Brick Espresso",
    roastLevel: "medium",
    notes: "Chocolate, stone fruit, balanced"
  },
  {
    id: "square-mile-sweetshop",
    roaster: "Square Mile Coffee Roasters",
    name: "Sweetshop Espresso",
    roastLevel: "medium-light",
    notes: "Caramel, honey, red fruit"
  },

  // --- Drop Coffee Roasters (Stockholm, Sweden) ---
  {
    id: "drop-coffee-standard-blend",
    roaster: "Drop Coffee Roasters",
    name: "Standard Blend",
    roastLevel: "light",
    notes: "Floral, stone fruit, clean"
  },
  {
    id: "drop-coffee-ethiopia-kayon-mountain",
    roaster: "Drop Coffee Roasters",
    name: "Ethiopia Kayon Mountain",
    roastLevel: "light",
    notes: "Jasmine, peach, tea-like"
  },

  // --- The Coffee Collective (Copenhagen, Denmark) ---
  {
    id: "coffee-collective-la-golondrina",
    roaster: "The Coffee Collective",
    name: "La Golondrina",
    roastLevel: "light",
    notes: "Orange, red apple, sugarcane"
  },
  {
    id: "coffee-collective-kieni",
    roaster: "The Coffee Collective",
    name: "Kieni",
    roastLevel: "light",
    notes: "Black currant, grapefruit, wine"
  },

  // --- Coava Coffee Roasters (Portland, OR) ---
  {
    id: "coava-tres-barras",
    roaster: "Coava Coffee Roasters",
    name: "Tres Barras Brazil",
    roastLevel: "medium",
    notes: "Chocolate, almond, caramel"
  },

  // --- Ritual Coffee Roasters (San Francisco, CA) ---
  {
    id: "ritual-colombia-narino",
    roaster: "Ritual Coffee Roasters",
    name: "Colombia Nariño",
    roastLevel: "medium-light",
    notes: "Red apple, honey, almond"
  },

  // --- Intelligentsia Coffee (Chicago, IL) ---
  {
    id: "intelligentsia-house-blend",
    roaster: "Intelligentsia Coffee",
    name: "House Blend",
    roastLevel: "medium",
    notes: "Balanced, chocolate, caramel"
  },

  // --- George Howell Coffee (Acton, MA) ---
  {
    id: "george-howell-ethiopia-kochere",
    roaster: "George Howell Coffee",
    name: "Ethiopia Kochere",
    roastLevel: "light",
    notes: "Floral, stone fruit, tea"
  },

  // --- Joe Coffee Company (New York, NY) ---
  {
    id: "joe-coffee-the-daily",
    roaster: "Joe Coffee Company",
    name: "The Daily",
    roastLevel: "medium",
    notes: "Chocolate, caramel, balanced"
  },
  {
    id: "joe-coffee-grand-dad",
    roaster: "Joe Coffee Company",
    name: "Grand Dad",
    roastLevel: "medium-dark",
    notes: "Dark chocolate, molasses, nuts"
  },

  // --- Partners Coffee (Brooklyn, NY) ---
  {
    id: "partners-brooklyn-blend",
    roaster: "Partners Coffee",
    name: "Brooklyn Blend",
    roastLevel: "medium",
    notes: "Chocolate, caramel, citrus"
  },

  // --- Gimme! Coffee (Ithaca, NY) ---
  {
    id: "gimme-leftist",
    roaster: "Gimme! Coffee",
    name: "Leftist Espresso",
    roastLevel: "medium",
    notes: "Balanced, chocolate, almond"
  },

  // --- Kickapoo Coffee Roasters (Viroqua, WI) ---
  {
    id: "kickapoo-dulcinea",
    roaster: "Kickapoo Coffee Roasters",
    name: "Dulcinea",
    roastLevel: "medium",
    notes: "Sweet, chocolate, stone fruit"
  },

  // --- Madcap Coffee Company (Grand Rapids, MI) ---
  {
    id: "madcap-third-coast",
    roaster: "Madcap Coffee Company",
    name: "Third Coast Blend",
    roastLevel: "medium-light",
    notes: "Caramel, red apple, clean"
  },

  // --- Prodigal Coffee (Denver, CO) ---
  {
    id: "prodigal-ethiopia-konga",
    roaster: "Prodigal Coffee",
    name: "Ethiopia Konga",
    roastLevel: "light",
    notes: "Blueberry, floral, tea-like"
  },

  // --- Black & White Coffee Roasters (Raleigh, NC) ---
  {
    id: "black-and-white-classic",
    roaster: "Black & White Coffee Roasters",
    name: "Classic Espresso",
    roastLevel: "medium",
    notes: "Chocolate, caramel, nutty"
  },
  {
    id: "black-and-white-dial-in",
    roaster: "Black & White Coffee Roasters",
    name: "Dial-In Espresso",
    roastLevel: "medium-light",
    notes: "Balanced, sweet, fruit-forward"
  },

  // --- Passenger Coffee (Lancaster, PA) ---
  {
    id: "passenger-steady-state",
    roaster: "Passenger Coffee",
    name: "Steady State Blend",
    roastLevel: "medium",
    notes: "Brown sugar, chocolate, smooth"
  },

  // --- Olympia Coffee Roasting (Olympia, WA) ---
  {
    id: "olympia-big-truck",
    roaster: "Olympia Coffee Roasting",
    name: "Big Truck Organic",
    roastLevel: "medium",
    notes: "Chocolate, caramel, balanced"
  },

  // --- Bows + Arrows Coffee Roasters (Austin, TX) ---
  {
    id: "bows-arrows-four-arrows",
    roaster: "Bows + Arrows Coffee Roasters",
    name: "Four Arrows Blend",
    roastLevel: "medium",
    notes: "Cocoa, nutty, caramel"
  },

  // --- Cat & Cloud Coffee (Santa Cruz, CA) ---
  {
    id: "cat-and-cloud-we-are-dreamers",
    roaster: "Cat & Cloud Coffee",
    name: "We Are Dreamers",
    roastLevel: "medium",
    notes: "Chocolate, brown sugar, balanced"
  },

  // --- Red Rooster Coffee (Floyd, VA) ---
  {
    id: "red-rooster-the-good-one",
    roaster: "Red Rooster Coffee",
    name: "The Good One",
    roastLevel: "medium",
    notes: "Chocolate, almond, smooth"
  },

  // --- Ruby Coffee Roasters (Nelsonville, WI) ---
  {
    id: "ruby-coffee-cadence",
    roaster: "Ruby Coffee Roasters",
    name: "Cadence",
    roastLevel: "medium-light",
    notes: "Sweet, balanced, caramel"
  },

  // --- Metric Coffee (Chicago, IL) ---
  {
    id: "metric-coffee-ethiopia-kochere",
    roaster: "Metric Coffee",
    name: "Ethiopia Kochere",
    roastLevel: "light",
    notes: "Floral, citrus, tea-like"
  },

  // --- 49th Parallel Coffee Roasters (Vancouver, Canada) ---
  {
    id: "49th-parallel-epic",
    roaster: "49th Parallel Coffee Roasters",
    name: "Epic Espresso",
    roastLevel: "medium",
    notes: "Chocolate, caramel, balanced"
  },

  // --- Phil & Sebastian (Calgary, Canada) ---
  {
    id: "phil-sebastian-calgary-blend",
    roaster: "Phil & Sebastian",
    name: "Calgary Blend",
    roastLevel: "medium",
    notes: "Chocolate, stone fruit, clean"
  },

  // --- Rogue Wave Coffee (Edmonton, Canada) ---
  {
    id: "rogue-wave-rogue",
    roaster: "Rogue Wave Coffee",
    name: "Rogue Blend",
    roastLevel: "medium-light",
    notes: "Caramel, red fruit, balanced"
  },

  // --- Workshop Coffee (London, UK) ---
  {
    id: "workshop-cult-of-done",
    roaster: "Workshop Coffee",
    name: "Cult of Done Espresso",
    roastLevel: "medium",
    notes: "Cocoa, dried fruit, balanced"
  },

  // --- Origin Coffee (Cornwall, UK) ---
  {
    id: "origin-resolute",
    roaster: "Origin Coffee",
    name: "Resolute Blend",
    roastLevel: "medium",
    notes: "Chocolate, caramel, smooth"
  },

  // --- Ozone Coffee Roasters (London, UK) ---
  {
    id: "ozone-empire-state",
    roaster: "Ozone Coffee Roasters",
    name: "Empire State",
    roastLevel: "medium",
    notes: "Chocolate, nut, balanced"
  },

  // --- Climpson & Sons (London, UK) ---
  {
    id: "climpson-estate",
    roaster: "Climpson & Sons",
    name: "Estate Espresso",
    roastLevel: "medium",
    notes: "Caramel, chocolate, red fruit"
  },

  // --- Has Bean Coffee (Stafford, UK) ---
  {
    id: "has-bean-jailbreak",
    roaster: "Has Bean Coffee",
    name: "Jailbreak Espresso",
    roastLevel: "medium",
    notes: "Chocolate, caramel, nutty"
  },

  // --- Colonna Coffee (Bath, UK) ---
  {
    id: "colonna-dark-arts",
    roaster: "Colonna Coffee",
    name: "Dark Arts Espresso",
    roastLevel: "medium",
    notes: "Dark chocolate, cherry, syrupy"
  },

  // --- Bonanza Coffee Roasters (Berlin, Germany) ---
  {
    id: "bonanza-rocko-mountain",
    roaster: "Bonanza Coffee Roasters",
    name: "Rocko Mountain Reserve",
    roastLevel: "light",
    notes: "Floral, blueberry, tea-like"
  },

  // --- The Barn Coffee Roasters (Berlin, Germany) ---
  {
    id: "the-barn-espresso-blend",
    roaster: "The Barn Coffee Roasters",
    name: "Espresso Blend",
    roastLevel: "light",
    notes: "Red fruit, chocolate, juicy"
  },

  // --- April Coffee Roasters (Copenhagen, Denmark) ---
  {
    id: "april-ethiopia-yirgacheffe",
    roaster: "April Coffee Roasters",
    name: "Ethiopia Yirgacheffe",
    roastLevel: "light",
    notes: "Jasmine, peach, bergamot"
  },

  // --- Koppi Roasters (Helsingborg, Sweden) ---
  {
    id: "koppi-mission",
    roaster: "Koppi Roasters",
    name: "Mission Blend",
    roastLevel: "light",
    notes: "Floral, citrus, clean"
  },

  // --- Fuglen Coffee Roasters (Oslo, Norway) ---
  {
    id: "fuglen-house",
    roaster: "Fuglen Coffee Roasters",
    name: "Fuglen House Blend",
    roastLevel: "light",
    notes: "Sweet, balanced, fruity"
  },

  // --- Omotesando Koffee / Koffee Mameya (Tokyo, Japan) ---
  {
    id: "koffee-mameya-ethiopia",
    roaster: "Koffee Mameya",
    name: "Ethiopia Natural",
    roastLevel: "light",
    notes: "Berry, wine, floral"
  },

  // --- Glitch Coffee & Roasters (Tokyo, Japan) ---
  {
    id: "glitch-colombia-la-palma",
    roaster: "Glitch Coffee & Roasters",
    name: "Colombia La Palma",
    roastLevel: "light",
    notes: "Stone fruit, caramel, clean"
  },

  // --- ST. ALi (Melbourne, Australia) ---
  {
    id: "st-ali-orthodox",
    roaster: "ST. ALi",
    name: "Orthodox Blend",
    roastLevel: "medium",
    notes: "Chocolate, caramel, balanced"
  },

  // --- Market Lane Coffee (Melbourne, Australia) ---
  {
    id: "market-lane-seasonal-espresso",
    roaster: "Market Lane Coffee",
    name: "Seasonal Espresso",
    roastLevel: "medium",
    notes: "Sweet, balanced, chocolate"
  },

  // --- Seven Seeds Coffee Roasters (Melbourne, Australia) ---
  {
    id: "seven-seeds-golden-gate",
    roaster: "Seven Seeds Coffee Roasters",
    name: "Golden Gate Blend",
    roastLevel: "medium",
    notes: "Milk chocolate, nut, caramel"
  },

  // --- Proud Mary Coffee (Melbourne, Australia) ---
  {
    id: "proud-mary-omni",
    roaster: "Proud Mary Coffee",
    name: "Omni Blend",
    roastLevel: "medium",
    notes: "Balanced, fruit, chocolate"
  },

  // --- Commercial / grocery brands ---
  {
    id: "lavazza-crema-e-gusto",
    roaster: "Lavazza",
    name: "Crema e Gusto",
    roastLevel: "dark",
    notes: "Bold, spicy, chocolate"
  },
  {
    id: "dunkin-original-blend",
    roaster: "Dunkin'",
    name: "Original Blend",
    roastLevel: "medium",
    notes: "Smooth, balanced, mild"
  },
  {
    id: "caribou-caribou-blend",
    roaster: "Caribou Coffee",
    name: "Caribou Blend",
    roastLevel: "medium",
    notes: "Sweet, syrupy, balanced"
  },
  {
    id: "community-coffee-private-reserve",
    roaster: "Community Coffee",
    name: "Private Reserve",
    roastLevel: "medium",
    notes: "Chocolate, caramel, smooth"
  },
  {
    id: "eight-oclock-original",
    roaster: "Eight O'Clock Coffee",
    name: "The Original",
    roastLevel: "medium",
    notes: "Mild, smooth, classic"
  },
  {
    id: "folgers-classic-roast",
    roaster: "Folgers",
    name: "Classic Roast",
    roastLevel: "medium",
    notes: "Classic, balanced, mild"
  },
  {
    id: "kicking-horse-kick-ass",
    roaster: "Kicking Horse Coffee",
    name: "Kick Ass Blend",
    roastLevel: "dark",
    notes: "Bold, smoky, full-bodied"
  },
  {
    id: "kicking-horse-three-sisters",
    roaster: "Kicking Horse Coffee",
    name: "Three Sisters",
    roastLevel: "medium",
    notes: "Nutty, chocolate, balanced"
  },
  {
    id: "death-wish-original",
    roaster: "Death Wish Coffee",
    name: "Original",
    roastLevel: "dark",
    notes: "Very bold, smoky, intense"
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

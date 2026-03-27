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

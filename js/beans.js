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
  },

  // === v1.0.2 additions: expanded bean catalog ===

  // --- Tandem Coffee Roasters (Portland, ME) ---
  {
    id: "tandem-time-and-temperature",
    roaster: "Tandem Coffee Roasters",
    name: "Time & Temperature",
    roastLevel: "light",
    notes: "Butterscotch, white chocolate, red berries"
  },
  {
    id: "tandem-west-end-blues",
    roaster: "Tandem Coffee Roasters",
    name: "West End Blues",
    roastLevel: "medium-light",
    notes: "Dark chocolate, baking spices, black tea, toffee"
  },
  {
    id: "tandem-banko-gotiti",
    roaster: "Tandem Coffee Roasters",
    name: "Banko Gotiti, Ethiopia",
    roastLevel: "light",
    notes: "Limeade, tangerine, lemongrass"
  },
  {
    id: "tandem-uriel-cardona",
    roaster: "Tandem Coffee Roasters",
    name: "Uriel Cardona, Colombia",
    roastLevel: "light",
    notes: "Papaya, lime, panela"
  },

  // --- Greater Goods Coffee (Austin, TX) ---
  {
    id: "greater-goods-kickstart",
    roaster: "Greater Goods Coffee",
    name: "Kickstart Espresso",
    roastLevel: "medium-dark",
    notes: "Brown sugar, caramel, dark chocolate"
  },
  {
    id: "greater-goods-am-rescue",
    roaster: "Greater Goods Coffee",
    name: "A.M. Rescue",
    roastLevel: "medium-light",
    notes: "Balanced, smooth, easy-drinking"
  },
  {
    id: "greater-goods-rise-and-shine",
    roaster: "Greater Goods Coffee",
    name: "Rise & Shine",
    roastLevel: "dark",
    notes: "Bold, roasty, dark chocolate"
  },
  {
    id: "greater-goods-fresh-perspective",
    roaster: "Greater Goods Coffee",
    name: "Fresh Perspective, Ethiopia",
    roastLevel: "light",
    notes: "Floral, citrus, tea-like, bright"
  },

  // --- Cuvée Coffee (Austin, TX) ---
  {
    id: "cuvee-stella-cometa",
    roaster: "Cuvée Coffee",
    name: "Stella Cometa",
    roastLevel: "medium",
    notes: "Caramel, hazelnut, mild acidity"
  },
  {
    id: "cuvee-emporium",
    roaster: "Cuvée Coffee",
    name: "Emporium",
    roastLevel: "medium",
    notes: "Toasty, malty, black tea"
  },
  {
    id: "cuvee-west-pole",
    roaster: "Cuvée Coffee",
    name: "West Pole",
    roastLevel: "dark",
    notes: "Cocoa nib, molasses, milk chocolate"
  },
  {
    id: "cuvee-karmadillo",
    roaster: "Cuvée Coffee",
    name: "Karmadillo",
    roastLevel: "dark",
    notes: "Bold, dark chocolate, roasty"
  },

  // --- Methodical Coffee (Greenville, SC) ---
  {
    id: "methodical-colombia-landmark",
    roaster: "Methodical Coffee",
    name: "Colombia, Landmark",
    roastLevel: "medium",
    notes: "Caramel, nutty, citrus"
  },
  {
    id: "methodical-ethiopia-bombe-abore",
    roaster: "Methodical Coffee",
    name: "Ethiopia, Bombe Abore",
    roastLevel: "light",
    notes: "Raspberry, citrus, jammy"
  },
  {
    id: "methodical-brazil-signature-series",
    roaster: "Methodical Coffee",
    name: "Brazil, Signature Series",
    roastLevel: "medium-dark",
    notes: "Roasty, dark chocolate, nutty"
  },
  {
    id: "methodical-guatemala-ixlama",
    roaster: "Methodical Coffee",
    name: "Guatemala, Ixlama",
    roastLevel: "medium",
    notes: "Chocolate, apple, caramel"
  },

  // --- Ceremony Coffee Roasters (Annapolis, MD) ---
  {
    id: "ceremony-thesis",
    roaster: "Ceremony Coffee Roasters",
    name: "Thesis",
    roastLevel: "medium-light",
    notes: "Chocolate chip cookie, brown sugar, sweet"
  },
  {
    id: "ceremony-mass-appeal",
    roaster: "Ceremony Coffee Roasters",
    name: "Mass Appeal",
    roastLevel: "medium",
    notes: "Balanced, chocolate, nutty, approachable"
  },
  {
    id: "ceremony-destroyer",
    roaster: "Ceremony Coffee Roasters",
    name: "Destroyer",
    roastLevel: "medium",
    notes: "Berry, chocolate, bright, fruity"
  },
  {
    id: "ceremony-colombia-aristides-guarnizo",
    roaster: "Ceremony Coffee Roasters",
    name: "Colombia, Aristides Guarnizo",
    roastLevel: "light",
    notes: "Citric, floral, clean, sweet"
  },

  // --- Vigilante Coffee (Hyattsville, MD) ---
  {
    id: "vigilante-tin-lizzie",
    roaster: "Vigilante Coffee",
    name: "Tin Lizzie Espresso",
    roastLevel: "medium",
    notes: "Chocolate, balanced, nutty"
  },
  {
    id: "vigilante-el-fuego",
    roaster: "Vigilante Coffee",
    name: "El Fuego",
    roastLevel: "dark",
    notes: "Bold, smoky, dark chocolate, roasty"
  },
  {
    id: "vigilante-ethiopia-natty-cheffe",
    roaster: "Vigilante Coffee",
    name: "Ethiopia, Natty Cheffe",
    roastLevel: "light",
    notes: "Floral, berry, citrus, tea-like"
  },
  {
    id: "vigilante-colombia-la-falda",
    roaster: "Vigilante Coffee",
    name: "Colombia, La Falda",
    roastLevel: "medium",
    notes: "Caramel, chocolate, balanced"
  },

  // --- Revelator Coffee (Birmingham, AL) ---
  {
    id: "revelator-petunias",
    roaster: "Revelator Coffee",
    name: "Petunias",
    roastLevel: "medium",
    notes: "Red cherry, toasted nuts, cocoa"
  },
  {
    id: "revelator-lonely-hunter",
    roaster: "Revelator Coffee",
    name: "Lonely Hunter",
    roastLevel: "medium-light",
    notes: "Balanced, sweet, fruit, clean"
  },
  {
    id: "revelator-misfit",
    roaster: "Revelator Coffee",
    name: "Misfit",
    roastLevel: "dark",
    notes: "Bold, dark chocolate, roasty"
  },

  // --- French Truck Coffee (New Orleans, LA) ---
  {
    id: "french-truck-le-grand-coq-rouge",
    roaster: "French Truck Coffee",
    name: "Le Grand Coq Rouge",
    roastLevel: "medium",
    notes: "Bold, creamy, chocolate, nutty"
  },
  {
    id: "french-truck-la-belle-noir",
    roaster: "French Truck Coffee",
    name: "La Belle Noir",
    roastLevel: "medium",
    notes: "Dried cherry, cocoa, dark berry"
  },
  {
    id: "french-truck-new-orleans-dark-roast",
    roaster: "French Truck Coffee",
    name: "New Orleans Dark Roast",
    roastLevel: "dark",
    notes: "Bold, smoky, dark chocolate, roasty"
  },
  {
    id: "french-truck-ruby-breakfast-blend",
    roaster: "French Truck Coffee",
    name: "Ruby Breakfast Blend",
    roastLevel: "medium-light",
    notes: "Bright, balanced, sweet, easy-drinking"
  },

  // --- Crema Coffee Roasters (Nashville, TN) ---
  {
    id: "crema-tres-banderas",
    roaster: "Crema Coffee Roasters",
    name: "Tres Banderas",
    roastLevel: "medium",
    notes: "Full-bodied, chocolate, balanced, nutty"
  },
  {
    id: "crema-el-recuerdo",
    roaster: "Crema Coffee Roasters",
    name: "El Recuerdo, Colombia",
    roastLevel: "medium-light",
    notes: "Caramel, citrus, sweet, balanced"
  },
  {
    id: "crema-rosarios-bajo",
    roaster: "Crema Coffee Roasters",
    name: "Rosarios Bajo, Peru",
    roastLevel: "light",
    notes: "Floral, citrus, tea-like, clean"
  },

  // --- Barista Parlor (Nashville, TN) ---
  {
    id: "barista-parlor-golden-sound",
    roaster: "Barista Parlor",
    name: "Golden Sound",
    roastLevel: "medium",
    notes: "Smooth chocolate, sweet apple, nutty"
  },
  {
    id: "barista-parlor-el-cadejo-guatemala",
    roaster: "Barista Parlor",
    name: "El Cadejo, Guatemala",
    roastLevel: "medium-light",
    notes: "Caramel, citrus, balanced, sweet"
  },

  // --- PERC Coffee (Savannah, GA) ---
  {
    id: "perc-up",
    roaster: "PERC Coffee",
    name: "PERC Up",
    roastLevel: "medium-light",
    notes: "Toffee, orange, brown sugar"
  },
  {
    id: "perc-old-skool",
    roaster: "PERC Coffee",
    name: "Old Skool",
    roastLevel: "medium",
    notes: "Brown sugar, cocoa, nutella"
  },
  {
    id: "perc-darrrk",
    roaster: "PERC Coffee",
    name: "DARRRK",
    roastLevel: "medium-dark",
    notes: "Roasty, black currant, dark caramel"
  },
  {
    id: "perc-ethiopia-suke-werekata",
    roaster: "PERC Coffee",
    name: "Ethiopia, Suke Werekata",
    roastLevel: "light",
    notes: "Floral, citrus, berry, tea-like"
  },

  // --- Sweet Bloom Coffee Roasters (Lakewood, CO) ---
  {
    id: "sweet-bloom-hometown",
    roaster: "Sweet Bloom Coffee Roasters",
    name: "Hometown",
    roastLevel: "medium",
    notes: "Cocoa nibs, praline, blackberry"
  },
  {
    id: "sweet-bloom-asefa-dukamo",
    roaster: "Sweet Bloom Coffee Roasters",
    name: "Asefa Dukamo (Ethiopia)",
    roastLevel: "light",
    notes: "Bergamot, lime, honey"
  },
  {
    id: "sweet-bloom-carlos-guamanga",
    roaster: "Sweet Bloom Coffee Roasters",
    name: "Carlos Guamanga (Colombia)",
    roastLevel: "medium-light",
    notes: "Floral, cherry, panela"
  },
  {
    id: "sweet-bloom-munkaze",
    roaster: "Sweet Bloom Coffee Roasters",
    name: "Munkaze (Burundi)",
    roastLevel: "medium-light",
    notes: "Plum, raisin, chocolate syrup"
  },

  // --- Sump Coffee (St. Louis, MO) ---
  {
    id: "sump-true-level",
    roaster: "Sump Coffee",
    name: "True Level",
    roastLevel: "medium",
    notes: "Balanced, chocolate, smooth"
  },
  {
    id: "sump-melting-darkness",
    roaster: "Sump Coffee",
    name: "Melting Darkness",
    roastLevel: "dark",
    notes: "Bold, dark chocolate, roasty"
  },
  {
    id: "sump-colombia-gerson-mora",
    roaster: "Sump Coffee",
    name: "Colombia Gerson Mora",
    roastLevel: "light",
    notes: "Bright, fruity, clean"
  },
  {
    id: "sump-burundi-masha",
    roaster: "Sump Coffee",
    name: "Burundi Masha",
    roastLevel: "light",
    notes: "Floral, citric, tea-like"
  },

  // --- Blueprint Coffee (St. Louis, MO) ---
  {
    id: "blueprint-penrose",
    roaster: "Blueprint Coffee",
    name: "Penrose",
    roastLevel: "medium",
    notes: "Balanced, chocolate, caramel"
  },
  {
    id: "blueprint-tekton",
    roaster: "Blueprint Coffee",
    name: "Tektōn",
    roastLevel: "medium-light",
    notes: "Sweet, fruity, clean"
  },
  {
    id: "blueprint-drupe",
    roaster: "Blueprint Coffee",
    name: "Drupe",
    roastLevel: "medium",
    notes: "Stone fruit, cocoa, balanced"
  },
  {
    id: "blueprint-gichathaini",
    roaster: "Blueprint Coffee",
    name: "Gichathaini (Kenya)",
    roastLevel: "light",
    notes: "Blackcurrant, citric, bright"
  },

  // --- Spyhouse Coffee (Minneapolis, MN) ---
  {
    id: "spyhouse-orion",
    roaster: "Spyhouse Coffee",
    name: "Orion",
    roastLevel: "medium",
    notes: "Well-rounded, chocolate, nutty"
  },
  {
    id: "spyhouse-gemini",
    roaster: "Spyhouse Coffee",
    name: "Gemini",
    roastLevel: "dark",
    notes: "Balanced, bold, dark chocolate"
  },
  {
    id: "spyhouse-star-of-the-north",
    roaster: "Spyhouse Coffee",
    name: "Star of the North",
    roastLevel: "light",
    notes: "Sweet, bright, fruity"
  },
  {
    id: "spyhouse-bold-and-the-beautiful",
    roaster: "Spyhouse Coffee",
    name: "Bold and the Beautiful",
    roastLevel: "dark",
    notes: "Rich, roasty, smoky"
  },

  // --- Dogwood Coffee (Minneapolis, MN) ---
  {
    id: "dogwood-neon",
    roaster: "Dogwood Coffee",
    name: "Neon Espresso",
    roastLevel: "medium-light",
    notes: "Citrus, floral, sweet"
  },
  {
    id: "dogwood-bear-hug",
    roaster: "Dogwood Coffee",
    name: "Bear Hug Espresso",
    roastLevel: "medium-dark",
    notes: "Chocolate, big body, nutty"
  },
  {
    id: "dogwood-mixtape",
    roaster: "Dogwood Coffee",
    name: "Mixtape",
    roastLevel: "medium",
    notes: "Balanced, caramel, chocolate"
  },
  {
    id: "dogwood-suke-quto",
    roaster: "Dogwood Coffee",
    name: "Suke Quto (Ethiopia)",
    roastLevel: "light",
    notes: "Floral, citrus, tea-like"
  },

  // --- Populace Coffee (Bay City, MI) ---
  {
    id: "populace-house-blend",
    roaster: "Populace Coffee",
    name: "House Blend",
    roastLevel: "medium",
    notes: "Balanced, chocolate, caramel"
  },
  {
    id: "populace-espresso-proper",
    roaster: "Populace Coffee",
    name: "Espresso Proper",
    roastLevel: "medium-light",
    notes: "Bright, fruity, sweet"
  },
  {
    id: "populace-single-origin",
    roaster: "Populace Coffee",
    name: "Rotating Single Origin",
    roastLevel: "light",
    notes: "Floral, citric, clean"
  },

  // --- Devoción (Brooklyn, NY) ---
  {
    id: "devocion-honey",
    roaster: "Devoción",
    name: "Honey",
    roastLevel: "medium",
    notes: "Honey, orange blossom, caramel"
  },
  {
    id: "devocion-toro",
    roaster: "Devoción",
    name: "Toro",
    roastLevel: "medium",
    notes: "Cocoa, vanilla, cherry, almond"
  },
  {
    id: "devocion-wild-forest",
    roaster: "Devoción",
    name: "Wild Forest",
    roastLevel: "medium-light",
    notes: "Wild berries, cherry, cocoa butter"
  },
  {
    id: "devocion-sombra",
    roaster: "Devoción",
    name: "Sombra",
    roastLevel: "medium-dark",
    notes: "Baker's chocolate, caramelized sugar, cinnamon"
  },

  // --- Café Grumpy (Brooklyn, NY) ---
  {
    id: "cafe-grumpy-heartbreaker",
    roaster: "Café Grumpy",
    name: "Heartbreaker Espresso",
    roastLevel: "medium",
    notes: "Blackberry, amaretto, dark chocolate"
  },
  {
    id: "cafe-grumpy-momentum",
    roaster: "Café Grumpy",
    name: "Momentum",
    roastLevel: "medium",
    notes: "Malted milk chocolate, caramel, orange zest"
  },
  {
    id: "cafe-grumpy-santo-tomas",
    roaster: "Café Grumpy",
    name: "Santo Tomas (Guatemala)",
    roastLevel: "medium-light",
    notes: "Sweet, balanced, fruity"
  },

  // --- Brooklyn Roasting Company (Brooklyn, NY) ---
  {
    id: "brooklyn-roasting-iris",
    roaster: "Brooklyn Roasting Company",
    name: "Iris Espresso",
    roastLevel: "medium-dark",
    notes: "Baker's chocolate, fig, root beer"
  },
  {
    id: "brooklyn-roasting-bqe",
    roaster: "Brooklyn Roasting Company",
    name: "BQE Espresso",
    roastLevel: "medium-dark",
    notes: "Bold, chocolate, caramel"
  },
  {
    id: "brooklyn-roasting-mocha-java",
    roaster: "Brooklyn Roasting Company",
    name: "Mocha Java",
    roastLevel: "medium",
    notes: "Balanced, chocolate, earthy"
  },
  {
    id: "brooklyn-roasting-japan-blend",
    roaster: "Brooklyn Roasting Company",
    name: "Japan Blend",
    roastLevel: "medium",
    notes: "Smooth, nutty, chocolate"
  },

  // --- ReAnimator Coffee (Philadelphia, PA) ---
  {
    id: "reanimator-foundation",
    roaster: "ReAnimator Coffee",
    name: "Foundation Blend",
    roastLevel: "medium-light",
    notes: "Balanced, chocolate, fruit"
  },
  {
    id: "reanimator-all-day",
    roaster: "ReAnimator Coffee",
    name: "All Day Blend",
    roastLevel: "medium",
    notes: "Chocolate, caramel, nutty"
  },
  {
    id: "reanimator-kensington",
    roaster: "ReAnimator Coffee",
    name: "Kensington Blend",
    roastLevel: "dark",
    notes: "Bold, dark chocolate, roasty"
  },
  {
    id: "reanimator-keystone",
    roaster: "ReAnimator Coffee",
    name: "Keystone Blend",
    roastLevel: "light",
    notes: "Bright, floral, citric"
  },

  // --- Elixr Coffee Roasters (Philadelphia, PA) ---
  {
    id: "elixr-treehouse",
    roaster: "Elixr Coffee Roasters",
    name: "Treehouse Blend",
    roastLevel: "medium-light",
    notes: "Caramel, pink berry, chocolate"
  },
  {
    id: "elixr-beekeeper",
    roaster: "Elixr Coffee Roasters",
    name: "Beekeeper Espresso",
    roastLevel: "medium",
    notes: "Caramel, black tea, cherries"
  },
  {
    id: "elixr-konga",
    roaster: "Elixr Coffee Roasters",
    name: "Konga (Ethiopia)",
    roastLevel: "light",
    notes: "Floral, citrus, tea-like"
  },
  {
    id: "elixr-weekender",
    roaster: "Elixr Coffee Roasters",
    name: "Weekender Blend",
    roastLevel: "medium",
    notes: "Balanced, chocolate, nutty"
  },

  // --- Quills Coffee (Louisville, KY) ---
  {
    id: "quills-blacksmith",
    roaster: "Quills Coffee",
    name: "Blacksmith Espresso",
    roastLevel: "medium",
    notes: "Baker's chocolate, blueberry, hazelnut"
  },
  {
    id: "quills-inkwell",
    roaster: "Quills Coffee",
    name: "Inkwell Signature Blend",
    roastLevel: "medium",
    notes: "Graham cracker, cooked cherries, vanilla"
  },
  {
    id: "quills-night-owl",
    roaster: "Quills Coffee",
    name: "Night Owl",
    roastLevel: "dark",
    notes: "Chocolate cake, caramel, tobacco finish"
  },
  {
    id: "quills-southern-gothic",
    roaster: "Quills Coffee",
    name: "Southern Gothic",
    roastLevel: "medium",
    notes: "Chocolate, caramel, well-balanced"
  },

  // --- Starbucks (Seattle, WA) ---
  {
    id: "starbucks-veranda-blend",
    roaster: "Starbucks",
    name: "Veranda Blend",
    roastLevel: "light",
    notes: "Mellow, soft cocoa, lightly toasted nuts"
  },
  {
    id: "starbucks-caffe-verona",
    roaster: "Starbucks",
    name: "Caffè Verona",
    roastLevel: "dark",
    notes: "Rich, dark cocoa, caramelized sugar"
  },

  // --- Dunkin' (Canton, MA) ---
  {
    id: "dunkin-midnight",
    roaster: "Dunkin'",
    name: "Midnight Dark Roast",
    roastLevel: "dark",
    notes: "Bold, full-bodied, smoky, intense"
  },

  // --- Folgers (Orrville, OH) ---
  {
    id: "folgers-black-silk",
    roaster: "Folgers",
    name: "Black Silk",
    roastLevel: "dark",
    notes: "Bold, rich, smooth, full-bodied"
  },

  // --- Lavazza (Turin, Italy) ---
  {
    id: "lavazza-qualita-rossa",
    roaster: "Lavazza",
    name: "Qualità Rossa",
    roastLevel: "medium-dark",
    notes: "Chocolate, dried fruit, full body, slightly smoky"
  },

  // --- Café Bustelo (Jacksonville, FL) ---
  {
    id: "cafe-bustelo-espresso",
    roaster: "Café Bustelo",
    name: "Espresso",
    roastLevel: "dark",
    notes: "Bold, smoky, full-bodied, roasty"
  },

  // --- Maxwell House (Chicago, IL) ---
  {
    id: "maxwell-house-original-roast",
    roaster: "Maxwell House",
    name: "Original Roast",
    roastLevel: "medium",
    notes: "Smooth, nutty, caramel, mild"
  },

  // --- Black Rifle Coffee Company (Salt Lake City, UT) ---
  {
    id: "black-rifle-just-black",
    roaster: "Black Rifle Coffee Company",
    name: "Just Black",
    roastLevel: "medium",
    notes: "Smooth, cocoa, vanilla, buttery finish"
  },
  {
    id: "black-rifle-ak-47-espresso",
    roaster: "Black Rifle Coffee Company",
    name: "AK-47 Espresso",
    roastLevel: "medium",
    notes: "Nutty, citrus, dark chocolate, rich"
  },
  {
    id: "black-rifle-beyond-black",
    roaster: "Black Rifle Coffee Company",
    name: "Beyond Black",
    roastLevel: "dark",
    notes: "Bold, spicy, dark chocolate, smoky"
  },

  // --- Green Mountain Coffee Roasters (Waterbury, VT) ---
  {
    id: "green-mountain-breakfast-blend",
    roaster: "Green Mountain Coffee Roasters",
    name: "Breakfast Blend",
    roastLevel: "light",
    notes: "Bright, nutty, cocoa, balanced"
  },
  {
    id: "green-mountain-dark-magic",
    roaster: "Green Mountain Coffee Roasters",
    name: "Dark Magic",
    roastLevel: "dark",
    notes: "Bold, smoky, dark chocolate, dried fruit"
  },

  // --- Allegro Coffee (Thornton, CO) ---
  {
    id: "allegro-organic-continental-blend",
    roaster: "Allegro Coffee",
    name: "Organic Continental Blend",
    roastLevel: "medium",
    notes: "Fruity, earthy, chocolatey, full-flavored"
  },
  {
    id: "allegro-organic-french-roast",
    roaster: "Allegro Coffee",
    name: "Organic French Roast",
    roastLevel: "dark",
    notes: "Smooth, sweet, smoky, bold"
  },

  // --- Don Francisco's Coffee (Vernon, CA) ---
  {
    id: "don-franciscos-colombia-supremo",
    roaster: "Don Francisco's Coffee",
    name: "100% Colombia Supremo",
    roastLevel: "medium",
    notes: "Bright, floral, winey, smooth"
  },
  {
    id: "don-franciscos-espresso",
    roaster: "Don Francisco's Coffee",
    name: "Espresso",
    roastLevel: "dark",
    notes: "Bold, dark chocolate, smoke, spice"
  },

  // --- Equal Exchange (West Bridgewater, MA) ---
  {
    id: "equal-exchange-organic-breakfast-blend",
    roaster: "Equal Exchange",
    name: "Organic Breakfast Blend",
    roastLevel: "medium",
    notes: "Smooth, balanced, vanilla, milk chocolate"
  },
  {
    id: "equal-exchange-organic-french-roast",
    roaster: "Equal Exchange",
    name: "Organic French Roast",
    roastLevel: "dark",
    notes: "Intense, full-bodied, dark chocolate, fruity"
  },

  // --- Cameron's Coffee (Shakopee, MN) ---
  {
    id: "camerons-breakfast-blend",
    roaster: "Cameron's Coffee",
    name: "Breakfast Blend",
    roastLevel: "light",
    notes: "Smooth, bright, mild, balanced"
  },
  {
    id: "camerons-highlander-grog",
    roaster: "Cameron's Coffee",
    name: "Highlander Grog",
    roastLevel: "light",
    notes: "Butterscotch, caramel, vanilla, rum"
  },

  // --- New England Coffee (Malden, MA) ---
  {
    id: "new-england-breakfast-blend",
    roaster: "New England Coffee",
    name: "Breakfast Blend",
    roastLevel: "medium",
    notes: "Smooth, mild, balanced, clean"
  },
  {
    id: "new-england-blueberry-cobbler",
    roaster: "New England Coffee",
    name: "Blueberry Cobbler",
    roastLevel: "medium",
    notes: "Sweet blueberry, spiced, smooth, aromatic"
  },

  // --- Seattle's Best Coffee (Seattle, WA) ---
  {
    id: "seattles-best-portside-blend",
    roaster: "Seattle's Best Coffee",
    name: "Portside Blend (No. 3)",
    roastLevel: "medium",
    notes: "Nutty, sweet, smooth, balanced"
  },
  {
    id: "seattles-best-post-alley-blend",
    roaster: "Seattle's Best Coffee",
    name: "Post Alley Blend (No. 5)",
    roastLevel: "dark",
    notes: "Bold, intense, smoky, roasty"
  },

  // --- Chock full o'Nuts (Harrison, NY) ---
  {
    id: "chock-full-o-nuts-heavenly-original",
    roaster: "Chock full o'Nuts",
    name: "Heavenly Original",
    roastLevel: "medium",
    notes: "Smooth, full-bodied, nutty"
  },
  {
    id: "chock-full-o-nuts-new-york-roast",
    roaster: "Chock full o'Nuts",
    name: "New York Roast",
    roastLevel: "dark",
    notes: "Bold, complex, cocoa, nutty"
  },

  // --- Gevalia (Northfield, IL) ---
  {
    id: "gevalia-house-blend",
    roaster: "Gevalia",
    name: "House Blend",
    roastLevel: "medium",
    notes: "Smooth, nutty, caramel, balanced"
  },
  {
    id: "gevalia-french-roast",
    roaster: "Gevalia",
    name: "French Roast",
    roastLevel: "dark",
    notes: "Bold, smoky, dark chocolate, toasted caramel"
  },

  // --- Verve Coffee Roasters (Santa Cruz, CA) ---
  {
    id: "verve-wilder",
    roaster: "Verve Coffee Roasters",
    name: "Wilder",
    roastLevel: "light",
    notes: "Watermelon gummy, pineapple guava, orange sherbet"
  },
  {
    id: "verve-cosmic-ripple",
    roaster: "Verve Coffee Roasters",
    name: "Cosmic Ripple",
    roastLevel: "light",
    notes: "Starfruit, Meyer lemon, black tea"
  },
  {
    id: "verve-aster",
    roaster: "Verve Coffee Roasters",
    name: "Aster",
    roastLevel: "medium",
    notes: "Nectarine, key lime, brown sugar"
  },

  // --- Blue Bottle Coffee (Oakland, CA) ---
  {
    id: "blue-bottle-balanced",
    roaster: "Blue Bottle Coffee",
    name: "Balanced",
    roastLevel: "medium-light",
    notes: "Caramel, lemon zest, cocoa"
  },
  {
    id: "blue-bottle-bold-blend",
    roaster: "Blue Bottle Coffee",
    name: "Bold Blend",
    roastLevel: "medium-dark",
    notes: "Caramel, roasted nut, malt"
  },
  {
    id: "blue-bottle-winter-blend",
    roaster: "Blue Bottle Coffee",
    name: "Winter Blend",
    roastLevel: "dark",
    notes: "Dark chocolate, molasses, blackberry"
  },

  // --- Stumptown Coffee Roasters (Portland, OR) ---
  {
    id: "stumptown-homestead",
    roaster: "Stumptown Coffee Roasters",
    name: "Homestead Blend",
    roastLevel: "medium-light",
    notes: "Milk chocolate, cherry, orange"
  },
  {
    id: "stumptown-trapper-creek-decaf",
    roaster: "Stumptown Coffee Roasters",
    name: "Trapper Creek Decaf",
    roastLevel: "medium",
    notes: "Caramel, cocoa, smooth"
  },
  {
    id: "stumptown-echo-canyon",
    roaster: "Stumptown Coffee Roasters",
    name: "Echo Canyon Half-Caff",
    roastLevel: "medium",
    notes: "Bright, nuanced, balanced"
  },

  // --- Intelligentsia Coffee (Chicago, IL) ---
  {
    id: "intelligentsia-honey-badger",
    roaster: "Intelligentsia Coffee",
    name: "Honey Badger Espresso",
    roastLevel: "medium",
    notes: "Citrus, apple, dark sugars"
  },
  {
    id: "intelligentsia-organic-french-roast",
    roaster: "Intelligentsia Coffee",
    name: "Organic French Roast",
    roastLevel: "dark",
    notes: "Pipe tobacco, blackstrap molasses, heavy body"
  },
  {
    id: "intelligentsia-decaf-el-mago",
    roaster: "Intelligentsia Coffee",
    name: "Decaf El Mago",
    roastLevel: "medium",
    notes: "Red apple, caramelized pear, chocolate"
  },

  // --- Counter Culture Coffee (Durham, NC) ---
  {
    id: "counter-culture-forty-six",
    roaster: "Counter Culture Coffee",
    name: "Forty-Six",
    roastLevel: "dark",
    notes: "Dark chocolate, sweet, full-bodied"
  },
  {
    id: "counter-culture-slow-motion-decaf",
    roaster: "Counter Culture Coffee",
    name: "Slow Motion Decaf",
    roastLevel: "medium",
    notes: "Molasses, cocoa, smooth"
  },
  {
    id: "counter-culture-even-keel",
    roaster: "Counter Culture Coffee",
    name: "Even Keel Half-Caff",
    roastLevel: "medium-dark",
    notes: "Graham cracker, molasses, soft"
  },

  // --- Onyx Coffee Lab (Rogers, AR) ---
  {
    id: "onyx-tropical-weather",
    roaster: "Onyx Coffee Lab",
    name: "Tropical Weather",
    roastLevel: "medium",
    notes: "Mixed berries, sweet tea, raw honey, plum"
  },
  {
    id: "onyx-eclipse",
    roaster: "Onyx Coffee Lab",
    name: "Eclipse",
    roastLevel: "dark",
    notes: "Baker's chocolate, burnt sugar, smoked vanilla bean"
  },
  {
    id: "onyx-power-nap",
    roaster: "Onyx Coffee Lab",
    name: "Power Nap",
    roastLevel: "medium-dark",
    notes: "Brown sugar, cocoa, peach, floral"
  },

  // --- Sey Coffee (Brooklyn, NY) ---
  {
    id: "sey-danche",
    roaster: "Sey Coffee",
    name: "Danche",
    roastLevel: "light",
    notes: "Floral, citrus, tea-like"
  },
  {
    id: "sey-chorso-bule",
    roaster: "Sey Coffee",
    name: "Chorso Bule",
    roastLevel: "light",
    notes: "Stone fruit, floral, bright"
  },
  {
    id: "sey-felix-morocho",
    roaster: "Sey Coffee",
    name: "Felix Morocho",
    roastLevel: "light",
    notes: "Tropical fruit, citric, delicate"
  },

  // --- George Howell Coffee (Acton, MA) ---
  {
    id: "george-howell-cold-brew-blend",
    roaster: "George Howell Coffee",
    name: "Cold Brew Blend",
    roastLevel: "medium",
    notes: "Stout beer, dark chocolate, walnut"
  },
  {
    id: "george-howell-daterra-sundrop",
    roaster: "George Howell Coffee",
    name: "Daterra Sundrop",
    roastLevel: "light",
    notes: "Butterscotch, blueberry, clove"
  },
  {
    id: "george-howell-mamuto-aa",
    roaster: "George Howell Coffee",
    name: "Mamuto AA",
    roastLevel: "light",
    notes: "Blackberry, plum, cherry, violet"
  },

  // --- Heart Coffee Roasters (Portland, OR) ---
  {
    id: "heart-phono",
    roaster: "Heart Coffee Roasters",
    name: "Phono",
    roastLevel: "medium",
    notes: "Round, sweet, low acidity"
  },
  {
    id: "heart-kenya-nyawira",
    roaster: "Heart Coffee Roasters",
    name: "Kenya Nyawira PB",
    roastLevel: "light",
    notes: "Blackcurrant, citrus, black tea"
  },
  {
    id: "heart-colombia-decaf",
    roaster: "Heart Coffee Roasters",
    name: "Colombia Decaf",
    roastLevel: "medium",
    notes: "Caramel, cocoa, red fruit"
  },

  // --- Coava Coffee Roasters (Portland, OR) ---
  {
    id: "coava-so-blend",
    roaster: "Coava Coffee Roasters",
    name: "S.O. Blend",
    roastLevel: "medium",
    notes: "Dark caramel, chocolate, toffee, spice"
  },
  {
    id: "coava-ethiopia-anbessa",
    roaster: "Coava Coffee Roasters",
    name: "Ethiopia Anbessa",
    roastLevel: "light",
    notes: "Pomegranate, rosé, dark chocolate"
  },
  {
    id: "coava-ethiopia-wuri",
    roaster: "Coava Coffee Roasters",
    name: "Ethiopia Wuri",
    roastLevel: "medium",
    notes: "Bergamot, peach, red wine"
  },

  // --- Equator Coffees (San Rafael, CA) ---
  {
    id: "equator-super-bloom",
    roaster: "Equator Coffees",
    name: "Super Bloom Blend",
    roastLevel: "light",
    notes: "White peach, coffee blossom, ginger"
  },
  {
    id: "equator-french-laundry",
    roaster: "Equator Coffees",
    name: "The French Laundry Blend",
    roastLevel: "medium",
    notes: "Citrus, baking spice, bittersweet chocolate"
  },
  {
    id: "equator-namesake-blend",
    roaster: "Equator Coffees",
    name: "Equator Blend",
    roastLevel: "medium",
    notes: "Caramel, cocoa, balanced"
  },

  // --- Sightglass Coffee (San Francisco, CA) ---
  {
    id: "sightglass-summer-solstice",
    roaster: "Sightglass Coffee",
    name: "Summer Solstice",
    roastLevel: "light",
    notes: "Nectarine, blackberry, honeysuckle"
  },
  {
    id: "sightglass-grizzly-peak",
    roaster: "Sightglass Coffee",
    name: "Grizzly Peak",
    roastLevel: "medium",
    notes: "Pear, Cara Cara orange, hazelnut"
  },
  {
    id: "sightglass-toketee",
    roaster: "Sightglass Coffee",
    name: "Toketee",
    roastLevel: "medium",
    notes: "Apricot, cacao nib, caramel"
  },

  // --- Klatch Coffee (Rancho Cucamonga, CA) ---
  {
    id: "klatch-blue-thunder",
    roaster: "Klatch Coffee",
    name: "Blue Thunder Blend",
    roastLevel: "medium-dark",
    notes: "Rich, smoky, sweet"
  },
  {
    id: "klatch-centennial-route-66",
    roaster: "Klatch Coffee",
    name: "Centennial Route 66 Espresso",
    roastLevel: "medium",
    notes: "Cherry, raspberry, chocolate"
  },
  {
    id: "klatch-empire",
    roaster: "Klatch Coffee",
    name: "Empire",
    roastLevel: "medium",
    notes: "Chocolate, vanilla cola, blackberry"
  },

  // --- Bird Rock Coffee Roasters (San Diego, CA) ---
  {
    id: "bird-rock-the-blvd",
    roaster: "Bird Rock Coffee Roasters",
    name: "The BLVD",
    roastLevel: "medium",
    notes: "Plum, maple syrup, pepper"
  },
  {
    id: "bird-rock-tolima-organic",
    roaster: "Bird Rock Coffee Roasters",
    name: "Tolima Organic",
    roastLevel: "light",
    notes: "Tangerine, brown sugar, crisp apple"
  },
  {
    id: "bird-rock-pacamara-red-honey",
    roaster: "Bird Rock Coffee Roasters",
    name: "El Salvador Pacamara Red Honey",
    roastLevel: "medium-light",
    notes: "Balanced, subtle sweetness, stone fruit"
  },

  // --- Temple Coffee Roasters (Sacramento, CA) ---
  {
    id: "temple-lotus",
    roaster: "Temple Coffee Roasters",
    name: "Lotus Blend",
    roastLevel: "medium",
    notes: "Almond, milk chocolate, stone fruit"
  },
  {
    id: "temple-three-pillars",
    roaster: "Temple Coffee Roasters",
    name: "Three Pillars Blend",
    roastLevel: "medium",
    notes: "Dark chocolate, caramel, citrus"
  },
  {
    id: "temple-caldera-dark",
    roaster: "Temple Coffee Roasters",
    name: "Caldera Dark Blend",
    roastLevel: "dark",
    notes: "Baker's chocolate, nutmeg, brown sugar"
  },

  // --- Madcap Coffee (Grand Rapids, MI) ---
  {
    id: "madcap-bolt",
    roaster: "Madcap Coffee",
    name: "Bolt",
    roastLevel: "medium",
    notes: "Chocolate, caramelized sugar, red fruit"
  },
  {
    id: "madcap-eureka",
    roaster: "Madcap Coffee",
    name: "Eureka",
    roastLevel: "medium",
    notes: "Chocolate, red fruit, candied orange"
  },
  {
    id: "madcap-day-dream",
    roaster: "Madcap Coffee",
    name: "Day Dream",
    roastLevel: "light",
    notes: "Peach, white grape, plum, floral"
  },
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

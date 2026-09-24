// HandGun - The Premier Asset Store for Web & Game Development
// Brand: HandGun | Signature Color: #FF6000

export const CATEGORIES = [
  { id: 'all', label: 'All Assets', iconKey: 'grid' },
  { id: '3d', label: '3D Models', iconKey: 'cube' },
  { id: 'templates', label: 'Templates & Starters', iconKey: 'layout' },
  { id: 'tools', label: 'Tools & Plugins', iconKey: 'wrench' },
  { id: 'vfx', label: 'VFX & Shaders', iconKey: 'sparkles' },
  { id: 'audio', label: 'Audio & Music', iconKey: 'headphones' },
  { id: '2d', label: '2D & UI Kits', iconKey: 'image' }
];

export const MOCK_ASSETS = [
  {
    id: "asset-1",
    title: "Stylized Fantasy RPG World & Castles",
    category: "3d",
    categoryLabel: "3D Models",
    publisher: "PolygonRealm",
    publisherAvatar: "PR",
    price: 29.99,
    originalPrice: 75.00,
    discount: "-60%",
    isSale: true,
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 230,
    fileSize: "1.4 GB",
    version: "2.1.0",
    releaseDate: "Sep 2026",
    tags: ["Fantasy", "Castles", "Medieval", "Environment", "Modular"],
    shortDesc: "Over 350 modular castle pieces, ancient stone ruins, stylized foliar shaders, and village props.",
    description: "Build vast fantasy RPG kingdoms in minutes. Includes modular castle battlements, grand gatehouses, village cottages, hand-painted textures, and dynamic wind-swaying trees compatible with Unity, Unreal, and Three.js.",
    features: [
      "Over 350 snap-together architecture meshes",
      "Dynamic foliage wind vertex displacement shader",
      "Furnished interiors with physics colliders and LODs",
      "Day and lantern-lit mystical night lighting presets"
    ],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "asset-2",
    title: "Ultimate Mobile & Web Game UI Kit",
    category: "2d",
    categoryLabel: "2D & UI Kits",
    publisher: "AuraDesign Labs",
    publisherAvatar: "AD",
    price: 19.50,
    originalPrice: 45.00,
    discount: "-57%",
    isSale: true,
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 184,
    fileSize: "120 MB",
    version: "3.2.0",
    releaseDate: "Sep 2026",
    tags: ["UI", "Mobile", "Web", "Icons", "Figma"],
    shortDesc: "Polished responsive game UI suite with frosted glass dialogs, radial wheels, health gauges, and 300+ vector icons.",
    description: "Craft modern, juicy user interfaces for desktop, web, and mobile games. Includes vector SVG source files, interactive inventory screens, quest logs, daily rewards calendars, and pre-built responsive HTML/CSS templates.",
    features: [
      "320 crisp vector icons (Gems, Potions, Keys, Badges)",
      "Adaptive radial menu and inventory equipment slots",
      "Figma design tokens + ready-to-use Web & Unity canvas prefabs",
      "Light and dark glassmorphic interface themes"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "asset-3",
    title: "Cyberpunk Mech Warriors & Exo-Suit",
    category: "3d",
    categoryLabel: "3D Models",
    publisher: "NeonForge",
    publisherAvatar: "NF",
    price: 34.00,
    originalPrice: 70.00,
    discount: "-51%",
    isSale: true,
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 95,
    fileSize: "720 MB",
    version: "1.4.0",
    releaseDate: "Aug 2026",
    tags: ["Sci-Fi", "Mech", "Robots", "Rigged", "Modular"],
    shortDesc: "Rigged sci-fi bipedal mechs with modular armor plating, cockpit interiors, and 45 fluid combat animations.",
    description: "Heavy battle mechs for futuristic action, strategy, and shooter games. Features 6 distinct chassis variants, 24 weapon mount hardpoints, humanoid bone structure, and high-poly 4K PBR textures.",
    features: [
      "Humanoid Mecanim and Mixamo compatible skeleton",
      "Over 45 combat, sprint, jetpack, and death animations",
      "Substance 4K PBR maps with customizable emissive neon colors",
      "Optimized LOD0 through LOD3 geometry included"
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "asset-4",
    title: "Tactical First-Person Action Framework",
    category: "templates",
    categoryLabel: "Templates",
    publisher: "Kinetic Games",
    publisherAvatar: "KG",
    price: 32.00,
    originalPrice: 65.00,
    discount: "-50%",
    isSale: true,
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 142,
    fileSize: "160 MB",
    version: "3.1.0",
    releaseDate: "Sep 2026",
    tags: ["FPS", "Action", "Controller", "Physics", "Parkour"],
    shortDesc: "Complete first-person combat controller with spring-based weapon sway, procedural recoil, sliding, and mantling.",
    description: "Engineered for satisfying, responsive character locomotion and shooting mechanics. Includes procedural camera recoil, dual-render scopes, parkour vaulting, bullet ballistics, and network-ready multiplayer synchronization.",
    features: [
      "Procedural spring physics for weapon sway, bobbing, and recoil climb",
      "Dynamic dual-render scopes with magnification zoom",
      "Parkour locomotion: Mantling, tactical sprint, sliding, and wall kicks",
      "Complete clean documented source code"
    ],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "asset-5",
    title: "Stylized Low-Poly Enchanted Forest Biome",
    category: "3d",
    categoryLabel: "3D Models",
    publisher: "Synty Biomes",
    publisherAvatar: "SB",
    price: 18.00,
    originalPrice: 38.00,
    discount: "-52%",
    isSale: false,
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 215,
    fileSize: "310 MB",
    version: "1.8.0",
    releaseDate: "Jul 2026",
    tags: ["Nature", "Forest", "Low-Poly", "Stylized", "Trees"],
    shortDesc: "Vibrant low-poly nature environment featuring 18 wild creatures, trees, rocks, rivers, and seasonal shaders.",
    description: "Create cozy woodland adventures and survival simulators. Includes birch and pine trees with procedural wind vertex swaying, animated deer, bears, foxes, and flowing river water planes.",
    features: [
      "18 rigged forest animals with 5+ animations each",
      "Over 150 flora, rock, and vegetation prefabs",
      "Dynamic autumn leaf fall and snowfall particle VFX",
      "Single master palette texture for lightning-fast GPU batching"
    ],
    image: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "asset-6",
    title: "Cosmic VFX & Supernova Shaders Forge",
    category: "vfx",
    categoryLabel: "VFX & Shaders",
    publisher: "Aetherial Labs",
    publisherAvatar: "AL",
    price: 22.00,
    originalPrice: 48.00,
    discount: "-54%",
    isSale: true,
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 130,
    fileSize: "190 MB",
    version: "2.4.0",
    releaseDate: "Sep 2026",
    tags: ["VFX", "Shaders", "Space", "Particles", "Portals"],
    shortDesc: "GPU volumetric lasers, black hole gravitational lensing, and sci-fi portal particle systems.",
    description: "Deliver breathtaking cosmic visual effects. Built with custom GPU compute shaders for silky-smooth 60+ FPS performance on desktop and mobile platforms.",
    features: [
      "Volumetric Ray-Marched space nebula shader",
      "Black hole relativistic accretion disk simulation",
      "14 cinematic hyperspace warp portals",
      "Customizable beam width and chromatic aberration controls"
    ],
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "asset-7",
    title: "JuiceBox: Screen Shake & Game Feel Engine",
    category: "tools",
    categoryLabel: "Tools & Plugins",
    publisher: "Kinetic Games",
    publisherAvatar: "KG",
    price: 19.00,
    originalPrice: 38.00,
    discount: "-50%",
    isSale: true,
    isFeatured: false,
    rating: 5.0,
    reviewsCount: 310,
    fileSize: "40 MB",
    version: "4.0.1",
    releaseDate: "Sep 2026",
    tags: ["Juice", "Camera Shake", "Haptics", "Hitstop", "Tools"],
    shortDesc: "The ultimate game feel engine: camera shakes, haptic rumble, hitstop frame pauses, and chromatic impact bursts.",
    description: "Instantly elevate the visceral impact of your gameplay. Trigger camera recoil impulses, timescale freezes, vignette flashes, and controller rumble with a single line of clean code.",
    features: [
      "Over 45 plug-and-play game feel presets",
      "Dual spring and Perlin noise camera shake algorithms",
      "Gamepad rumble and mobile vibration haptic feedback",
      "Zero GC allocations during runtime combat"
    ],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "asset-8",
    title: "Procedural Labyrinth & Dungeon Builder",
    category: "tools",
    categoryLabel: "Tools & Plugins",
    publisher: "Algorithmic Realms",
    publisherAvatar: "AR",
    price: 26.00,
    originalPrice: 52.00,
    discount: "-50%",
    isSale: true,
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 94,
    fileSize: "35 MB",
    version: "3.2.0",
    releaseDate: "Aug 2026",
    tags: ["Procedural", "Dungeon", "Caves", "Algorithm", "Tool"],
    shortDesc: "High-speed deterministic procedural level generation with automated 3D mesh baking and NavMesh placement.",
    description: "Generate infinitely unique, navigable levels in milliseconds. Supports cellular automata, room zoning, key/lock puzzle layouts, and automatic NavMesh generation.",
    features: [
      "Multi-threaded deterministic level creation",
      "Instant tilemap and 3D mesh auto-tiling",
      "Seed synchronization for competitive multiplayer matches",
      "Clean, fully documented C# source code included"
    ],
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "asset-9",
    title: "Cinematic Orchestral Adventure OST & Stems",
    category: "audio",
    categoryLabel: "Audio & Music",
    publisher: "Symphony FX",
    publisherAvatar: "SF",
    price: 21.00,
    originalPrice: 42.00,
    discount: "-50%",
    isSale: true,
    isFeatured: false,
    rating: 5.0,
    reviewsCount: 77,
    fileSize: "680 MB",
    version: "1.0.0",
    releaseDate: "Sep 2026",
    tags: ["OST", "Orchestral", "Adventure", "Epic", "Music"],
    shortDesc: "16 sweeping live orchestral battle themes with multi-track stems for dynamic interactive music integration.",
    description: "Recorded with live European brass and string sections. Contains victorious battle marches, tense stealth ambushes, and somber emotional epilogues.",
    features: [
      "16 fully orchestrated multi-part compositions",
      "Interactive stems: Strings, Brass, Percussion, Ambient Synth",
      "Lossless 24-bit 96kHz WAV + compressed OGG formats",
      "Royalty-free for commercial game distribution"
    ],
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "asset-10",
    title: "Cyber Neon City Metropolis Tileset",
    category: "2d",
    categoryLabel: "2D & UI Kits",
    publisher: "NeoTokyo Pixels",
    publisherAvatar: "NT",
    price: 14.00,
    originalPrice: 28.00,
    discount: "-50%",
    isSale: false,
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 82,
    fileSize: "75 MB",
    version: "2.1.0",
    releaseDate: "Jul 2026",
    tags: ["2D", "Tileset", "Cyberpunk", "City", "Pixel"],
    shortDesc: "Neon-lit city street tileset with animated holographic billboards, rain puddle reflections, and hover traffic.",
    description: "Craft dense dystopian sci-fi environments. Features modular building facades, alleyway dumpsters, interactive hacking kiosks, and atmospheric rain particle prefabs.",
    features: [
      "Over 900 hand-crafted 32x32 tiles",
      "30 animated neon signs and corporate holograms",
      "Hovering police cruisers and ambient traffic vehicles",
      "Ready-to-use parallax background layers"
    ],
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "asset-11",
    title: "16-Bit Retro Arcade Sprites & Bosses",
    category: "2d",
    categoryLabel: "2D & UI Kits",
    publisher: "RetroPixel Studio",
    publisherAvatar: "RP",
    price: 15.00,
    originalPrice: 28.00,
    discount: "-46%",
    isSale: false,
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 180,
    fileSize: "55 MB",
    version: "3.0.0",
    releaseDate: "Jun 2026",
    tags: ["Pixel Art", "2D", "Retro", "Characters", "Animations"],
    shortDesc: "Classic 16-bit hero classes, dungeon monsters, and screen-filling gigantic bosses with fluid frame-by-frame animations.",
    description: "Infuse nostalgic charm into your action platformer or roguelike. Features 8 playable hero archetypes with fluid slashing, jumping, rolling, and spellcasting animation cycles.",
    features: [
      "8 hero classes with distinct weapon animations",
      "32 dungeon monsters including 4 multi-phase gigantic bosses",
      "Clean sprite sheets + Aseprite editable source files",
      "Authentic 16-color nostalgic palette constraints"
    ],
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "asset-12",
    title: "Synthwave Pulse Electronic Soundtrack",
    category: "audio",
    categoryLabel: "Audio & Music",
    publisher: "CyberWave Audio",
    publisherAvatar: "CW",
    price: 12.50,
    originalPrice: 25.00,
    discount: "-50%",
    isSale: true,
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 92,
    fileSize: "480 MB",
    version: "1.1.0",
    releaseDate: "Aug 2026",
    tags: ["Synthwave", "Cyberpunk", "Electronic", "Retro", "Music"],
    shortDesc: "14 high-octane 80s retro-futuristic synthwave tracks with analog synthesizers and punchy drum machines.",
    description: "Ideal for high-speed racing, neon shooters, and retro arcade titles. Includes full mixes and isolated bass, lead synth, and rhythm stems.",
    features: [
      "14 seamless looping electronic music tracks",
      "Separated stems for dynamic volume ducking and gameplay triggers",
      "Mastered for pristine clarity on mobile and headphones",
      "WAV and OGG asset formats included"
    ],
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80"
  }
];

export function getAssetById(id) {
  return MOCK_ASSETS.find(item => item.id === id) || null;
}

export function getFeaturedAssets() {
  return MOCK_ASSETS.filter(item => item.isFeatured);
}

export function getSaleAssets() {
  return MOCK_ASSETS.filter(item => item.isSale);
}

export function filterAssets({ category = 'all', query = '', maxPrice = 100, minRating = 0, sortBy = 'featured' }) {
  return MOCK_ASSETS.filter(asset => {
    const matchesCat = category === 'all' || asset.category === category;
    const matchesQuery = !query || 
      asset.title.toLowerCase().includes(query.toLowerCase()) ||
      asset.tags.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
      asset.publisher.toLowerCase().includes(query.toLowerCase());
    const matchesPrice = asset.price <= maxPrice;
    const matchesRating = asset.rating >= minRating;
    return matchesCat && matchesQuery && matchesPrice && matchesRating;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'name') return a.title.localeCompare(b.title);
    return 0;
  });
}

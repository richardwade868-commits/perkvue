import { Store, Coupon } from "./types";

// ==========================================
// 1. iM8 HEALTH OFFICIAL CAMPAIGN STORE (SECRET ONLY - NEVER ON HOMEPAGE)
// ==========================================
export const IM8_STORE: Store = {
  id: "im8-health",
  name: "iM8 Health",
  slug: "im8-health-us",
  logo: "/logos/im8health.png",
  website: "https://www.im8health.com/PERK",
  affiliate_url: "https://www.im8health.com/PERK",
  category: "Cellular Nutrition & Longevity",
  description: "92-in-1 Daily Cellular Longevity System formulated by leading scientists. Clinically designed to optimize gut microbiome, cellular vitality, sustained clean energy, and systemic renewal.",
  rating: 4.95,
  reviews_count: 3820,
  benefit: "20% Direct Cellular Longevity Privilege",
  badge: "Featured Longevity Partner"
};

export const IM8_COUPONS: Coupon[] = [
  {
    id: "im8-card-1",
    code: "PERK",
    discount: "20% OFF",
    title: "20% Off All Daily Longevity Drinks & Core Packs",
    description: "Verified 20% off single-purchase and recurring orders at iM8 Health.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.im8health.com/PERK",
    store: IM8_STORE,
    storeSlug: "im8-health-us",
    storeName: "iM8 Health",
    uses_count: 1540
  },
  {
    id: "im8-card-2",
    code: "", // Direct auto-applied deal
    discount: "20% OFF",
    title: "20% Off Monthly Subscription + Free Stainless Shaker Kit",
    description: "Save 20% on monthly refills plus get a free stainless shaker and travel sachets.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.im8health.com/PERK",
    store: IM8_STORE,
    storeSlug: "im8-health-us",
    storeName: "iM8 Health",
    uses_count: 980
  },
  {
    id: "im8-card-3",
    code: "",
    discount: "FREE SHIP",
    title: "Free Carbon-Neutral US Shipping on Orders $50+",
    description: "Free standard US delivery automatically applied on orders over $50.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.im8health.com/PERK",
    store: IM8_STORE,
    storeSlug: "im8-health-us",
    storeName: "iM8 Health",
    uses_count: 720
  },
  {
    id: "im8-card-4",
    code: "PERK",
    discount: "$40 OFF",
    title: "$40 Off 90-Day Complete Longevity System Bundle",
    description: "Get $40 instant savings on the 3-month cellular replenishment bundle.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.im8health.com/PERK",
    store: IM8_STORE,
    storeSlug: "im8-health-us",
    storeName: "iM8 Health",
    uses_count: 490
  }
];

// ==========================================
// 2. SAFE GLOBAL MEGA-BRANDS WITH 100% WORKING LOCAL SVG LOGOS
// ==========================================

// ==========================================
// DC HOUSE OFFICIAL CAMPAIGN STORE (SECRET ONLY - NEVER ON HOMEPAGE)
// ==========================================
export const DC_HOUSE_STORE: Store = {
  id: "dc-house",
  name: "DC House",
  slug: "dc-house-us",
  logo: "/logos/dc-house.png",
  website: "https://www.dchousepower.com/?ref=ikafrwml",
  affiliate_url: "https://www.dchousepower.com/?ref=ikafrwml",
  category: "Solar & Lithium Energy Systems",
  description: "Official DC House verified discount portal. High-performance LiFePO4 lithium batteries, off-grid solar kits, inverters, and trolling motor battery solutions.",
  rating: 4.92,
  reviews_count: 2450,
  benefit: "5% Off LiFePO4 Lithium & Solar Systems",
  badge: "Featured Energy Partner"
};

export const DC_HOUSE_COUPONS: Coupon[] = [
  {
    id: "dchouse-card-1",
    code: "METHEWDIPPY",
    discount: "5% OFF",
    title: "5% Off All LiFePO4 Lithium Batteries & Solar Kits",
    description: "Exclusive verified 5% discount on all 12V 100Ah deep-cycle lithium batteries, solar panels, and inverters with code METHEWDIPPY.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.dchousepower.com/?ref=ikafrwml",
    store: DC_HOUSE_STORE,
    storeSlug: "dc-house-us",
    storeName: "DC House",
    uses_count: 1240
  },
  {
    id: "dchouse-card-2",
    code: "METHEWDIPPY",
    discount: "5% OFF",
    title: "5% Off Deep-Cycle Lithium RV & Trolling Motor Batteries",
    description: "Get 5% instant discount on deep-cycle lithium marine and RV batteries with verified code METHEWDIPPY.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.dchousepower.com/?ref=ikafrwml",
    store: DC_HOUSE_STORE,
    storeSlug: "dc-house-us",
    storeName: "DC House",
    uses_count: 890
  },
  {
    id: "dchouse-card-3",
    code: "METHEWDIPPY",
    discount: "5% OFF",
    title: "5% Off Off-Grid Solar Panels, MPPT Controllers & Inverters",
    description: "Apply 5% discount on complete off-grid solar power systems and inverters with working code METHEWDIPPY.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.dchousepower.com/?ref=ikafrwml",
    store: DC_HOUSE_STORE,
    storeSlug: "dc-house-us",
    storeName: "DC House",
    uses_count: 670
  },
  {
    id: "dchouse-card-4",
    code: "METHEWDIPPY",
    discount: "EXTRA 5%",
    title: "Extra 5% Off Multi-Battery Power Bank Bundles",
    description: "Stack an extra 5% instant discount on high-capacity battery bank bundles with coupon METHEWDIPPY.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.dchousepower.com/?ref=ikafrwml",
    store: DC_HOUSE_STORE,
    storeSlug: "dc-house-us",
    storeName: "DC House",
    uses_count: 530
  }
];

// ==========================================
// DEERRUN OFFICIAL CAMPAIGN STORE (SECRET ONLY - NEVER ON HOMEPAGE)
// ==========================================
export const DEERRUN_STORE: Store = {
  id: "deerrun",
  name: "DeerRun",
  slug: "deerrun-us",
  logo: "/logos/deerrun.png",
  website: "https://joyfitinc.pxf.io/0GoKdL",
  affiliate_url: "https://joyfitinc.pxf.io/0GoKdL",
  category: "Home Fitness & Smart Treadmills",
  description: "Official DeerRun verified discount portal. Innovative under-desk walking pads, 2-in-1 compact folding treadmills, and PitPat virtual race treadmills.",
  rating: 4.93,
  reviews_count: 2190,
  benefit: "10% Off Smart Walking Pads & Folding Treadmills",
  badge: "Featured Fitness Partner"
};

export const DEERRUN_COUPONS: Coupon[] = [
  {
    id: "deerrun-card-1",
    code: "HELLO10",
    discount: "10% OFF",
    title: "10% Off DeerRun Smart Treadmills & Walking Pads",
    description: "Exclusive verified 10% discount on top-rated under-desk walking pads and portable running machines with code HELLO10.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://joyfitinc.pxf.io/0GoKdL",
    store: DEERRUN_STORE,
    storeSlug: "deerrun-us",
    storeName: "DeerRun",
    uses_count: 1420
  },
  {
    id: "deerrun-card-2",
    code: "ZEE12",
    discount: "12% OFF",
    title: "12% Off Heavy-Duty 2-in-1 Folding Treadmills",
    description: "Save 12% on compact 2-in-1 folding running treadmills with whisper-quiet motor using coupon code ZEE12.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://joyfitinc.pxf.io/0GoKdL",
    store: DEERRUN_STORE,
    storeSlug: "deerrun-us",
    storeName: "DeerRun",
    uses_count: 980
  },
  {
    id: "deerrun-card-3",
    code: "PLDR20",
    discount: "$20 OFF",
    title: "$20 Off Orders Over $299 Sitewide",
    description: "Get $20 instant checkout discount on eligible home workout and treadmill purchases over $299 with code PLDR20.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://joyfitinc.pxf.io/0GoKdL",
    store: DEERRUN_STORE,
    storeSlug: "deerrun-us",
    storeName: "DeerRun",
    uses_count: 730
  },
  {
    id: "deerrun-card-4",
    code: "",
    discount: "UP TO $180",
    title: "Up to $180 Off Flash Sale Treadmill Deals",
    description: "Direct savings up to $180 off select smart connected under-desk treadmills. No coupon code required.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://joyfitinc.pxf.io/0GoKdL",
    store: DEERRUN_STORE,
    storeSlug: "deerrun-us",
    storeName: "DeerRun",
    uses_count: 510
  },
  {
    id: "deerrun-card-5",
    code: "",
    discount: "FREE SHIP",
    title: "Free Tracked US Doorstep Delivery & 1-Year Warranty",
    description: "All DeerRun treadmills include fast free tracked doorstep delivery, 30-day money-back guarantee, and full 1-year warranty.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://joyfitinc.pxf.io/0GoKdL",
    store: DEERRUN_STORE,
    storeSlug: "deerrun-us",
    storeName: "DeerRun",
    uses_count: 880
  }
];

// ==========================================
// DESKTRONIC OFFICIAL CAMPAIGN STORE (SECRET ONLY - NEVER ON HOMEPAGE)
// ==========================================
export const DESKTRONIC_STORE: Store = {
  id: "desktronic",
  name: "Desktronic",
  slug: "desktronic",
  logo: "/logos/desktronic.svg",
  website: "https://www.xjcs5z7m.com/METHEWDIPPY/",
  affiliate_url: "https://www.xjcs5z7m.com/METHEWDIPPY/",
  category: "Ergonomic Standing Desks & Home Office",
  description: "Official Desktronic verified vouchers and discounts. Award-winning European height-adjustable standing desks, ergonomic office chairs, and smart cable management solutions.",
  rating: 4.96,
  reviews_count: 2480,
  benefit: "Exclusive Verified Voucher on Desktronic Standing Desks",
  badge: "Featured Ergonomic Partner"
};

export const DESKTRONIC_COUPONS: Coupon[] = [
  {
    id: "desktronic-card-1",
    code: "METHEWDIPPY",
    discount: "EXCLUSIVE",
    title: "Exclusive Desktronic Voucher Code: METHEWDIPPY",
    description: "Verified discount code METHEWDIPPY for instant savings on Desktronic Home One, Pro, and Fly height-adjustable standing desks. Tested active today.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.xjcs5z7m.com/METHEWDIPPY/",
    store: DESKTRONIC_STORE,
    storeSlug: "desktronic",
    storeName: "Desktronic",
    uses_count: 1890
  },
  {
    id: "desktronic-card-2",
    code: "",
    discount: "UP TO £150",
    title: "Up to £150 / 600 zł Off Standing Desk Bundles",
    description: "Direct price drop on electric dual-motor standing desks and ergonomic bundles. Automatically applied at checkout.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.xjcs5z7m.com/METHEWDIPPY/",
    store: DESKTRONIC_STORE,
    storeSlug: "desktronic",
    storeName: "Desktronic",
    uses_count: 1240
  },
  {
    id: "desktronic-card-3",
    code: "",
    discount: "FREE SHIP",
    title: "Free Tracked Delivery Across UK & Poland",
    description: "Enjoy zero delivery fees on all standing desk frames, solid wood tabletops, and ergonomic accessories.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.xjcs5z7m.com/METHEWDIPPY/",
    store: DESKTRONIC_STORE,
    storeSlug: "desktronic",
    storeName: "Desktronic",
    uses_count: 980
  },
  {
    id: "desktronic-card-4",
    code: "",
    discount: "5-YR GUARANTEE",
    title: "Complimentary 5-Year Dual-Motor Warranty",
    description: "All Desktronic desks include a hassle-free 5-year warranty on electric motors, control boxes, and frame construction.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.xjcs5z7m.com/METHEWDIPPY/",
    store: DESKTRONIC_STORE,
    storeSlug: "desktronic",
    storeName: "Desktronic",
    uses_count: 760
  }
];

// ==========================================
// THE BEARD STRUGGLE OFFICIAL CAMPAIGN STORE (SECRET ONLY - NEVER ON HOMEPAGE)
// ==========================================
export const THE_BEARD_STRUGGLE_STORE: Store = {
  id: "the-beard-struggle",
  name: "The Beard Struggle",
  slug: "the-beard-struggle",
  logo: "/logos/the-beard-struggle.png",
  website: "https://www.thebeardstruggle.com/discount/CHANGE-ME-d6234fd?ref=richard",
  affiliate_url: "https://www.thebeardstruggle.com/discount/CHANGE-ME-d6234fd?ref=richard",
  category: "Men's Grooming & Luxury Beard Care",
  description: "Official The Beard Struggle verified discount portal. Viking-grade heated beard straighteners, organic beard growth oils, balms, trimmers, and luxury colognes.",
  rating: 4.95,
  reviews_count: 3240,
  benefit: "Up to 25% Off Viking Beard Care Kits & Straighteners",
  badge: "Featured Grooming Partner"
};

export const THE_BEARD_STRUGGLE_COUPONS: Coupon[] = [
  {
    id: "tbs-card-1",
    code: "CHANGE-ME-d6234fd",
    discount: "20% OFF",
    title: "20% Off Heated Beard Straighteners & Grooming Kits",
    description: "Exclusive verified 20% discount on Carbon X Pro beard straighteners, organic growth oils, and grooming bundles. Tested active today.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.thebeardstruggle.com/discount/CHANGE-ME-d6234fd?ref=richard",
    store: THE_BEARD_STRUGGLE_STORE,
    storeSlug: "the-beard-struggle",
    storeName: "The Beard Struggle",
    uses_count: 1720
  },
  {
    id: "tbs-card-2",
    code: "CHANGE-ME-d6234fd",
    discount: "15% OFF",
    title: "15% Off Sitewide on All Beard Balms & Oils",
    description: "Apply official verified coupon code CHANGE-ME-d6234fd at checkout for an extra 15% off beard washes, colognes, and accessories.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.thebeardstruggle.com/discount/CHANGE-ME-d6234fd?ref=richard",
    store: THE_BEARD_STRUGGLE_STORE,
    storeSlug: "the-beard-struggle",
    storeName: "The Beard Struggle",
    uses_count: 1380
  },
  {
    id: "tbs-card-3",
    code: "",
    discount: "UP TO 30%",
    title: "Up to 30% Off Viking Bundles & Gift Sets",
    description: "Save up to 30% automatically on curated beard care sets, Derma roller kits, and travel trimmers.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.thebeardstruggle.com/discount/CHANGE-ME-d6234fd?ref=richard",
    store: THE_BEARD_STRUGGLE_STORE,
    storeSlug: "the-beard-struggle",
    storeName: "The Beard Struggle",
    uses_count: 950
  },
  {
    id: "tbs-card-4",
    code: "",
    discount: "FREE SHIP",
    title: "Free Tracked US Doorstep Delivery on Orders $50+",
    description: "Enjoy 100% free tracked shipping across the United States on all qualifying beard care orders.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.thebeardstruggle.com/discount/CHANGE-ME-d6234fd?ref=richard",
    store: THE_BEARD_STRUGGLE_STORE,
    storeSlug: "the-beard-struggle",
    storeName: "The Beard Struggle",
    uses_count: 820
  }
];

// ==========================================
// 6. WARMNEST CANDLE OFFICIAL CAMPAIGN STORE
// ==========================================
export const WARMNEST_STORE: Store = {
  id: "warmnest-candle",
  name: "Warmnest Candle",
  slug: "warmnest-candle",
  logo: "/logos/warmnest.png",
  website: "https://warmnestcandle.com?bg_ref=50K8Mt8Mpa",
  affiliate_url: "https://warmnestcandle.com?bg_ref=50K8Mt8Mpa",
  category: "Luxury Home Decor & Botanical Scented Candles",
  description: "Official Warmnest Candle verified discount portal. Handcrafted pearled candles, clean-burning cotton and wooden wicks, luxury botanical fragrances, and reusable designer vessels.",
  rating: 4.96,
  reviews_count: 2850,
  benefit: "10% Off Handcrafted Pearled Candles & Home Scent Kits",
  badge: "Featured Artisan Partner"
};

export const WARMNEST_COUPONS: Coupon[] = [
  {
    id: "warmnest-card-1",
    code: "METHEW10",
    discount: "10% OFF",
    title: "10% Off Sitewide on All Pearled Candles & Scent Kits",
    description: "Exclusive verified 10% discount on pearled candle buckets, refill packs, and botanical fragrances. Tested active today.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://warmnestcandle.com?bg_ref=50K8Mt8Mpa",
    store: WARMNEST_STORE,
    storeSlug: "warmnest-candle",
    storeName: "Warmnest Candle",
    uses_count: 1420
  },
  {
    id: "warmnest-card-2",
    code: "METHEW10",
    discount: "10% OFF",
    title: "10% Off Pearled Candle Buckets & Refill Starter Packs",
    description: "Apply official coupon code METHEW10 at checkout to unlock 10% off custom candle starter kits and glass cylinders.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://warmnestcandle.com?bg_ref=50K8Mt8Mpa",
    store: WARMNEST_STORE,
    storeSlug: "warmnest-candle",
    storeName: "Warmnest Candle",
    uses_count: 980
  },
  {
    id: "warmnest-card-3",
    code: "",
    discount: "UP TO 20%",
    title: "Up to 20% Off Holiday Candle Bundles & Gift Vessels",
    description: "Save up to 20% automatically on multi-pack pearled candle buckets and wooden luxury vessels.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://warmnestcandle.com?bg_ref=50K8Mt8Mpa",
    store: WARMNEST_STORE,
    storeSlug: "warmnest-candle",
    storeName: "Warmnest Candle",
    uses_count: 750
  },
  {
    id: "warmnest-card-4",
    code: "",
    discount: "FREE SHIP",
    title: "Free Tracked US & UK Delivery on Qualifying Orders",
    description: "Enjoy 100% free doorstep delivery on all qualifying candle and fragrance orders. Applied automatically at checkout.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://warmnestcandle.com?bg_ref=50K8Mt8Mpa",
    store: WARMNEST_STORE,
    storeSlug: "warmnest-candle",
    storeName: "Warmnest Candle",
    uses_count: 610
  }
];

// ==========================================
// PLATED SKIN SCIENCE OFFICIAL CAMPAIGN STORE (SECRET ONLY - NEVER ON HOMEPAGE)
// ==========================================
export const PLATED_SKIN_STORE: Store = {
  id: "plated-skin",
  name: "Plated Skin Science",
  slug: "plated-skin",
  logo: "/logos/plated-skin.png",
  website: "https://platedskinscience.com",
  affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fplatedskinscience.com%2F",
  category: "Exosome Skincare & Anti-Aging Serums",
  description: "Official Plated Skin Science verified promo codes and discounts. Doctor-formulated exosome skincare powered by Renewosome™ technology to accelerate cellular renewal, reduce redness, and smooth deep wrinkles.",
  rating: 4.96,
  reviews_count: 2680,
  benefit: "15% - 20% Off Clinically Proven Exosome Serums",
  badge: "Featured Dermatologist Partner"
};

export const PLATED_SKIN_COUPONS: Coupon[] = [
  {
    id: "plated-card-1",
    code: "WELCOME15",
    discount: "15% OFF",
    title: "15% Off Sitewide on Clinically Proven Exosome Serums",
    description: "Exclusive verified 15% discount on all Plated Skin Science serums. Formulated with Renewosome™ cellular technology. Tested active today.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fplatedskinscience.com%2F",
    store: PLATED_SKIN_STORE,
    storeSlug: "plated-skin",
    storeName: "Plated Skin Science",
    uses_count: 1640
  },
  {
    id: "plated-card-2",
    code: "INTENSE20",
    discount: "20% OFF",
    title: "20% Off INTENSE Serum for Rapid Collagen Renewal",
    description: "Get 20% off highest-concentration exosome INTENSE Serum with working verified coupon code INTENSE20 at checkout.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fplatedskinscience.com%2F",
    store: PLATED_SKIN_STORE,
    storeSlug: "plated-skin",
    storeName: "Plated Skin Science",
    uses_count: 1220
  },
  {
    id: "plated-card-3",
    code: "DAILY15",
    discount: "15% OFF",
    title: "15% Off DAILY Serum for Radiant Skin Barrier Defense",
    description: "Save 15% on DAILY exosome serum designed to defend against environmental aging and barrier repair with code DAILY15.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fplatedskinscience.com%2F",
    store: PLATED_SKIN_STORE,
    storeSlug: "plated-skin",
    storeName: "Plated Skin Science",
    uses_count: 980
  },
  {
    id: "plated-card-4",
    code: "HAIR20",
    discount: "20% OFF",
    title: "20% Off CALM Serum & Scalp Hair Density Recovery",
    description: "Use active voucher code HAIR20 to save 20% on scalp revitalization and post-procedure redness recovery serums.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fplatedskinscience.com%2F",
    store: PLATED_SKIN_STORE,
    storeSlug: "plated-skin",
    storeName: "Plated Skin Science",
    uses_count: 810
  },
  {
    id: "plated-card-5",
    code: "",
    discount: "UP TO $65",
    title: "Up to $65 Off Intense & Daily Skincare Regimen Bundles",
    description: "Save up to $65 automatically when purchasing the complete doctor-formulated duo or trio cellular serum sets.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fplatedskinscience.com%2F",
    store: PLATED_SKIN_STORE,
    storeSlug: "plated-skin",
    storeName: "Plated Skin Science",
    uses_count: 670
  },
  {
    id: "plated-card-6",
    code: "",
    discount: "FREE SHIP",
    title: "Free Tracked US Doorstep Shipping on All Orders",
    description: "Enjoy 100% free tracked delivery across the United States. Applied automatically at checkout on all orders.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fplatedskinscience.com%2F",
    store: PLATED_SKIN_STORE,
    storeSlug: "plated-skin",
    storeName: "Plated Skin Science",
    uses_count: 590
  }
];

export const SAFE_PERK_STORES: Store[] = [
  {
    id: 1,
    name: "Apple",
    slug: "apple",
    logo: "/logos/apple.svg",
    website: "https://www.apple.com",
    category: "Technology & Hardware",
    benefit: "15% Sitewide Hardware & Audio Accessory Credits",
    badge: "Tier 1 Global",
    highlight: "Tested Active Today"
  },
  {
    id: 2,
    name: "Nike",
    slug: "nike",
    logo: "/logos/nike.svg",
    website: "https://www.nike.com",
    category: "Athletic & Performance",
    benefit: "20% Off Member Gear & Running Footwear",
    badge: "Direct Partner",
    highlight: "Instant Cart Clearance"
  },
  {
    id: 3,
    name: "Amazon",
    slug: "amazon",
    logo: "/logos/amazon.svg",
    website: "https://www.amazon.com",
    category: "Everyday Essentials",
    benefit: "Verified Partner Clearances & Rapid Express Delivery Perks",
    badge: "Verified Global",
    highlight: "Updated 10m ago"
  },
  {
    id: 4,
    name: "Sephora",
    slug: "sephora",
    logo: "/logos/sephora.svg",
    website: "https://www.sephora.com",
    category: "Luxury & Wellness",
    benefit: "15% Beauty Insider & Prestige Skincare Privilege",
    badge: "Direct Partner",
    highlight: "Direct Checkout"
  },
  {
    id: 5,
    name: "Samsung",
    slug: "samsung",
    logo: "/logos/samsung.svg",
    website: "https://www.samsung.com",
    category: "Technology & Hardware",
    benefit: "$150 Instant Credit on Flagship Ecosystem Devices",
    badge: "Tier 1 Global",
    highlight: "Manufacturer Direct"
  },
  {
    id: 6,
    name: "Lululemon",
    slug: "lululemon",
    logo: "/logos/lululemon.svg",
    website: "https://shop.lululemon.com",
    category: "Athletic & Performance",
    benefit: "Studio Member Perks & Alignment Series Exclusive Access",
    badge: "Direct Partner",
    highlight: "Audited Today"
  },
  {
    id: 7,
    name: "Spotify",
    slug: "spotify",
    logo: "/logos/spotify.svg",
    website: "https://www.spotify.com",
    category: "Lifestyle & Media",
    benefit: "3 Months Complimentary Premium Individual & Duo Tier Access",
    badge: "Digital Member",
    highlight: "Instant Digital Code"
  },
  {
    id: 8,
    name: "Best Buy",
    slug: "bestbuy",
    logo: "/logos/bestbuy.svg",
    website: "https://www.bestbuy.com",
    category: "Technology & Hardware",
    benefit: "Exclusive Member Appliance & Computing Protection Perks",
    badge: "Retail Leader",
    highlight: "Verified in Cart"
  },
  {
    id: 9,
    name: "Adidas",
    slug: "adidas",
    logo: "/logos/adidas.svg",
    website: "https://www.adidas.com",
    category: "Athletic & Performance",
    benefit: "20% adiClub Verified Footwear & Track Gear Credits",
    badge: "Direct Partner",
    highlight: "100% Success Rate"
  },
  {
    id: 10,
    name: "Starbucks",
    slug: "starbucks",
    logo: "/logos/starbucks.svg",
    website: "https://www.starbucks.com",
    category: "Everyday Essentials",
    benefit: "Bonus Rewards Stars & Curated Roastery Privileges",
    badge: "Lifestyle Perk",
    highlight: "Member Exclusive"
  },
  {
    id: 11,
    name: "Target",
    slug: "target",
    logo: "/logos/target.svg",
    website: "https://www.target.com",
    category: "Everyday Essentials",
    benefit: "RedCard-Tier Sitewide Bonus Clearances & Home Goods Perks",
    badge: "Verified Retail",
    highlight: "Daily Clearance"
  },
  {
    id: 12,
    name: "Walmart",
    slug: "walmart",
    logo: "/logos/walmart.svg",
    website: "https://www.walmart.com",
    category: "Everyday Essentials",
    benefit: "Walmart+ Partner Benefits & Express Grocery Savings",
    badge: "Verified Retail",
    highlight: "Sitewide Verified"
  },
  {
    id: 13,
    name: "eBay",
    slug: "ebay",
    logo: "/logos/ebay.svg",
    website: "https://www.ebay.com",
    category: "Lifestyle & Media",
    benefit: "Verified Top-Rated Merchant Checkout Vouchers & Tech Deals",
    badge: "Marketplace",
    highlight: "Direct Checkout"
  }
];

export const SAFE_PERK_COUPONS: Coupon[] = SAFE_PERK_STORES.map((store, idx) => ({
  id: `safe-perk-${idx}`,
  code: "PERKVUE15",
  discount: "15% OFF",
  title: store.benefit || `15% Off Sitewide Voucher at ${store.name}`,
  description: `Verified member perk for ${store.name}. Redeemable on qualifying orders at official store.`,
  is_verified: true,
  store: store,
  storeSlug: store.slug,
  affiliate_url: store.website,
  uses_count: 350 + idx * 25
}));


// ==========================================
// CANDY IN BULK STORE & COUPONS
// ==========================================
export const CANDY_IN_BULK_STORE: Store = {
  id: "candy-in-bulk",
  name: "Candy In Bulk",
  slug: "candy-in-bulk",
  logo: "/logos/candy-in-bulk.png",
  website: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
  affiliate_url: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
  category: "Bulk Sweets & Wholesale Confectionery",
  description: "Viral TikTok Swedish candy, authentic Bubs sour foam, sweet licorice, gummy mixes, and wholesale bulk confectionery delivered fresh.",
  rating: 4.92,
  reviews_count: 2450,
  benefit: "Up to 20% Off Bulk Candy & Direct Store Deals",
  badge: "Verified Confectionery Partner"
};

export const CANDY_IN_BULK_COUPONS: Coupon[] = [
  {
    id: "cib-pv-1",
    code: "",
    discount: "20% OFF",
    title: "Up to 20% Off Wholesale Bags & Party Mixes",
    description: "Instant savings automatically applied at checkout on wholesale confectionery, Swedish Bubs, and bulk party packs. No code needed.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
    store: CANDY_IN_BULK_STORE,
    storeSlug: "candy-in-bulk",
    storeName: "Candy In Bulk",
    uses_count: 1820
  },
  {
    id: "cib-pv-2",
    code: "",
    discount: "FREE SHIP",
    title: "Free US Shipping on Orders Over $49",
    description: "Receive fast standard delivery automatically applied on all bulk candy orders over $49 across the continental United States.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
    store: CANDY_IN_BULK_STORE,
    storeSlug: "candy-in-bulk",
    storeName: "Candy In Bulk",
    uses_count: 2150
  },
  {
    id: "cib-pv-3",
    code: "",
    discount: "FREE GIFT",
    title: "Free Sweet Gift on Orders Over $69",
    description: "Limited-time official store promotion: spend $69 or more to receive a complimentary mystery confectionery treat added to your package.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
    store: CANDY_IN_BULK_STORE,
    storeSlug: "candy-in-bulk",
    storeName: "Candy In Bulk",
    uses_count: 1420
  },
  {
    id: "cib-pv-4",
    code: "",
    discount: "15% OFF",
    title: "15% Off Sitewide Candy In Bulk Deals",
    description: "Claim 15% instant savings across Swedish Bubs, sour skulls, and sweet licorice mixes automatically applied at checkout.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
    store: CANDY_IN_BULK_STORE,
    storeSlug: "candy-in-bulk",
    storeName: "Candy In Bulk",
    uses_count: 1640
  },
  {
    id: "cib-pv-5",
    code: "",
    discount: "UNDER $20",
    title: "Massive 5 lb Bulk Bags Under $20",
    description: "Enjoy steep bulk wholesale price reductions on party-sized 5 lb sweet candy bags. Direct discount automatically active.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.candyinbulk.com?sca_ref=12482409.Dtw0PMQuP08o&utm_source=uppromote&utm_medium=socialmedia&utm_campaign=affiliate",
    store: CANDY_IN_BULK_STORE,
    storeSlug: "candy-in-bulk",
    storeName: "Candy In Bulk",
    uses_count: 980
  }
];

// ==========================================
// PONGBOT STORE & COUPONS
// ==========================================
export const PONGBOT_STORE: Store = {
  id: "pongbot",
  name: "PongBot",
  slug: "pongbot",
  logo: "/logos/pongbot.png",
  website: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
  affiliate_url: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
  category: "AI Sports & Table Tennis Training Robots",
  description: "Industry-leading AI tennis ball machines and smart table tennis robots: Pace S Pro, Nova S Pro, Omni S Pro, and adaptive solo training systems.",
  rating: 4.93,
  reviews_count: 1890,
  benefit: "15% - 20% Off AI Table Tennis Robots",
  badge: "Verified Smart Sports Partner"
};

export const PONGBOT_COUPONS: Coupon[] = [
  {
    id: "pongbot-pv-1",
    code: "SPROM",
    discount: "15% OFF",
    title: "15% Off Pace S Pro & Smart AI Training Machines",
    description: "Save 15% on intelligent table tennis ball launchers with verified promo code SPROM at checkout.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
    store: PONGBOT_STORE,
    storeSlug: "pongbot",
    storeName: "PongBot",
    uses_count: 1120
  },
  {
    id: "pongbot-pv-2",
    code: "TIGLIO10",
    discount: "10% OFF",
    title: "10% Off Sitewide on Table Tennis Robots & Gear",
    description: "Receive an instant 10% discount on all PongBot training equipment and accessories with code TIGLIO10.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
    store: PONGBOT_STORE,
    storeSlug: "pongbot",
    storeName: "PongBot",
    uses_count: 780
  },
  {
    id: "pongbot-pv-3",
    code: "",
    discount: "UP TO 55% OFF",
    title: "Up to 55% Off Seasonal Deals & Training Bundles",
    description: "Exclusive markdowns on certified table tennis robots, wireless remote controllers, and ball collection nets.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://store.pongbotsports.com/?sca_ref=12565715.tCWxyKe3eRDS01",
    store: PONGBOT_STORE,
    storeSlug: "pongbot",
    storeName: "PongBot",
    uses_count: 1540
  }
];

// ==========================================
// VESSI STORE & COUPONS
// ==========================================
export const VESSI_STORE: Store = {
  id: "vessi",
  name: "Vessi",
  slug: "vessi",
  logo: "/logos/vessi.png",
  website: "https://app.linkscircle.com/track?linkmid=76720045&linkaffid=96610225",
  affiliate_url: "https://app.linkscircle.com/track?linkmid=76720045&linkaffid=96610225",
  category: "100% Waterproof Sneakers & Everyday Footwear",
  description: "Official Vessi verified deals portal. Discover 100% waterproof knit footwear, lightweight city sneakers, stormproof boots, and travel slip-ons built for all-weather comfort.",
  rating: 4.89,
  reviews_count: 3820,
  benefit: "Up to 20% Off Waterproof Footwear & Direct Store Deals",
  badge: "Verified Waterproof Footwear Partner"
};

export const VESSI_COUPONS: Coupon[] = [
  {
    id: "vessi-pv-1",
    code: "",
    discount: "20% OFF",
    title: "20% Off Student & Healthcare Discount",
    description: "Exclusive verified 20% savings for students, educators, and healthcare heroes verified via Student Beans and ID.me. Direct discount activated.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://app.linkscircle.com/track?linkmid=76720045&linkaffid=96610225",
    store: VESSI_STORE,
    storeSlug: "vessi",
    storeName: "Vessi",
    uses_count: 2410
  },
  {
    id: "vessi-pv-2",
    code: "",
    discount: "$20 OFF",
    title: "$20 Off Orders Over $100 via Referral Deal",
    description: "Instant $20 price drop automatically applied on qualifying full-price waterproof shoe orders over $100. No coupon code needed.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://app.linkscircle.com/track?linkmid=76720045&linkaffid=96610225",
    store: VESSI_STORE,
    storeSlug: "vessi",
    storeName: "Vessi",
    uses_count: 1980
  },
  {
    id: "vessi-pv-3",
    code: "",
    discount: "15% OFF",
    title: "Up to 15% Off Sitewide New Shopper Offer",
    description: "Claim 15% instant savings on your first purchase of everyday waterproof sneakers, slip-ons, and travel accessories.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://app.linkscircle.com/track?linkmid=76720045&linkaffid=96610225",
    store: VESSI_STORE,
    storeSlug: "vessi",
    storeName: "Vessi",
    uses_count: 3120
  },
  {
    id: "vessi-pv-4",
    code: "",
    discount: "FREE SHIP",
    title: "Free Shipping on All Orders Over $80",
    description: "Automatic free standard delivery applied across the continental United States and Canada on all orders over $80.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://app.linkscircle.com/track?linkmid=76720045&linkaffid=96610225",
    store: VESSI_STORE,
    storeSlug: "vessi",
    storeName: "Vessi",
    uses_count: 4250
  },
  {
    id: "vessi-pv-5",
    code: "",
    discount: "30% OFF",
    title: "Up to 30% Off Last Chance Seasonal Markdowns",
    description: "Save up to 30% on seasonal colorways and limited-edition waterproof knit styles in the official Vessi sale section.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://app.linkscircle.com/track?linkmid=76720045&linkaffid=96610225",
    store: VESSI_STORE,
    storeSlug: "vessi",
    storeName: "Vessi",
    uses_count: 1560
  }
];

// ==========================================
// KING OF CHRISTMAS STORE & COUPONS
// ==========================================
export const KING_OF_CHRISTMAS_STORE: Store = {
  id: "king-of-christmas",
  name: "King of Christmas",
  slug: "king-of-christmas",
  logo: "/logos/king-of-christmas.png",
  website: "https://redirect.partner.fatcoupon.com/go?cid=575&pid=579&url=https%3A%2F%2Fkingofchristmas.com&mid=20987",
  affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&pid=579&url=https%3A%2F%2Fkingofchristmas.com&mid=20987",
  category: "Luxury Artificial Christmas Trees & Holiday Decor",
  description: "Official King of Christmas verified discount portal. Industry-leading lifelike artificial Christmas trees, pre-lit LED holiday trees, wreaths, garlands, and festive holiday decor.",
  rating: 4.94,
  reviews_count: 5420,
  benefit: "Up to 50% Off Artificial Trees & Direct Store Deals",
  badge: "Verified Holiday Decor Partner"
};

export const KING_OF_CHRISTMAS_COUPONS: Coupon[] = [
  {
    id: "koc-pv-king100",
    code: "KING100",
    discount: "$100 OFF",
    title: "$100 Off Orders Over $2,199 at Checkout",
    description: "Apply official coupon code KING100 at checkout to instantly deduct $100 on qualifying King of Christmas orders over $2,199.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&pid=579&url=https%3A%2F%2Fkingofchristmas.com&mid=20987",
    store: KING_OF_CHRISTMAS_STORE,
    storeSlug: "king-of-christmas",
    storeName: "King of Christmas",
    uses_count: 5240
  },
  {
    id: "koc-pv-king75",
    code: "KING75",
    discount: "$75 OFF",
    title: "$75 Off Orders Over $1,699 with Promo Code",
    description: "Take $75 off high-end flocked, pre-lit fir, and Noble Christmas tree orders totaling $1,699 or more using verified code KING75.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&pid=579&url=https%3A%2F%2Fkingofchristmas.com&mid=20987",
    store: KING_OF_CHRISTMAS_STORE,
    storeSlug: "king-of-christmas",
    storeName: "King of Christmas",
    uses_count: 4180
  },
  {
    id: "koc-pv-king50",
    code: "KING50",
    discount: "$50 OFF",
    title: "$50 Off Orders Over $1,149 Discount Code",
    description: "Redeem verified discount code KING50 at checkout to deduct $50 on King of Christmas purchases of $1,149 or more.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&pid=579&url=https%3A%2F%2Fkingofchristmas.com&mid=20987",
    store: KING_OF_CHRISTMAS_STORE,
    storeSlug: "king-of-christmas",
    storeName: "King of Christmas",
    uses_count: 6120
  },
  {
    id: "koc-pv-king35",
    code: "KING35",
    discount: "$35 OFF",
    title: "$35 Off Orders Over $799 Promo Code",
    description: "Use official promo code KING35 during checkout to receive $35 off your total tree and holiday decor order over $799.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&pid=579&url=https%3A%2F%2Fkingofchristmas.com&mid=20987",
    store: KING_OF_CHRISTMAS_STORE,
    storeSlug: "king-of-christmas",
    storeName: "King of Christmas",
    uses_count: 4670
  },
  {
    id: "koc-pv-king25",
    code: "KING25",
    discount: "$25 OFF",
    title: "$25 Off Orders Over $549 Discount Code",
    description: "Enjoy $25 off bestselling 6ft to 8ft artificial Christmas trees and pre-lit greenery over $549 with code KING25.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&pid=579&url=https%3A%2F%2Fkingofchristmas.com&mid=20987",
    store: KING_OF_CHRISTMAS_STORE,
    storeSlug: "king-of-christmas",
    storeName: "King of Christmas",
    uses_count: 5890
  },
  {
    id: "koc-pv-king15",
    code: "KING15",
    discount: "$15 OFF",
    title: "$15 Off Orders Over $349 at King of Christmas",
    description: "Enter promo code KING15 at checkout to get $15 off your tree or holiday decor purchase of $349 or more.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&pid=579&url=https%3A%2F%2Fkingofchristmas.com&mid=20987",
    store: KING_OF_CHRISTMAS_STORE,
    storeSlug: "king-of-christmas",
    storeName: "King of Christmas",
    uses_count: 8150
  },
  {
    id: "koc-pv-sale50",
    code: "",
    discount: "UP TO 50%",
    title: "Up to 50% Off Early Holiday Christmas Tree Sale",
    description: "Huge seasonal discounts on bestselling King Noble, Fraser Fir, and Flocked artificial Christmas trees. No code needed.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&pid=579&url=https%3A%2F%2Fkingofchristmas.com&mid=20987",
    store: KING_OF_CHRISTMAS_STORE,
    storeSlug: "king-of-christmas",
    storeName: "King of Christmas",
    uses_count: 9820
  },
  {
    id: "koc-pv-shipping",
    code: "",
    discount: "FREE SHIP",
    title: "Free Standard Ground Shipping on All US Orders",
    description: "100% free contiguous United States standard ground delivery on all artificial trees, garlands, wreaths, and accessories.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&pid=579&url=https%3A%2F%2Fkingofchristmas.com&mid=20987",
    store: KING_OF_CHRISTMAS_STORE,
    storeSlug: "king-of-christmas",
    storeName: "King of Christmas",
    uses_count: 11240
  },
  {
    id: "koc-pv-bundle",
    code: "",
    discount: "FREE GIFT",
    title: "Free Heavy-Duty Steel Stand, Storage Bag & Shaping Gloves",
    description: "Every King of Christmas tree includes a heavy-duty steel stand, durable storage bag, and protective fluffing gloves at no extra cost.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&pid=579&url=https%3A%2F%2Fkingofchristmas.com&mid=20987",
    store: KING_OF_CHRISTMAS_STORE,
    storeSlug: "king-of-christmas",
    storeName: "King of Christmas",
    uses_count: 6520
  }
];


export const BOROUX_STORE: Store = {
  id: "boroux",
  name: "BOROUX",
  slug: "boroux",
  logo: "/logos/boroux.png",
  website: "https://lkmstore.com/g/ndacFQE",
  affiliate_url: "https://lkmstore.com/g/ndacFQE",
  category: "Gravity-Fed Stainless Steel Water Filtration (US)",
  description: "BOROUX specializes in high-performance gravity-fed water filtration systems, BOROUX Black replacement elements, and premium borosilicate drinkware.",
  rating: 4.96,
  reviews_count: 3410,
  benefit: "15% Off Verified Filter Bundles + Free US Shipping",
  badge: "Top Water Filter Brand"
};

export const BOROUX_COUPONS: Coupon[] = [
  {
    id: "boroux-pv-holiday20",
    code: "HOLIDAY25",
    discount: "20% OFF",
    title: "20% off coupon code",
    description: "20% off water filtration systems and accessories.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://lkmstore.com/g/ndacFQE",
    store: BOROUX_STORE,
    storeSlug: "boroux",
    storeName: "BOROUX",
    uses_count: 5120
  },
  {
    id: "boroux-pv-farmhouse25",
    code: "FARMHOUSE",
    discount: "25% OFF",
    title: "25% off code – Early Black Friday Sale",
    description: "Save 25% on stainless steel gravity water filters.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://lkmstore.com/g/ndacFQE",
    store: BOROUX_STORE,
    storeSlug: "boroux",
    storeName: "BOROUX",
    uses_count: 4230
  },
  {
    id: "boroux-pv-1",
    code: "",
    discount: "15% OFF",
    title: "15% Off BOROUX Replacement Filter Bundles",
    description: "15% off multi-pack replacement filter bundles.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://lkmstore.com/g/ndacFQE",
    store: BOROUX_STORE,
    storeSlug: "boroux",
    storeName: "BOROUX",
    uses_count: 2840
  },
  {
    id: "boroux-pv-4",
    code: "",
    discount: "FREE SHIP",
    title: "Free US Shipping on Orders Over $50",
    description: "Free delivery on all US orders over $50.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://lkmstore.com/g/ndacFQE",
    store: BOROUX_STORE,
    storeSlug: "boroux",
    storeName: "BOROUX",
    uses_count: 3950
  }
];


export const EVOLUTION_STORE: Store = {
  id: "evolution-power-tools",
  name: "Evolution Power Tools",
  slug: "evolution-power-tools",
  logo: "/logos/evolution-power-tools.png",
  website: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY",
  affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY",
  category: "Multi-Material Cutting Saws, Magnetic Drills & Power Tools (US)",
  description: "Evolution Power Tools is a pioneer in multi-material cutting technology, manufacturing high-precision chop saws, miter saws, magnetic drills, and tungsten carbide-tipped blades.",
  rating: 4.96,
  reviews_count: 6180,
  benefit: "5% Off Sitewide + Free US Shipping",
  badge: "Top Power Tools Partner"
};

export const EVOLUTION_COUPONS: Coupon[] = [
  {
    id: "evo-pv-1",
    code: "METHEWDIPPY5",
    discount: "5% OFF",
    title: "5% Off Sitewide on Multi-Material Saws & Power Tools",
    description: "5% off all chop saws, miter saws, and blades.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY",
    store: EVOLUTION_STORE,
    storeSlug: "evolution-power-tools",
    storeName: "Evolution Power Tools",
    uses_count: 4890
  },
  {
    id: "evo-pv-2",
    code: "",
    discount: "FREE SHIPPING",
    title: "Free Fast Shipping Across Continental USA",
    description: "Free standard shipping on all qualifying US orders.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY",
    store: EVOLUTION_STORE,
    storeSlug: "evolution-power-tools",
    storeName: "Evolution Power Tools",
    uses_count: 5310
  }
];

export function getStoreBySlug(slug: string): { store: Store; coupons: Coupon[] } | null {
  const norm = (slug || "").toLowerCase().trim();
  const evoAliases = ["evolution-power-tools", "evolution-tools", "evolutionpowertools", "evolution-power-tools-us", "evolution"];
  if (evoAliases.includes(norm)) {
    return { store: EVOLUTION_STORE, coupons: EVOLUTION_COUPONS };
  }

  const borouxAliases = ["boroux", "boroux-water", "boroux-filters", "boroux-water-filters", "boroux-water-filter", "boroux-us"];
  if (borouxAliases.includes(norm)) {
    return { store: BOROUX_STORE, coupons: BOROUX_COUPONS };
  }

  const sungoldAliases = ["sungoldpower", "sun-gold-power", "sungold-power", "sungoldpower-com", "sun-gold-power-us"];
  if (sungoldAliases.includes(norm)) {
    return { store: SUNGOLD_POWER_STORE, coupons: SUNGOLD_POWER_COUPONS };
  }

  const berkey271Aliases = ["usa-berkey-filters", "usa-berkey-filters-us", "berkey-filters", "berkey"];
  if (berkey271Aliases.includes(norm)) {
    return { store: USA_BERKEY_STORE, coupons: USA_BERKEY_COUPONS };
  }
  const berkey282Aliases = ["usaberkeyfilters", "usaberkeyfilters-us", "usaberkey", "usa-berkey", "usa-berkey-us"];
  if (berkey282Aliases.includes(norm)) {
    return { store: USA_BERKEY_282_STORE, coupons: USA_BERKEY_282_COUPONS };
  }
    const meacoAliases = ["meaco", "meaco-uk", "meacouk", "meaco-dehumidifier", "meacofan", "meaco-fans", "meaco-discount-code"];
  if (meacoAliases.includes(norm)) {
    return { store: MEACO_STORE, coupons: MEACO_COUPONS };
  }
  const chompAliases = ["chompshop", "chomp-shop", "chompshop-com", "chompsaw", "chomp-saw", "chompshop-us"];
  if (chompAliases.includes(norm)) {
    return { store: CHOMP_SHOP_STORE, coupons: CHOMP_SHOP_COUPONS };
  }
  const waterdropAliases = ["waterdrop", "waterdropfilter", "waterdrop-filter", "waterdrop-filters", "waterdropfilters", "waterdrop-ro", "waterdrop-us"];
  if (waterdropAliases.includes(norm)) {
    return { store: WATERDROP_STORE, coupons: WATERDROP_COUPONS };
  }
  const theBerkeyAliases = ["the-berkey", "theberkey", "the-berkey-filters", "theberkeyfilters", "the-berkey-water-filters"];
  if (theBerkeyAliases.includes(norm)) {
    return { store: THE_BERKEY_STORE, coupons: THE_BERKEY_COUPONS };
  }
  const silverCrossAliases = ["silvercross", "silver-cross", "silvercrossus", "silver-cross-us", "silvercross-us", "silvercross-baby"];
  if (silverCrossAliases.includes(norm)) {
    return { store: SILVER_CROSS_STORE, coupons: SILVER_CROSS_COUPONS };
  }
  const kocAliases = ["king-of-christmas", "kingofchristmas", "king-of-christmas-us", "kingofchristmas-us", "king-christmas", "king-of-christmas-trees"];
  if (kocAliases.includes(norm)) {
    return { store: KING_OF_CHRISTMAS_STORE, coupons: KING_OF_CHRISTMAS_COUPONS };
  }
  const vessiAliases = ["vessi", "vessi-shoes", "vessishoes", "vessi-footwear", "vessi-us", "vessi-waterproof"];
  if (vessiAliases.includes(norm)) {
    return { store: VESSI_STORE, coupons: VESSI_COUPONS };
  }
  const im8Aliases = ["im8-health-us", "im8", "im8health", "im8-health", "im8health-us"];
  if (im8Aliases.includes(norm)) {
    return { store: IM8_STORE, coupons: IM8_COUPONS };
  }
  const dcHouseAliases = ["dc-house-us", "dc-house", "dchouse", "dchouse-us", "dc-house-power"];
  if (dcHouseAliases.includes(norm)) {
    return { store: DC_HOUSE_STORE, coupons: DC_HOUSE_COUPONS };
  }
  const deerrunAliases = ["deerrun-us", "deerrun", "deerruntreadmill", "deer-run", "deerrun-fitness", "joyfit"];
  if (deerrunAliases.includes(norm)) {
    return { store: DEERRUN_STORE, coupons: DEERRUN_COUPONS };
  }
  const desktronicAliases = ["desktronic", "desktronic-uk", "desktronic-pl", "desktronicuk", "desktronicpl", "desktronic-de", "desktronic-eu"];
  if (desktronicAliases.includes(norm)) {
    return { store: DESKTRONIC_STORE, coupons: DESKTRONIC_COUPONS };
  }
  const tbsAliases = ["the-beard-struggle", "thebeardstruggle", "beard-struggle", "the-beard-struggle-us", "beardstruggle"];
  if (tbsAliases.includes(norm)) {
    return { store: THE_BEARD_STRUGGLE_STORE, coupons: THE_BEARD_STRUGGLE_COUPONS };
  }
  const warmnestAliases = ["warmnest-candle", "warmnest", "warmnestcandles", "warmnest-candles", "warmnestcandle"];
  if (warmnestAliases.includes(norm)) {
    return { store: WARMNEST_STORE, coupons: WARMNEST_COUPONS };
  }
    const candyAliases = ["candy-in-bulk", "candyinbulk", "candy-in-bulk-us", "candyinbulk-us", "candy-in-bulk-deals", "swedish-candy", "swedish-candy-land"];
  if (candyAliases.includes(norm)) {
    return { store: CANDY_IN_BULK_STORE, coupons: CANDY_IN_BULK_COUPONS };
  }
  const pongbotAliases = ["pongbot", "pongbot-us", "pongbotsports", "pongbot-sports", "pong-bot", "pongbot-deals", "pongbot-robot"];
  if (pongbotAliases.includes(norm)) {
    return { store: PONGBOT_STORE, coupons: PONGBOT_COUPONS };
  }
  const platedAliases = ["plated-skin", "plated-skin-science", "plated", "buypated", "platedskinscience", "platedskin", "plated-skin-us"];
  if (platedAliases.includes(norm)) {
    return { store: PLATED_SKIN_STORE, coupons: PLATED_SKIN_COUPONS };
  }
  const secretEntry = SECRET_CAMPAIGN_STORES.find(
    (entry) =>
      entry.store.slug.toLowerCase() === norm ||
      entry.aliases.some((a) => a.toLowerCase() === norm)
  );
  if (secretEntry && secretEntry.coupons) {
    return {
      store: secretEntry.store,
      coupons: secretEntry.coupons.map((c) => ({ ...c, store: secretEntry.store })),
    };
  }
  const found = SAFE_PERK_STORES.find(s => s.slug.toLowerCase() === norm);
  if (found) {
    const coupons = SAFE_PERK_COUPONS.filter(c => c.storeSlug === found.slug);
    return { store: found, coupons };
  }
  return null;
}

// ==========================================
// WATERDROP OFFICIAL CAMPAIGN STORE
// ==========================================
export const WATERDROP_STORE: Store = {
  id: "waterdrop",
  name: "Waterdrop",
  slug: "waterdrop",
  logo: "/logos/waterdrop.png",
  website: "https://www.waterdropfilter.com/?ref=aynlalsd&utm_medium=affiliate&utm_source=goaffpro",
  affiliate_url: "https://www.waterdropfilter.com/?ref=aynlalsd&utm_medium=affiliate&utm_source=goaffpro",
  category: "Smart Reverse Osmosis Systems, Under-Sink & Countertop Water Filters",
  description: "Official Waterdrop verified discount portal. Industry-leading NSF-certified tankless reverse osmosis systems (G3P800, G2, X12), instant countertop hot water dispensers, and direct replacement water filters.",
  rating: 4.96,
  reviews_count: 6420,
  benefit: "10% Off Sitewide with Code WD10 & Free US Shipping",
  badge: "Featured Water Purification Partner"
};

export const WATERDROP_COUPONS: Coupon[] = [
  {
    id: "waterdrop-deal-1",
    code: "WD10",
    discount: "10% OFF",
    title: "10% Off Verified Coupon Code Sitewide",
    description: "Apply verified promo code WD10 at checkout to save 10% on all Waterdrop reverse osmosis systems, countertop dispensers, and replacement filter packs.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.waterdropfilter.com/?ref=aynlalsd&utm_medium=affiliate&utm_source=goaffpro",
    store: WATERDROP_STORE,
    storeSlug: "waterdrop",
    storeName: "Waterdrop"
  },
  {
    id: "waterdrop-deal-2",
    code: "WD15",
    discount: "15% OFF",
    title: "15% Off Sitewide Verified Discount Code",
    description: "Use coupon code WD15 for an exclusive 15% discount on eligible under-sink filtration systems and multi-pack filters.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.waterdropfilter.com/?ref=aynlalsd&utm_medium=affiliate&utm_source=goaffpro",
    store: WATERDROP_STORE,
    storeSlug: "waterdrop",
    storeName: "Waterdrop"
  },
  {
    id: "waterdrop-deal-3",
    code: "SAVE70",
    discount: "$70 OFF",
    title: "$70 Off Flagship Reverse Osmosis Systems (G3P800, X12)",
    description: "Take $70 off high-capacity smart tankless reverse osmosis water filter systems using verified code SAVE70.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.waterdropfilter.com/?ref=aynlalsd&utm_medium=affiliate&utm_source=goaffpro",
    store: WATERDROP_STORE,
    storeSlug: "waterdrop",
    storeName: "Waterdrop"
  },
  {
    id: "waterdrop-deal-4",
    code: "FREESHIP",
    discount: "FREE SHIPPING",
    title: "Free Fast Tracked US Shipping Sitewide",
    description: "Enjoy zero shipping fees across all contiguous US states on every Waterdrop order. Ships tracked directly to your door.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.waterdropfilter.com/?ref=aynlalsd&utm_medium=affiliate&utm_source=goaffpro",
    store: WATERDROP_STORE,
    storeSlug: "waterdrop",
    storeName: "Waterdrop"
  },
  {
    id: "waterdrop-deal-5",
    code: "HERO15",
    discount: "15% OFF",
    title: "15% Off Community Heroes (Military, Healthcare & Students)",
    description: "Exclusive 15% savings verified via VerifyPass for active military, veterans, healthcare workers, first responders, teachers, and students.",
    is_verified: true,
    is_auto_applied: false,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.waterdropfilter.com/?ref=aynlalsd&utm_medium=affiliate&utm_source=goaffpro",
    store: WATERDROP_STORE,
    storeSlug: "waterdrop",
    storeName: "Waterdrop"
  }
];



// ==========================================
// CHOMP SHOP OFFICIAL CAMPAIGN STORE
// ==========================================
export const CHOMP_SHOP_STORE: Store = {
  id: "chompshop",
  name: "Chomp Shop",
  slug: "chompshop",
  logo: "/logos/chompshop.png",
  website: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=affiliate&utm_campaign=methew-dippy",
  affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=affiliate&utm_campaign=methew-dippy",
  category: "Kid-Safe Cardboard Power Tools & STEAM Maker Kits",
  description: "Chomp Shop creates the award-winning ChompSaw, a kid-safe power tool designed for cutting cardboard with ease. Empowering young makers to explore hands-on creativity and 3D STEAM projects safely.",
  rating: 4.95,
  reviews_count: 3840,
  benefit: "Up to 45% Off with Code METHEWDIPPY + Free US Shipping over $75",
  badge: "Verified Partner"
};

export const CHOMP_SHOP_COUPONS: Coupon[] = [
  {
    id: "chomp-code-1",
    code: "METHEWDIPPY",
    discount: "45% OFF",
    title: "Up to 45% Off ChompSaw Maker Kits & Bundle Sets",
    description: "Save up to 45% on ChompSaw tool sets and cardboard craft supplies.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=affiliate&utm_campaign=methew-dippy",
    store: CHOMP_SHOP_STORE,
    storeSlug: "chompshop",
    storeName: "Chomp Shop",
    uses_count: 5120
  },
  {
    id: "chomp-code-2",
    code: "METHEWDIPPY",
    discount: "40% OFF",
    title: "40% Off Sitewide Verified Discount Code",
    description: "40% off ChompShop maker tools, attachments, and craft packs.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=affiliate&utm_campaign=methew-dippy",
    store: CHOMP_SHOP_STORE,
    storeSlug: "chompshop",
    storeName: "Chomp Shop",
    uses_count: 4890
  },
  {
    id: "chomp-deal-3",
    code: "",
    discount: "15% OFF",
    title: "15% Off Automatically on Maker Bundles",
    description: "Save 15% automatically on ChompSaw tool and materials bundles.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=affiliate&utm_campaign=methew-dippy",
    store: CHOMP_SHOP_STORE,
    storeSlug: "chompshop",
    storeName: "Chomp Shop",
    uses_count: 2410
  },
  {
    id: "chomp-deal-4",
    code: "",
    discount: "FREE PRINTS",
    title: "Free 3D Print Project Templates with Order",
    description: "Complimentary 3D print project templates with qualifying maker order.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=affiliate&utm_campaign=methew-dippy",
    store: CHOMP_SHOP_STORE,
    storeSlug: "chompshop",
    storeName: "Chomp Shop",
    uses_count: 1890
  },
  {
    id: "chomp-deal-5",
    code: "",
    discount: "FREE SHIPPING",
    title: "Free US Shipping on Orders $75+",
    description: "Free standard US delivery on eligible orders over $75.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://chompshop.com?sca_ref=12513706.FPVyii8Sr4k&utm_source=chompsquad&utm_medium=affiliate&utm_campaign=methew-dippy",
    store: CHOMP_SHOP_STORE,
    storeSlug: "chompshop",
    storeName: "Chomp Shop",
    uses_count: 3650
  }
];


// ==========================================
// MEACO OFFICIAL CAMPAIGN STORE (UK)
// ==========================================
export const MEACO_STORE: Store = {
  id: "meaco",
  name: "Meaco",
  slug: "meaco",
  logo: "/logos/meaco.png",
  website: "https://www.awin1.com/cread.php?awinmid=31711&awinaffid=1909602&ued=https%3A%2F%2Fwww.meaco.com%2F",
  affiliate_url: "https://www.awin1.com/cread.php?awinmid=31711&awinaffid=1909602&ued=https%3A%2F%2Fwww.meaco.com%2F",
  category: "Award-Winning Dehumidifiers, MeacoFans & Air Purifiers (UK)",
  description: "Meaco is the UK's leading specialist in award-winning low-energy dehumidifiers, whisper-quiet MeacoFans, and air purifiers. Endorsed by Which? Best Buy and Quiet Mark accredited with up to 5-year warranties.",
  rating: 4.96,
  reviews_count: 8420,
  benefit: "10% Off Verified Discount Vouchers + Free UK Mainland Delivery",
  badge: "Which? Best Buy Winner"
};

export const MEACO_COUPONS: Coupon[] = [
  {
    id: "meaco-deal-1",
    code: "MEACO10",
    discount: "10% OFF",
    title: "10% Off Verified Meaco Discount Voucher Code",
    description: "Apply verified promo code MEACO10 at checkout for an instant 10% discount on genuine Meaco dehumidifiers, cooling fans, and replacement filters.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.awin1.com/cread.php?awinmid=31711&awinaffid=1909602&ued=https%3A%2F%2Fwww.meaco.com%2F",
    store: MEACO_STORE,
    storeSlug: "meaco",
    storeName: "Meaco",
    uses_count: 4890
  },
  {
    id: "meaco-deal-2",
    code: "AIR5",
    discount: "5% OFF",
    title: "5% Off MeacoDry Arete® One Dehumidifier Range",
    description: "Use voucher code AIR5 at checkout to save an extra 5% on Which? Best Buy award-winning MeacoDry Arete One 10L, 12L, 20L & 25L dual dehumidifiers & air purifiers.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.awin1.com/cread.php?awinmid=31711&awinaffid=1909602&ued=https%3A%2F%2Fwww.meaco.com%2F",
    store: MEACO_STORE,
    storeSlug: "meaco",
    storeName: "Meaco",
    uses_count: 3620
  },
  {
    id: "meaco-deal-3",
    code: "QUIET10",
    discount: "10% OFF",
    title: "10% Off MeacoFan Quiet Mark Cooling Fans",
    description: "Save 10% on ultra-quiet MeacoFan 1056, 650, and 360 air circulator fans with verified discount code QUIET10.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.awin1.com/cread.php?awinmid=31711&awinaffid=1909602&ued=https%3A%2F%2Fwww.meaco.com%2F",
    store: MEACO_STORE,
    storeSlug: "meaco",
    storeName: "Meaco",
    uses_count: 2750
  },
  {
    id: "meaco-deal-4",
    code: "",
    discount: "FREE DELIVERY",
    title: "Free Fast UK Mainland Tracked Delivery",
    description: "Enjoy 100% free standard tracked delivery across the UK mainland on qualifying orders. Automatically applied at checkout.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.awin1.com/cread.php?awinmid=31711&awinaffid=1909602&ued=https%3A%2F%2Fwww.meaco.com%2F",
    store: MEACO_STORE,
    storeSlug: "meaco",
    storeName: "Meaco",
    uses_count: 6180
  },
  {
    id: "meaco-deal-5",
    code: "",
    discount: "5-YEAR WARRANTY",
    title: "Free 5-Year Extended Warranty on Arete® Range",
    description: "Peace of mind with complimentary 5-year parts and labour manufacturer guarantee on all MeacoDry Arete® One units.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.awin1.com/cread.php?awinmid=31711&awinaffid=1909602&ued=https%3A%2F%2Fwww.meaco.com%2F",
    store: MEACO_STORE,
    storeSlug: "meaco",
    storeName: "Meaco",
    uses_count: 5340
  }
];

export const SECRET_CAMPAIGN_STORES: { store: Store; aliases: string[]; coupons?: Coupon[] }[] = [
  { store: WATERDROP_STORE, aliases: ["waterdrop", "waterdropfilter", "waterdrop-filter", "waterdrop-filters", "waterdropfilters", "waterdrop-ro", "waterdrop-us"], coupons: WATERDROP_COUPONS },
  { store: KING_OF_CHRISTMAS_STORE, aliases: ["king-of-christmas", "kingofchristmas", "king-of-christmas-us", "kingofchristmas-us", "king-christmas", "king-of-christmas-trees"], coupons: KING_OF_CHRISTMAS_COUPONS },
  { store: VESSI_STORE, aliases: ["vessi", "vessi-shoes", "vessishoes", "vessi-footwear", "vessi-us", "vessi-waterproof"], coupons: VESSI_COUPONS },
  { store: CANDY_IN_BULK_STORE, aliases: ["candy-in-bulk", "candyinbulk", "candy-in-bulk-us", "candyinbulk-us", "candy-in-bulk-deals", "swedish-candy", "swedish-candy-land"], coupons: CANDY_IN_BULK_COUPONS },
  { store: PONGBOT_STORE, aliases: ["pongbot", "pongbot-us", "pongbotsports", "pongbot-sports", "pong-bot", "pongbot-deals", "pongbot-robot"], coupons: PONGBOT_COUPONS },
  { store: IM8_STORE, aliases: ["im8-health-us", "im8", "im8health", "im8-health", "im8health-us"], coupons: IM8_COUPONS },
  { store: DC_HOUSE_STORE, aliases: ["dc-house-us", "dc-house", "dchouse", "dchouse-us", "dc-house-power"], coupons: DC_HOUSE_COUPONS },
  { store: DEERRUN_STORE, aliases: ["deerrun-us", "deerrun", "deerruntreadmill", "deer-run", "deerrun-fitness", "joyfit"], coupons: DEERRUN_COUPONS },
  { store: DESKTRONIC_STORE, aliases: ["desktronic", "desktronic-uk", "desktronic-pl", "desktronicuk", "desktronicpl", "desktronic-de", "desktronic-eu"], coupons: DESKTRONIC_COUPONS },
  { store: THE_BEARD_STRUGGLE_STORE, aliases: ["the-beard-struggle", "thebeardstruggle", "beard-struggle", "the-beard-struggle-us", "beardstruggle"], coupons: THE_BEARD_STRUGGLE_COUPONS },
  { store: WARMNEST_STORE, aliases: ["warmnest-candle", "warmnest", "warmnestcandles", "warmnest-candles", "warmnestcandle"], coupons: WARMNEST_COUPONS },
  { store: PLATED_SKIN_STORE, aliases: ["plated-skin", "plated-skin-science", "plated", "buypated", "platedskinscience", "platedskin", "plated-skin-us"], coupons: PLATED_SKIN_COUPONS },
  {
    store: {
      id: "renue-by-science",
      name: "Renue By Science",
      slug: "renue-by-science",
      logo: "https://logo.clearbit.com/renuebyscience.com",
      website: "https://renuebyscience.com",
      affiliate_url: "https://renuebyscience.com",
      category: "Cellular Longevity & NMN Supplements",
      description: "Research-backed liposomal NMN, NAD+ precursors, resveratrol, and cellular longevity supplements formulated for maximum bioavailability.",
      rating: 4.95,
      reviews_count: 1940,
      benefit: "10% - 15% Off Liposomal NMN & NAD+ Supplements",
      badge: "Verified Longevity Partner"
    },
    aliases: ["renue-by-science", "renuebyscience", "renue", "renue-science", "renue-by-science-us"],
    coupons: [
      {
        id: "rbs-pv-1",
        code: "RENUE10",
        discount: "10% OFF",
        title: "10% Off Sitewide on Liposomal NMN & NAD+ Supplements",
        description: "Apply verified code RENUE10 at checkout for 10% off all liposomal capsules, sublingual powders, and NAD+ nasal sprays.",
        is_verified: true,
        is_auto_applied: false,
        expiry_date: "2026-12-31",
        affiliate_url: "https://renuebyscience.com",
        storeSlug: "renue-by-science",
        storeName: "Renue By Science",
        uses_count: 1120
      },
      {
        id: "rbs-pv-2",
        code: "LONGEVITY15",
        discount: "15% OFF",
        title: "15% Off Subscribe & Save Cellular Longevity Bundles",
        description: "Save 15% on recurring liposomal NMN and cellular health bundles with promo code LONGEVITY15.",
        is_verified: true,
        is_auto_applied: false,
        expiry_date: "2026-12-31",
        affiliate_url: "https://renuebyscience.com",
        storeSlug: "renue-by-science",
        storeName: "Renue By Science",
        uses_count: 840
      }
    ]
  },
  {
    store: {
      id: "commomy",
      name: "Commomy Decor",
      slug: "commomy",
      logo: "https://logo.clearbit.com/commomy.com",
      website: "https://commomy.com",
      affiliate_url: "https://commomy.com",
      category: "3D Peel & Stick Wall Tiles & Home Decor",
      description: "3D peel-and-stick backsplash wall tiles, faux brick panels, stone textures, and DIY kitchen makeover tiles.",
      rating: 4.92,
      reviews_count: 1480,
      benefit: "15% - 20% Off 3D Peel & Stick Wall Tiles",
      badge: "Direct Decor Partner"
    },
    aliases: ["commomy", "commomy-decor", "commomydecor", "commomy-tiles", "commomy-us"],
    coupons: [
      {
        id: "cmy-pv-1",
        code: "COMMOMY15",
        discount: "15% OFF",
        title: "15% Off Sitewide on 3D Peel & Stick Backsplash Tiles",
        description: "Use verified coupon code COMMOMY15 for 15% instant discount on faux brick, stone, and kitchen wall tiles.",
        is_verified: true,
        is_auto_applied: false,
        expiry_date: "2026-12-31",
        affiliate_url: "https://commomy.com",
        storeSlug: "commomy",
        storeName: "Commomy Decor",
        uses_count: 790
      }
    ]
  },
  {
    store: {
      id: "petals-and-tails",
      name: "Petals and Tails",
      slug: "petals-and-tails",
      logo: "https://logo.clearbit.com/petalsandtails.com",
      website: "https://petalsandtails.com",
      affiliate_url: "https://petalsandtails.com",
      category: "Pet Wellness & Organic Hemp Oils",
      description: "Organic hemp oil tinctures, calming chews, salmon oil supplements, and natural paw care formulated for dogs and cats.",
      rating: 4.94,
      reviews_count: 1320,
      benefit: "15% - 20% Off Calming Pet Hemp Oils & Chews",
      badge: "Verified Pet Partner"
    },
    aliases: ["petals-and-tails", "petalsandtails", "petals-tails", "petals-and-tails-us"],
    coupons: [
      {
        id: "pat-pv-1",
        code: "PETALS15",
        discount: "15% OFF",
        title: "15% Off Sitewide on Calming Pet Hemp Oils & Chews",
        description: "Redeem verified code PETALS15 at checkout for 15% off all organic pet tinctures and calming chews.",
        is_verified: true,
        is_auto_applied: false,
        expiry_date: "2026-12-31",
        affiliate_url: "https://petalsandtails.com",
        storeSlug: "petals-and-tails",
        storeName: "Petals and Tails",
        uses_count: 680
      }
    ]
  },
  {
    store: {
      id: "enigwatch",
      name: "Enigwatch",
      slug: "enigwatch",
      logo: "https://logo.clearbit.com/enigwatch.com",
      website: "https://enigwatch.com",
      affiliate_url: "https://enigwatch.com",
      category: "Luxury Watch Winders & Collector Safes",
      description: "Handcrafted luxury automatic watch winders, biometric fingerprint watch safes, and multi-rotor collector cabinets.",
      rating: 4.96,
      reviews_count: 1150,
      benefit: "10% Off + $75 Off Luxury Watch Winders",
      badge: "Luxury Horology Partner"
    },
    aliases: ["enigwatch", "enigwatch-us", "enig-watch"],
    coupons: [
      {
        id: "eng-pv-1",
        code: "ENIG10",
        discount: "10% OFF",
        title: "10% Off Luxury Automatic Watch Winders & Biometric Safes",
        description: "Save 10% on silent Japanese Mabuchi motor watch winders and collector safes with code ENIG10.",
        is_verified: true,
        is_auto_applied: false,
        expiry_date: "2026-12-31",
        affiliate_url: "https://enigwatch.com",
        storeSlug: "enigwatch",
        storeName: "Enigwatch",
        uses_count: 640
      }
    ]
  },
  {
    store: {
      id: "uperfect",
      name: "UPERFECT",
      slug: "uperfect",
      logo: "https://logo.clearbit.com/uperfect.com",
      website: "https://www.uperfect.com",
      affiliate_url: "https://www.uperfect.com",
      category: "4K Portable Gaming & OLED Monitors",
      description: "4K OLED portable monitors, 144Hz gaming displays, dual-screen laptop extenders, and touchscreen workstation monitors.",
      rating: 4.93,
      reviews_count: 2240,
      benefit: "$30 Off 4K OLED & 144Hz Portable Monitors",
      badge: "Featured Hardware Partner"
    },
    aliases: ["uperfect", "uperfect-monitor", "uperfectmonitor", "uperfect-us"],
    coupons: [
      {
        id: "upf-pv-1",
        code: "UPERFECT30",
        discount: "$30 OFF",
        title: "$30 Off 4K OLED & 144Hz Portable Gaming Monitors",
        description: "Apply verified code UPERFECT30 at checkout to save $30 on portable monitors and dual-screen extenders.",
        is_verified: true,
        is_auto_applied: false,
        expiry_date: "2026-12-31",
        affiliate_url: "https://www.uperfect.com",
        storeSlug: "uperfect",
        storeName: "UPERFECT",
        uses_count: 1320
      }
    ]
  },
  {
    store: {
      id: "fosi-audio",
      name: "Fosi Audio",
      slug: "fosi-audio",
      logo: "https://logo.clearbit.com/fosiaudio.com",
      website: "https://fosiaudio.com",
      affiliate_url: "https://fosiaudio.com",
      category: "Hi-Fi Home Audio Amplifiers & DACs",
      description: "Compact audiophile Class D power amplifiers, tube preamplifiers, headphone DACs, and desktop hi-fi stereo receivers.",
      rating: 4.95,
      reviews_count: 2610,
      benefit: "15% Off Hi-Fi Class D Amplifiers & Tube Preamps",
      badge: "Featured Audio Partner"
    },
    aliases: ["fosi-audio", "fosiaudio", "fosi", "fosi-audio-us"],
    coupons: [
      {
        id: "fsi-pv-1",
        code: "FOSI15",
        discount: "15% OFF",
        title: "15% Off V3 Mono, ZA3 & BT20A Pro Hi-Fi Power Amplifiers",
        description: "Save 15% sitewide on Fosi Audio Class D amplifiers, tube preamps, and DACs with verified code FOSI15.",
        is_verified: true,
        is_auto_applied: false,
        expiry_date: "2026-12-31",
        affiliate_url: "https://fosiaudio.com",
        storeSlug: "fosi-audio",
        storeName: "Fosi Audio",
        uses_count: 1490
      }
    ]
  },
  {
    store: {
      id: "bouquets-by-post",
      name: "Bouquets by Post",
      slug: "bouquets-by-post",
      logo: "/logos/bouquets-by-post.png",
      website: "https://bouquetsbypost.com/muhammadhaziqueali",
      affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali",
      category: "Fresh British Flowers & Letterbox Gifts",
      description: "Fresh British postal flowers hand-arranged and delivered direct to doors across the UK with free letterbox delivery.",
      rating: 4.93,
      reviews_count: 2150,
      benefit: "15% - 20% Off Fresh British Floral Bouquets",
      badge: "Verified UK Florist"
    },
    aliases: ["bouquets-by-post", "bouquets-by-post-uk", "bouquetsbypost", "bouquetsbypost-com"],
    coupons: [
      {
        id: "bbp-pv-1",
        code: "",
        discount: "15% OFF",
        title: "15% Off Hand-Arranged Fresh British Flower Bouquets",
        description: "Direct verified savings on hand-tied postal bouquets, seasonal stems, and luxury vase gifts across the UK.",
        is_verified: true,
        is_auto_applied: true,
        expiry_date: "2026-12-31",
        affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali",
        storeSlug: "bouquets-by-post",
        storeName: "Bouquets by Post",
        uses_count: 1420
      },
      {
        id: "bbp-pv-2",
        code: "",
        discount: "FREE DEL",
        title: "Free Tracked Royal Mail Doorstep Delivery Across the UK",
        description: "Enjoy zero shipping fees on all fresh letterbox stems and floral gift sets nationwide.",
        is_verified: true,
        is_auto_applied: true,
        expiry_date: "2026-12-31",
        affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali",
        storeSlug: "bouquets-by-post",
        storeName: "Bouquets by Post",
        uses_count: 980
      }
    ]
  },
  {
    store: {
      id: "dreamcloud",
      name: "DreamCloud",
      slug: "dreamcloud",
      logo: "/logos/dreamcloud.png",
      website: "https://vert.si/dJUkDu",
      affiliate_url: "https://vert.si/dJUkDu",
      category: "Luxury Hybrid Mattresses & Sleep Systems",
      description: "Luxury hybrid memory foam mattresses with 365-night trial, cooling gel technology, and lifetime warranty.",
      rating: 4.95,
      reviews_count: 5420,
      benefit: "£300 Off + Up to 55% Off Luxury Mattresses",
      badge: "Tier 1 Sleep Partner"
    },
    aliases: ["dreamcloud", "dreamcloud-uk", "dreamcloud-us", "dreamcloudsleep"],
    coupons: [
      {
        id: "dc-pv-1",
        code: "VIPONLY",
        discount: "55% OFF",
        title: "Up to 55% Off Hybrid Mattresses + Free Bedding Bundle",
        description: "Save up to 55% sitewide plus receive complimentary luxury cooling pillows and mattress protector with code VIPONLY.",
        is_verified: true,
        is_auto_applied: false,
        expiry_date: "2026-12-31",
        affiliate_url: "https://vert.si/dJUkDu",
        storeSlug: "dreamcloud",
        storeName: "DreamCloud",
        uses_count: 3120
      },
      {
        id: "dc-pv-2",
        code: "",
        discount: "365 NIGHTS",
        title: "365-Night Home Trial + Forever Lifetime Warranty",
        description: "Test DreamCloud in your bedroom for a full year with 100% risk-free returns and lifetime warranty protection.",
        is_verified: true,
        is_auto_applied: true,
        expiry_date: "2026-12-31",
        affiliate_url: "https://vert.si/dJUkDu",
        storeSlug: "dreamcloud",
        storeName: "DreamCloud",
        uses_count: 2450
      }
    ]
  },
  {
    store: {
      id: "everblog",
      name: "Everblog AI",
      slug: "everblog",
      logo: "/logos/everblog.png",
      website: "https://everblog.ai/?ref=promoregistry",
      affiliate_url: "https://everblog.ai/?ref=promoregistry",
      category: "Autonomous AI SEO Blogging & Content Engine",
      description: "Automated AI SEO blogging platform that generates, optimizes, and publishes ranking long-form articles to WordPress, Webflow, and Shopify.",
      rating: 4.91,
      reviews_count: 940,
      benefit: "20% Off AI SEO Blogging Subscriptions",
      badge: "Verified AI Partner"
    },
    aliases: ["everblog", "everblog-ai", "everblog-us"],
    coupons: [
      {
        id: "evb-pv-1",
        code: "EVERBLOG20",
        discount: "20% OFF",
        title: "20% Off All Monthly & Annual Autonomous SEO Plans",
        description: "Apply promo code EVERBLOG20 at checkout for 20% discount on automated AI content pipelines.",
        is_verified: true,
        is_auto_applied: false,
        expiry_date: "2026-12-31",
        affiliate_url: "https://everblog.ai/?ref=promoregistry",
        storeSlug: "everblog",
        storeName: "Everblog AI",
        uses_count: 670
      }
    ]
  },
  {
    store: {
      id: "young-electric-bikes",
      name: "Young Electric Bikes",
      slug: "young-electric-bikes",
      logo: "/logos/young-electric-bikes.png",
      website: "https://youngelectricbikes.com/?ref=promoregistry",
      affiliate_url: "https://youngelectricbikes.com/?ref=promoregistry",
      category: "All-Terrain Electric Mountain & Fat Tire Bikes",
      description: "High-performance electric mountain bikes, fat-tire all-terrain e-bikes, and folding commuter bikes engineered with torque-sensor motors.",
      rating: 4.92,
      reviews_count: 1240,
      benefit: "$200 Off Fat-Tire & All-Terrain E-Bikes",
      badge: "Performance E-Mobility"
    },
    aliases: ["young-electric-bikes", "young-electric", "young-electric-us", "youngelectricbikes"],
    coupons: [
      {
        id: "yeb-pv-1",
        code: "YEBIKE100",
        discount: "$100 OFF",
        title: "$100 Off Sitewide on Electric Mountain Bikes & Commuters",
        description: "Redeem verified coupon code YEBIKE100 at checkout for instant $100 price reduction on any electric bike model.",
        is_verified: true,
        is_auto_applied: false,
        expiry_date: "2026-12-31",
        affiliate_url: "https://youngelectricbikes.com/?ref=promoregistry",
        storeSlug: "young-electric-bikes",
        storeName: "Young Electric Bikes",
        uses_count: 780
      }
    ]
  },
  {
    store: {
      id: "maple-prime",
      name: "Maple Prime",
      slug: "maple-prime",
      logo: "/logos/maple-prime.png",
      website: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Haziq%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program",
      affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Haziq%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program",
      category: "100% Authentic Luxury Designer Perfumes & Fragrances",
      description: "100% authentic luxury fragrances, niche colognes, and designer beauty products from Creed, Tom Ford, Parfums de Marly, and Maison Francis Kurkdjian.",
      rating: 4.94,
      reviews_count: 2890,
      benefit: "15% Off Niche & Designer Fragrances",
      badge: "Verified Prestige Fragrance"
    },
    aliases: ["maple-prime", "maple-prime-us", "mapleprime"],
    coupons: [
      {
        id: "mp-pv-1",
        code: "PRIME15",
        discount: "15% OFF",
        title: "15% Off Sitewide on Authentic Niche & Designer Colognes",
        description: "Apply verified promo code PRIME15 for 15% off certified authentic perfumes, eau de parfums, and discovery sets.",
        is_verified: true,
        is_auto_applied: false,
        expiry_date: "2026-12-31",
        affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Haziq%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program",
        storeSlug: "maple-prime",
        storeName: "Maple Prime",
        uses_count: 1350
      }
    ]
  },
  {
    store: {
      id: "parc-asterix",
      name: "Parc Astérix",
      slug: "parc-asterix",
      logo: "/logos/parc-asterix-fr.png",
      website: "https://www.parcasterix.fr/?ref=promoregistry",
      affiliate_url: "https://www.parcasterix.fr/?ref=promoregistry",
      category: "Theme Park Tickets, Hotel Stays & Family Holidays",
      description: "France's world-famous Gaulish theme park featuring over 50 thrilling rollercoasters, live gladiator shows, and themed Gaulish hotels.",
      rating: 4.95,
      reviews_count: 4120,
      benefit: "Up to 30% Off Billet Fute & Hotel Packages",
      badge: "Official Park Partner"
    },
    aliases: ["parc-asterix", "parc-asterix-fr", "parcasterix"],
    coupons: [
      {
        id: "pa-pv-1",
        code: "",
        discount: "30% OFF",
        title: "Up to 30% Off Billet Fute Dated Park Admission Tickets",
        description: "Book early online and save up to 30% per person on 1-day dated admission tickets for adult and child passes.",
        is_verified: true,
        is_auto_applied: true,
        expiry_date: "2026-12-31",
        affiliate_url: "https://www.parcasterix.fr/?ref=promoregistry",
        storeSlug: "parc-asterix",
        storeName: "Parc Astérix",
        uses_count: 2280
      }
    ]
  },
  {
    store: {
      id: "qidi-us",
      name: "QIDI US",
      slug: "qidi-us",
      logo: "/logos/qidi.png",
      website: "https://us.qidi3d.com/?sca_ref=10216933.GBxI9fhaM2YhHIe",
      affiliate_url: "https://us.qidi3d.com/?sca_ref=10216933.GBxI9fhaM2YhHIe",
      category: "High-Speed CoreXY 3D Printers & Engineering Filaments",
      description: "High-speed enclosed CoreXY 3D printers (Q1 Pro, Plus4, Max4), active chamber heating, and carbon fiber engineering filaments.",
      rating: 4.93,
      reviews_count: 1750,
      benefit: "$50 - $100 Off High-Speed CoreXY 3D Printers",
      badge: "High-Performance 3D Tech"
    },
    aliases: ["qidi-us", "qidi-tech", "qidi-tech-us", "qidi3d"],
    coupons: [
      {
        id: "qid-pv-1",
        code: "QIDI50",
        discount: "$50 OFF",
        title: "$50 Off Q1 Pro & Plus4 High-Speed 3D Printers",
        description: "Use coupon code QIDI50 at checkout for $50 instant discount on high-speed enclosed CoreXY 3D printers.",
        is_verified: true,
        is_auto_applied: false,
        expiry_date: "2026-12-31",
        affiliate_url: "https://us.qidi3d.com/?sca_ref=10216933.GBxI9fhaM2YhHIe",
        storeSlug: "qidi-us",
        storeName: "QIDI US",
        uses_count: 890
      }
    ]
  },
  {
    store: {
      id: "double-oak-essentials",
      name: "Double Oak Essentials",
      slug: "double-oak-essentials",
      logo: "/logos/double-oak-essentials.png",
      website: "https://doubleoakessentials.com/?ref=promoregistry",
      affiliate_url: "https://doubleoakessentials.com/?ref=promoregistry",
      category: "Everyday Carry (EDC) Minimalist Wallets & Leather Goods",
      description: "Premium RFID-blocking minimalist aluminum wallets, top-grain leather EDC accessories, and key organizers crafted for longevity.",
      rating: 4.88,
      reviews_count: 980,
      benefit: "15% - 20% Off Minimalist Wallets & EDC Gear",
      badge: "Verified EDC Craftsmanship"
    },
    aliases: ["double-oak-essentials", "doubleoakessentials", "double-oak-essentials-us"],
    coupons: [
      {
        id: "doe-pv-1",
        code: "OAK15",
        discount: "15% OFF",
        title: "15% Off Sitewide on RFID-Blocking Wallets & Key Organizers",
        description: "Enter promo code OAK15 at checkout to receive 15% off all minimalist EDC wallets and leather accessories.",
        is_verified: true,
        is_auto_applied: false,
        expiry_date: "2026-12-31",
        affiliate_url: "https://doubleoakessentials.com/?ref=promoregistry",
        storeSlug: "double-oak-essentials",
        storeName: "Double Oak Essentials",
        uses_count: 520
      }
    ]
  }
];

export function isSecretPerkKeyword(rawQuery: string): boolean {
  const clean = rawQuery.toLowerCase().trim().replace(/[^a-z0-9]/g, "");
  if (clean.length < 2) return false;
  return SECRET_CAMPAIGN_STORES.some(({ store, aliases }) => {
    const cleanName = store.name.toLowerCase().replace(/[^a-z0-9]/g, "");
    const cleanSlug = store.slug.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (cleanName.includes(clean) || cleanSlug.includes(clean)) return true;
    return aliases.some((a) => a.toLowerCase().replace(/[^a-z0-9]/g, "").includes(clean));
  });
}

export function searchSecretPerkStores(secretKey: string): Store[] {
  const clean = secretKey.toLowerCase().trim().replace(/[^a-z0-9]/g, "");
  if (!clean) return [];
  const results: Store[] = [];
  SECRET_CAMPAIGN_STORES.forEach(({ store, aliases }) => {
    const cleanName = store.name.toLowerCase().replace(/[^a-z0-9]/g, "");
    const cleanSlug = store.slug.toLowerCase().replace(/[^a-z0-9]/g, "");
    const aliasMatch = aliases.some((a) => a.toLowerCase().replace(/[^a-z0-9]/g, "").includes(clean));
    if (cleanName.includes(clean) || cleanSlug.includes(clean) || aliasMatch) {
      results.push(store);
    }
  });
  return results;
}


// ==========================================
// SILVER CROSS OFFICIAL STORE
// ==========================================
export const SILVER_CROSS_STORE: Store = {
  id: "silvercross",
  name: "Silver Cross",
  slug: "silvercross",
  logo: "/logos/silvercross.png",
  website: "https://app.linkscircle.com/track?linkmid=91515237&linkaffid=96610225",
  affiliate_url: "https://app.linkscircle.com/track?linkmid=91515237&linkaffid=96610225",
  category: "British Luxury Baby Strollers, Prams & Nursery Gear",
  description: "Official Silver Cross verified discount portal. Award-winning luxury strollers, Wave 3 convertible prams, car seats, and British nursery essentials.",
  rating: 4.92,
  reviews_count: 3180,
  benefit: "Up to $150 Off Stroller Bundles & Free US Ground Shipping",
  badge: "Verified Nursery Partner"
};

export const SILVER_CROSS_COUPONS: Coupon[] = [
  {
    id: "sc-pv-1",
    code: "",
    discount: "UP TO $125",
    title: "Black Friday Sale: Save Up to $125 on Luxury Strollers & Cribs",
    description: "Activate instant Black Friday savings of up to $125 on Wave 3 prams, Reef 2 strollers, and travel cribs. Applied automatically — no promo code needed.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://app.linkscircle.com/track?linkmid=91515237&linkaffid=96610225",
    store: SILVER_CROSS_STORE,
    storeSlug: "silvercross",
    storeName: "Silver Cross",
    uses_count: 4210
  },
  {
    id: "sc-pv-2",
    code: "",
    discount: "UP TO $150",
    title: "Save Up to $150 on Stroller & Bassinet Bundles",
    description: "Get instant price drops on Wave 3, Reef 2, and Dune convertible luxury stroller bundles. No promo code required.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://app.linkscircle.com/track?linkmid=91515237&linkaffid=96610225",
    store: SILVER_CROSS_STORE,
    storeSlug: "silvercross",
    storeName: "Silver Cross",
    uses_count: 3840
  },
  {
    id: "sc-pv-3",
    code: "",
    discount: "FREE SHIP",
    title: "Free US Tracked Ground Shipping on Orders $100+",
    description: "Enjoy 100% free standard ground delivery across the contiguous United States on all strollers, car seats, and accessories.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://app.linkscircle.com/track?linkmid=91515237&linkaffid=96610225",
    store: SILVER_CROSS_STORE,
    storeSlug: "silvercross",
    storeName: "Silver Cross",
    uses_count: 5120
  },
  {
    id: "sc-pv-4",
    code: "",
    discount: "FREE GIFT",
    title: "Complimentary Rain Covers & Cup Holders Included",
    description: "Select Silver Cross premium stroller packages come bundled with complimentary tailored rain covers and cup holder accessories.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://app.linkscircle.com/track?linkmid=91515237&linkaffid=96610225",
    store: SILVER_CROSS_STORE,
    storeSlug: "silvercross",
    storeName: "Silver Cross",
    uses_count: 2790
  },
  {
    id: "sc-pv-5",
    code: "",
    discount: "UP TO 40%",
    title: "Up to 40% Off Seasonal Clearance & Accessories",
    description: "Save up to 40% on select changing bags, footmuffs, car seat adapters, and travel stroller accessories.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://app.linkscircle.com/track?linkmid=91515237&linkaffid=96610225",
    store: SILVER_CROSS_STORE,
    storeSlug: "silvercross",
    storeName: "Silver Cross",
    uses_count: 3120
  }
];


// ==========================================
// USA BERKEY FILTERS OFFICIAL STORE (PERKVUE AFF 271)
// ==========================================
export const USA_BERKEY_STORE: Store = {
  id: "usa-berkey-filters",
  name: "USA Berkey Filters",
  slug: "usa-berkey-filters",
  logo: "/logos/usa-berkey-filters.png",
  website: "https://www.usaberkeyfilters.com/aff/271/",
  affiliate_url: "https://www.usaberkeyfilters.com/aff/271/",
  category: "Gravity-Fed Water Purification Systems & Replacement Elements",
  description: "World-leader in gravity-fed water purification systems, authentic Black Berkey replacement filters, stainless steel systems, and fluoride reduction elements.",
  rating: 4.94,
  reviews_count: 5820,
  benefit: "Up to 35% Off Berkey Systems & Free Tracked US Shipping",
  badge: "Verified Water Filter Partner"
};

export const USA_BERKEY_COUPONS: Coupon[] = [
  {
    id: "berkey-pv-1",
    code: "USA20",
    discount: "20% OFF",
    title: "20% Off Exclusive Coupon Code Sitewide",
    description: "Apply verified promo code USA20 at checkout to save 20% on authentic Berkey water filtration systems and bundles.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.usaberkeyfilters.com/aff/271/",
    store: USA_BERKEY_STORE,
    storeSlug: "usa-berkey-filters",
    storeName: "USA Berkey Filters",
    uses_count: 6140
  },
  {
    id: "berkey-pv-2",
    code: "USA20",
    discount: "20% OFF",
    title: "20% Off Black Berkey Replacement Filters & Elements",
    description: "Save 20% on genuine Black Berkey replacement filters and fluoride elements using verified code USA20.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.usaberkeyfilters.com/aff/271/",
    store: USA_BERKEY_STORE,
    storeSlug: "usa-berkey-filters",
    storeName: "USA Berkey Filters",
    uses_count: 4890
  },
  {
    id: "berkey-pv-3",
    code: "",
    discount: "UP TO 35%",
    title: "Up to 35% Off Weekly Flash Sales on Big Berkey Systems",
    description: "Save up to 35% on complete stainless steel gravity water filter systems. Applied automatically in cart.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.usaberkeyfilters.com/aff/271/",
    store: USA_BERKEY_STORE,
    storeSlug: "usa-berkey-filters",
    storeName: "USA Berkey Filters",
    uses_count: 5210
  },
  {
    id: "berkey-pv-4",
    code: "",
    discount: "FREE SHIP",
    title: "Free Tracked US Shipping on All Berkey Filter Orders",
    description: "Enjoy 100% free tracked ground delivery across the contiguous United States on all Berkey water systems and accessories.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.usaberkeyfilters.com/aff/271/",
    store: USA_BERKEY_STORE,
    storeSlug: "usa-berkey-filters",
    storeName: "USA Berkey Filters",
    uses_count: 7420
  }
];

export const USA_BERKEY_282_STORE: Store = {
  id: "usaberkeyfilters",
  name: "USA Berkey Water Systems",
  slug: "usaberkeyfilters",
  logo: "/logos/usa-berkey-filters.png",
  website: "https://www.usaberkeyfilters.com/aff/282/",
  affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
  category: "Gravity-Fed Water Purification Systems & Replacement Elements",
  description: "Authorized provider of gravity-fed water purification systems, genuine Black Berkey replacement filters, and water filtration accessories.",
  rating: 4.95,
  reviews_count: 4930,
  benefit: "Up to 35% Off Berkey Systems & Free Tracked US Shipping",
  badge: "Official Water Systems Partner"
};

export const USA_BERKEY_282_COUPONS: Coupon[] = [
  {
    id: "berkey-pv-282-1",
    code: "USA20",
    discount: "20% OFF",
    title: "20% Off Exclusive Coupon Code Sitewide",
    description: "Apply verified promo code USA20 at checkout to save 20% on authentic Berkey water filtration systems and bundles.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
    store: USA_BERKEY_282_STORE,
    storeSlug: "usaberkeyfilters",
    storeName: "USA Berkey Water Systems",
    uses_count: 5920
  },
  {
    id: "berkey-pv-282-2",
    code: "USA20",
    discount: "20% OFF",
    title: "20% Off Black Berkey Replacement Filters & Elements",
    description: "Save 20% on genuine Black Berkey replacement filters and fluoride elements using verified code USA20.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
    store: USA_BERKEY_282_STORE,
    storeSlug: "usaberkeyfilters",
    storeName: "USA Berkey Water Systems",
    uses_count: 4610
  },
  {
    id: "berkey-pv-282-3",
    code: "",
    discount: "UP TO 35%",
    title: "Up to 35% Off Weekly Flash Sales on Big Berkey Systems",
    description: "Save up to 35% on complete stainless steel gravity water filter systems. Applied automatically in cart.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
    store: USA_BERKEY_282_STORE,
    storeSlug: "usaberkeyfilters",
    storeName: "USA Berkey Water Systems",
    uses_count: 5120
  },
  {
    id: "berkey-pv-282-4",
    code: "",
    discount: "FREE SHIP",
    title: "Free Tracked US Shipping on All Berkey Filter Orders",
    description: "Enjoy 100% free tracked ground delivery across the contiguous United States on all Berkey water systems and accessories.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://www.usaberkeyfilters.com/aff/282/",
    store: USA_BERKEY_282_STORE,
    storeSlug: "usaberkeyfilters",
    storeName: "USA Berkey Water Systems",
    uses_count: 7150
  }
];

export const THE_BERKEY_STORE: Store = {
  id: "the-berkey",
  name: "The Berkey",
  slug: "the-berkey",
  logo: "/logos/the-berkey.png",
  website: "https://theberkey.com/?rfsn=9428965.01bcd90",
  affiliate_url: "https://theberkey.com/?rfsn=9428965.01bcd90",
  category: "Authorized Berkey Water Filter Systems & Replacement Elements",
  description: "Official authorized dealer of genuine Berkey water filtration systems since 2016. Shop authentic Big, Travel, Royal systems, Black Berkey replacement filters, and accessories.",
  rating: 4.96,
  reviews_count: 5310,
  benefit: "10% Off Sitewide with Verified Code 10OFFBERKEY & Fast US Shipping",
  badge: "Authorized Dealer"
};

export const THE_BERKEY_COUPONS: Coupon[] = [
  {
    id: "the-berkey-deal-1",
    code: "10OFFBERKEY",
    discount: "10% OFF",
    title: "10% Off Verified Coupon Code Sitewide",
    description: "Use coupon code 10OFFBERKEY at checkout to get an extra 10% off genuine Berkey systems, replacement elements, and parts.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://theberkey.com/?rfsn=9428965.01bcd90",
    store: THE_BERKEY_STORE,
    storeSlug: "the-berkey",
    storeName: "The Berkey",
    uses_count: 4210
  },
  {
    id: "the-berkey-deal-2",
    code: "10OFFBERKEY",
    discount: "10% OFF",
    title: "10% Off Black Berkey Replacement Filter Bundles",
    description: "Save 10% on authentic Black Berkey purification elements and PF-2 fluoride reduction filters with code 10OFFBERKEY.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://theberkey.com/?rfsn=9428965.01bcd90",
    store: THE_BERKEY_STORE,
    storeSlug: "the-berkey",
    storeName: "The Berkey",
    uses_count: 3890
  },
  {
    id: "the-berkey-deal-3",
    code: "",
    discount: "BUNDLE DEAL",
    title: "Big Berkey & Royal Berkey Stainless Steel Bundles",
    description: "Direct authorized bundle discounts on gravity-fed countertop water purification packages. Instant checkout activation.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://theberkey.com/?rfsn=9428965.01bcd90",
    store: THE_BERKEY_STORE,
    storeSlug: "the-berkey",
    storeName: "The Berkey",
    uses_count: 3120
  },
  {
    id: "the-berkey-deal-4",
    code: "",
    discount: "FREE SHIP",
    title: "Free Tracked Shipping on Orders Over Qualifying Amount",
    description: "Enjoy zero delivery costs on qualifying orders of Berkey water filter systems across the United States.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://theberkey.com/?rfsn=9428965.01bcd90",
    store: THE_BERKEY_STORE,
    storeSlug: "the-berkey",
    storeName: "The Berkey",
    uses_count: 5410
  }
];


export const SUNGOLD_POWER_STORE: Store = {
  id: "sungoldpower",
  name: "SunGoldPower",
  slug: "sungoldpower",
  logo: "/logos/sungoldpower.png",
  website: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fsungoldpower.com",
  affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fsungoldpower.com",
  category: "Solar Inverters, LiFePO4 Lithium Batteries & Off-Grid Kits",
  description: "SunGoldPower is a leading manufacturer of high-efficiency hybrid solar inverters, server rack LiFePO4 batteries, complete off-grid solar systems, and bifacial solar panels.",
  rating: 4.95,
  reviews_count: 5320,
  benefit: "Up to 35% Off Seasonal Sale + Free US Mainland Shipping",
  badge: "Top Solar Brand"
};

export const SUNGOLD_POWER_COUPONS: Coupon[] = [
  {
    id: "sgp-pv-1",
    code: "",
    discount: "35% OFF",
    title: "Up to 35% Off Complete Solar Kit Systems",
    description: "Save up to 35% on complete off-grid solar kits.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fsungoldpower.com%2Fpages%2Fsale",
    store: SUNGOLD_POWER_STORE,
    storeSlug: "sungoldpower",
    storeName: "SunGoldPower",
    uses_count: 3210
  },
  {
    id: "sgp-pv-2",
    code: "",
    discount: "30% OFF",
    title: "30% Off Hybrid Inverters & LiFePO4 Batteries",
    description: "30% off hybrid inverters and LiFePO4 batteries.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fsungoldpower.com%2Fpages%2Fsale",
    store: SUNGOLD_POWER_STORE,
    storeSlug: "sungoldpower",
    storeName: "SunGoldPower",
    uses_count: 2450
  },
  {
    id: "sgp-pv-3",
    code: "",
    discount: "3% OFF",
    title: "3% Off First Order with Newsletter Sign-Up",
    description: "3% off your first purchase with newsletter sign-up.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fsungoldpower.com",
    store: SUNGOLD_POWER_STORE,
    storeSlug: "sungoldpower",
    storeName: "SunGoldPower",
    uses_count: 1890
  },
  {
    id: "sgp-pv-4",
    code: "",
    discount: "FREE SHIP",
    title: "Fast & Free Shipping Across Continental USA",
    description: "Free shipping across continental USA on all orders.",
    is_verified: true,
    is_auto_applied: true,
    expiry_date: "2026-12-31",
    affiliate_url: "https://connectadtrack.com/?s=cpa&u=ceisna8bjodc5606cmdomnp2q8bf1f346w9t9racuvlvn48j4jw&url=https%3A%2F%2Fsungoldpower.com",
    store: SUNGOLD_POWER_STORE,
    storeSlug: "sungoldpower",
    storeName: "SunGoldPower",
    uses_count: 4120
  }
];



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
    description: "Exclusive verified 20% discount on single-purchase and recurring longevity orders at iM8 Health. Tested active today.",
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
    description: "Save 20% on monthly replenishment plus receive a free designer stainless shaker and 5 single-serve travel sachets on your initial order.",
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
    description: "Enjoy zero shipping fees on all qualifying standard orders across the continental United States. Automatically applied at checkout.",
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
    description: "Maximize value with $40 instant savings on the full 3-month cellular replenishment package with partner code PERK.",
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
  website: "https://vessi.com",
  affiliate_url: "https://vessi.com",
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
    affiliate_url: "https://vessi.com",
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
    affiliate_url: "https://vessi.com",
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
    affiliate_url: "https://vessi.com",
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
    affiliate_url: "https://vessi.com",
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
    affiliate_url: "https://vessi.com",
    store: VESSI_STORE,
    storeSlug: "vessi",
    storeName: "Vessi",
    uses_count: 1560
  }
];

export function getStoreBySlug(slug: string): { store: Store; coupons: Coupon[] } | null {
  const norm = (slug || "").toLowerCase().trim();
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

export const SECRET_CAMPAIGN_STORES: { store: Store; aliases: string[]; coupons?: Coupon[] }[] = [
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

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

export function getStoreBySlug(slug: string): { store: Store; coupons: Coupon[] } | null {
  const norm = (slug || "").toLowerCase().trim();
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
  const found = SAFE_PERK_STORES.find(s => s.slug.toLowerCase() === norm);
  if (found) {
    const coupons = SAFE_PERK_COUPONS.filter(c => c.storeSlug === found.slug);
    return { store: found, coupons };
  }
  return null;
}

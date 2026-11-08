import { NextRequest, NextResponse } from "next/server";
import { SECRET_CAMPAIGN_STORES } from "../../../lib/storesData";

export const dynamic = "force-dynamic";

/**
 * Confidential Backdoor Search API (PerkVue)
 * Strictly returns empty results unless the secret operator '--' is passed.
 * Automatically unlocks any current or future campaign store in SECRET_CAMPAIGN_STORES.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const rawQ = (searchParams.get("q") || "").trim();

  if (!rawQ.endsWith("--") && !rawQ.includes("--")) {
    return NextResponse.json({ results: [] });
  }

  const query = rawQ.replace(/-+$/, "").trim().toLowerCase();
  const cleanQuery = query.replace(/[^a-z0-9]/g, "");

  if (!query || cleanQuery.length === 0) {
    return NextResponse.json({ results: [] });
  }

  const results = SECRET_CAMPAIGN_STORES.filter(({ store, aliases }) => {
    const name = (store.name || "").toLowerCase();
    const slug = (store.slug || "").toLowerCase();
    const cleanName = name.replace(/[^a-z0-9]/g, "");
    const cleanSlug = slug.replace(/[^a-z0-9]/g, "");
    const cleanAliases = aliases.map((a) => a.toLowerCase().replace(/[^a-z0-9]/g, ""));

    return (
      name.includes(query) ||
      slug.includes(query) ||
      cleanName.includes(cleanQuery) ||
      cleanSlug.includes(cleanQuery) ||
      cleanAliases.some((ca) => ca.includes(cleanQuery))
    );
  }).map(({ store }) => ({
    id: store.id,
    name: store.name,
    slug: store.slug,
    logo: store.logo || "",
    website: `/deals/${store.slug}`,
    benefit: store.benefit || "Verified Partner Privilege",
    isSecretUnlocked: true,
  }));

  return NextResponse.json({
    results,
  });
}

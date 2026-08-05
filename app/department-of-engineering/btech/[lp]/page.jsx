import Skeleton from "../skeleton";
import { lpMap, lpSlugs } from "../lpData";

/**
 * Single source for all B.Tech Google Ads landing pages.
 *
 * Replaces 32 hand-copied folders (lp1 ... lp32) that were identical apart
 * from one keyword string. generateStaticParams below pre-renders exactly
 * the same 32 URLs at build time, so the live paths are unchanged and no
 * redirects are needed:
 *
 *   /department-of-engineering/btech/lp1/  ...  /lp32/
 *
 * To add a variant, add an entry to lpData.js -- do not create a new folder.
 */

// Only the slugs listed in lpData.js are valid. Anything else 404s instead
// of trying to render at runtime with an undefined keyword.
export const dynamicParams = false;

export function generateStaticParams() {
  return lpSlugs.map((lp) => ({ lp }));
}

export default function Page({ params }) {
  const entry = lpMap[params.lp];

  // lp1 had no title prop and relied on the Skeleton default, so only pass
  // the prop when a keyword is actually defined.
  return entry?.keyword ? <Skeleton title={entry.keyword} /> : <Skeleton />;
}

/**
 * Google Ads landing page variants for B.Tech.
 *
 * Each entry becomes a real, statically generated page at
 *   /department-of-engineering/btech/<slug>/
 * built from app/department-of-engineering/btech/[lp]/page.jsx.
 *
 * These were previously 32 hand-copied folders (lp1 ... lp32) whose only
 * difference was the `keyword` string below. Adding a new variant is now a
 * one-line change here -- do NOT create new lpN folders.
 *
 * FIELDS
 *   keyword    Headline text passed to <Skeleton title={...} />.
 *              `null` uses the Skeleton component's own default.
 *   metaTitle  OPTIONAL. Overrides the browser/tab <title> for this variant.
 *              Left unset everywhere on purpose so this refactor does not
 *              change any existing behaviour. To give each keyword its own
 *              title (better Google Ads Quality Score), just add the field:
 *                  lp2: { keyword: "...", metaTitle: "B.Tech CSE Admissions 2026" },
 */

export const DEFAULT_LP_TITLE = "Admissions 2026 | Tulas University, Dehradun";

export const lpMap = {
  lp1: { keyword: null },
  lp2: { keyword: "computer science engineering" },
  lp3: { keyword: "computer science and engineering" },
  lp4: { keyword: "btech in computer science engineering" },
  lp5: { keyword: "BTech Computer Science Engineering – Admissions 2026" },
  lp6: { keyword: "BTech in Computer Science" },
  lp7: { keyword: "BTech in Computer Science at Tulas" },
  lp8: { keyword: "Best BTech in computer science" },
  lp9: { keyword: "computer science and engg" },
  lp10: { keyword: "Computer Science Engineering (CSE)" },
  lp11: { keyword: "Computer Science Engineering Course" },
  lp12: { keyword: "BTech in Computer Science Engineering (CSE)" },
  lp13: { keyword: "BTech cse with AI & ML" },
  lp14: { keyword: "Computer Science Degree at Tulas" },
  lp15: { keyword: "BTech computer science engineering course" },
  lp16: { keyword: "computer science and engineering course" },
  lp17: { keyword: "CSE engineering course" },
  lp18: { keyword: "Best Engineering College in Dehradun" },
  lp19: { keyword: "Best Engineering College" },
  lp20: { keyword: "BTech admission 2026" },
  lp21: { keyword: "Best private engineering college" },
  lp22: { keyword: "Engineering college admissions open" },
  lp23: { keyword: "Top engineering colleges in India" },
  lp24: { keyword: "Private engineering college admission" },
  lp25: { keyword: "AI engineering" },
  lp26: { keyword: "artificial intelligence engineering" },
  lp27: { keyword: "artificial intelligence course" },
  lp28: { keyword: "AI ML course" },
  lp29: { keyword: "machine intelligence course" },
  lp30: { keyword: "machine learning course" },
  lp31: { keyword: "data science engineering" },
  lp32: { keyword: "btech data science" },
};

export const lpSlugs = Object.keys(lpMap);

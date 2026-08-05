import { lpMap, DEFAULT_LP_TITLE } from "../lpData";

/**
 * Metadata for the landing page variants.
 *
 * Behaviour is intentionally identical to the 32 old layout.js files: every
 * variant currently returns the same title and noindex/follow. Set `metaTitle`
 * on an entry in lpData.js to give that keyword its own title.
 */
export function generateMetadata({ params }) {
  const entry = lpMap[params.lp];

  return {
    title: entry?.metaTitle ?? DEFAULT_LP_TITLE,
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function Layout({ children }) {
  return children;
}

import ThankYou from "@/component/thankYou";
import React from "react";
import { lpSlugs } from "../../lpData";

/**
 * Post-submission page for each landing page variant, e.g.
 *   /department-of-engineering/btech/lp7/thank-you/
 *
 * generateStaticParams is declared here as well as on the parent page so
 * that all 32 thank-you URLs are pre-rendered at build time, exactly as the
 * old lpN/thank-you folders were.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return lpSlugs.map((lp) => ({ lp }));
}

function Page() {
  return <ThankYou />;
}

export default Page;

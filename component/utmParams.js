"use client";
import React, { createContext, useState, useEffect } from "react";

// Create the context
export const UtmContext = createContext();

// Create the provider component
export const UtmProvider = ({ children }) => {
  const [utmParams, setUtmParams] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmParamsString = params.toString();
    if (utmParamsString) {
      setUtmParams(`?${utmParamsString}`);
    }
  }, []);

  return (
    <UtmContext.Provider value={{ utmParams }}>{children}</UtmContext.Provider>
  );
};

/**
 * Builds an internal href with exactly one trailing slash before the query
 * string. next.config.mjs sets `trailingSlash: true`, so link values that
 * already end in "/" used to produce URLs like "/grievance//?utm_source=x".
 * Those duplicate-slash URLs are separate, non-canonical URLs that crawlers
 * report as broken or redirecting, so they must never be emitted.
 *
 * External links, mail/tel links, anchors and imported asset paths (PDFs)
 * are returned untouched.
 */
export const buildHref = (linkTo, utmParams = "") => {
  if (typeof linkTo !== "string" || !linkTo) return linkTo;

  // Leave anything that is not an internal site path alone.
  if (!linkTo.startsWith("/") || linkTo.startsWith("//")) return linkTo;

  // Don't rewrite direct file links (PDFs, images, .html, etc.).
  const [rawPath, rawQuery = ""] = linkTo.split("?");
  if (/\.[a-z0-9]{2,5}$/i.test(rawPath)) return linkTo;

  const path = `${rawPath.replace(/\/+$/, "")}/`;
  const utmQuery = utmParams ? utmParams.replace(/^\?/, "") : "";
  const query = [rawQuery, utmQuery].filter(Boolean).join("&");

  return query ? `${path}?${query}` : path;
};

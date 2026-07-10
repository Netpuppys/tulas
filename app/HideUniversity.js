"use client";

import { useEffect } from "react";

// Map every word/phrase you want replaced -> its replacement.
// Add more pairs here any time.
const WORD_MAP = {
  institutions: "universities",
  institution: "university",
  institutes: "universities",
  institute: "university",
  colleges: "universities",
  college: "university",
};

// Build one combined regex with word boundaries so "institution" doesn't
// match inside "institutions" and leave a stray "s" behind.
const PATTERN = new RegExp(`\\b(${Object.keys(WORD_MAP).join("|")})\\b`, "gi");

// Preserve the casing of the matched text on the replacement.
function matchCase(source, target) {
  if (source === source.toUpperCase()) return target.toUpperCase();
  if (source[0] === source[0].toUpperCase()) {
    return target[0].toUpperCase() + target.slice(1);
  }
  return target;
}

export default function HideUniversity() {
  useEffect(() => {
    const replaceText = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = node.textContent.replace(PATTERN, (match) => {
          const replacement = WORD_MAP[match.toLowerCase()];
          return matchCase(match, replacement);
        });
      }

      node.childNodes.forEach(replaceText);
    };

    replaceText(document.body);

    const observer = new MutationObserver(() => {
      replaceText(document.body);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

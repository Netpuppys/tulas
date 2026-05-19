"use client";

import { useEffect } from "react";

export default function HideUniversity() {
  useEffect(() => {
    const replaceText = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = node.textContent.replace(/university/gi, "");
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
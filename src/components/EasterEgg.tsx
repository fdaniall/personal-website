"use client";

import { useState, useCallback } from "react";

export default function EasterEgg({
  children,
}: {
  children: React.ReactNode;
}) {
  const [clicks, setClicks] = useState(0);
  const [activated, setActivated] = useState(false);

  const handleClick = useCallback(() => {
    const next = clicks + 1;
    setClicks(next);

    if (next >= 5 && !activated) {
      setActivated(true);
      setTimeout(() => {
        setActivated(false);
        setClicks(0);
      }, 3000);
    }

    // Reset counter after 2s of no clicks
    setTimeout(() => {
      setClicks((c) => (c === next ? 0 : c));
    }, 2000);
  }, [clicks, activated]);

  return (
    <span
      onClick={handleClick}
      className={`cursor-pointer select-none transition-all duration-500 ${
        activated ? "rainbow-shimmer" : "name-shimmer"
      }`}
    >
      {children}
    </span>
  );
}

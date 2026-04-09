"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export default function EasterEgg({
  children,
}: {
  children: React.ReactNode;
}) {
  const [clicks, setClicks] = useState(0);
  const [activated, setActivated] = useState(false);
  const activateTimer = useRef<ReturnType<typeof setTimeout>>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    return () => {
      if (activateTimer.current) clearTimeout(activateTimer.current);
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  const handleClick = useCallback(() => {
    setClicks((prev) => {
      const next = prev + 1;

      if (next >= 5 && !activated) {
        setActivated(true);
        if (activateTimer.current) clearTimeout(activateTimer.current);
        activateTimer.current = setTimeout(() => {
          setActivated(false);
          setClicks(0);
        }, 3000);
      }

      // Reset counter after 2s of no clicks
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => {
        setClicks(0);
      }, 2000);

      return next;
    });
  }, [activated]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <span
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`cursor-pointer select-none transition-all duration-500 outline-none ${
        activated ? "rainbow-shimmer" : "name-shimmer"
      }`}
    >
      {children}
    </span>
  );
}

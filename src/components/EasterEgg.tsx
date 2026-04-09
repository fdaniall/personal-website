"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export default function EasterEgg({
  children,
}: {
  children: React.ReactNode;
}) {
  const [clicks, setClicks] = useState(0);
  const [activated, setActivated] = useState(false);
  const activatedRef = useRef(false);
  const activateTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (activateTimer.current) clearTimeout(activateTimer.current);
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  const handleClick = useCallback(() => {
    setClicks((prev) => {
      const next = prev + 1;

      if (next >= 5 && !activatedRef.current) {
        activatedRef.current = true;
        setActivated(true);
        if (activateTimer.current) clearTimeout(activateTimer.current);
        activateTimer.current = setTimeout(() => {
          activatedRef.current = false;
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
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleClick();
      }
    },
    [handleClick]
  );

  return (
    <span
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`cursor-pointer select-none transition-all duration-500 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 rounded-sm ${
        activated ? "rainbow-shimmer" : "name-shimmer"
      }`}
    >
      {children}
    </span>
  );
}

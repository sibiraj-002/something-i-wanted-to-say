"use client";

import { useState, useCallback, useEffect, useRef } from "react";

const PHRASES = [
  "NO 😐",
  "Maybe? 🤔",
  "Not yet! 😅",
  "Run! 🏃",
  "Nope! 😏",
  "Try again! 😄",
  "Eek! 😳",
  "Maybe later? 🌸",
];

// Preset positions for mobile — keeps button visible and within bounds
const MOBILE_POSITIONS = [
  { top: "65%", left: "25%" },
  { top: "75%", left: "75%" },
  { top: "70%", left: "50%" },
  { top: "80%", left: "35%" },
  { top: "85%", left: "65%" },
];

function getInitialPos() {
  if (typeof window !== "undefined" && window.matchMedia("(max-width: 639px)").matches) {
    return MOBILE_POSITIONS[0];
  }
  return { top: "50%", left: "55%" };
}

export default function EscapeButton() {
  const [pos, setPos] = useState(getInitialPos);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [wiggle, setWiggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchHandled = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const move = useCallback(() => {
    if (isMobile) {
      setPos((prev) => {
        const currentIdx = MOBILE_POSITIONS.findIndex(
          (p) => p.top === prev.top && p.left === prev.left
        );
        const nextIdx = (currentIdx < 0 ? 0 : currentIdx + 1) % MOBILE_POSITIONS.length;
        return MOBILE_POSITIONS[nextIdx];
      });
    } else {
      setPos({
        top: `${Math.random() * 50 + 25}%`,
        left: `${Math.random() * 50 + 25}%`,
      });
    }
    setPhraseIndex((i) => (i + 1) % PHRASES.length);
    setWiggle(true);
    const t = setTimeout(() => setWiggle(false), 500);
    return () => clearTimeout(t);
  }, [isMobile]);

  const handleTouchStart = useCallback(
    (e) => {
      touchHandled.current = true;
      move();
    },
    [move]
  );

  const handleClick = useCallback(
    (e) => {
      if (touchHandled.current) {
        touchHandled.current = false;
        e.preventDefault();
        return;
      }
      move();
    },
    [move]
  );

  return (
    <button
      type="button"
      onMouseEnter={!isMobile ? move : undefined}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
      style={{
        top: pos.top,
        left: pos.left,
        transform: "translate(-50%, -50%)",
      }}
      className={`escape-btn ${wiggle ? "escape-btn--wiggle" : ""}`}
      aria-label="No (runs away)"
    >
      {PHRASES[phraseIndex]}
    </button>
  );
}

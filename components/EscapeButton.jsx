"use client";

import { useState, useCallback } from "react";

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

export default function EscapeButton() {
  const [pos, setPos] = useState({ top: "50%", left: "55%" });
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [wiggle, setWiggle] = useState(false);

  const move = useCallback(() => {
    setPos({
      top: `${Math.random() * 50 + 25}%`,
      left: `${Math.random() * 50 + 25}%`,
    });
    setPhraseIndex((i) => (i + 1) % PHRASES.length);
    setWiggle(true);
    const t = setTimeout(() => setWiggle(false), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <button
      type="button"
      onMouseEnter={move}
      onTouchStart={move}
      onClick={move}
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

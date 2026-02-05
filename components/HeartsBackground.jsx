"use client";

const HEARTS = ["❤️", "💕", "💗", "❤️", "💖", "💕", "❤️", "💗", "💖", "❤️"];

export default function HeartsBackground() {
  const hearts = [
    { id: 1, left: "5%", delay: 0, size: 16, slow: false },
    { id: 2, left: "15%", delay: 2, size: 12, slow: true },
    { id: 3, left: "28%", delay: 4, size: 20, slow: false },
    { id: 4, left: "45%", delay: 1, size: 14, slow: true },
    { id: 5, left: "62%", delay: 3, size: 18, slow: false },
    { id: 6, left: "78%", delay: 5, size: 10, slow: true },
    { id: 7, left: "90%", delay: 2.5, size: 16, slow: false },
    { id: 8, left: "22%", delay: 6, size: 12, slow: true },
    { id: 9, left: "55%", delay: 1.5, size: 14, slow: false },
    { id: 10, left: "72%", delay: 4.5, size: 18, slow: true },
    { id: 11, left: "8%", delay: 3.5, size: 14, slow: true },
    { id: 12, left: "38%", delay: 5.5, size: 16, slow: false },
    { id: 13, left: "85%", delay: 1, size: 12, slow: true },
    { id: 14, left: "50%", delay: 7, size: 10, slow: true },
    { id: 15, left: "65%", delay: 2, size: 16, slow: false },
  ];

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {hearts.map(({ id, left, delay, size, slow }, i) => (
        <span
          key={id}
          className={`heart-float ${slow ? "heart-float-slow" : ""}`}
          style={{
            left,
            bottom: "0",
            fontSize: `clamp(12px, ${size}px, 26px)`,
            animationDelay: `${delay}s`,
            opacity: 0.9,
          }}
        >
          {HEARTS[i % HEARTS.length]}
        </span>
      ))}
    </div>
  );
}

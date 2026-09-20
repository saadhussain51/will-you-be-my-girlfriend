import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const emojiRef = useRef<HTMLSpanElement>(null);

  const line1 = "For My Favourite Person";
  const line2 = "Nabiha";

  useEffect(() => {
    if (titleRef.current) {
      // Animate title letters
      const titleAnim = animate(titleRef.current.querySelectorAll("span"), {
        opacity: [0, 1],
        translateY: [30, 0],
        delay: stagger(30),
        ease: "outExpo",
        duration: 800,
      });

      // Animate emoji after title finishes
      let emojiAnim: ReturnType<typeof animate> | undefined;
      if (emojiRef.current)
        emojiAnim = animate(emojiRef.current, {
          opacity: [0, 1],
          translateY: [30, 0],
          delay: 1000,
          ease: "outExpo",
          duration: 800,
        });
      return () => {
        titleAnim.pause();
        if (emojiAnim) emojiAnim.pause();
      };
    }
  }, []);

  return (
    <section
      style={{
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem 1rem",
        position: "relative",
        zIndex: 1,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        <h1
          ref={titleRef}
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#fff5f0",
            lineHeight: 1.3,
            width: "100%",
          }}
        >
          {/* First Line */}
          <div style={{ fontSize: "clamp(1.2rem, 4vw, 2.5rem)", fontWeight: 400, marginBottom: "0.2rem" }}>
            {line1.split("").map((ch, i) => (
              <span key={i} style={{ display: "inline-block", opacity: 0 }}>
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </div>

          {/* Second Line (Name with Emoji) */}
          <div style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", fontWeight: 700 }}>
            {line2.split("").map((ch, i) => (
              <span key={`name-${i}`} style={{ display: "inline-block", opacity: 0 }}>
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
            <span
              ref={emojiRef}
              style={{
                display: "inline-block",
                marginLeft: "12px",
                opacity: 0,
              }}
            >
              🌹
            </span>
          </div>
        </h1>
      </div>

      {/* Line 1 */}
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(0.95rem, 2.2vw, 1.3rem)",
          color: "#fff5f0",
          marginTop: "1.5rem",
          fontStyle: "italic",
          opacity: 0.85,
          maxWidth: "560px",
          lineHeight: 1.7,
          padding: "0 1rem",
        }}
      >
        My love for you is as infinite as the hearts floating around — and this
        is just the beginning ♥
      </p>

      {/* Line 2 */}
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(0.9rem, 1.8vw, 1.2rem)",
          color: "#c8973a",
          marginTop: "1rem",
          fontStyle: "italic",
          opacity: 0.9,
        }}
      >
        This page is made just for you ♥
      </p>
    </section>
  );
}
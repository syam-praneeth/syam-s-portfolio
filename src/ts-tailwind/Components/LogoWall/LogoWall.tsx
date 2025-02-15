import React, { useState, FC } from "react";

interface LogoItem {
  imgUrl: string;
  altText: string;
}

interface LogoWallProps {
  items?: LogoItem[];
  direction?: "horizontal" | "vertical";
  pauseOnHover?: boolean;
  size?: string;
  duration?: string;
  textColor?: string;
  bgColor?: string;
  bgAccentColor?: string;
}

const LogoWall: FC<LogoWallProps> = ({
  items = [],
  direction = "horizontal",
  pauseOnHover = false,
  size = "clamp(8rem, 1rem + 30vmin, 25rem)",
  duration = "60s",
  textColor = "#ffffff",
  bgColor = "#060606",
  bgAccentColor = "#111111",
}) => {
  const [isPaused, setIsPaused] = useState(false);

  const wrapperClass = [
    "flex",
    "flex-col",
    "gap-[calc(var(--size)/14)]",
    "mx-auto",
    "max-w-full",
    "p-[20px_10px]",
    direction === "vertical" && "flex-row justify-center h-full",
  ]
    .filter(Boolean)
    .join(" ");

  const marqueeClass = [
    "relative",
    "flex",
    "overflow-hidden",
    "select-none",
    "gap-[calc(var(--size)/14)]",
    "justify-start",
    "w-full",
    "mask-horizontal",
    direction === "vertical" && "flex-col h-full mask-vertical",
    isPaused && "paused",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={wrapperClass}
      style={{
        ["--size" as any]: size,
        ["--duration" as any]: duration,
        ["--color-text" as any]: textColor,
        ["--color-bg" as any]: bgColor,
        ["--color-bg-accent" as any]: bgAccentColor,
        color: "var(--color-text)",
        backgroundColor: "var(--color-bg)",
      }}
    >
      <div
        className={marqueeClass}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX",
            direction === "vertical" && "flex-col min-h-full animate-scrollY",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => (
            <img
              key={idx}
              src={item.imgUrl}
              alt={item.altText}
              className={[
                "bg-[var(--color-bg-accent)]",
                "rounded-md",
                "object-contain",
                "aspect-video",
                "w-[var(--size)]",
                "p-[calc(var(--size)/10)]",
                direction === "vertical" &&
                  "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
        <div
          aria-hidden="true"
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX",
            direction === "vertical" && "flex-col min-h-full animate-scrollY",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => (
            <img
              key={`dup1-${idx}`}
              src={item.imgUrl}
              alt={item.altText}
              className={[
                "bg-[var(--color-bg-accent)]",
                "rounded-md",
                "object-contain",
                "aspect-video",
                "w-[var(--size)]",
                "p-[calc(var(--size)/10)]",
                direction === "vertical" &&
                  "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
      </div>

      <div
        className={marqueeClass + " marquee--reverse"}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX",
            "reverse-x",
            direction === "vertical" &&
              "flex-col min-h-full animate-scrollY reverse-x",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => (
            <img
              key={`rev-${idx}`}
              src={item.imgUrl}
              alt={item.altText}
              className={[
                "bg-[var(--color-bg-accent)]",
                "rounded-md",
                "object-contain",
                "aspect-video",
                "w-[var(--size)]",
                "p-[calc(var(--size)/10)]",
                direction === "vertical" &&
                  "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
        <div
          aria-hidden="true"
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX",
            "reverse-x",
            direction === "vertical" &&
              "flex-col min-h-full animate-scrollY reverse-x",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => (
            <img
              key={`dup2-${idx}`}
              src={item.imgUrl}
              alt={item.altText}
              className={[
                "bg-[var(--color-bg-accent)]",
                "rounded-md",
                "object-contain",
                "aspect-video",
                "w-[var(--size)]",
                "p-[calc(var(--size)/10)]",
                direction === "vertical" &&
                  "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default LogoWall;

// ALSO NEEDED:
//
// KEYFRAME ANIMATION:
//
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}"
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         scrollX: {
//           "0%": { transform: "translateX(0)" },
//           "100%": { transform: "translateX(-100%)" }
//         },
//         scrollY: {
//           "0%": { transform: "translateY(0)" },
//           "100%": { transform: "translateY(-100%)" }
//         }
//       },
//       animation: {
//         scrollX: "scrollX var(--duration) linear infinite",
//         scrollY: "scrollY var(--duration) linear infinite"
//       }
//     }
//   },
//   plugins: []
// };
//
// LAYER UTILITY SNIPPET:
//
// @layer utilities {
//   .mask-horizontal {
//     @apply [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)]
//            [mask-size:cover]
//            [mask-repeat:no-repeat];
//   }

//   .mask-vertical {
//     @apply [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)]
//            [mask-size:cover]
//            [mask-repeat:no-repeat];
//   }

//   .paused .animate-scrollX,
//   .paused .animate-scrollY {
//     animation-play-state: paused !important;
//   }

//   .reverse-x {
//     animation-direction: reverse;
//     animation-delay: -3s;
//   }
// }
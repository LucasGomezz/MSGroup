"use client";

import { useRef, useMemo } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";

interface DotItem {
  start: { lat: number; lng: number; label?: string };
  end: { lat: number; lng: number; label?: string };
}

interface MapProps {
  dots?: DotItem[];
  lineColor?: string;
}

export default function WorldMap({
  dots = [],
  lineColor = "#2E5A88",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();

  const map = new DottedMap({
    height: 100,
    grid: "diagonal",
  });

  const svgMap = map.getSVG({
    radius: 0.45,
    color: theme === "dark" ? "#FFFFFF35" : "#00000025",
    shape: "circle",
    backgroundColor: theme === "dark" ? "black" : "white",
  });

  // 🔥 Ordena destinos de izquierda a derecha por longitud
  const orderedDots = useMemo(() => {
    return [...dots].sort((a, b) => a.end.lng - b.end.lng);
  }, [dots]);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const distance = Math.abs(end.x - start.x);
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - distance * 0.18;

    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-2/1 bg-white rounded-2xl relative overflow-hidden ">

      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        alt="world map"
        width={1056}
        height={495}
        className="w-full h-full object-contain opacity-90"
        unoptimized
        draggable={false}
      />

      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="10%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="90%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {orderedDots.map((dot, i) => {
          const start = projectPoint(dot.start.lat, dot.start.lng);
          const end = projectPoint(dot.end.lat, dot.end.lng);

          return (
            <g key={i}>
              <motion.path
                d={createCurvedPath(start, end)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1.2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.4,
                  delay: i * 0.35,
                  ease: "easeOut",
                }}
              />

              <circle cx={start.x} cy={start.y} r="2.4" fill={lineColor} />

              <circle cx={start.x} cy={start.y} r="2" fill={lineColor} opacity="0.4">
                <animate
                  attributeName="r"
                  from="2"
                  to="10"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.4"
                  to="0"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>

              <motion.circle
                cx={end.x}
                cy={end.y}
                r="2.4"
                fill={lineColor}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: i * 0.35 + 1,
                  duration: 0.3,
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
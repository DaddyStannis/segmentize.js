"use client";

import { useEffect, useRef } from "react";
import { SegmentBoard } from "../SegmentBoard";
import type { IBoardOptions } from "../IBoardOptions";

export interface SegmentDisplayProps extends IBoardOptions {
  className?: string;
}

export function SegmentDisplay({
  text,
  type = "7-segment",
  colorOn,
  colorOff,
  glow,
  skew,
  gap,
  size,
  char,
  className,
}: SegmentDisplayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const boardInstanceRef = useRef<SegmentBoard | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    boardInstanceRef.current = new SegmentBoard(containerRef.current, {
      text,
      type,
      colorOn,
      colorOff,
      glow,
      skew,
      gap,
      size,
      char,
    });

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
      boardInstanceRef.current = null;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, colorOn, colorOff, glow, skew, gap, size]);

  useEffect(() => {
    if (boardInstanceRef.current) {
      boardInstanceRef.current.setText(text);
    }
  }, [text]);

  return <div ref={containerRef} className={className} />;
}

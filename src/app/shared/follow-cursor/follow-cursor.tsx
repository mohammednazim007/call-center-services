"use client";
import React, { useEffect } from "react";

interface FollowCursorProps {
  color?: string;
}

const FollowCursor: React.FC<FollowCursorProps> = ({ color = "#E53888" }) => {
  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure code only runs on the client

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    let animationFrame: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const cursor = { x: width / 2, y: height / 2 };
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (prefersReducedMotion.matches) {
      console.log("Reduced motion enabled, cursor effect skipped.");
      return;
    }

    // **Set up canvas**
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999"; // Highest z-index
    canvas.width = width;
    canvas.height = height;
    document.body.appendChild(canvas);

    class Dot {
      position: { x: number; y: number };
      width: number;
      lag: number;

      constructor(x: number, y: number, width: number, lag: number) {
        this.position = { x, y };
        this.width = width;
        this.lag = lag;
      }

      moveTowards(x: number, y: number) {
        this.position.x += (x - this.position.x) / this.lag;
        this.position.y += (y - this.position.y) / this.lag;
        if (context) {
          context.fillStyle = color;
          context.beginPath();
          context.arc(
            this.position.x,
            this.position.y,
            this.width,
            0,
            2 * Math.PI
          );
          context.fill();
        }
      }
    }

    const dot = new Dot(width / 2, height / 2, 10, 10);

    const onMouseMove = (e: MouseEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };

    const onWindowResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const updateDot = () => {
      if (context) {
        context.clearRect(0, 0, width, height);
        dot.moveTowards(cursor.x, cursor.y);
      }
    };

    const loop = () => {
      updateDot();
      animationFrame = requestAnimationFrame(loop);
    };

    // **Initialize events**
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onWindowResize);
    loop();

    // **Cleanup**
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onWindowResize);
      canvas.remove();
    };
  }, [color]);

  return null; // No visible JSX needed
};

export default FollowCursor;

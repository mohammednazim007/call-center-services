"use client";
import { ReactLenis } from "lenis/react";

const SmoothScrollerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScrollerProvider;

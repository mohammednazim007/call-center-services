"use client";
import { TourProvider, useTour } from "@reactour/tour";
import { ReactNode, useEffect } from "react";
import { steps } from "../data";

interface ToutProviderProps {
  children: ReactNode;
}

const ToutProvider = ({ children }: ToutProviderProps) => {
  const Badge = () => null; // Remove the badge (notification)

  return (
    <TourProvider steps={steps} components={{ Badge }}>
      <TourController totalSteps={steps.length} />
      {children}
    </TourProvider>
  );
};

// ✅ Separate component to handle finishing/resetting the tour
const TourController = ({ totalSteps }: { totalSteps: number }) => {
  const { setCurrentStep, setIsOpen, currentStep, isOpen } = useTour();

  // Auto-close the tour when the last step is reached
  useEffect(() => {
    if (isOpen && currentStep === totalSteps - 1) {
      setTimeout(() => {
        setCurrentStep(0);
        setIsOpen(false);
      }, 5000); // Close tour 1 second after last step
    }
  }, [currentStep, isOpen, setCurrentStep, setIsOpen, totalSteps]);

  return null; // No UI needed
};

export default ToutProvider;

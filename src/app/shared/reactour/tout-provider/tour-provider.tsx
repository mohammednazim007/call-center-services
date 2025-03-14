// "use client";
// import { StepType, TourProvider } from "@reactour/tour";
// import { ReactNode } from "react";

// interface TourEvent {
//   setCurrentStep: (step: number) => void;
//   setIsOpen: (isOpen: boolean) => void;
// }

// const ToutProvider = ({ children }: { children: ReactNode }) => {
//   const steps: StepType[] = [
//     {
//       selector: `[data-tour-element="blog"]`,
//       content: (
//         <div>
//           <h4 className="mb-1">📝 Blog</h4>
//           <p>Stay updated with the latest articles, insights, and news.</p>
//         </div>
//       ),
//     },

//     {
//       selector: `[data-tour-element="explore"]`,
//       content: (
//         <div>
//           <h4 className="mb-1">🌍 Explore</h4>
//           <p>Discover new features, trending topics, and exciting content.</p>
//         </div>
//       ),
//       //   position: () => [73, 140],
//     },
//     {
//       selector: `[data-tour-element="tutorials"]`,
//       content: (
//         <div>
//           <h4 className="mb-1">📚 Tutorials</h4>
//           <p>Learn how to use the platform with step-by-step guides.</p>
//         </div>
//       ),
//     },
//     {
//       selector: `[data-tour-element="support"]`,
//       content: (
//         <div>
//           <h4 className="mb-1">🛠️ Support</h4>
//           <p>Need help? Find FAQs, guides, and contact support here.</p>
//         </div>
//       ),
//     },
//   ];

//   const Badge = () => null; // remove the badge badge mean (1) notification

//   return (
//     <TourProvider
//       onClickClose={(event: TourEvent) => {
//         // return for initials position
//         event.setCurrentStep(0);
//         event.setIsOpen(false);
//       }}
//       onFinish={(event: TourEvent) => {
//         event.setCurrentStep(0); // Reset tour when it finishes
//         event.setIsOpen(false); // Close the tour instead of disabling the button
//       }}
//       components={{ Badge }}
//       steps={steps}
//     >
//       {children}
//     </TourProvider>
//   );
// };

// export default ToutProvider;
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
      }, 1000); // Close tour 1 second after last step
    }
  }, [currentStep, isOpen, setCurrentStep, setIsOpen, totalSteps]);

  return null; // No UI needed
};

export default ToutProvider;

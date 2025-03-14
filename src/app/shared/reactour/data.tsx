import { StepType } from "@reactour/tour";

export const steps: StepType[] = [
  {
    selector: `[data-tour-element="blog"]`,
    content: (
      <div>
        <h4 className="mb-1">📝 Blog</h4>
        <p>Stay updated with the latest articles, insights, and news.</p>
      </div>
    ),
  },
  {
    selector: `[data-tour-element="explore"]`,
    content: (
      <div>
        <h4 className="mb-1">🌍 Explore</h4>
        <p>Discover new features, trending topics, and exciting content.</p>
      </div>
    ),
  },
  {
    selector: `[data-tour-element="tutorials"]`,
    content: (
      <div>
        <h4 className="mb-1">📚 Tutorials</h4>
        <p>Learn how to use the platform with step-by-step guides.</p>
      </div>
    ),
  },
  {
    selector: `[data-tour-element="support"]`,
    content: (
      <div>
        <h4 className="mb-1">🛠️ Support</h4>
        <p>Need help? Find FAQs, guides, and contact support here.</p>
      </div>
    ),
  },
];

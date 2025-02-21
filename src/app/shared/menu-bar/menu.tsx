import {
  Compass,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Newspaper,
  GraduationCap,
  TrendingUp,
  LifeBuoy,
  HelpCircle,
  ListChecks,
  Mail,
} from "lucide-react";
import { CallCenterCategory } from "./types";

export const callCenterData: CallCenterCategory[] = [
  {
    _id: "64f5e1a2b3d7c89ea01b2c3d",
    category: "explore",
    icon: Compass,
    color: "#FF6B6B", // Coral red
    items: [
      {
        _id: "64f5e1a2b3d7c89ea01b2c3e",
        name: "Marketplace",
        link: "/marketplace",
        icon: ShoppingCart,
        iconColor: "#FF6B6B", // Set the color of the icon
        description: "Explore and purchase products from our marketplace.",
      },
      {
        _id: "64f5e1a2b3d7c89ea01b2c4b",
        name: "Live Chat",
        link: "/support/chat",
        icon: MessageCircle,
        iconColor: "#FF6B6B", // Set the color of the icon
        description:
          "Chat with our support agents in real-time for instant help.",
      },
    ],
  },
  {
    _id: "64f5e1a2b3d7c89ea01b2c42",
    category: "blog",
    icon: BookOpen,
    color: "#4CAF50", // Green
    items: [
      {
        _id: "64f5e1a2b3d7c89ea01b2c43",
        name: "Latest Articles",
        link: "/under-maintenance",
        icon: Newspaper,
        iconColor: "#4CAF50", // Set the color of the icon
        description: "Stay updated with our latest articles and insights.",
      },
      {
        _id: "64f5e1a2b3d7c89ea01b2c44",
        name: "Tutorials",
        link: "/under-maintenance",
        icon: GraduationCap,
        iconColor: "#4CAF50", // Set the color of the icon
        description: "Follow step-by-step guides to master our tools.",
      },
      {
        _id: "64f5e1a2b3d7c89ea01b2c46",
        name: "Industry News",
        link: "/under-maintenance",
        icon: TrendingUp,
        iconColor: "#4CAF50", // Set the color of the icon
        description: "Get the latest news and trends from our industry.",
      },
    ],
  },
  {
    _id: "64f5e1a2b3d7c89ea01b2c47",
    category: "support",
    icon: LifeBuoy,
    color: "#2196F3", // Blue
    items: [
      {
        _id: "64f5e1a2b3d7c89ea01b2c48",
        name: "Help Center",
        link: "/help-center",
        icon: HelpCircle,
        iconColor: "#2196F3", // Set the color of the icon
        description: "Find answers to common questions in our help center.",
      },
      {
        _id: "64f5e1a2b3d7c89ea01b2c49",
        name: "FAQs",
        link: "/support/faqs",
        icon: ListChecks,
        iconColor: "#2196F3", // Set the color of the icon
        description: "Browse frequently asked questions and their solutions.",
      },
      {
        _id: "64f5e1a2b3d7c89ea01b2c4a",
        name: "Contact Us",
        link: "/contact-us",
        icon: Mail,
        iconColor: "#2196F3", // Set the color of the icon
        description:
          "Reach out to our support team for personalized assistance.",
      },
    ],
  },
];

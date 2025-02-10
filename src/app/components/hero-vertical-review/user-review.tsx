import {
  Video,
  MessageCircle,
  Shield,
  Bell,
  BatteryCharging,
} from "lucide-react";

export const timelineData = [
  {
    className: "vertical-timeline-element--review",
    contentStyle: { background: "#4A90E2", color: "#ffffff" }, // imo's primary blue color
    contentArrowStyle: { borderRight: "7px solid #4A90E2" },
    date: "Reviewed on Feb 10, 2025",
    iconStyle: { background: "#4A90E2", color: "#ffffff" },
    icon: <Video />, // Icon representing video calls
    title: "High-Quality Video Calls",
    subtitle: "Emily R. - Remote Worker",
    description:
      "imo offers clear and stable video calls, making it easy to stay connected with my team across different countries. The quality remains consistent even with varying internet speeds.",
    animate: true,
  },
  {
    className: "vertical-timeline-element--review",
    contentStyle: { background: "#257180", color: "#ffffff" }, // Complementary green color
    contentArrowStyle: { borderRight: "7px solid #50E3C2" },
    date: "Reviewed on Jan 15, 2025",
    iconStyle: { background: "#50E3C2", color: "#fff" },
    icon: <MessageCircle />, // Icon representing messaging
    title: "User-Friendly Messaging",
    subtitle: "David L. - Student",
    description:
      "The messaging interface is intuitive and straightforward. I can easily share photos, videos, and documents with my classmates, enhancing our collaboration on projects.",
    animate: true,
  },
  {
    className: "vertical-timeline-element--review",
    contentStyle: { background: "#FFB22C", color: "#fff" }, // Warm orange color
    contentArrowStyle: { borderRight: "7px solid #F5A623" },
    date: "Reviewed on Dec 20, 2024",
    iconStyle: { background: "#F5A623", color: "#fff" },
    icon: <Shield />, // Icon representing security
    title: "Enhanced Privacy Features",
    subtitle: "Sophia M. - Privacy Advocate",
    description:
      "I appreciate imo's commitment to privacy with features like end-to-end encryption and disappearing messages. It gives me confidence that my conversations are secure.",
    animate: true,
  },
  {
    className: "vertical-timeline-element--review",
    contentStyle: { background: "#BE3144", color: "#fff" }, // Alerting red color
    contentArrowStyle: { borderRight: "7px solid #D0021B" },
    date: "Reviewed on Nov 10, 2024",
    iconStyle: { background: "#D0021B", color: "#fff" },
    icon: <Bell />, // Icon representing notifications
    title: "Manageable Notifications",
    subtitle: "Michael B. - Business Professional",
    description:
      "The app provides customizable notification settings, allowing me to stay informed without being overwhelmed. It's a balance that suits my busy schedule.",
    animate: true,
  },
  {
    className: "vertical-timeline-element--review",
    contentStyle: { background: "#9ABF80", color: "#fff" }, // Energetic green color
    contentArrowStyle: { borderRight: "7px solid #7ED321" },
    date: "Reviewed on Oct 5, 2024",
    iconStyle: { background: "#7ED321", color: "#fff" },
    icon: <BatteryCharging />, // Icon representing performance
    title: "Efficient Performance",
    subtitle: "Olivia W. - Tech Enthusiast",
    description:
      "imo runs smoothly on my device without draining the battery. It's optimized well, ensuring that I can use it throughout the day without concerns.",
    animate: true,
  },
];

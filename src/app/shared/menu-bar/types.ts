import { LucideIcon } from "lucide-react"; // Import LucideIcon type for proper icon typing

// Define the type for individual items
export interface CallCenterItem {
  _id: string; // MongoDB-like ID
  name: string; // Name of the item
  link: string; // Link associated with the item
  icon: LucideIcon; // Icon component associated with the item (from lucide-react)
  iconColor?: string; // Optional color for the icon
  description: string; // Description of the item
}

// Define the type for a category
export interface CallCenterCategory {
  _id: string; // MongoDB-like ID for the category
  category: string; // Category name (e.g., "explore", "blog", "support")
  icon: LucideIcon; // Icon component for the category (from lucide-react)
  color: string; // Color for the category icon or highlight
  items: CallCenterItem[]; // Array of items within the category
}

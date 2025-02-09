// Define the type for individual items
export interface CallCenterItem {
  _id: string; // MongoDB-like ID
  name: string; // Name of the item
  link: string; // Link associated with the item
  description: string; // Description of the item
}

// Define the type for a category
export interface CallCenterCategory {
  _id: string; // MongoDB-like ID for the category
  category: string; // Category name (e.g., "explore", "blog", "support")
  items: CallCenterItem[]; // Array of items within the category
}

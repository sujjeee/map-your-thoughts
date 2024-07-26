import React from "react"

export const tagColorMap = {
  "Politics & History": "#8B0000", // Dark Red
  "Culture & Society": "#FFA500", // Orange
  "Nature & Environment": "#228B22", // Forest Green
  "Cooking & Recipes": "#FFD700", // Gold
  "Technology & Gadgets": "#1E90FF", // Dodger Blue
  "Startups & Entrepreneurship": "#32CD32", // Lime Green
  "Marketing & Branding": "#FF69B4", // Hot Pink
  "Productivity & Time Management": "#8A2BE2", // Blue Violet
  "Self-Care & Mindfulness": "#7FFF00", // Chartreuse
  "Travel & Adventure": "#FFA500", // Orange
  "Outdoor Activities": "#2E8B57", // Sea Green
  "Urban vs Rural Living": "#D2691E", // Chocolate
  "Home & Interior Design": "#FF6347", // Tomato
  "Sustainability & Eco-Friendly Living": "#3CB371", // Medium Sea Green
  "Wildlife & Conservation": "#228B22", // Forest Green
  "Astronomy & Space": "#191970", // Midnight Blue
  "Beauty & Cosmetics": "#FF69B4", // Hot Pink
  "Arts & Crafts": "#FF1493", // Deep Pink
  "Music & Audio": "#FF4500", // Orange Red
  "Film & Television": "#FFD700", // Gold
  "Anime & Manga": "#FF6347", // Tomato
  "Comics & Graphic Novels": "#FF4500", // Orange Red
  "Programming & Development": "#00FFFF", // Cyan
  "Artificial Intelligence & Machine Learning": "#32CD32", // Lime Green
  "Blockchain & Cryptocurrency": "#FFD700", // Gold
  "Virtual & Augmented Reality": "#FF69B4", // Hot Pink
  "E-commerce & Online Business": "#8A2BE2", // Blue Violet
  "Social Media & Digital Marketing": "#FF1493", // Deep Pink
  "Writing & Literature": "#7FFF00", // Chartreuse
  "Language & Linguistics": "#3CB371", // Medium Sea Green
  "Education & Learning": "#FFD700", // Gold
  "Academic Life": "#FF6347", // Tomato
  "Scholarships & Financial Aid": "#1E90FF", // Dodger Blue
  "Volunteering & Philanthropy": "#32CD32", // Lime Green
  "Events & Festivals": "#FF69B4", // Hot Pink
  "Career Development": "#8A2BE2", // Blue Violet
  "Personal Finance & Investing": "#FF4500", // Orange Red
  "Real Estate & Property": "#FFD700", // Gold
  "Automotive & Transportation": "#1E90FF", // Dodger Blue
  "Public Speaking & Communication": "#32CD32", // Lime Green
  "Healthcare & Medicine": "#FF69B4", // Hot Pink
  "Lifestyle & Wellness": "#8A2BE2", // Blue Violet
  "News & Current Affairs": "#FF1493", // Deep Pink
  "Business & Economics": "#7FFF00", // Chartreuse
  "Scientific Research": "#3CB371", // Medium Sea Green
  "Sports & Athletics": "#FFD700", // Gold
  "Visual Arts": "#FF6347", // Tomato
  "Fashion & Style": "#FF4500", // Orange Red
  "DIY & Maker Culture": "#00FFFF", // Cyan
  "Photography & Videography": "#1E90FF", // Dodger Blue
  "Gaming & Esports": "#32CD32", // Lime Green
  "Relationships & Dating": "#FF69B4", // Hot Pink
  "Mental Health & Psychology": "#8A2BE2", // Blue Violet
  "Fitness & Exercise": "#FF1493", // Deep Pink
  "Parenting & Family": "#7FFF00", // Chartreuse
  "Pets & Animal Care": "#3CB371", // Medium Sea Green
  "Personal Growth & Motivation": "#FFD700", // Gold
  "Humor & Entertainment": "#FF6347", // Tomato
  "Spirituality & Religion": "#FF4500", // Orange Red
  "Food & Culinary Arts": "#FFD700", // Gold
  "Gardening & Horticulture": "#228B22", // Forest Green
  "Architecture & Urban Planning": "#1E90FF", // Dodger Blue
  "Climate Change & Environmental Issues": "#32CD32", // Lime Green
  "Robotics & Automation": "#FF69B4", // Hot Pink
  "Cybersecurity & Privacy": "#8A2BE2", // Blue Violet
  "Renewable Energy": "#FF1493", // Deep Pink
  "Biotechnology & Genetics": "#7FFF00", // Chartreuse
  "Sociology & Anthropology": "#3CB371", // Medium Sea Green
  "Philosophy & Ethics": "#FFD700", // Gold
  "Law & Legal Issues": "#FF6347", // Tomato
  other: "#3FB1CE", // White
} as const

export type Tag = keyof typeof tagColorMap

export function getTagColor(tag: Tag): string {
  return tagColorMap[tag] // Default color is white
}

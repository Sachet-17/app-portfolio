/**
 * Utility functions for color conversions
 */

/**
 * Converts Tailwind color classes to hex values
 * @param tailwindClass - The Tailwind color class (e.g., "text-yellow-300")
 * @returns The hex color value, defaults to zinc-300 if not found
 */
export function getColorFromTailwindClass(tailwindClass: string | undefined): string {
  if (!tailwindClass) return "#d4d4d8"; // zinc-300 default
  
  const colorMap: Record<string, string> = {
    "text-yellow-300": "#fde047",
    "text-yellow-400": "#facc15",
    "text-yellow-500": "#eab308",
    "text-orange-300": "#fdba74",
    "text-orange-400": "#fb923c",
    "text-orange-500": "#f97316",
    "text-orange-600": "#ea580c",
    "text-blue-400": "#60a5fa",
    "text-blue-500": "#3b82f6",
    "text-sky-400": "#38bdf8",
    "text-red-500": "#ef4444",
    "text-red-600": "#dc2626",
    "text-green-500": "#22c55e",
    "text-green-600": "#16a34a",
    "text-cyan-300": "#67e8f9",
    "text-cyan-400": "#22d3ee",
    "text-zinc-200": "#e4e4e7",
    "text-zinc-300": "#d4d4d8",
  };
  
  return colorMap[tailwindClass] || "#d4d4d8";
}


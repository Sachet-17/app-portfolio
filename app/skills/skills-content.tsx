"use client";

import React, { useState, useMemo } from "react";
import { skills, skillCategories, type SkillCategory } from "../../data/skills";

// Helper function to convert Tailwind color classes to hex values
function getColorFromTailwindClass(tailwindClass: string | undefined): string {
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

export function SkillsContent() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | "all">("all");

  const filteredSkills = useMemo(() => {
    let filtered = selectedCategory === "all" ? skills : skills.filter((skill) => skill.category === selectedCategory);
    
    // Deduplicate by name (case-insensitive) while preserving order
    const seen = new Set<string>();
    const unique: typeof skills = [];
    
    for (const skill of filtered) {
      const key = skill.name.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        unique.push(skill);
      }
    }
    
    return unique;
  }, [selectedCategory]);

  const categories: (SkillCategory | "all")[] = ["all", ...Object.keys(skillCategories) as SkillCategory[]];

  return (
    <>
      {/* Category filter tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => {
          const label = category === "all" ? "All" : skillCategories[category];
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-zinc-800 text-white border border-zinc-700"
                  : "bg-zinc-900/40 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60 border border-zinc-800"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Icon grid */}
      <section>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {filteredSkills.map(({ name, icon, iconColor }) => {
            const IconComponent = icon;
            const colorValue = getColorFromTailwindClass(iconColor);
            return (
              <div key={name} className="flex flex-col items-center text-center" title={name}>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl border border-zinc-800/80 bg-zinc-900/40 flex items-center justify-center hover:scale-105 transition">
                  {IconComponent ? (
                    <IconComponent 
                      className="w-12 h-12" 
                      style={{ color: colorValue }}
                    />
                  ) : (
                    <span className="text-xs text-zinc-300 px-2">{name}</span>
                  )}
                </div>
                <span className="mt-2 text-sm text-zinc-300">{name}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}


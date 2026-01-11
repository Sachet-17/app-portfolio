"use client";

import React, { useState, useMemo } from "react";
import { skills, skillCategories, type SkillCategory } from "../../data/skills";

export function SkillsContent() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | "all">("all");

  const filteredSkills = useMemo(() => {
    if (selectedCategory === "all") return skills;
    return skills.filter((skill) => skill.category === selectedCategory);
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
            return (
              <div key={name} className="flex flex-col items-center text-center" title={name}>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl border border-zinc-800/80 bg-zinc-900/40 flex items-center justify-center hover:scale-105 transition">
                  {IconComponent ? (
                    <IconComponent className={`w-12 h-12 ${iconColor || "text-zinc-300"}`} />
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


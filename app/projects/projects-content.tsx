"use client";

import { useState, useMemo } from "react";
import { Card } from "../components/card";
import { Calendar } from "lucide-react";
import { projects, type Project } from "../../data/projects";
import { FilterBar } from "../components/filter-bar";
import { StaggerContainer, StaggerItem } from "../components/animations";

type SortOption = "date-desc" | "date-asc" | "name-asc" | "name-desc";

export function ProjectsContent() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("date-desc");

  // Get all unique tags from projects
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, []);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered: Project[] = projects;

    // Filter by search
    if (searchValue.trim()) {
      const searchLower = searchValue.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchLower) ||
          p.bullets.some((b) => b.toLowerCase().includes(searchLower)) ||
          p.tags.some((t) => t.toLowerCase().includes(searchLower))
      );
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((p) =>
        selectedTags.some((tag) => p.tags.includes(tag))
      );
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "date-desc":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "date-asc":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "name-asc":
          return a.title.localeCompare(b.title);
        case "name-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return sorted;
  }, [searchValue, selectedTags, sortBy]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <>
      <FilterBar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        tags={allTags}
        selectedTags={selectedTags}
        onTagToggle={handleTagToggle}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {/* Card grid */}
      {filteredProjects.length > 0 ? (
        <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {filteredProjects.map((p) => (
            <StaggerItem key={p.id}>
              <Card>
                <div className="p-4 relative flex flex-col gap-4 duration-700 group md:gap-6 md:py-8 md:px-8">
                  {/* title + date */}
                  <div>
                    <h2 className="text-xl font-medium text-zinc-200 group-hover:text-white duration-150">
                      {p.title}
                    </h2>
                    <div className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
                      <Calendar className="w-4 h-4" />
                      {p.date}
                    </div>
                  </div>

                  {/* tags */}
                  {p.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-md bg-zinc-800/50 text-zinc-300 border border-zinc-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* bullets */}
                  <ul className="z-10 mt-2 list-disc pl-5 space-y-1 text-zinc-300 text-sm">
                    {p.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <div className="text-center py-12">
          <p className="text-zinc-400 text-lg">No projects found matching your filters.</p>
          <button
            onClick={() => {
              setSearchValue("");
              setSelectedTags([]);
            }}
            className="mt-4 text-zinc-300 hover:text-white underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}


"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Card } from "../components/card";
import { Calendar, Github, ExternalLink } from "lucide-react";
import { projects, getAllTags, type Project } from "../../util/projects";
import { StaggerContainer, StaggerItem, SlideUp } from "../components/animations";

export function ProjectsContent() {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const allTags = useMemo(() => ["All", ...getAllTags()], []);

  const featuredProjects = useMemo(() => {
    return projects.filter((p) => p.featured);
  }, []);

  // Filter projects by selected tag
  const filteredProjects = useMemo(() => {
    if (selectedTag === "All") {
      return projects;
    }
    return projects.filter((p) => p.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <>
      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <SlideUp className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
            <p className="text-zinc-400">Highlighted work that showcases key capabilities</p>
          </div>
          <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} featured />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SlideUp>
      )}

      {/* Divider */}
      <div className="border-t border-zinc-800 my-12" />

      {/* Tag Filter */}
      <SlideUp className="mb-8">
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? "bg-zinc-800 text-white border border-zinc-700"
                  : "bg-zinc-900/40 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60 border border-zinc-800"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </SlideUp>

      {/* All Projects Grid */}
      <SlideUp>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">All Projects</h2>
        </div>
        {filteredProjects.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {filteredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <div className="text-center py-12">
            <p className="text-zinc-400 text-lg">No projects found matching this filter.</p>
            <button
              onClick={() => setSelectedTag("All")}
              className="mt-4 text-zinc-300 hover:text-white underline"
            >
              Show all projects
            </button>
          </div>
        )}
      </SlideUp>
    </>
  );
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Card>
      <div className="p-6 relative flex flex-col gap-4 duration-700 group md:gap-6">
        {/* Header */}
        <div>
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-xl font-semibold text-zinc-200 group-hover:text-white duration-150 flex-1">
              {project.title}
            </h3>
            {(project.links.github || project.links.live) && (
              <div className="flex gap-2">
                {project.links.github && (
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                )}
                {project.links.live && (
                  <Link
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <Calendar className="w-4 h-4" />
            {project.date}
          </div>
        </div>

        {/* Summary */}
        <p className="text-zinc-300 text-sm leading-relaxed">{project.summary}</p>

        {/* Tags */}
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-800/50 text-zinc-300 border border-zinc-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Impact Metrics */}
        {project.impactMetrics.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800">
            {project.impactMetrics.map((metric, index) => {
              const colorClasses = [
                "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                "bg-blue-500/10 text-blue-400 border-blue-500/20",
                "bg-amber-500/10 text-amber-400 border-amber-500/20",
                "bg-purple-500/10 text-purple-400 border-purple-500/20",
                "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
              ];
              const colorClass = colorClasses[index % colorClasses.length];
              return (
                <span
                  key={index}
                  className={`px-2.5 py-1 text-xs rounded-md font-medium border ${colorClass}`}
                >
                  {metric}
                </span>
              );
            })}
          </div>
        )}

        {/* Tech Stack (optional, shown in smaller text) */}
        {project.techStack.length > 0 && (
          <div className="pt-2 border-t border-zinc-800">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs rounded bg-zinc-900/40 text-zinc-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

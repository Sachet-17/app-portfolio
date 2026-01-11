"use client";

import { useState, useMemo } from "react";
import { Card } from "../components/card";
import { Calendar, Github, ExternalLink, FileText } from "lucide-react";
import { projects, getAllTags, getFeaturedProjects, type Project, type ProjectTag } from "../../util/projects";
import { Reveal, StaggerContainer, StaggerItem } from "../components/animations";
import Link from "next/link";

export function ProjectsContent() {
  const [selectedTag, setSelectedTag] = useState<ProjectTag | "all">("all");

  const featuredProjects = getFeaturedProjects();
  const allTags = getAllTags();

  // Filter projects by tag
  const filteredProjects = useMemo(() => {
    if (selectedTag === "all") return projects;
    return projects.filter((project) => project.tags.includes(selectedTag));
  }, [selectedTag]);

  // Separate featured and non-featured from filtered results
  const { featured, others } = useMemo(() => {
    const featured = filteredProjects.filter(p => p.featured);
    const others = filteredProjects.filter(p => !p.featured);
    return { featured, others };
  }, [filteredProjects]);

  const handleTagClick = (tag: ProjectTag | "all") => {
    setSelectedTag(tag);
  };

  return (
    <>
      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <Reveal delay={0.1}>
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl">
              Highlighted projects showcasing key technical achievements and impact.
            </p>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {featured.map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} featured />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        </Reveal>
      )}

      {/* All Projects Section */}
      <Reveal delay={0.2}>
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">All Projects</h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleTagClick("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedTag === "all"
                    ? "bg-zinc-800 text-white border border-zinc-700"
                    : "bg-zinc-900/40 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60 border border-zinc-800"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
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
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <div className="text-center py-12">
              <p className="text-zinc-400 text-lg">No projects found matching the selected tag.</p>
              <button
                onClick={() => setSelectedTag("all")}
                className="mt-4 text-zinc-300 hover:text-white underline"
              >
                Show all projects
              </button>
            </div>
          )}
        </section>
      </Reveal>
    </>
  );
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const getLinkIcon = (type: string) => {
    switch (type) {
      case "github":
        return <Github className="w-4 h-4" />;
      case "demo":
        return <ExternalLink className="w-4 h-4" />;
      case "case-study":
        return <FileText className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <Card>
      <div className="p-6 relative flex flex-col gap-4 duration-700 group h-full">
        {/* Header */}
        <div>
          <h3 className="text-xl font-semibold text-white group-hover:text-zinc-200 duration-150 mb-2">
            {project.title}
          </h3>
          {featured && (
            <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-orange-500/20 text-orange-300 border border-orange-500/30 mb-2">
              Featured
            </span>
          )}
          <p className="text-sm text-zinc-400 mt-2 line-clamp-2">{project.summary}</p>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <Calendar className="w-4 h-4" />
          <span>{project.date}</span>
        </div>

        {/* Tags */}
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-md bg-zinc-800/50 text-zinc-300 border border-zinc-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Impact Metrics */}
        {project.impactMetrics && project.impactMetrics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.impactMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="px-3 py-1.5 rounded-md bg-green-500/10 text-green-300 border border-green-500/20 text-xs font-medium"
              >
                <span className="font-semibold">{metric.value}</span> {metric.label}
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Preview */}
        {project.techStack.length > 0 && (
          <div className="mt-auto pt-2">
            <p className="text-xs text-zinc-500 mb-2">Tech Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs rounded bg-zinc-900/60 text-zinc-400 border border-zinc-800"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-2 py-1 text-xs rounded bg-zinc-900/60 text-zinc-400 border border-zinc-800">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2 pt-2 border-t border-zinc-800">
            {project.links.map((link, idx) => (
              <Link
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-800/50 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-600 transition-colors text-sm"
              >
                {getLinkIcon(link.type)}
                <span>{link.label || link.type}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}

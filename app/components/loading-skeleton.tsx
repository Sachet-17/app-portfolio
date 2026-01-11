export function ProjectCardSkeleton() {
  return (
    <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 animate-pulse">
      <div className="space-y-4">
        <div className="h-6 bg-zinc-800 rounded w-3/4"></div>
        <div className="h-4 bg-zinc-800 rounded w-1/4"></div>
        <div className="flex gap-2">
          <div className="h-6 bg-zinc-800 rounded w-20"></div>
          <div className="h-6 bg-zinc-800 rounded w-24"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-zinc-800 rounded"></div>
          <div className="h-4 bg-zinc-800 rounded w-5/6"></div>
          <div className="h-4 bg-zinc-800 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
}

export function SkillCardSkeleton() {
  return (
    <div className="flex flex-col items-center text-center animate-pulse">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl border border-zinc-800/80 bg-zinc-900/40"></div>
      <div className="mt-2 h-4 bg-zinc-800 rounded w-20"></div>
    </div>
  );
}

export function ExperienceCardSkeleton() {
  return (
    <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 animate-pulse">
      <div className="space-y-4">
        <div className="w-12 h-12 rounded-full bg-zinc-800"></div>
        <div className="space-y-2">
          <div className="h-6 bg-zinc-800 rounded w-3/4"></div>
          <div className="h-4 bg-zinc-800 rounded w-1/2"></div>
          <div className="flex gap-4">
            <div className="h-4 bg-zinc-800 rounded w-24"></div>
            <div className="h-4 bg-zinc-800 rounded w-32"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-zinc-800 rounded"></div>
          <div className="h-4 bg-zinc-800 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
}


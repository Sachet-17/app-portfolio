export interface Role {
  id: string;
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
}

export const roles: Role[] = [
  {
    id: "viabot-intern",
    title: "Software Engineer Intern",
    company: "ViaBot",
    location: "Remote",
    dates: "May 2024 – Aug 2024",
    bullets: [
      "Refined Spring Boot server-side components → +60% throughput, −75% latency.",
      "Python automation for data migration → −30% execution time, fewer errors.",
      "Integrated RESTful APIs with 3 third-party platforms → −40% integration time.",
      "Unit & integration testing (JUnit, PyTest) → ~95% coverage, −35% bugs.",
      "Agile collaboration across teams → +20% faster deployments.",
    ],
  },
  {
    id: "uic-intern",
    title: "Computer Engineering Intern",
    company: "University of Illinois at Chicago",
    location: "Chicago, IL",
    dates: "May 2022 – Dec 2022",
    bullets: [
      "Designed IR thermal camera circuits in Fritzing for precise hardware integration.",
      "Assembled components with custom 3D-printed shutter; precision soldering on perma-proto.",
      "Diagnosed & resolved circuit issues in a 5-person team → +30% system reliability.",
      "Optimized prototype by surfacing key design faults → fewer production errors.",
    ],
  },
];


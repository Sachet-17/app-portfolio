export interface AboutData {
  bio: {
    paragraphs: string[];
  };
  resume: {
    title: string;
    description: string;
    downloadUrl: string;
  };
  location: {
    city: string;
    country: string;
  };
  interests: Array<{
    title: string;
    description: string;
  }>;
}

export const aboutData: AboutData = {
  bio: {
    paragraphs: [
      "I'm Sachet Ranjan Bisi, a Computer Engineering graduate from NYU with hands-on experience in software development, backend engineering, and AI/ML deployment. I've built scalable APIs, optimized backend systems, and deployed intelligent applications across AWS, GCP, and Azure.",
      "My work spans from boosting system throughput by 60% at ViaBot to building an LLM-powered medication verification system that improved accuracy and halved reconciliation time. I'm passionate about designing reliable, impactful systems that blend innovation with real-world impact.",
      "Outside of work, I'm a tech enthusiast and content consumer who loves following the NBA, diving into anime and immersive TV shows, and solving problems over a good cup of coffee.",
    ],
  },
  resume: {
    title: "Résumé",
    description: "PDF download with experience, projects, and skills.",
    downloadUrl: "/Sachet%20Ranjan%20Bisi%20Resume.pdf",
  },
  location: {
    city: "New York",
    country: "USA",
  },
  interests: [
    {
      title: "Tech Enthusiast",
      description: "Always exploring AI/ML, cloud-native systems, and emerging tools.",
    },
    {
      title: "Basketball (NBA)",
      description: "Love following the game and analyzing plays.",
    },
    {
      title: "Anime & TV",
      description: "Big fan of immersive storytelling and creative worlds.",
    },
    {
      title: "Content Consumer",
      description: "Constantly learning through podcasts, videos, and online communities.",
    },
    {
      title: "Creative Problem-Solving",
      description: "Enjoy experimenting with new ideas that blend tech and creativity.",
    },
  ],
};


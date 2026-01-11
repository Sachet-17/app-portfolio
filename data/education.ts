export interface School {
  id: string;
  degree: string;
  university: string;
  location: string;
  dates: string;
  coursework: string[];
  logo: string;
  logoSize?: number;
}

export const schools: School[] = [
  {
    id: "nyu-ms",
    degree: "Master of Science in Computer Engineering",
    university: "New York University",
    location: "New York, NY",
    dates: "Sep 2023 – May 2025",
    coursework: [
      "Machine Learning",
      "Artificial Intelligence",
      "Internet Protocols",
      "Network Security",
    ],
    logo: "/edu/nyu.png",
    logoSize: 250,
  },
  {
    id: "uic-bs",
    degree: "Bachelor of Science in Computer Engineering",
    university: "University of Illinois at Chicago",
    location: "Chicago, IL",
    dates: "Aug 2019 – May 2023",
    coursework: [
      "Data Structures",
      "Computer Vision",
      "Systems Programming",
      "Computer Architecture",
    ],
    logo: "/edu/uic.png",
    logoSize: 250,
  },
  {
    id: "indus-ibdp",
    degree: "IBDP & IGCSE (Grade 9–12)",
    university: "Indus International School",
    location: "Hyderabad, India",
    dates: "Aug 2015 – May 2019",
    coursework: [
      "Computer Science HL",
      "Business HL",
      "Maths HL",
      "Physics SL",
      "English SL",
      "Hindi SL",
    ],
    logo: "/edu/indus2.png",
    logoSize: 200,
  },
  {
    id: "sevenhills-cbse",
    degree: "CBSE (Grade 1–8)",
    university: "Seven Hills Residential School",
    location: "India",
    dates: "Until May 2015",
    coursework: ["General Curriculum"],
    logo: "/edu/sevenhills2.png",
    logoSize: 150,
  },
];


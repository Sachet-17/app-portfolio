import Image from "next/image";
import { Navigation } from "../components/nav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type SkillItem = { name: string; src: string };

function Section({
  title,
  items,
}: {
  title: string;
  items: SkillItem[];
}) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-6">
        {title}
      </h2>

      {/* icon grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center">
        {items.map(({ name, src }) => (
          <div
            key={name}
            className="flex flex-col items-center text-center"
            title={name}
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl border border-zinc-800/80 bg-zinc-900/40 flex items-center justify-center overflow-hidden hover:scale-105 transition">
              {/* If the file exists it shows; if not, you still see the label below */}
              <Image
                src={src}
                alt={name}
                fill
                className="object-contain p-2"
                sizes="80px"
                priority={false}
              />
            </div>
            <span className="mt-2 text-sm text-zinc-300">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export const metadata = {
  title: "Skills",
  description:
    "Languages, frameworks, ML/AI tools, cloud & DevOps, and developer tooling I work with.",
};

export default function SkillsPage() {
  // --- Edit names only; file names are under /public/skills (see list below) ---
  const languages: SkillItem[] = [
    { name: "Python", src: "/skills/python.svg" },
    { name: "Java", src: "/skills/java.svg" },
    { name: "JavaScript", src: "/skills/javascript.svg" },
    { name: "C++", src: "/skills/cpp.svg" },
    { name: "HTML", src: "/skills/html5.svg" },
    { name: "CSS", src: "/skills/css3.svg" },
    { name: "SQL", src: "/skills/sql.svg" },
  ];

  const devTools: SkillItem[] = [
    { name: "VS Code", src: "/skills/vscode.svg" },
    { name: "Git", src: "/skills/git.svg" },
    { name: "JUnit", src: "/skills/junit.svg" },
    { name: "PyTest", src: "/skills/pytest.svg" },
    { name: "Jupyter", src: "/skills/jupyter.svg" },
    { name: "Postman", src: "/skills/postman.svg" },
    { name: "JAX", src: "/skills/jax.svg" },
  ];

  const frameworks: SkillItem[] = [
    { name: "TensorFlow", src: "/skills/tensorflow.svg" },
    { name: "PyTorch", src: "/skills/pytorch.svg" },
    { name: "scikit-learn", src: "/skills/scikitlearn.svg" },
    { name: "Keras", src: "/skills/keras.svg" },
    { name: "Pandas", src: "/skills/pandas.svg" },
    { name: "NumPy", src: "/skills/numpy.svg" },
    { name: "OpenCV", src: "/skills/opencv.svg" },
    { name: "NLP", src: "/skills/nlp.svg" },                 // generic NLP icon
    { name: "Transfer Learning", src: "/skills/transfer.svg" }, // generic
    { name: "LLM Integration", src: "/skills/llm.svg" },        // generic
    { name: "Spring Boot", src: "/skills/springboot.svg" },
    { name: "React", src: "/skills/react.svg" },
    { name: "Django", src: "/skills/django.svg" },
    { name: "REST / RESTful APIs", src: "/skills/rest.svg" },   // generic REST
    { name: "Firebase", src: "/skills/firebase.svg" },
  ];

  const cloud: SkillItem[] = [
    { name: "AWS (S3, EC2, Transcribe)", src: "/skills/aws.svg" },
    { name: "GCP", src: "/skills/gcp.svg" },
    { name: "Docker", src: "/skills/docker.svg" },
    { name: "Kubernetes", src: "/skills/kubernetes.svg" },
    { name: "Jenkins", src: "/skills/jenkins.svg" },
  ];

  return (
    <main className={`${inter.className} mx-auto max-w-6xl px-6 pt-48 pb-16`}>
      <Navigation />

      {/* Header (matches About/Projects vibe) */}
      <section className="mb-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Skills</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-zinc-400">
          I love learning and shipping—here are the languages, frameworks, ML tools,
          cloud services, and developer tooling I’m most comfortable with.
        </p>
      </section>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-zinc-900/0 via-zinc-900/20 to-zinc-900/0" />

      <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent" />

      {/* Groups */}
      <Section title="Languages" items={languages} />
      <Section title="Frameworks & Technologies" items={frameworks} />
      <Section title="Cloud & DevOps" items={cloud} />
      <Section title="Developer Tools" items={devTools} />

      <p className="mt-14 text-center text-sm text-zinc-500">
        *Recently exploring LLM evals, vector DBs, and low-latency inference patterns.
      </p>
    </main>
  );
}

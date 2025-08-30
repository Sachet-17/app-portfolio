<div align="center">
  <h1>app-portfolio</h1>
  <p>My personal portfolio — built with Next.js (App Router), Tailwind CSS, and deployed on Vercel.</p>

  <p>
    <a href="https://sachet-portfolio.vercel.app" target="_blank"><b>Live Demo</b></a> ·
    <a href="https://github.com/Sachet-17/app-portfolio" target="_blank">GitHub Repo</a>
  </p>

  <p>
    <a href="https://vercel.com/new/clone?repository-url=https://github.com/Sachet-17/app-portfolio">
      <img src="https://vercel.com/button" alt="Deploy with Vercel">
    </a>
  </p>

  <sub>Inspired by <a href="https://chronark.com" target="_blank">chronark.com</a></sub>
</div>

---

## 🖼 Preview

<img src="public/og.png" alt="Portfolio Preview" width="800"/>

---

## ✨ Features

- Modern, minimal design (dark UI) with smooth hover/transition polish
- App Router structure (`app/`) with reusable navigation and cards
- Sections: **Home**, **About**, **Skills**, **Education**, **Experience**, **Projects**, **Resume**
- Responsive layout (desktop & mobile)
- Social links (LinkedIn, GitHub, Email, Instagram)
- SEO + social previews via `app/layout.tsx` (OpenGraph, icons)

---

## 🧰 Tech Stack

- **Next.js** 13 App Router
- **React** 18
- **Tailwind CSS**
- **Lucide Icons** / **react-icons** (for skills)
- Deployed on **Vercel**

---

## 🏁 Getting Started (Local)

```bash
# 1) Clone
git clone https://github.com/Sachet-17/app-portfolio.git
cd app-portfolio

# 2) Install (npm)
npm install

# 3) Run dev server
npm run dev

Open http://localhost:3000

If you use environment variables later, create .env.local and keep it out of git.

📁 Project Structure

app/
  about/page.tsx
  skills/page.tsx
  education/page.tsx
  experience/page.tsx
  projects/page.tsx
  resume/page.tsx
  components/
    nav.tsx
    card.tsx
    ... (other shared UI)
public/
  og.png
  favicon.png
  apple-touch-icon.png
  headshots.jpg
  edu/
    nyu.png
    uic.png
    ... (school logos)
  skills/
    ... (skill icons if you use images instead of react-icons)
global.css


⸻

🧩 Use This As Your Own Portfolio (Fork Guide)
	1.	Fork this repo or use “Use this template”.
	2.	Update personal info:
	•	app/about/page.tsx — your bio, location, links, interests.
	•	app/skills/page.tsx — your skills (icons or images).
	•	app/education/page.tsx — schools, coursework, logos.
	•	app/experience/page.tsx — roles, bullet points, dates.
	•	app/projects/page.tsx — your projects list.
	•	app/resume/page.tsx — embed or link your PDF.
	3.	Replace images in /public:
	•	og.png (1200×630) for rich link previews.
	•	favicon.png (32×32) for browser tabs.
	•	apple-touch-icon.png (180×180) for iOS home screen.
	•	Your headshots.jpg and any logos under public/.
	4.	Metadata & SEO (app/layout.tsx):
	•	Update metadataBase, titles, description, and keep og.png.
	•	Icons already referenced in icons.
	5.	Social links:
	•	Home page social row + About quick links → set your LinkedIn/GitHub/Email/Instagram.
	6.	(Optional) README:
	•	Update links (demo, repo) to yours.

⸻

🚀 Deploy to Vercel
	1.	Push to GitHub.
	2.	Go to Vercel → New Project → Import your repo.
	3.	Use defaults:
	•	Install: npm install
	•	Build: npm run build
	•	Output: .next
	•	Node.js: 20.x
	4.	Set Project Settings → Build & Development Settings → Node.js: 20.x.
	5.	Deploy. Done 🎉

⸻

🛠 Troubleshooting

Build fails on Vercel? Try these:
	•	Ensure you only have one lockfile (use package-lock.json). Remove pnpm-lock.yaml or yarn.lock if present.
	•	Run locally in prod mode:

	rm -rf node_modules .next
	npm install

Fix whatever error appears locally; it’ll match Vercel’s error.

	•	Make sure all referenced images/PDFs exist under /public with correct paths.
	•	Types/Icons:
	•	If you get Attempted import error for an icon, verify the icon name exists in your version of react-icons.
	•	TypeScript:
	•	Add "skipLibCheck": true in tsconfig.json if 3rd-party type errors pop up.

⸻

📜 License

MIT — feel free to use and adapt.
Please replace my personal details (name, images, resume, links) with yours before publishing.

⸻

🙌 Acknowledgements
	•	Inspired by the aesthetics and structure of chronark.com.
	•	Built with ❤️ using Next.js, Tailwind CSS, and Vercel.
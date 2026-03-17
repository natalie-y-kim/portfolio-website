export default function PortfolioWebsite() {
  const projects = [
    {
      title: "Student Subletting Platform",
      subtitle: "Cloud-native microservices web platform",
      description:
        "Built a subletting platform using FastAPI, Docker, GCP, and MySQL with multiple services for listings, users, bookings, and composite endpoints.",
      impact:
        "Designed backend APIs, deployed services, and handled service-to-service data consistency and cloud infrastructure.",
      tech: ["FastAPI", "Docker", "GCP", "MySQL", "Swagger/OpenAPI"],
      github: "#",
      demo: "#",
    },
    {
      title: "The Humor Project",
      subtitle: "Humor caption generation and voting app",
      description:
        "Developed a full-stack web app where users upload images, generate captions, and vote on submissions using modern auth and database tooling.",
      impact:
        "Implemented backend and product logic around image uploads, user authentication, and voting workflows.",
      tech: ["Next.js", "Supabase", "Vercel", "TypeScript"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI Internship Project",
      subtitle: "Multimodal preprocessing and AI pipeline work",
      description:
        "Built preprocessing pipelines integrating OCR and Whisper for image and audio inputs, and supported model experimentation for AI-generated image detection.",
      impact:
        "Improved data handling reliability across multimodal inputs and contributed to model training workflows.",
      tech: ["Python", "Whisper", "OCR", "PyTorch", "ResNet"],
      github: "#",
      demo: "#",
    },
  ];

  const skills = [
    "Python",
    "Java",
    "TypeScript",
    "FastAPI",
    "Next.js",
    "React",
    "Supabase",
    "Docker",
    "GCP",
    "MySQL",
    "Machine Learning",
    "REST APIs",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Columbia University • Computer Science
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                Natalie Kim
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                Software engineer focused on backend systems, AI-driven
                products, and full-stack applications. I build reliable tools
                that turn complex ideas into usable products.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Contact Me
                </a>
                <a
                  href="#"
                  className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Resume
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Currently</p>
              <ul className="mt-4 space-y-4 text-sm leading-6 text-slate-700">
                <li>Senior at Columbia University studying Computer Science</li>
                <li>
                  Interested in software engineering, AI/ML, and product-focused
                  backend development
                </li>
                <li>Looking for new grad software engineering opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                About
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                I like building systems that are practical, clear, and scalable.
              </h2>
            </div>
            <div>
              <p className="text-base leading-8 text-slate-600">
                I&apos;m a senior studying Computer Science at Columbia
                University, with experience across AI pipelines, backend
                services, and full-stack product development. My work has
                included building cloud-deployed APIs, multimodal data
                processing pipelines, and user-facing applications that combine
                solid engineering with thoughtful product design.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                I&apos;m especially interested in roles where I can work on
                backend infrastructure, AI-enabled workflows, and products that
                have real impact for users.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Selected Work
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Projects
              </h2>
            </div>
            <p className="hidden max-w-xl text-sm leading-7 text-slate-500 md:block">
              A few projects that reflect my interest in backend engineering,
              applied AI, and product-focused development.
            </p>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <h3 className="text-2xl font-semibold text-slate-950">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-slate-500">
                      {project.subtitle}
                    </p>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                      {project.description}
                    </p>
                    <p className="mt-4 text-base leading-8 text-slate-700">
                      <span className="font-medium text-slate-900">
                        What I contributed:
                      </span>{" "}
                      {project.impact}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex shrink-0 gap-3">
                    <a
                      href={project.github}
                      className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Skills
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Tools and technologies
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Let&apos;s connect.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                I&apos;m currently looking for software engineering opportunities.
                Feel free to reach out about new grad roles, internships, or
                projects.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm text-slate-700">
              <a
                href="mailto:nk3165@columbia.edu"
                className="hover:text-slate-950"
              >
                nk3165@columbia.edu
              </a>
              <a
                href="https://github.com/natalie-y-kim"
                className="hover:text-slate-950"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nataliekimmm/"
                className="hover:text-slate-950"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

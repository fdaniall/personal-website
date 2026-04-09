import { ArrowUpRight, Download } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import EasterEgg from "@/components/EasterEgg";

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span
    className="px-1.5 py-0.5 rounded-sm font-medium"
    style={{
      backgroundColor: "var(--highlight)",
      color: "var(--text)",
    }}
  >
    {children}
  </span>
);

const ProjectLink = ({
  title,
  description,
  tech,
  href,
}: {
  title: string;
  description: string;
  tech: string[];
  href?: string;
}) => {
  const isPublic = href && href !== "#";

  if (!isPublic) {
    return (
      <div
        className="project-link py-4"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-center justify-between gap-4">
          <span style={{ color: "var(--text-muted)" }}>{title}</span>
          <span
            className="font-mono text-[10px] uppercase tracking-wider"
            style={{ color: "var(--text-subtle)" }}
          >
            private
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: "var(--tag-bg)",
                color: "var(--text-subtle)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link group block py-4 transition-colors border-b hover:border-b-[var(--border-hover)]"
      style={{ borderBottomColor: "var(--border)" }}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-medium" style={{ color: "var(--text)" }}>
          {title}
        </span>
        <ArrowUpRight
          size={16}
          className="arrow flex-shrink-0"
          style={{ color: "var(--text-muted)" }}
        />
      </div>
      <div className="project-desc">
        <p className="text-sm pt-2" style={{ color: "var(--text-muted)" }}>
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-2">
        {tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] px-2 py-0.5 rounded-full transition-colors"
            style={{
              backgroundColor: "var(--tag-bg)",
              color: "var(--tag-text)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
};

const SocialLink = ({ label, href }: { label: string; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="social-link font-medium text-sm"
    style={{ color: "var(--text)" }}
  >
    {label}
  </a>
);

const StatusDot = () => (
  <span className="relative flex h-2 w-2" aria-hidden="true">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
  </span>
);

export default function Home() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-16 md:gap-20">
        {/* ── Left: Sidebar ── */}
        <aside className="md:w-64 md:flex-shrink-0 animate-fade-up">
          <div className="md:sticky md:top-24 space-y-10">
            {/* Identity + Theme Toggle */}
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-serif tracking-tight leading-tight mb-2">
                  <EasterEgg>Fakhri Danial</EasterEgg>
                </h1>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  Software Engineer
                </p>
              </div>
              <ThemeToggle />
            </div>

            {/* Status */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <StatusDot />
                <span
                  className="text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  Back-End Dev @ Ciomas Adisatwa
                </span>
              </div>
              <p
                className="text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                Jakarta, Indonesia
              </p>
            </div>

            {/* Now */}
            <div>
              <h2
                className="font-mono text-[10px] uppercase tracking-wider mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Now
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <span aria-hidden="true" style={{ color: "var(--text-muted)" }}>&#8227;</span>
                  <span style={{ color: "var(--text)" }}>
                    Building Web3 products on Base L2
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span aria-hidden="true" style={{ color: "var(--text-muted)" }}>&#8227;</span>
                  <span style={{ color: "var(--text)" }}>
                    Growing Money Hunter community
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span aria-hidden="true" style={{ color: "var(--text-muted)" }}>&#8227;</span>
                  <span style={{ color: "var(--text)" }}>
                    Exploring AI &times; blockchain
                  </span>
                </li>
              </ul>
            </div>

            {/* Tech */}
            <div>
              <h2
                className="font-mono text-[10px] uppercase tracking-wider mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Stack
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "React",
                  "Next.js",
                  "Express",
                  "Django",
                  "Flutter",
                  "Solidity",
                  "TypeScript",
                  "Python",
                  "PostgreSQL",
                  "MySQL",
                ].map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--tag-bg)",
                      color: "var(--tag-text)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2
                className="font-mono text-[10px] uppercase tracking-wider mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Experience
              </h2>
              <div className="space-y-3">
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--text)" }}
                  >
                    Back-End Developer
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    PT Ciomas Adisatwa &middot; 2025 &ndash; Now
                  </p>
                </div>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--text)" }}
                  >
                    Full Stack Developer
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    PT Japfa Comfeed &middot; 2024 &ndash; 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2
                className="font-mono text-[10px] uppercase tracking-wider mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Education
              </h2>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--text)" }}
              >
                B.Sc. Computer Science
              </p>
              <p
                className="text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                Bina Nusantara University &middot; 2025
              </p>
            </div>

            {/* Links + Resume */}
            <div className="space-y-4">
              <nav aria-label="Social links" className="flex flex-wrap gap-x-5 gap-y-2">
                <SocialLink
                  label="GitHub"
                  href="https://github.com/fdaniall"
                />
                <SocialLink
                  label="LinkedIn"
                  href="https://linkedin.com/in/fdaniall"
                />
                <SocialLink
                  label="Instagram"
                  href="https://instagram.com/fdaniall"
                />
                <SocialLink
                  label="Email"
                  href="mailto:fakhridanial29@gmail.com"
                />
              </nav>
              <a
                href="/curriculum-vitae.pdf"
                download
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-colors hover:opacity-80"
                style={{
                  backgroundColor: "var(--tag-bg)",
                  color: "var(--text)",
                  border: "1px solid var(--border)",
                }}
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>
          </div>
        </aside>

        {/* ── Right: Content ── */}
        <div className="flex-1 min-w-0">
          {/* About */}
          <section
            className="mb-20 space-y-5 leading-[1.8] animate-fade-up delay-1"
            style={{ color: "var(--text-muted)" }}
          >
            <p>
              I&apos;m a software engineer who loves building things that
              work well. With 2+ years of experience across full stack
              development, I&apos;ve shipped products ranging from ISP
              management platforms to manufacturing execution systems.
            </p>

            <p>
              Currently exploring <Highlight>Web3</Highlight> and blockchain
              — my project <Highlight>Vultara</Highlight>, a smart vault on
              Base for automated ETH yield, won{" "}
              <strong className="font-medium" style={{ color: "var(--text)" }}>
                3rd Place at Base Indonesia Hackathon 2025
              </strong>
              .
            </p>

            <p>
              I care about building software that is{" "}
              <strong className="font-medium" style={{ color: "var(--text)" }}>
                well-crafted
              </strong>
              ,{" "}
              <strong className="font-medium" style={{ color: "var(--text)" }}>
                reliable
              </strong>
              , and{" "}
              <strong className="font-medium" style={{ color: "var(--text)" }}>
                actually useful
              </strong>
              . Here are some projects that reflect that:
            </p>
          </section>

          {/* Web3 Projects */}
          <section className="mb-16 animate-fade-up delay-2">
            <h2
              className="font-mono text-[10px] uppercase tracking-wider mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              Web3 & Blockchain
            </h2>
            <div className="flex flex-col">
              <ProjectLink
                title="Vultara"
                description="Smart Vault on Base — automated ETH yield via Thetanuts covered calls. 3rd Place, Base Indonesia Hackathon 2025."
                tech={["Base L2", "Solidity", "Thetanuts V4", "AI"]}
                href="https://www.vultara.xyz/"
              />
              <ProjectLink
                title="Confidee"
                description="Web3 anonymous social platform built on Base L2 with AI integration."
                tech={["Next.js", "Solidity", "Base L2", "AI"]}
                href="https://confidee.xyz"
              />
            </div>
          </section>

          {/* Selected Works */}
          <section className="mb-20 animate-fade-up delay-3">
            <h2
              className="font-mono text-[10px] uppercase tracking-wider mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              Selected Works
            </h2>
            <div className="flex flex-col">
              <ProjectLink
                title="RajaWifi"
                description="Modular ISP management — mobile app, admin dashboard, and payment gateway."
                tech={["Flutter", "React", "Express.js", "MySQL"]}
                href="https://play.google.com/store/apps/details?id=com.rajawifi.app"
              />
              <ProjectLink
                title="Money Hunter"
                description="Web3 and finance community. Co-founded and growing the ecosystem."
                tech={["Community", "Web3", "Finance"]}
                href="https://moneyhunter.xyz"
              />
              <ProjectLink
                title="Travel CRM"
                description="Comprehensive travel management, sales, and loyalty system."
                tech={["Next.js", "TypeScript", "MySQL"]}
              />
              <ProjectLink
                title="iMEXS"
                description="Intelligent Manufacturing Execution System for real-time inventory monitoring."
                tech={["Django", "React", "PostgreSQL"]}
              />
              <ProjectLink
                title="Japfa Innovation"
                description="Internal platform for showcasing corporate innovation ideas."
                tech={["Django", "CSS", "PostgreSQL"]}
              />
            </div>
          </section>

          {/* Footer */}
          <footer
            className="pt-10 animate-fade-up delay-4"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <p
              className="font-mono text-[10px] uppercase tracking-wider"
              style={{ color: "var(--text-subtle)" }}
            >
              &copy; {new Date().getFullYear()} Fakhri Danial
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}

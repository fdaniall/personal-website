import { ArrowUpRight, Download, Mail } from "lucide-react";
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

const FeaturedProject = ({
  title,
  description,
  tech,
  href,
  badge,
}: {
  title: string;
  description: string;
  tech: string[];
  href: string;
  badge?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="featured-project group block p-4 md:p-5 rounded-lg transition-all"
    style={{
      backgroundColor: "var(--card-bg)",
      border: "1px solid var(--border)",
    }}
  >
    <div className="flex items-start justify-between gap-3 mb-2">
      <div className="flex flex-wrap items-center gap-2 md:gap-3">
        <span
          className="text-base font-medium"
          style={{ color: "var(--text)" }}
        >
          {title}
        </span>
        {badge && (
          <span
            className="font-mono text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap"
            style={{
              backgroundColor: "var(--badge-bg)",
              color: "var(--badge-text)",
            }}
          >
            {badge}
          </span>
        )}
      </div>
      <ArrowUpRight
        size={16}
        className="arrow flex-shrink-0 mt-1"
        style={{ color: "var(--text-muted)" }}
      />
    </div>
    <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>
      {description}
    </p>
    <div className="flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <span
          key={t}
          className="font-mono text-[10px] px-2 py-0.5 rounded-full"
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

const ProjectLink = ({
  title,
  description,
  tech,
  role,
  href,
}: {
  title: string;
  description: string;
  tech: string[];
  role?: string;
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
          <div className="flex flex-wrap items-center gap-1.5 md:gap-2.5">
            <span style={{ color: "var(--text-muted)" }}>{title}</span>
            {role && (
              <span
                className="font-mono text-[10px] px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: "var(--tag-bg)",
                  color: "var(--tag-text)",
                }}
              >
                {role}
              </span>
            )}
          </div>
          <span
            className="font-mono text-[10px] uppercase tracking-wider flex-shrink-0"
            style={{ color: "var(--text-subtle)" }}
          >
            private
          </span>
        </div>
        <p
          className="text-sm pt-2"
          style={{ color: "var(--text-muted)" }}
        >
          {description}
        </p>
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
        <div className="flex flex-wrap items-center gap-1.5 md:gap-2.5">
          <span className="font-medium" style={{ color: "var(--text)" }}>
            {title}
          </span>
          {role && (
            <span
              className="font-mono text-[10px] px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: "var(--tag-bg)",
                color: "var(--tag-text)",
              }}
            >
              {role}
            </span>
          )}
        </div>
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

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="font-mono text-[11px] uppercase tracking-wider mb-3"
    style={{ color: "var(--text-muted)" }}
  >
    {children}
  </h2>
);

const ExperienceBlock = () => (
  <div>
    <SectionLabel>Experience</SectionLabel>
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
);

const EducationBlock = () => (
  <div>
    <SectionLabel>Education</SectionLabel>
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
);

const stackItems = [
  "TypeScript",
  "Python",
  "Solidity",
  "React",
  "Next.js",
  "Express",
  "Django",
  "Flutter",
  "PostgreSQL",
  "MySQL",
];

const StackBlock = () => (
  <div>
    <SectionLabel>Stack</SectionLabel>
    <div className="flex flex-wrap gap-1.5">
      {stackItems.map((t) => (
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
);

export default function Home() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-12 md:py-24">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        {/* ── Left: Sidebar ── */}
        <aside className="md:w-64 md:flex-shrink-0 animate-fade-up">
          <div className="md:sticky md:top-24 space-y-8">
            {/* Identity + Theme Toggle */}
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl md:text-3xl font-serif tracking-tight leading-tight mb-1">
                  <EasterEgg>Fakhri Danial</EasterEgg>
                </h1>
                <p
                  className="text-base md:text-sm font-medium leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  Software Engineer
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <StatusDot />
                  <span
                    className="text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Jakarta, Indonesia
                  </span>
                </div>
              </div>
              <ThemeToggle />
            </div>

            {/* Mobile: social links right after identity */}
            <div
              className="md:hidden pt-2 pb-2"
            >
              <nav aria-label="Social links" className="flex flex-wrap gap-x-5 gap-y-2">
                <SocialLink label="GitHub" href="https://github.com/fdaniall" />
                <SocialLink label="LinkedIn" href="https://linkedin.com/in/fdaniall" />
                <SocialLink label="Email" href="mailto:fakhridanial29@gmail.com" />
              </nav>
            </div>

            {/* Mobile: divider between identity and content */}
            <div
              className="md:hidden h-px"
              style={{ backgroundColor: "var(--border)" }}
            />

            {/* Desktop: full sidebar */}
            <div className="hidden md:flex md:flex-col md:gap-8">
              <ExperienceBlock />
              <EducationBlock />
              <StackBlock />

              {/* Links + Resume */}
              <div className="space-y-4">
                <nav aria-label="Social links" className="flex flex-wrap gap-x-5 gap-y-2">
                  <SocialLink label="GitHub" href="https://github.com/fdaniall" />
                  <SocialLink label="LinkedIn" href="https://linkedin.com/in/fdaniall" />
                  <SocialLink label="Instagram" href="https://instagram.com/fdaniall" />
                  <SocialLink label="Email" href="mailto:fakhridanial29@gmail.com" />
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
          </div>
        </aside>

        {/* ── Right: Content ── */}
        <div className="flex-1 min-w-0">
          {/* About */}
          <section
            className="mb-14 md:mb-16 leading-[1.8] animate-fade-up delay-1"
            style={{ color: "var(--text)" }}
          >
            <p className="mb-5">
              I build things that end up in people&apos;s hands &mdash; not
              side projects that live in a GitHub graveyard. An ISP platform
              processing real payments. A factory system tracking live
              production lines. A{" "}
              <Highlight>DeFi vault</Highlight> that won{" "}
              <strong className="font-medium">
                3rd at Base Indonesia Hackathon 2025
              </strong>
              .
            </p>

            <p className="mb-5" style={{ color: "var(--text-muted)" }}>
              Most of my work sits at the intersection of &ldquo;does this
              actually solve a problem&rdquo; and &ldquo;can I ship it before
              the deadline kills me.&rdquo; So far that&apos;s meant
              building everything from Flutter mobile apps to Solidity
              smart contracts.
            </p>

            <p style={{ color: "var(--text-muted)" }}>
              Currently deep in Web3 &mdash; building on Base L2 and
              running{" "}
              <strong className="font-medium" style={{ color: "var(--text)" }}>
                Money Hunter
              </strong>
              , a 2,000+ member community I built around Web3 and finance.
            </p>
          </section>

          {/* Featured Projects */}
          <section className="mb-14 md:mb-16 animate-fade-up delay-2">
            <h2
              className="font-mono text-[11px] uppercase tracking-wider mb-5 md:mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              Featured
            </h2>
            <div className="grid gap-3">
              <FeaturedProject
                title="Vultara"
                description="DeFi smart vault on Base L2. Automates ETH yield through Thetanuts covered call strategies. Users deposit ETH, the vault handles the rest."
                tech={["Solidity", "Base L2", "Thetanuts V4", "AI"]}
                badge="3rd Place — Base Hackathon 2025"
                href="https://www.vultara.xyz/"
              />
              <FeaturedProject
                title="RajaWifi"
                description="Full-stack ISP management platform. Flutter app for customers to buy packages and pay bills, React dashboard for admin operations, integrated payment gateway. Live on Play Store with real users."
                tech={["Flutter", "React", "Express.js", "MySQL"]}
                badge="Live Product"
                href="https://play.google.com/store/apps/details?id=com.rajawifi.app"
              />
            </div>
          </section>

          {/* Other Projects */}
          <section className="mb-14 md:mb-16 animate-fade-up delay-3">
            <h2
              className="font-mono text-[11px] uppercase tracking-wider mb-5 md:mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              Other Projects
            </h2>
            <div className="flex flex-col">
              <ProjectLink
                title="Confidee"
                description="Anonymous social platform on Base L2. Post and interact without revealing your identity, with AI-powered content moderation."
                tech={["Next.js", "Solidity", "Base L2", "AI"]}
                href="https://confidee.xyz"
              />
              <ProjectLink
                title="Money Hunter"
                description="Web3 and finance community I co-founded. 2,000+ members sharing alpha on DeFi, trading, and blockchain opportunities."
                tech={["Community", "Web3", "Finance"]}
                role="Co-founder"
                href="https://moneyhunter.xyz"
              />
              <ProjectLink
                title="iMEXS"
                description="Built and shipped a manufacturing execution system during my time at Japfa. Tracks real-time inventory across active production lines — used daily by the operations team on the factory floor."
                tech={["Django", "React", "PostgreSQL"]}
                role="Built at Japfa"
              />
              <ProjectLink
                title="Travel CRM"
                description="End-to-end travel agency system — booking management, sales pipeline, customer loyalty tracking. Handles multi-branch operations."
                tech={["Next.js", "TypeScript", "MySQL"]}
              />
              <ProjectLink
                title="Japfa Innovation"
                description="Designed and built an innovation platform adopted company-wide at Japfa (30,000+ employees). Handles the full lifecycle from idea submission to executive review and approval."
                tech={["Django", "PostgreSQL"]}
                role="Built at Japfa"
              />
            </div>
          </section>

          {/* Mobile: Background details after projects */}
          <section className="mb-14 md:hidden animate-fade-up delay-3">
            <div
              className="p-5 rounded-lg space-y-6"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--border)",
              }}
            >
              <ExperienceBlock />
              <EducationBlock />
              <StackBlock />
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
          </section>

          {/* CTA */}
          <section
            className="mb-14 md:mb-16 animate-fade-up delay-4 p-5 md:p-8 rounded-lg"
            style={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--border)",
            }}
          >
            <h2
              className="font-mono text-[11px] uppercase tracking-wider mb-3"
              style={{ color: "var(--text-muted)" }}
            >
              Get in Touch
            </h2>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--text-muted)" }}
            >
              Building something interesting? Looking for someone who can
              ship across the full stack? I&apos;m always open to
              conversations about new projects and opportunities.
            </p>
            <a
              href="mailto:fakhridanial29@gmail.com"
              className="cta-link inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: "var(--text)" }}
            >
              <Mail size={14} />
              fakhridanial29@gmail.com
            </a>
          </section>

          {/* Footer */}
          <footer
            className="pt-8 md:pt-10 animate-fade-up delay-4"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <p
              className="font-mono text-[11px] uppercase tracking-wider"
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

import { ArrowUpRight } from "lucide-react";

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-highlight/60 px-1.5 py-0.5 rounded-sm font-medium text-gray-900">
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
      <div className="project-link py-4 border-b border-gray-100">
        <div className="flex items-center justify-between gap-4">
          <span className="text-gray-400">{title}</span>
          <span className="font-mono text-[10px] text-gray-300 uppercase tracking-wider">
            private
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] text-gray-300 bg-gray-50 px-2 py-0.5 rounded-full"
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
      className="project-link group block py-4 border-b border-gray-100 hover:border-gray-300 transition-colors"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-gray-900 font-medium">{title}</span>
        <ArrowUpRight size={16} className="arrow text-muted flex-shrink-0" />
      </div>
      <div className="project-desc">
        <p className="text-sm text-muted pt-2">{description}</p>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-2">
        {tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full group-hover:bg-highlight/40 group-hover:text-gray-600 transition-colors"
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
    className="social-link text-gray-900 font-medium text-sm"
  >
    {label}
  </a>
);

const StatusDot = () => (
  <span className="relative flex h-2 w-2">
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
            {/* Identity */}
            <div>
              <h1 className="text-2xl md:text-3xl font-serif tracking-tight leading-tight mb-2">
                <span className="name-shimmer">Fakhri Danial</span>
              </h1>
              <p className="text-sm text-muted leading-relaxed">
                Software Engineer
              </p>
            </div>

            {/* Status */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <StatusDot />
                <span className="text-sm text-gray-600">
                  Back-End Dev @ Ciomas Adisatwa
                </span>
              </div>
              <p className="text-sm text-muted">Jakarta, Indonesia</p>
            </div>

            {/* Tech */}
            <div>
              <h3 className="font-mono text-[10px] text-muted uppercase tracking-wider mb-3">
                Stack
              </h3>
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
                    className="font-mono text-[11px] text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="font-mono text-[10px] text-muted uppercase tracking-wider mb-3">
                Experience
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-900 font-medium">
                    Back-End Developer
                  </p>
                  <p className="text-xs text-muted">
                    PT Ciomas Adisatwa &middot; 2025 &ndash; Now
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-900 font-medium">
                    Full Stack Developer
                  </p>
                  <p className="text-xs text-muted">
                    PT Japfa Comfeed &middot; 2024 &ndash; 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="font-mono text-[10px] text-muted uppercase tracking-wider mb-3">
                Education
              </h3>
              <p className="text-sm text-gray-900 font-medium">
                B.Sc. Computer Science
              </p>
              <p className="text-xs text-muted">
                Bina Nusantara University &middot; 2025
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-x-5 gap-y-2">
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
            </div>
          </div>
        </aside>

        {/* ── Right: Content ── */}
        <div className="flex-1 min-w-0">
          {/* About */}
          <section className="mb-20 space-y-5 text-gray-600 leading-[1.8] animate-fade-up delay-1">
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
              <strong className="text-gray-900 font-medium">
                3rd Place at Base Indonesia Hackathon 2025
              </strong>
              .
            </p>

            <p>
              I care about building software that is{" "}
              <strong className="text-gray-900 font-medium">
                well-crafted
              </strong>
              ,{" "}
              <strong className="text-gray-900 font-medium">reliable</strong>
              , and{" "}
              <strong className="text-gray-900 font-medium">
                actually useful
              </strong>
              . Here are some projects that reflect that:
            </p>
          </section>

          {/* Web3 Projects */}
          <section className="mb-16 animate-fade-up delay-2">
            <h2 className="font-mono text-[10px] text-muted uppercase tracking-wider mb-6">
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
            <h2 className="font-mono text-[10px] text-muted uppercase tracking-wider mb-6">
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
          <footer className="pt-10 border-t border-gray-100 animate-fade-up delay-4">
            <p className="font-mono text-[10px] text-gray-300 uppercase tracking-wider">
              &copy; {new Date().getFullYear()} Fakhri Danial
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}

import { ArrowUpRight } from "lucide-react";

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-highlight/60 px-1.5 py-0.5 rounded-sm font-medium text-gray-900">
    {children}
  </span>
);

const ProjectLink = ({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href?: string;
}) => {
  const isPublic = href && href !== "#";

  if (!isPublic) {
    return (
      <div className="project-link py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">{title}</span>
          <span className="font-mono text-xs text-gray-300">private</span>
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
      <div className="flex items-center justify-between">
        <span className="text-gray-900 font-medium">{title}</span>
        <ArrowUpRight size={16} className="arrow text-muted" />
      </div>
      <div className="project-desc">
        <p className="text-sm text-muted pt-2">{description}</p>
      </div>
    </a>
  );
};

const SocialLink = ({ label, href }: { label: string; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="social-link text-gray-900 font-medium"
  >
    {label}
  </a>
);

export default function Home() {
  return (
    <main className="min-h-screen max-w-xl mx-auto px-6 py-20 md:py-32">
      {/* ── Greeting ── */}
      <section className="mb-20 animate-fade-up">
        <p className="text-muted font-mono text-xs tracking-wider uppercase mb-6">
          Software Engineer
        </p>
        <h1 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight">
          Hey, I&apos;m{" "}
          <span className="name-shimmer">Fakhri Danial</span>.
        </h1>
      </section>

      {/* ── About ── */}
      <section className="mb-20 space-y-5 text-gray-600 leading-[1.8] animate-fade-up delay-1">
        <p>
          I&apos;m a Jakarta-based software engineer with 2+ years of
          experience building web and mobile applications. I love to build
          stuff, learn new things, and currently exploring the world of{" "}
          <Highlight>Web3</Highlight> and blockchain.
        </p>

        <p>
          Currently a Back-End Developer at{" "}
          <Highlight>PT Ciomas Adisatwa</Highlight>. Previously a Full Stack
          intern at <Highlight>Japfa Comfeed</Highlight>, where I built
          internal innovation platforms and manufacturing execution systems.
        </p>

        <p>
          CS graduate from{" "}
          <Highlight>Bina Nusantara University</Highlight>.
        </p>
      </section>

      {/* ── What I bring ── */}
      <section className="mb-20 space-y-5 text-gray-600 leading-[1.8] animate-fade-up delay-2">
        <p>
          I work across the stack — React, Next.js, Express, Django, Flutter,
          Solidity — and care about building things that are{" "}
          <strong className="text-gray-900 font-medium">well-crafted</strong>,{" "}
          <strong className="text-gray-900 font-medium">reliable</strong>, and{" "}
          <strong className="text-gray-900 font-medium">
            actually useful
          </strong>
          .
        </p>

        <p>Here are some projects that reflect that:</p>
      </section>

      {/* ── Web3 Projects ── */}
      <section className="mb-16 animate-fade-up delay-3">
        <h2 className="font-mono text-xs text-muted uppercase tracking-wider mb-6">
          Web3 & Blockchain
        </h2>
        <div className="flex flex-col">
          <ProjectLink
            title="Vultara"
            description="Smart Vault on Base — automated ETH yield via Thetanuts covered calls. 3rd Place, Base Indonesia Hackathon 2025."
            href="https://www.vultara.xyz/"
          />
          <ProjectLink
            title="Stako Protocol"
            description="Buy global stocks with IDRX stablecoin. Tokenized stock protocol built on Lisk L2."
            href="https://stako.vercel.app/"
          />
          <ProjectLink
            title="Confidee"
            description="Anonymous social platform powered by Base L2 and AI. 10k+ users on the Web2 version."
            href="https://confidee.xyz"
          />
        </div>
      </section>

      {/* ── Selected Works ── */}
      <section className="mb-20 animate-fade-up delay-4">
        <h2 className="font-mono text-xs text-muted uppercase tracking-wider mb-6">
          Selected Works
        </h2>
        <div className="flex flex-col">
          <ProjectLink
            title="RajaWifi"
            description="Modular ISP management — mobile app, admin dashboard, and payment gateway. Flutter + Express + React."
            href="https://play.google.com/store/apps/details?id=com.rajawifi.app"
          />
          <ProjectLink
            title="Money Hunter"
            description="Financial tracking and management tool."
            href="https://moneyhunter.xyz"
          />
          <ProjectLink
            title="Travel CRM"
            description="Comprehensive travel management, sales, and loyalty system."
          />
          <ProjectLink
            title="iMEXS"
            description="Intelligent Manufacturing Execution System for real-time inventory monitoring."
          />
          <ProjectLink
            title="Your Innovation"
            description="Internal platform for showcasing corporate innovation ideas."
          />
        </div>
      </section>

      {/* ── Connect ── */}
      <section className="mb-20 animate-fade-up delay-5">
        <h2 className="font-mono text-xs text-muted uppercase tracking-wider mb-6">
          Elsewhere
        </h2>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <SocialLink label="GitHub" href="https://github.com/fdaniall" />
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
      </section>

      {/* ── Footer ── */}
      <footer className="pt-10 border-t border-gray-100 animate-fade-up delay-6">
        <p className="font-mono text-xs text-gray-300">
          &copy; {new Date().getFullYear()} Fakhri Danial
        </p>
      </footer>
    </main>
  );
}

import { ArrowUpRight } from "lucide-react";

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-highlight px-1.5 py-0.5 rounded font-medium">
    {children}
  </span>
);

const ProjectLink = ({
  title,
  href,
}: {
  title: string;
  href?: string;
}) => {
  if (!href || href === "#") {
    return <p className="text-muted py-3 border-b border-gray-100">{title}</p>;
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between py-3 border-b border-gray-100 hover:border-gray-300 transition-colors"
    >
      <span className="underline decoration-gray-300 group-hover:decoration-gray-900 transition-colors">
        {title}
      </span>
      <ArrowUpRight
        size={16}
        className="text-muted opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </a>
  );
};

const SocialLink = ({
  label,
  href,
}: {
  label: string;
  href: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="underline decoration-gray-300 hover:decoration-gray-900 transition-colors"
  >
    {label}
  </a>
);

export default function Home() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-6 py-16 md:py-24">
      {/* Intro */}
      <section className="mb-16">
        <h1 className="text-xl font-medium mb-1">
          Hey, I&apos;m <Highlight>Fakhri Danial</Highlight>.
        </h1>
      </section>

      {/* About */}
      <section className="mb-14 space-y-6 text-gray-700 leading-relaxed">
        <p>
          I&apos;m a Jakarta-based software engineer with 2+ years of experience
          building web and mobile applications. I love to build stuff, learn new
          things, and currently exploring the world of{" "}
          <Highlight>Web3</Highlight> and blockchain.
        </p>

        <p>
          Currently working as a Back-End Developer at{" "}
          <Highlight>PT Ciomas Adisatwa</Highlight>. Before that, I was a Full
          Stack Developer intern at <Highlight>PT Japfa Comfeed</Highlight>,
          where I built internal innovation platforms and manufacturing execution
          systems.
        </p>

        <p>
          Graduated from <Highlight>Bina Nusantara University</Highlight> with a
          Bachelor of Computer Science.
        </p>
      </section>

      {/* What I do */}
      <section className="mb-14 space-y-6 text-gray-700 leading-relaxed">
        <p>
          I build full stack applications with React, Next.js, Express, Django,
          and Flutter. I work with databases like PostgreSQL and MySQL, and
          I&apos;m comfortable with both frontend and backend.
        </p>

        <p>
          Those experiences shaped me to be more{" "}
          <strong className="text-gray-900">curious</strong>,{" "}
          <strong className="text-gray-900">resourceful</strong>, and{" "}
          <strong className="text-gray-900">detail-oriented</strong>. Here are
          some projects that reflect that journey:
        </p>
      </section>

      {/* Web3 Projects */}
      <section className="mb-14">
        <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
          Web3 & Blockchain
        </h2>
        <div className="flex flex-col">
          <ProjectLink
            title="Vultara — Smart Vault on Base (3rd Place, Base Indonesia Hackathon 2025)"
            href="https://www.vultara.xyz/"
          />
          <ProjectLink
            title="Stako Protocol — Tokenized Stocks on Lisk L2"
            href="https://stako.vercel.app/"
          />
          <ProjectLink
            title="Confidee — Anonymous Social Platform (10k+ users)"
            href="https://confidee.xyz"
          />
        </div>
      </section>

      {/* Other Projects */}
      <section className="mb-14">
        <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
          Selected Works
        </h2>
        <div className="flex flex-col">
          <ProjectLink
            title="RajaWifi — ISP Management System"
            href="https://play.google.com/store/apps/details?id=com.rajawifi.app"
          />
          <ProjectLink
            title="Money Hunter — Financial Tracking Tool"
            href="https://moneyhunter.xyz"
          />
          <ProjectLink title="Travel CRM — Travel Management System" />
          <ProjectLink title="iMEXS — Manufacturing Execution System" />
          <ProjectLink title="Your Innovation — Corporate Innovation Platform" />
        </div>
      </section>

      {/* Connect */}
      <section className="mb-14 space-y-6 text-gray-700 leading-relaxed">
        <p>
          Feel free to reach out — I&apos;m always open to interesting
          conversations, collaborations, or freelance projects. You can find me
          on <SocialLink label="GitHub" href="https://github.com/fdaniall" />,{" "}
          <SocialLink
            label="LinkedIn"
            href="https://linkedin.com/in/fdaniall"
          />
          ,{" "}
          <SocialLink
            label="Instagram"
            href="https://instagram.com/fdaniall"
          />
          , or just{" "}
          <SocialLink
            label="send me an email"
            href="mailto:fakhridanial29@gmail.com"
          />
          .
        </p>
      </section>

      {/* Footer */}
      <footer className="pt-8 border-t border-gray-100 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Fakhri Danial</p>
      </footer>
    </main>
  );
}

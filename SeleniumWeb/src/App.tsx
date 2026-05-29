import { motion } from "framer-motion";

const DISCORD_URL = "https://discord.gg/E4z4vJVTK";
const TOS_URL = "https://tos.getselenium.xyz";
const MAIN_URL = "https://getselenium.xyz";

type TosSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

const TOS_SECTIONS: TosSection[] = [
  {
    title: "1. Definitions",
    paragraphs: [
      '"Selenium" / "we" / "us" Refers to the Selenium exploit, website, loader, APIs, Discord services, and related systems.',
      '"User" / "you" Any person using Selenium.',
      '"Software" Any executable, loader, script, API, or file distributed by Selenium.',
    ],
  },
  {
    title: "2. Eligibility",
    paragraphs: [
      "You must be at least 13 years old to use Selenium.",
      "By using the Service, you confirm that use of the Software is legal in your jurisdiction.",
    ],
  },
  {
    title: "3. Acceptable Use",
    paragraphs: ["You agree not to:", "Violation of these Terms may result in a permanent ban."],
    bullets: [
      "Reverse engineer or crack Selenium",
      "Redistribute Selenium files without permission",
      "Abuse, harass, or threaten staff or users",
      "Upload malware or malicious code",
      "Attempt to access backend systems or APIs without authorization",
      "Use Selenium services for illegal activity",
    ],
  },
  {
    title: "4. Roblox Disclaimer",
    paragraphs: [
      "Selenium is not affiliated with or endorsed by Roblox Corporation.",
      "You understand that using exploit software may violate Roblox's Terms of Use and may result in account warnings, suspensions, or bans.",
      "We are not responsible for any consequences caused by use of the Software.",
    ],
  },
  {
    title: "5. Availability",
    paragraphs: [
      "We do not guarantee that Selenium will always function correctly or remain undetected.",
      "Updates made by Roblox or third parties may temporarily or permanently break features.",
      "Features may be changed, removed, or discontinued at any time without notice.",
    ],
  },
  {
    title: "6. Disclaimer of Warranty",
    paragraphs: [
      'Selenium is provided "AS IS" without warranties of any kind.',
      "We do not guarantee:",
      "Use the Software at your own risk.",
    ],
    bullets: ["Uptime", "Stability", "Compatibility", "Security", "Error-free operation"],
  },
  {
    title: "7. Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, Selenium and its developers will not be liable for:",
    ],
    bullets: [
      "Roblox bans",
      "Data loss",
      "Service interruptions",
      "Damages to hardware or software",
      "Any indirect or consequential damages",
    ],
  },
  {
    title: "8. Termination",
    paragraphs: [
      "We reserve the right to suspend or terminate access to Selenium at any time, with or without notice, for any reason.",
    ],
  },
  {
    title: "9. Changes to Terms",
    paragraphs: [
      "These Terms may be updated at any time.",
      "Continued use of Selenium after changes are posted means you accept the revised Terms.",
    ],
  },
  {
    title: "10. Contact",
    paragraphs: ["Official support is provided only through Selenium's official channels."],
  },
];

function TosPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur-md">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 lg:px-10">
          <a href={MAIN_URL} className="text-2xl font-black uppercase tracking-[0.2em] text-white">
            Selenium
          </a>
          <a
            href={MAIN_URL}
            className="rounded-md border border-white/40 px-4 py-2 text-sm font-bold uppercase tracking-wider text-white transition hover:border-green-300 hover:text-green-200"
          >
            Back Home
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 pt-28 pb-16 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-zinc-300"
        >
          <h1 className="text-5xl font-black text-white sm:text-6xl">Selenium Terms of Service</h1>
          <p className="mt-4 text-lg">
            <span className="font-bold text-white">Effective Date:</span> January 1, 2026
          </p>
          <p className="mt-4">
            By downloading, accessing, or using Selenium ("Service", "Software"), you agree to these Terms
            of Service. If you do not agree, you must stop using the Service immediately.
          </p>

          {TOS_SECTIONS.map((section) => (
            <section key={section.title} className="mt-10 border-t border-white/10 pt-10">
              <h2 className="text-3xl font-black text-white">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-3 list-disc space-y-1 pl-6">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </motion.div>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-400">
        © 2026 Selenium. All rights reserved.
      </footer>
    </div>
  );
}

function MainPage() {
  return (
    <div className="bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur-md">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 lg:px-10">
          <a href="#top" className="text-2xl font-black uppercase tracking-[0.2em] text-white">
            Selenium
          </a>
          <a
            href={TOS_URL}
            className="rounded-md border border-white/40 px-4 py-2 text-sm font-bold uppercase tracking-wider text-white transition hover:border-green-300 hover:text-green-200"
          >
            TOS
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.2),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.2),transparent_40%),linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.95))]" />
          <div className="hero-grid absolute inset-0 opacity-40" />

          <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-6 pt-24 pb-16 lg:px-10">
            <div className="max-w-5xl space-y-8 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl leading-[1.05] font-black tracking-tight sm:text-6xl lg:text-7xl"
              >
                Polished to be the best script execution tool available for Roblox
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mx-auto max-w-2xl text-base text-zinc-300 sm:text-lg"
              >
                Fast launch, stable sessions, and a clean setup flow. Join the Discord for announcements,
                updates, and support.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <a
                  href="#products"
                  className="rounded-md bg-gradient-to-r from-green-500 to-emerald-400 px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition hover:brightness-110"
                >
                  Products
                </a>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:border-green-300 hover:text-green-200"
                >
                  Join Discord
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="products" className="relative border-t border-white/10 bg-black py-24">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.65 }}
            className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 text-center lg:px-10"
          >
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Products</h2>
            <p className="max-w-2xl text-zinc-300">
              Download the latest Selenium executor build directly from our official Gofile release link.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href="https://gofile.io/d/9YtwEN"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/40 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:border-green-300 hover:text-green-200"
              >
                Executor
              </a>
            </div>
          </motion.div>
        </section>

        <section className="relative border-t border-white/10 bg-black py-24">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.65 }}
            className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 lg:px-10"
          >
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Collaborators</h2>
            <p className="max-w-3xl text-zinc-300">
              Silicon is designed to stand at the top as the #1 script experience for Roblox users who want
              the best exploiting experience with a big variety of games available.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://discord.gg/YZMn5sHH"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/40 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:border-green-300 hover:text-green-200"
              >
                Discord
              </a>
              <a
                href="https://robloxproducts.xyz?ref=9b4t"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-gradient-to-r from-emerald-400 to-green-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-black transition hover:brightness-110"
              >
                Purchase
              </a>
            </div>
          </motion.div>
        </section>

        <section className="border-t border-white/10 bg-black py-16">
          <div className="mx-auto w-full max-w-6xl px-6 text-left lg:px-10">
            <p className="font-semibold text-white">Contributors:</p>
            <p className="text-zinc-300">9b4t - Owner</p>
            <p className="text-zinc-300">5xy - Founder and Co-Owner</p>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-400">
          © 2026 Selenium. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

export default function App() {
  const isTosHost =
    typeof window !== "undefined" &&
    (window.location.hostname === "tos.getselenium.xyz" || window.location.pathname === "/tos");

  return isTosHost ? <TosPage /> : <MainPage />;
}

import { motion } from "framer-motion";

const DISCORD_URL = "https://discord.gg/E4z4vJVTK";
const TOS_URL = "https://tos.getselenium.xyz";
const MAIN_URL = "https://getselenium.xyz";

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
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-black tracking-tight sm:text-6xl"
        >
          Terms of Service
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-zinc-300"
        >
          By using Selenium services, products, or community channels, you agree to these terms.
        </motion.p>

        <div className="mt-12 space-y-10 text-zinc-300">
          <section>
            <h2 className="text-2xl font-bold text-white">1. Access and Usage</h2>
            <p className="mt-2">
              You are responsible for how you use Selenium content and tools. Access may be limited,
              suspended, or revoked for abuse, impersonation, fraud, or any disruptive behavior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">2. Community Conduct</h2>
            <p className="mt-2">
              Discord and collaborator channels must remain respectful. Harassment, spam, scams, and leaked
              or stolen content are not tolerated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">3. Purchases and Delivery</h2>
            <p className="mt-2">
              Digital purchases are fulfilled through official Selenium sources only. Keep proof of purchase
              and contact support in Discord for delivery issues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">4. Updates and Changes</h2>
            <p className="mt-2">
              We may update product behavior, pricing, and these terms at any time. Continued use after
              updates means you accept the latest version.
            </p>
          </section>
        </div>
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
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://gofile.io/d/9YtwEN"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/40 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:border-green-300 hover:text-green-200"
              >
                Executor
              </a>
            </div>
            <div className="w-full max-w-2xl pt-3 text-left text-zinc-300">
              <p className="font-semibold text-white">Contributors:</p>
              <p>9b4t - Owner</p>
              <p>5xy - Founder and Co-Owner</p>
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

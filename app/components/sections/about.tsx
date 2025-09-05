import { motion } from "framer-motion";

export function About() {
  return (
    <motion.section
      id="blockgram"
      className="flex flex-col gap-[2.564vw] md:gap-[1.563vw]"
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="wrapper small bg-[#cfc9e1]"
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          <h3 className="text-styles-h1">About Blockgram</h3>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="wrapper">
          <div className="paddings">
            <div className="md:w-[55vw] flex flex-col gap-[1.667vw]">
              <div className="text-styles-h4">
                We&apos;re a technology company that has created an all-in-one
                communication platform built on the Telegram API — designed
                specifically for crypto-native communities. Blockgram helps
                traders, investors, KOLs, and project teams connect securely
                through AI-driven protection, verified identities, seamless
                token transfers, and powerful productivity tools.
              </div>
              <div className="text-styles-h4 secondary">
                Thanks to Blockgram, users can build trust, efficiency, and
                growth inside their communities, whether it&apos;s preventing
                scams with impersonator checks, staying organized with smart
                folders, or enabling direct in-chat trading with token tickers.
                Everything crypto communities need, natively in one app.
              </div>
              <div className="text-styles-h4 secondary">
                The solution has been rapidly adopted across global crypto
                networks, with early adoption showing thousands of users across
                multiple countries, and strong traction among power users,
                whales, and community leaders. Blockgram is redefining what
                crypto communication should be: secure, organized, and
                crypto-native.
              </div>
              <a
                href="https://blockgram-landing.vercel.app/"
                target="_blank"
                className="bg-blue text-white uppercase cursor-pointer rounded-full py-[2.051vw] md:py-[0.625vw] px-[5.128vw] md:px-[2.5vw] duration-200 transition-all inline-block w-fit"
              >
                <div className="text-styles-content font-bold">LEARN MORE</div>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

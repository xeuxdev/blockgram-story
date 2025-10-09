import { motion } from "framer-motion";

export function Introduction() {
  return (
    <section
      className="flex flex-col gap-[2.564vw] md:gap-[1.563vw]"
      id="introduction"
    >
      <motion.section
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="wrapper bg-[#2EA4DF] h-[210vw] md:h-[44.583vw]">
          <div className="flex flex-col gap-[5.128vw] px-[6.154vw] md:gap-[1.667vw] pl-[4.167vw] max-md:pt-[16.4vw] relative z-10">
            <div className="hero_title">
              <h1 className="text-[12.3vw]/[100%] md:text-[6.667vw]/[100%] font-medium -tracking-[0.068vw]">
                Blockgram
              </h1>
              <h2 className="text-[12.3vw]/[100%] md:text-[6.667vw]/[100%] -tracking-[0.068vw] font-ter">
                The Telegram you love only smarter
              </h2>
            </div>
            <div className="text-styles-h4 md:w-[1500px]">
              Familiar design, but with AI, better UX, &amp; and built-in
              features you always wished <br /> Telegram had.
            </div>
          </div>

          <img
            src="/hero-image-2.png"
            alt=""
            className="absolute md:w-[45vw] md:-bottom-[0vw] -right-[2vw] mix-blend-luminosity"
          />
        </div>
      </motion.section>

      <motion.section
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="wrapper small bg-[#2EA4DF]">
          <h3 className="text-styles-h1 text-center text-white">
            Introduction
          </h3>
        </div>
      </motion.section>

      <motion.section
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="wrapper">
          <div className="paddings">
            <div className="flex flex-col gap-[4vw] md:gap-[1.667vw]">
              <div className="text-styles-h4 secondary">
                Telegram changed how we connect, but it never solved the real
                problems. Scam bots, noisy notifications, forgotten chats, and
                clunky add-ons continue to frustrate millions of users every
                day.
              </div>
              <div className="text-styles-h4 secondary">
                Our study reveals that over{" "}
                <strong counter-element="number" className="number-counter">
                  60
                </strong>
                <strong>
                  % of Telegram users encounter scams or spam monthly
                </strong>
                , forcing communities and individuals to look for safer, smarter
                alternatives.
              </div>
              <div className="text-styles-h4 secondary">
                Blockgram is built to answer this. The same familiar interface
                you know, now supercharged with AI that summarizes chats,
                detects impersonators, organizes notifications, and makes
                in-chat payments seamless.
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
}

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
        className="wrapper small bg-[#A8D6F3]"
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
                We created Blockgram to be the next evolution of Telegram. It
                keeps the same familiar design but is rebuilt to be smarter,
                safer, and more powerful. Our goal is simple: give people the
                tools they need out of the box without relying on bots or risky
                add ons.
              </div>
              <div className="text-styles-h4 secondary">
                We built AI powered chat summaries, scam detection, verified
                badges, and smarter notifications to solve the chaos of group
                conversations. We added in chat payments and token features so
                transactions can be as seamless as sending a message. We also
                designed better moderation and identity tools so communities can
                grow with confidence.
              </div>
              <div className="text-styles-h4 secondary">
                Blockgram is not just a new app. It is a step forward for
                messaging itself. We are focused on creating an experience that
                feels fast, intuitive, and secure for everyone, from casual
                users to global communities.
              </div>
              <a
                href="https://blockgram-landing.vercel.app/"
                target="_blank"
                className="bg-[#2EA4DF] text-white uppercase cursor-pointer rounded-full py-[2.051vw] md:py-[0.625vw] px-[5.128vw] md:px-[2.5vw] duration-200 transition-all inline-block w-fit"
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

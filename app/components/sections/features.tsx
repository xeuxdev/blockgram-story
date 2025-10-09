import { motion } from "framer-motion";
import { FeaturesVideosSection } from "./features-2";

const features = [
  {
    id: "01",
    content:
      "Smarter conversations with AI summaries that condense hundreds of messages into instant context",
  },
  {
    id: "02",
    content:
      "Safer chats through scam detection, impersonator checks, and verified premium badges",
  },
  {
    id: "03",
    content:
      "Seamless in-chat payments where tokens and stablecoins can be sent, received, and even traded directly inside the conversation",
  },
  {
    id: "04",
    content:
      "Cleaner notifications that prioritize what matters most and cut through the constant noise",
  },
  {
    id: "05",
    content:
      "Holder and identity badges that give admins context on who is real and what role they play in the community",
  },
  {
    id: "06",
    content:
      "Unified account management that lets power users run multiple identities under one secure profile",
  },
  {
    id: "07",
    content:
      "Better group control with whale group features, moderation tools, and endorsement systems for trusted members",
  },
  {
    id: "08",
    content:
      "Built-in video and call support for AMAs, team updates, and community engagement without leaving the app",
  },
];

export function Features() {
  return (
    <motion.section
      id="features"
      className="flex flex-col gap-[2.564vw] md:gap-[1.563vw]"
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.section
        className="section_title"
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="wrapper small bg-blue text-white">
          <div className="text-center">
            <h3 className="text-styles-h1">Features in Blockgram</h3>
          </div>
        </div>
      </motion.section>

      {/* cards */}

      <motion.div
        className="section_cards block"
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="wrapper overflow-visible!">
          <div className="paddings">
            <div className="flex max-md:flex-col max-md:gap-[10.256vw] justify-between items-stretch">
              {/* left */}
              <div className="relative md:w-[32.604vw]">
                <div className="flex flex-col sticky top-[4vw] gap-[1.25vw]">
                  <div className="text-styles-h2">
                    How Blockgram Redefines Messaging?
                  </div>
                  <p className="text-styles-content">
                    The Next Evolution of Telegram
                  </p>
                </div>
              </div>

              {/* cards list */}
              <div className="flex flex-col md:w-[34.167vw] gap-[4vw] md:gap-[2.5vw] h-full">
                {features.map((item, index) => (
                  <div
                    className={`bg-blue flex flex-col p-[6.154vw] md:p-[1.667vw] rounded-[6.154vw] md:rounded-[1.25vw] text-white border-[0.513vw] md:border-[0.104vw] border-dark-purple gap-[3.077vw] md:gap-[1.667vw] sticky top-[20vw] md:top-[4vw] ${
                      (index + 1) % 2 === 0 ? "rotate-2" : "-rotate-2"
                    }`}
                    key={item.id}
                  >
                    <div className="text-styles-h4">{item.id}</div>
                    <div className="text-styles-h4">{item.content}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <FeaturesVideosSection />
    </motion.section>
  );
}

import { motion } from "framer-motion";

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
      <motion.div
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
      </motion.div>

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
                    How Will Blockgram Transform Crypto Chats
                  </div>
                </div>
              </div>

              {/* cards list */}
              <div className="flex flex-col md:w-[34.167vw] gap-[4vw] md:gap-[2.5vw] h-full">
                <div className="bg-blue flex flex-col p-[6.154vw] md:p-[1.667vw] rounded-[6.154vw] md:rounded-[1.25vw] text-white border-[0.513vw] md:border-[0.104vw] border-dark-purple gap-[3.077vw] md:gap-[1.667vw] sticky top-[20vw] md:top-[4vw] -rotate-2">
                  <div className="text-styles-h4">01</div>
                  <div className="text-styles-h4">
                    Seamless in-chat crypto transfers with usernames as wallets
                  </div>
                </div>
                <div className="bg-blue flex flex-col p-[6.154vw] md:p-[1.667vw] rounded-[6.154vw] md:rounded-[1.25vw] text-white border-[0.513vw] md:border-[0.104vw] border-dark-purple gap-[3.077vw] md:gap-[1.667vw] sticky top-[20vw] md:top-[4vw] rotate-2">
                  <div className="text-styles-h4">02</div>
                  <div className="text-styles-h4">
                    AI spam detection and scam bot filtering for safer
                    communities
                  </div>
                </div>
                <div className="bg-blue flex flex-col p-[6.154vw] md:p-[1.667vw] rounded-[6.154vw] md:rounded-[1.25vw] text-white border-[0.513vw] md:border-[0.104vw] border-dark-purple gap-[3.077vw] md:gap-[1.667vw] sticky top-[20vw] md:top-[4vw] -rotate-2">
                  <div className="text-styles-h4">03</div>
                  <div className="text-styles-h4">
                    Verified KOL & dev badges to stop impersonators
                  </div>
                </div>
                <div className="bg-blue flex flex-col p-[6.154vw] md:p-[1.667vw] rounded-[6.154vw] md:rounded-[1.25vw] text-white border-[0.513vw] md:border-[0.104vw] border-dark-purple gap-[3.077vw] md:gap-[1.667vw] sticky top-[20vw] md:top-[4vw] rotate-2">
                  <div className="text-styles-h4">04</div>
                  <div className="text-styles-h4">
                    Instant token trading with ticker-based buy/sell
                  </div>
                </div>
                <div className="bg-blue flex flex-col p-[6.154vw] md:p-[1.667vw] rounded-[6.154vw] md:rounded-[1.25vw] text-white border-[0.513vw] md:border-[0.104vw] border-dark-purple gap-[3.077vw] md:gap-[1.667vw] sticky top-[20vw] md:top-[4vw] -rotate-2">
                  <div className="text-styles-h4">05</div>
                  <div className="text-styles-h4">
                    Smart notifications that prioritize high-value accounts
                  </div>
                </div>
                <div className="bg-blue flex flex-col p-[6.154vw] md:p-[1.667vw] rounded-[6.154vw] md:rounded-[1.25vw] text-white border-[0.513vw] md:border-[0.104vw] border-dark-purple gap-[3.077vw] md:gap-[1.667vw] sticky top-[20vw] md:top-[4vw] rotate-2">
                  <div className="text-styles-h4">06</div>
                  <div className="text-styles-h4">
                    Automatic foddering to keep KOLs, devs, and whales organized
                  </div>
                </div>
                <div className="bg-blue flex flex-col p-[6.154vw] md:p-[1.667vw] rounded-[6.154vw] md:rounded-[1.25vw] text-white border-[0.513vw] md:border-[0.104vw] border-dark-purple gap-[3.077vw] md:gap-[1.667vw] sticky top-[20vw] md:top-[4vw] rotate-2">
                  <div className="text-styles-h4">07</div>
                  <div className="text-styles-h4">
                    Built-in video calls and Meet-style scheduling
                  </div>
                </div>
                <div className="bg-blue flex flex-col p-[6.154vw] md:p-[1.667vw] rounded-[6.154vw] md:rounded-[1.25vw] text-white border-[0.513vw] md:border-[0.104vw] border-dark-purple gap-[3.077vw] md:gap-[1.667vw] sticky top-[20vw] md:top-[4vw] rotate-2">
                  <div className="text-styles-h4">08</div>
                  <div className="text-styles-h4">
                    Unlimited accounts for power users and managers
                  </div>
                </div>
                <div className="bg-blue flex flex-col p-[6.154vw] md:p-[1.667vw] rounded-[6.154vw] md:rounded-[1.25vw] text-white border-[0.513vw] md:border-[0.104vw] border-dark-purple gap-[3.077vw] md:gap-[1.667vw] sticky top-[20vw] md:top-[4vw] rotate-2">
                  <div className="text-styles-h4">09</div>
                  <div className="text-styles-h4">
                    File scanner to block malware and unsafe attachments
                  </div>
                </div>
                <div className="bg-blue flex flex-col p-[6.154vw] md:p-[1.667vw] rounded-[6.154vw] md:rounded-[1.25vw] text-white border-[0.513vw] md:border-[0.104vw] border-dark-purple gap-[3.077vw] md:gap-[1.667vw] sticky top-[20vw] md:top-[4vw] rotate-2">
                  <div className="text-styles-h4">10</div>
                  <div className="text-styles-h4">
                    AI chat summarization to cut through noisy groups
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="section_desc"
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="wrapper">
          <div className="paddings">
            <div className="flex flex-col gap-[1.667vw]">
              <div className="text-styles-h4 secondary">
                Crypto communities now have access to AI-powered security, smart
                notifications, and built-in wallets tools once unavailable
                inside Telegram. This means safer conversations, seamless token
                transfers, and smarter organization of noisy chats, especially
                in times when scams and chaos are at their peak.
              </div>
              <div className="text-styles-h4 secondary">
                Blockgram users now benefit from a trust layer with verified KOL
                badges, token-holder markers, and file scanning. This translates
                into more informed decisions, faster trades, and a sharper focus
                on meaningful engagement something Telegram was never designed
                to deliver.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

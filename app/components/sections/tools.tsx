import { motion } from "framer-motion";
import { Tables } from "../table";

export function Tools() {
  return (
    <motion.section
      id="tools"
      className="flex flex-col gap-[2.564vw] md:gap-[1.563vw] relative"
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <img
        src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d891b9b6336e27451858f3_pc.svg"
        loading="lazy"
        alt=""
        className="z-10 absolute top-[52vw] -right-[2vw] md:inset-[4vw_1vw_auto_auto] w-[25vw] md:w-[10vw]"
      />

      <motion.div
        className="section_title"
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="wrapper small text-white bg-[#2EA4DF]">
          <div className="text-center">
            <h3 className="text-styles-h1">
              Use of <span className="alt">Blockgram Tools</span>
            </h3>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="section_title-desc"
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="wrapper">
          <div className="paddings">
            <div className="flex gap-[4.103vw] md:gap-[1.042vw] flex-col md:flex-row">
              <div className="flex flex-col md:w-[35.365vw] gap-[4.103vw] md:gap-[1.042vw]">
                <h4 className="text-styles-h2">
                  Why You Should Use Blockgram:{" "}
                  <strong className="alt text-[#2EA4DF]">
                    <br />
                    Solving Telegram&apos;s Flaws
                  </strong>
                </h4>
              </div>
              <div className="flex flex-col gap-[4.103vw] md:gap-[1.042vw] flex-1">
                <div className="text-styles-h4">
                  Telegram is the hub of crypto, but it&apos;s broken, scams,
                  noise, fake accounts, no wallet, no trust. Blockgram fixes it
                  all with AI spam protection, verified KOL badges, secure
                  in-chat token transfers, smart folders, and reminders.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="section_graphs"
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="wrapper">
          <div className="paddings">
            <div className="flex flex-col gap-[4vw]">
              {/* title */}
              <div className="flex justify-center">
                <div className="flex md:w-[49vw] text-center flex-col gap-[4.103vw] md:gap-[1.042vw]">
                  <h5 className="text-styles-h3">
                    Why Blockgram is{" "}
                    <strong className="alt text-[#2EA4DF]">
                      Built for the Future
                    </strong>
                  </h5>
                </div>
              </div>

              {/* graphs */}
              <div className="flex flex-col relative space-y-[2.5vw]">
                <Tables />
              </div>

              {/* under */}
              <div className="flex flex-col gap-[4.103vw] md:gap-[1.042vw] *:md:text-center mt-[2vw] md:w-[52vw] mx-auto">
                <div className="text-styles-h4">
                  <strong className="text-[#2EA4DF] font-bold">72%</strong> of
                  users want AI tools built directly into their messaging app
                  instead of relying on third party bots or plugins
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* measure */}

      <motion.div
        className="section_many-graphs"
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="wrapper">
          <div className="paddings">
            <div className="flex flex-col gap-[3.125vw]">
              <div className="w-[49vw] mx-auto">
                <div className="text-center mobile-short">
                  <h5 className="text-styles-h3">
                    Do you need AI assistance{" "}
                    <span className="alt text-[#2EA4DF]">in Telegram?</span>
                  </h5>
                </div>
              </div>
              <img
                src="/assistance.png"
                loading="lazy"
                alt="Chart: yes - 72%, no - 28%"
                className="image"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* metrics that matter */}
      <motion.div
        className="section_title-desc"
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="wrapper">
          <div className="paddings">
            <div className="title-desc_wrapper items-center">
              <div className="title-desc_left-title">
                <div className="bg-white rounded-[1.667vw] w-full md:w-[34vw] p-[1.667vw]">
                  <div className="flex items-baseline gap-[0.521vw] text-[#2EA4DF] text-[19vw] md:text-[7vw]/[115%]">
                    <span counter-element="number" className="text-styles-176">
                      14
                    </span>
                    <span className="text-styles-176">%</span>
                    <span className="text-[4.103vw] md:text-[2.083vw] -tracking-[0.104vw]">
                      in 2023
                    </span>
                  </div>
                  <div className="flex items-baseline gap-[0.521vw] pl-[1vw] text-[19vw] md:text-[7vw]/[115%] text-[#2EA4DF]">
                    <div className="text-styles-176">→</div>
                    <div counter-element="number" className="text-styles-176">
                      21
                    </div>
                    <div className="text-styles-176">%</div>
                    <div className="text-[4.103vw] md:text-[2.083vw] -tracking-[0.104vw]">
                      in 2024
                    </div>
                  </div>
                </div>
              </div>
              <div className="title-desc_right-desc">
                <div className="text-styles-h4">
                  Smarter tools take center stage
                </div>
                <div className="text-styles-content">
                  With Blockgram, AI features are not an add on but a core part
                  of the experience. From instant chat summaries to scam
                  detection and profile verification, users get the clarity and
                  safety they have been asking for. The shift is clear, people
                  now expect their messaging app to be intelligent, secure, and
                  designed around real conversations
                </div>
              </div>
            </div>

            <div className="mt-[3vw] rounded-[1.667vw]">
              <video
                src="use-of-blockgram-tools.mp4"
                controls
                poster="/use-blockgram-tools.png"
                width="100%"
              ></video>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

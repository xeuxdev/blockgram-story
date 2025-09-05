import React from "react";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";

export function AISection() {
  return (
    <motion.section
      id="ai"
      className="flex flex-col gap-[2.564vw] md:gap-[1.563vw] relative"
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <img
        src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66dae4640e8f1f59e6564cfe_ai%20robot.svg"
        loading="lazy"
        alt=""
        className="z-10 w-[26vw] top-[47vw] left-[6vw] md:w-[13vw] absolute md:inset-[32vw_auto_auto_16vw]"
      />

      <img
        src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d992f54d92de071eb94b46_pencil.svg"
        loading="lazy"
        alt=""
        className="pointer-events-none w-[30vw] -right-[2vw] md:w-[16vw] top-[50vw] left-auto md:right-0 absolute z-10 md:inset-[30vw_auto_auto_auto]"
      />

      <motion.section
        className="section_title"
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="wrapper small bg-green text-white px-10">
          <div className="text-center">
            <h3 className="text-styles-h1">
              AI in Blockgram: <span className="alt">Promise or Pitfall?</span>
            </h3>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section_title-desc"
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="wrapper">
          <div className="paddings">
            <div className="title-desc_wrapper">
              <div className="title-desc_left-title">
                <h4 className="text-styles-h2">
                  People Deserve A Messaging App{" "}
                  <span className="alt text-green">That Works For Them</span>
                </h4>
              </div>
              <div className="title-desc_right-desc">
                <div className="text-styles-h4">
                  Thanks to Blockgram, conversations become smarter and safer
                </div>
                <div className="text-styles-content">
                  The same familiar Telegram design, rebuilt with AI and
                  crypto-native tools to fix what has been broken for years.
                  Blockgram handles scam bots, noisy notifications, and messy
                  chats with AI-powered protection, smart summaries, and clean
                  organization. It also makes payments seamless by letting you
                  send or receive crypto directly inside the chat, with verified
                  profiles and badges that bring real trust to communities.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section_desc"
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="wrapper">
          <div className="paddings">
            <div className="mt-[3vw] rounded-[1.667vw] overflow-hidden">
              <video
                src="https://go.prowly.com/hubfs/State%20of%20PR%202024%20-%20Tonya%20McKenzie.mp4"
                controls
                width="100%"
              ></video>
            </div>
            <div className="flex flex-col mt-[2vw] gap-[1vw]">
              <div className="text-styles-h4">Meet Leo </div>
              <div className="font-medium text-[1.042vw]/[145%] font-sec">
                See how Leo navigates in the world of messaging
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Skills />
      </motion.div> */}
    </motion.section>
  );
}

function Skills() {
  const [activeTab, setActiveTab] = React.useState<"2024" | "2023" | "table">(
    "2024"
  );

  return (
    <section className="section_graphs">
      <div className="wrapper">
        <div className="paddings">
          <div className="flex flex-col gap-[4vw]">
            {/* title */}
            <div className="flex justify-center">
              <div className="flex md:w-[63vw] text-center flex-col gap-[1.042vw]">
                <h5 className="text-styles-h3">
                  What skills will become more important for <br />
                  <span className="alt text-green">
                    PR pros as AI becomes more prevalent in the industry?
                  </span>
                </h5>
              </div>
            </div>

            {/* graphs */}
            <div className="flex flex-col relative space-y-[2.5vw]">
              {/* tablist */}
              <div
                className="flex p-[1.6vw] md:p-[0.625vw] justify-center rounded-full bg-white gap-[2.564vw] md:gap-[0.417vw] relative w-fit mx-auto"
                role="tablist"
              >
                {(["2024", "2023", "table"] as const).map((item) => {
                  const isActive = item === activeTab;

                  return (
                    <button
                      key={item}
                      className={cn(
                        "bg-white rounded-full py-[1.282vw] px-[2.564vw] md:py-[0.521vw] md:px-[1.970vw] transition-all duration-250 text-center relative inline-block",
                        isActive ? "bg-green text-white" : "text-dark-purple"
                      )}
                      role="tab"
                      onClick={() => setActiveTab(item)}
                    >
                      <span className="font-bold text-styles-content capitalize">
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* content */}
              <div className="overflow-visible relative w-full">
                {activeTab === "2024" ? (
                  <div className="max-h-[374px] size-full">
                    <img src="/ai/ai-skills-2024.png" alt="" />
                  </div>
                ) : activeTab === "2023" ? (
                  <div className="max-h-[374px] size-full">
                    <img src="/ai/ai-skills-2023.png" alt="" />
                  </div>
                ) : (
                  <div className="max-h-[632px] size-full">
                    <img src="/ai/ai-skills-table.png" alt="" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

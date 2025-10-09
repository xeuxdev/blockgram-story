import { motion } from "framer-motion";
import React from "react";
import { cn } from "~/lib/utils";
import { BarChart } from "../bar-chart";
import { PRChallengesChart } from "../chart";
import { PointsTables } from "../table";

export function PainPoints() {
  const [activeTab, setActiveTab] = React.useState("charts");

  return (
    <section
      id="points"
      className="flex flex-col gap-[2.564vw] md:gap-[1.563vw] relative overflow-x-clip"
    >
      <img
        src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d89062645379e974e98f16_notebook.svg"
        loading="lazy"
        alt=""
        className="absolute inset-[30vw_-7vw_auto_auto] w-[27vw] pointer-events-none align-middle inline-block max-w-full z-10"
      />

      <motion.section
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section_title"
      >
        <div className="wrapper small text-white bg-[#2EA4DF]">
          <div className="text-center">
            <h3 className="text-styles-h1">Pain Points in Messaging</h3>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-dark-[#2EA4DF]"
      >
        <div className="wrapper">
          <div className="paddings">
            <div className="flex max-md:flex-col gap-[4.103vw] md:gap-[1.042vw]">
              <div className="flex flex-col gap-[1.042vw] w-full md:w-[35.365vw]">
                <h4 className="text-styles-h2">
                  Growing Pains in Messaging :{" "}
                  <span className="text-[#2EA4DF]">
                    Security, Context, and Control
                  </span>
                </h4>
              </div>
              <div className="flex flex-col gap-[4.103vw] md:gap-[1.042vw] flex-1">
                <div className="text-styles-content">
                  Scams, spam, and noise have turned everyday messaging into a
                  challenge. Fake accounts and phishing links erode trust, while
                  constant notifications bury what truly matters. Without AI
                  support, users struggle to keep up with group conversations,
                  losing context and wasting time.
                </div>
                <div className="text-styles-content">
                  Over{" "}
                  <strong className="text-[#2EA4DF]">
                    60% of people report facing scams each month,{" "}
                  </strong>
                  and more than{" "}
                  <strong className="text-[#2EA4DF]">
                    40 % say group chats feel overwhelming.{" "}
                  </strong>{" "}
                  The lack of AI summaries, smart search, and real-time context
                  leaves users drowning in information, proving the need for a
                  safer and smarter platform.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section_graphs"
      >
        <div className="wrapper">
          <div className="paddings">
            <div className="flex flex-col gap-[4vw]">
              {/* title */}
              <div className="flex justify-center">
                <div className="flex md:w-[49vw] text-center flex-col gap-[1.042vw]">
                  <h5 className="text-styles-h3">
                    Did you struggle with any of the{" "}
                    <span className="alt text-[#2EA4DF]">
                      following in the last 12 months?
                    </span>
                  </h5>
                </div>
              </div>

              {/* graphs */}
              <div className="flex flex-col relative space-y-[2.5vw]">
                {/* tablist */}
                <div
                  className="flex p-[1.538vw] md:p-[0.625vw] justify-center rounded-full bg-white gap-[2.564vw] md:gap-[0.417vw] relative w-fit mx-auto"
                  role="tablist"
                >
                  {(["charts", "table"] as const).map((item) => {
                    const isActive = item === activeTab;

                    return (
                      <button
                        key={item}
                        className={cn(
                          "bg-white rounded-full py-[0.521vw] px-[1.970vw] transition-all duration-250 text-center relative inline-block",
                          isActive
                            ? "bg-[#2EA4DF] text-white"
                            : "text-dark-[#2EA4DF]"
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
                <div className="w-full lg:hide-scrollbar">
                  {activeTab === "charts" ? (
                    <PRChallengesChart />
                  ) : (
                    <PointsTables />
                  )}
                </div>
              </div>

              {/* big num */}

              <div className="flex max-md:flex-col gap-[4.103vw] md:gap-[1.042vw] items-center">
                <div className="text-[#2EA4DF] flex-none w-auto md:w-[35.365vw]">
                  <div className="flex text-[34vw] md:text-[13.333vw]/[100%] -tracking-[0.104vw]">
                    <span counter-element="number" className=" preloader-count">
                      42
                    </span>
                    <span>%</span>
                  </div>
                </div>
                <div className="flex-1 max-md:text-center">
                  <div className="text-styles-h3 mobile-24">
                    of Telegram users say they miss important updates because of
                    noisy notifications and endless group chatter.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.section
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-dark-[#2EA4DF]"
      >
        <div className="wrapper">
          <div className="paddings">
            <div className="flex max-sm:flex-col items-end gap-[4.103vw] md:gap-[1.042vw]">
              <div className="flex flex-col gap-[1.042vw] w-full md:w-[35.365vw]">
                <h4 className="text-styles-h2">
                  Users Double Down on{" "}
                  <span className="alt text-[#2EA4DF]">
                    Smarter Messaging in 2024.
                  </span>
                </h4>
              </div>
              <div className="flex flex-col gap-[4.103vw] md:gap-[1.042vw] flex-1">
                <div className="text-styles-content">
                  People are demanding clarity, context, and security in their
                  chats. The need for AI-powered summaries, trusted identity
                  checks, and safe in-chat payments has surged. Blockgram puts
                  these features front and center, helping users focus on what
                  matters instead of drowning in noise.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section_graphs"
      >
        <div className="wrapper">
          <div className="paddings">
            <div className="flex flex-col gap-[4vw]">
              {/* title */}
              <div className="flex justify-center">
                <div className="flex md:w-[49vw] text-center flex-col gap-[1.042vw]">
                  <h5 className="text-styles-h3">
                    What's the one thing you'd most like{" "}
                    <span className="alt text-[#2EA4DF]">
                      to improve in your Telegram experience right now?
                    </span>
                  </h5>
                </div>
              </div>

              <div className="">
                {/* table */}
                <BarChart />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

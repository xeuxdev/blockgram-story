import React from "react";
import { motion } from "framer-motion";

const keyFindings = [
  {
    title: "Scams & Spam are Everywhere",
    description:
      "Telegram is flooded with scam bots, fake accounts, and phishing links. Users are exposed to constant spam DMs and unsafe files. Trust is low and users risk losing funds daily",
  },
  {
    title: "Not Crypto-Native",
    description:
      "Despite being the main hub for the crypto community, Telegram has no built-in wallet or trading features. Users must rely on insecure bots or third-party apps to send tokens.Friction, higher scam exposure, and missed opportunities for seamless crypto transactions.",
  },
  {
    title: "Message Overload = Missed Opportunities",
    description:
      "20k+ member groups push hundreds of messages in minutes. Vital updates from KOLs and devs get buried under noise. Users miss alpha, fail to act on time, and drop engagement.",
  },
  {
    title: "No Identity Verification",
    description:
      "Anyone can pretend to be a KOL, dev, or project lead. Impersonator scams are rampant.Communities cannot reliably trust who they are interacting with.",
  },
  {
    title: "Poor Productivity Tools",
    description:
      "No reminders, scheduling, or smart notifications. Following up on tasks is chaotic. Communities remain disorganized and miss key moments.",
  },
  {
    title: "Limited Accounts, Limited Control",
    description:
      "Account restrictions make it hard to manage multiple projects. Community managers and power users struggle with switching. Fragmented workflows and lost efficiency.",
  },
];

export function Keys() {
  return (
    <section id="keys" className="flex flex-col gap-[2.564vw] md:gap-[1.563vw]">
      <motion.div
        className="section_title text-dark-purple"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="wrapper small bg-[#cfc9e1]">
          <div className="text-center">
            <h3 className="text-styles-h1">
              Key <span className="alt">Findings</span>
            </h3>
          </div>
        </div>
      </motion.div>

      <motion.section
        className="section_keys"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="wrapper">
          <div className="paddings">
            <div className="flex flex-col gap-[2.5vw]">
              {/* desktop */}
              <motion.div
                className=" pb-[1rem] pr-[7.5vw] max-md:hidden overflow-x-scroll custom-scrollbar"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div
                  className="flex gap-[1.042vw]"
                  style={{
                    transitionDuration: "200ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  {keyFindings.map((item, index) => {
                    return (
                      <div
                        className="overflow-hidden relative gap-[2.5vw] border-[0.104vw] border-dark-purple rounded-[1.25vw] flex flex-col p-[1.667vw] w-[22.917vw] flex-none"
                        role="group"
                        aria-label={` ${index + 1} / ${keyFindings.length}`}
                        key={Math.random() + index}
                      >
                        <img
                          src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1ebeb9cd3a09bec94bb2b_keys%201.svg"
                          loading="eager"
                          alt=""
                          className="image"
                        />
                        <div className="keys-card_content">
                          <div className="keys-card_title">
                            <div className="text-styles-h4">{item.title}</div>
                          </div>
                          <div className="text-styles-content">
                            {item.description}
                          </div>
                        </div>

                        {index === 1 && <QuestionCard />}
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* mobile */}
              <motion.div
                className="slider-mobile w-full md:hidden"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex w-auto -mx-[9.205vw] pl-[8.205vw] pr-[15vw] overflow-x-scroll py-4 static gap-[3.59vw] custom-scrollbar">
                  {keyFindings.map((item, index) => (
                    <div
                      className="overflow-hidden relative gap-[5.641vw] md:gap-[2.5vw] border-[0.104vw] border-dark-purple rounded-[4.103vw] w-[78vw] md:rounded-[1.25vw] flex flex-col md:p-[1.667vw] sm:w-full flex-none p-[6.641vw]"
                      key={Math.random() + index}
                    >
                      <img
                        src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1ebf167b7ceeee72754d5_keys%202.svg"
                        loading="eager"
                        alt=""
                        className="image"
                      />
                      <div className="flex flex-col gap-[3vw] md:gap-[1.25vw]">
                        <div className="keys-card_title">
                          <div className="text-styles-h4">{item.title}</div>
                        </div>
                        <div className="text-styles-content">
                          {item.description}
                        </div>
                      </div>
                      {index === 1 && <QuestionCard />}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
}

function QuestionCard() {
  const [open, setOpen] = React.useState(true);

  return (
    <div
      className="absolute inset-0 z-10 gap-[4vw] md:gap-[2.083vw] bg-light-purple text-center flex-col flex px-[1.667vw] justify-center"
      style={{
        display: open ? "flex" : "none",
      }}
    >
      <div className="text-styles-h3">
        Did you struggle with&nbsp;a tight budget this year?
      </div>
      <div className="flex gap-[1.667vw] md:gap-[0.625vw] items-center justify-center *:cursor-pointer">
        <div
          className="uppercase transition-all duration-200 p-[1.667vw_5vw] md:p-[0.625vw_2.5vw] rounded-full bg-dark-purple text-white hover:bg-blue hover:text-white"
          onClick={() => setOpen(false)}
        >
          <div className="text-styles-content font-bold">Yes</div>
        </div>
        <div
          data-w-id="050439f1-3ec6-570a-b613-392b4bcf186c"
          className="uppercase transition-all duration-200 p-[1.667vw_5vw] md:p-[0.625vw_2.5vw] rounded-full bg-transparent text-dark-purple hover:bg-[#3f2b4c40] hover:text-white border-[0.104vw] border-dark-purple"
          onClick={() => setOpen(false)}
        >
          <div className="text-styles-content font-bold">No</div>
        </div>
      </div>
    </div>
  );
}

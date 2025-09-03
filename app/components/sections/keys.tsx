import React from "react";
import { motion } from "framer-motion";

export function Keys() {
  return (
    <section id="keys" className="flex flex-col gap-[1.563vw]">
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
                className="cursor-grab pr-[7.5vw] max-md:hidden overflow-scroll"
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
                  <div
                    className="overflow-hidden relative gap-[2.5vw] border-[0.104vw] border-dark-purple rounded-[1.25vw] flex flex-col p-[1.667vw] w-[22.917vw] flex-none"
                    role="group"
                    aria-label="1 / 8"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1ebeb9cd3a09bec94bb2b_keys%201.svg"
                      loading="eager"
                      alt=""
                      className="image"
                    />
                    <div className="keys-card_content">
                      <div className="keys-card_title">
                        <div className="text-styles-h4">
                          Tracking and measuring PR&nbsp;efforts
                        </div>
                      </div>
                      <div className="text-[1.042vw]/[145%] font-sec font-medium">
                        The importance of tracking and measuring PR efforts has
                        surged, with{" "}
                        <span counter-element="number" className="font-bold">
                          38
                        </span>
                        <strong>%</strong> of professionals prioritizing this in
                        2024, up from just{" "}
                        <span counter-element="number" className="font-bold">
                          23
                        </span>
                        <strong>%</strong> in 2022.
                      </div>
                    </div>
                  </div>
                  <div
                    className="overflow-hidden relative gap-[2.5vw] border-[0.104vw] border-dark-purple rounded-[1.25vw] flex flex-col p-[1.667vw] w-[22.917vw] flex-none"
                    role="group"
                    aria-label="2 / 8"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1ebf167b7ceeee72754d5_keys%202.svg"
                      loading="eager"
                      alt=""
                      className="image"
                    />
                    <div className="keys-card_content">
                      <div className="keys-card_title">
                        <div className="text-styles-h4">Budget constraints</div>
                      </div>
                      <div className="text-[1.042vw]/[145%] font-sec font-medium">
                        Budget constraints remain the top cause for not using PR
                        tools, affecting <strong>68%</strong> of professionals
                        in 2024, with sole practitioner particularly impacted at{" "}
                        <strong>71%.</strong>
                      </div>
                    </div>
                  </div>
                  <div
                    className="overflow-hidden relative gap-[2.5vw] border-[0.104vw] border-dark-purple rounded-[1.25vw] flex flex-col p-[1.667vw] w-[22.917vw] flex-none"
                    role="group"
                    aria-label="3 / 8"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1ebf13e006924d0bcd21c_keys%203.svg"
                      loading="eager"
                      alt=""
                      className="image"
                    />
                    <div className="keys-card_content">
                      <div className="keys-card_title">
                        <div className="text-styles-h4">Effective outreach</div>
                      </div>
                      <div className="text-[1.042vw]/[145%] font-sec font-medium">
                        The use of regular email services for pitches has
                        plummeted from <strong>74%</strong> in 2022 to{" "}
                        <strong>50%</strong> in 2024, signaling a move towards
                        specialized tools for more effective outreach.
                      </div>
                    </div>
                  </div>
                  <div
                    className="overflow-hidden relative gap-[2.5vw] border-[0.104vw] border-dark-purple rounded-[1.25vw] flex flex-col p-[1.667vw] w-[22.917vw] flex-none"
                    role="group"
                    aria-label="4 / 8"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1ebf0294029c68369188c_keys%204.svg"
                      loading="eager"
                      alt=""
                      className="image"
                    />
                    <div className="keys-card_content">
                      <div className="keys-card_title">
                        <div className="text-styles-h4">
                          Satisfaction with PR tools
                        </div>
                      </div>
                      <div className="text-[1.042vw]/[145%] font-sec font-medium">
                        Satisfaction with PR tools has nearly doubled since
                        2022, with <strong>60%</strong> of professionals now
                        expressing contentment, up from <strong>36%</strong>.
                      </div>
                    </div>
                  </div>
                  <div
                    className="overflow-hidden relative gap-[2.5vw] border-[0.104vw] border-dark-purple rounded-[1.25vw] flex flex-col p-[1.667vw] w-[22.917vw] flex-none"
                    role="group"
                    aria-label="5 / 8"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1ebf1fb5adca466b6a3d6_keys%205.svg"
                      loading="eager"
                      alt=""
                      className="image"
                    />
                    <div className="keys-card_content">
                      <div className="keys-card_title">
                        <div className="text-styles-h4">
                          Demonstrating PR's value
                        </div>
                      </div>
                      <div className="text-[1.042vw]/[145%] font-sec font-medium">
                        The challenge of demonstrating PR's value has
                        intensified, with <strong>48%</strong> struggling in
                        2024 due to higher ROI expectations from stakeholders.
                      </div>
                    </div>
                  </div>
                  <div
                    className="overflow-hidden relative gap-[2.5vw] border-[0.104vw] border-dark-purple rounded-[1.25vw] flex flex-col p-[1.667vw] w-[22.917vw] flex-none"
                    role="group"
                    aria-label="6 / 8"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1ebf131dddb6b6aab1d66_keys%206.svg"
                      loading="eager"
                      alt=""
                      className="image"
                    />
                    <div className="keys-card_content">
                      <div className="keys-card_title">
                        <div className="text-styles-h4">
                          AI for research, analysis, and reporting
                        </div>
                      </div>
                      <div className="text-[1.042vw]/[145%] font-sec font-medium">
                        The use of AI for research, analysis, and reporting has
                        skyrocketed, from <strong>53%</strong> to{" "}
                        <strong>67%</strong> for research and from{" "}
                        <strong>8%</strong> to <strong>31%</strong> for
                        analysis.
                      </div>
                    </div>
                  </div>
                  <div
                    className="overflow-hidden relative gap-[2.5vw] border-[0.104vw] border-dark-purple rounded-[1.25vw] flex flex-col p-[1.667vw] w-[22.917vw] flex-none"
                    role="group"
                    aria-label="7 / 8"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1ebf1c9641341b4c3b8c6_keys%207.svg"
                      loading="eager"
                      alt=""
                      className="image"
                    />
                    <div className="keys-card_content">
                      <div className="keys-card_title">
                        <div className="text-styles-h4">
                          Data analysis in PR
                        </div>
                      </div>
                      <div className="text-[1.042vw]/[145%] font-sec font-medium">
                        The value placed on data analysis skills in PR dropped
                        by <strong>8%</strong> as AI increasingly automates
                        these tasks, shifting focus to more uniquely human
                        skills.
                      </div>
                    </div>
                  </div>
                  <div
                    className="overflow-hidden relative gap-[2.5vw] border-[0.104vw] border-dark-purple rounded-[1.25vw] flex flex-col p-[1.667vw] w-[22.917vw] flex-none"
                    role="group"
                    aria-label="8 / 8"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1ebf159544a6d0fb938c9_keys%208.svg"
                      loading="eager"
                      alt=""
                      className="image"
                    />
                    <div className="keys-card_content">
                      <div className="keys-card_title">
                        <div className="text-styles-h4">
                          Sales metrics in PR
                        </div>
                      </div>
                      <div className="text-[1.042vw]/[145%] font-sec font-medium">
                        The emphasis on sales metrics in PR measurement rose
                        from <strong>13%</strong> in 2023 to{" "}
                        <strong>19%</strong> in 2024, reflecting a shift towards
                        more business-oriented outcomes.
                      </div>
                    </div>
                  </div>
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
                <div className="flex flex-col">
                  <div className="overflow-hidden relative gap-[2.5vw] border-[0.104vw] border-dark-purple rounded-[1.25vw] flex flex-col p-[1.667vw] w-full flex-none">
                    <img
                      src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1ebeb9cd3a09bec94bb2b_keys%201.svg"
                      loading="eager"
                      alt=""
                      className="image"
                    />
                    <div className="keys-card_content">
                      <div className="keys-card_title">
                        <div className="text-styles-h4">
                          Tracking and measuring PR&nbsp;efforts
                        </div>
                      </div>
                      <div className="text-[1.042vw]/[145%] font-sec font-medium">
                        The importance of tracking and measuring PR efforts has
                        surged, with{" "}
                        <span counter-element="number" className="font-bold">
                          <strong>38.9</strong>
                        </span>
                        <strong>%</strong> of professionals prioritizing this in
                        2024, up from just{" "}
                        <span counter-element="number" className="font-bold">
                          <strong className="font-bold">23.3</strong>
                        </span>
                        <strong>%</strong> in 2022.
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden relative gap-[2.5vw] border-[0.104vw] border-dark-purple rounded-[1.25vw] flex flex-col p-[1.667vw] w-full flex-none">
                    <img
                      src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1ebf167b7ceeee72754d5_keys%202.svg"
                      loading="eager"
                      alt=""
                      className="image"
                    />
                    <div className="keys-card_content">
                      <div className="keys-card_title">
                        <div className="text-styles-h4">Budget constraints</div>
                      </div>
                      <div className="text-[1.042vw]/[145%] font-sec font-medium">
                        Budget constraints remain the top motivation for not
                        using PR tools, affecting <strong>68%</strong> of
                        professionals in 2024, with sole practitioner
                        particularly impacted at <strong>71%.</strong>
                      </div>
                    </div>
                    <div className="swiper-slide_quiz-wrap">
                      <div className="text-styles-h3">
                        Did you struggle with&nbsp;a tight budget this year?
                      </div>
                      <div className="swiper-slide_quiz-btns">
                        <div
                          data-w-id="050439f1-3ec6-570a-b613-392b4bcf1869"
                          className="button color-purple primal"
                        >
                          <div className="text-[1.042vw]/[145%] font-sec font-medium bold">
                            Yes
                          </div>
                        </div>
                        <div
                          data-w-id="050439f1-3ec6-570a-b613-392b4bcf186c"
                          className="button color-purple secondary"
                        >
                          <div className="text-[1.042vw]/[145%] font-sec font-medium bold">
                            No
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden relative gap-[2.5vw] border-[0.104vw] border-dark-purple rounded-[1.25vw] flex flex-col p-[1.667vw] w-full flex-none">
                    <img
                      src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1ebf13e006924d0bcd21c_keys%203.svg"
                      loading="eager"
                      alt=""
                      className="image"
                    />
                    <div className="keys-card_content">
                      <div className="keys-card_title">
                        <div className="text-styles-h4">Effective outreach</div>
                      </div>
                      <div className="text-[1.042vw]/[145%] font-sec font-medium">
                        The use of regular email services for pitches has
                        plummeted from <strong>74%</strong> in 2022 to{" "}
                        <strong>50%</strong> in 2024, signaling a move towards
                        specialized tools for more effective outreach.
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden relative gap-[2.5vw] border-[0.104vw] border-dark-purple rounded-[1.25vw] flex flex-col p-[1.667vw] w-full flex-none">
                    <img
                      src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1ebf0294029c68369188c_keys%204.svg"
                      loading="eager"
                      alt=""
                      className="image"
                    />
                    <div className="keys-card_content">
                      <div className="keys-card_title">
                        <div className="text-styles-h4">
                          Satisfaction with PR tools
                        </div>
                      </div>
                      <div className="text-[1.042vw]/[145%] font-sec font-medium">
                        Satisfaction with PR tools has nearly doubled since
                        2022, with <strong>60%</strong> of professionals now
                        expressing contentment, up from <strong>36%</strong> two
                        years ago.
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden relative gap-[2.5vw] border-[0.104vw] border-dark-purple rounded-[1.25vw] flex flex-col p-[1.667vw] w-full flex-none">
                    <img
                      src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1ebf1fb5adca466b6a3d6_keys%205.svg"
                      loading="eager"
                      alt=""
                      className="image"
                    />
                    <div className="keys-card_content">
                      <div className="keys-card_title">
                        <div className="text-styles-h4">
                          Demonstrating PR's value
                        </div>
                      </div>
                      <div className="text-[1.042vw]/[145%] font-sec font-medium">
                        The challenge of demonstrating PR's value has
                        intensified, with <strong>48%</strong> struggling in
                        2024 due to higher ROI expectations from stakeholders.
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden relative gap-[2.5vw] border-[0.104vw] border-dark-purple rounded-[1.25vw] flex flex-col p-[1.667vw] w-full flex-none">
                    <img
                      src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1ebf131dddb6b6aab1d66_keys%206.svg"
                      loading="eager"
                      alt=""
                      className="image"
                    />
                    <div className="keys-card_content">
                      <div className="keys-card_title">
                        <div className="text-styles-h4">
                          AI for research, analysis, and reporting
                        </div>
                      </div>
                      <div className="text-[1.042vw]/[145%] font-sec font-medium">
                        The use of AI for research, analysis, and reporting has
                        skyrocketed, from <strong>53%</strong> to{" "}
                        <strong>67%</strong> for research, and from{" "}
                        <strong>8%</strong> to <strong>31%</strong> for
                        analysis.
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden relative gap-[2.5vw] border-[0.104vw] border-dark-purple rounded-[1.25vw] flex flex-col p-[1.667vw] w-full flex-none">
                    <img
                      src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1ebf1c9641341b4c3b8c6_keys%207.svg"
                      loading="eager"
                      alt=""
                      className="image"
                    />
                    <div className="keys-card_content">
                      <div className="keys-card_title">
                        <div className="text-styles-h4">
                          Data analysis in PR
                        </div>
                      </div>
                      <div className="text-[1.042vw]/[145%] font-sec font-medium">
                        The value placed on data analysis in PR dropped by{" "}
                        <strong>8%</strong> as AI increasingly automates these
                        tasks, shifting focus to more uniquely human skills.
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden relative gap-[2.5vw] border-[0.104vw] border-dark-purple rounded-[1.25vw] flex flex-col p-[1.667vw] w-full flex-none">
                    <img
                      src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1ebf159544a6d0fb938c9_keys%208.svg"
                      loading="eager"
                      alt=""
                      className="image"
                    />
                    <div className="keys-card_content">
                      <div className="keys-card_title">
                        <div className="text-styles-h4">
                          Sales metrics in PR
                        </div>
                      </div>
                      <div className="text-[1.042vw]/[145%] font-sec font-medium">
                        The emphasis on sales metrics in PR measurement rose
                        from <strong>13%</strong> in 2023 to{" "}
                        <strong>19%</strong> in 2024, reflecting a shift towards
                        more business-oriented outcomes.
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white w-full h-[.729vw] rounded-full"
                id="track0"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div
                  className="w-[10%] h-full bg-dark-purple cursor-grabbing rounded-full perspective-[1000px] backface-hidden"
                  style={{
                    transform: "translateX(0px)",
                  }}
                ></div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
}

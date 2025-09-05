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
        <div className="wrapper small text-white bg-red">
          <div className="text-center">
            <h3 className="text-styles-h1">
              Use of <span className="alt">Blockgram</span>
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
                  <strong className="alt text-orange">
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
                    Do you currently use{" "}
                    <strong className="alt text-orange">
                      Telegram or Blockgram?
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
                  While <strong className="text-orange font-bold">72%</strong>{" "}
                  of crypto users still rely on Telegram, frustration is growing
                  over scams, chaos, and missing crypto features. Early adopters
                  are turning to Blockgram, where security, trust, and
                  productivity are built-in.
                </div>
                <div className="text-styles-content">
                  The divide is clear: Telegram is a chat app. Blockgram is the
                  crypto-native communication platform.
                </div>
              </div>
            </div>
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
            <div className="title-desc_wrapper">
              <div className="title-desc_left-title">
                <h6 className="text-styles-h4">
                  More Crypto Users Find Efficiency in Blockgram, With Power
                  Users Leading the Shift
                </h6>
                <div className="text-styles-content">
                  Satisfaction with Telegram alternatives has surged, with{" "}
                  <strong className="text-orange">65%</strong>
                  of users reporting higher efficiency after moving to Blockgram
                  in 2025, up from just{" "}
                  <strong className="text-orange">38%</strong> in 2023. Power
                  users and community leaders show the highest satisfaction,
                  driven by AI spam filters, verified KOL badges, and in-chat
                  token transfers that save time and reduce risks.
                </div>
                <div className="text-styles-content">
                  By cutting scams, organizing chaos, and adding crypto-native
                  features, Blockgram transforms messy Telegram workflows into
                  secure, efficient, and productive communication.
                </div>
              </div>
              <div className="title-desc_right-desc text-center">
                <div className="flex">
                  <div
                    counter-element="number"
                    className="text-styles-256 text-red"
                  >
                    65
                  </div>
                  <div className="text-styles-256 text-red">%</div>
                </div>
                <div className="text-styles-content bold">Efficiency Score</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* impact */}
      <motion.div
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
                <h5 className="text-styles-h2">
                  The Push for <br />
                  <span className="alt text-orange">Proving Value</span>
                </h5>
              </div>
              <div className="title-desc_right-desc">
                <div className="text-styles-h4">
                  More crypto users are tracking results, with an{" "}
                  <strong className="text-orange">11%</strong> rise in just one
                  year.
                </div>
                <div className="text-styles-content">
                  The number of crypto communities measuring real outcomes
                  inside chats has jumped from{" "}
                  <span className="text-orange">
                    <strong>62%</strong>
                  </span>{" "}
                  in 2023 to{" "}
                  <span className="text-orange">
                    <strong>73%</strong>
                  </span>{" "}
                  in 2024, thanks to Blockgram&apos;s AI summaries, smart
                  folders, and token-holder badges. As scams and noise make
                  traditional Telegram harder to trust, the demand to prove
                  engagement, protect assets, and track conversations is
                  stronger than ever.
                </div>
                <p className="text-styles-content">
                  Blockgram is driving a shift towards data-driven, trusted
                  communication, where every update, trade, and interaction can
                  be measured for impact.
                </p>
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
                    Do you measure{" "}
                    <span className="alt text-red">
                      your efficiency on telegram?
                    </span>
                  </h5>
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d2242cf525bcb4b9a9478a_Chart.svg"
                loading="lazy"
                alt="Chart: yes - 75%, no - 25%"
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
                  <div className="flex items-baseline gap-[0.521vw] text-[#ffb5a5] text-[19vw] md:text-[7vw]/[115%]">
                    <span counter-element="number" className="text-styles-176">
                      14
                    </span>
                    <span className="text-styles-176">%</span>
                    <span className="text-[4.103vw] md:text-[2.083vw] -tracking-[0.104vw]">
                      in 2023
                    </span>
                  </div>
                  <div className="flex items-baseline gap-[0.521vw] pl-[1vw] text-[19vw] md:text-[7vw]/[115%] text-red">
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
                <div className="text-styles-h4">Metrics that matter</div>
                <div className="text-styles-content">
                  The landscape of crypto communication is shifting, with a
                  notable rise in tracking meaningful outcomes inside chats,
                  from{" "}
                  <span className="text-orange">
                    <strong>14%</strong>
                  </span>{" "}
                  in 2023 to{" "}
                  <span className="text-orange">
                    <strong>21%</strong>
                  </span>{" "}
                  in 2024. This highlights a growing expectation for communities
                  to measure real engagement, token flow, and KOL impact instead
                  of drowning in noise.
                </div>
                <div className="text-styles-content">
                  As users move beyond Telegram&apos;s unstructured chaos,
                  they&apos;re embracing Blockgram&apos;s AI summaries,
                  token-holder badges, and smart notifications tools that make
                  communication not just faster, but measurable and
                  results-driven.
                </div>
              </div>
            </div>

            <div className="mt-[3vw] rounded-[1.667vw]">
              <video
                src="https://go.prowly.com/hubfs/State%20of%20PR%202024%20-%20Gini%20Dietrich.mp4"
                controls
                poster="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66e83e53ac8cf6624b8746ef_Screenshot%202024-09-13%20at%2015.12.18.png"
                width="100%"
              ></video>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

import { motion } from "framer-motion";

export function About() {
  return (
    <motion.section
      id="prowly"
      className="flex flex-col gap-[1.563vw]"
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="wrapper small bg-[#cfc9e1]"
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          <h3 className="text-styles-h1">About Prowly</h3>
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
            <div className="w-[55vw] flex flex-col gap-[1.667vw]">
              <div className="text-styles-h4">
                We’re a technology company that has created an all-in-one public
                relations management platform that helps growth-oriented
                professionals earn media coverage through creative storytelling,
                personalization, and innovative technology.
              </div>
              <div className="text-styles-h4 secondary">
                Thanks to Prowly, users are able to foster long-term
                relationships with journalists by drafting effective strategies
                based on industry data and prove their value to clients and
                stakeholders with easy-to-understand insights and metrics.
              </div>
              <div className="text-styles-h4 secondary">
                The solution has been successfully conquering the global PR
                software market for the past{" "}
                <span className="text-blue">
                  <strong>10 years</strong>
                </span>
                , and today it has already been used by more than{" "}
                <span className="text-blue">
                  <strong>7,000 users</strong>
                </span>{" "}
                in over{" "}
                <span className="text-blue">
                  <strong>70 countries.</strong>
                </span>
              </div>
              <a
                href="https://prowly.com/"
                target="_blank"
                className="bg-blue text-white uppercase cursor-pointer rounded-full py-[0.625vw] px-[2.5vw] duration-200 transition-all inline-block w-fit"
              >
                <div className="text-[1.042vw]/[145%] font-sec font-bold">
                  LEARN MORE
                </div>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

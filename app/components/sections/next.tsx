import { motion } from "framer-motion";

export function Next() {
  return (
    <motion.section
      id="next"
      className="flex flex-col gap-[1.563vw]"
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
            <h3 className="text-styles-h1">What’s Next in&nbsp;PR Tech</h3>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="section_desc text-dark-purple"
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="wrapper">
          <div className="paddings">
            <div className="desc-wrapper">
              <div className="text-styles-h4 secondary">
                The future of PR is about balancing AI's efficiency with the
                irreplaceable human touch. As AI takes over routine tasks, PR
                pros must double down on creativity, storytelling, and
                relationship-building—areas where machines can’t compete. Expect
                a shift towards strategic roles, with a growing focus on
                managing relationships and delivering measurable ROI.
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
            <div className="mt-[3vw] rounded-[1.667vw] overflow-hidden">
              <video
                src="https://go.prowly.com/hubfs/State%20of%20PR%202024%20-%20Tonya%20McKenzie.mp4"
                controls
                width="100%"
              ></video>
            </div>
            <div className="flex flex-col mt-[2vw] gap-[1vw]">
              <div className="text-styles-h4">Tonya McKenzie</div>
              <div className="font-medium text-[1.042vw]/[145%] font-sec">
                PR &amp; Leadership Consultant, CEO of Sand&amp;Shores
              </div>
            </div>
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
            <div className="flex justify-between items-stretch">
              {/* left */}
              <div className="relative w-[32.604vw]">
                <div className="flex flex-col sticky top-[4vw] gap-[1.25vw]">
                  <div className="text-styles-h2">
                    How Will PR Professionals' Roles Change Next Year?
                  </div>
                  <div className="text-styles-h4 secondary">
                    There will be a greater call for:
                  </div>
                </div>
              </div>

              {/* cards list */}
              <div className="flex flex-col w-[34.167vw] gap-[2.5vw] h-full">
                <div className="bg-blue flex flex-col p-[1.667vw] rounded-[1.25vw] text-white border-[0.104vw] border-dark-purple gap-[1.667vw] sticky top-[4vw] -rotate-2">
                  <div className="text-styles-h4">01</div>
                  <div className="text-styles-h4">
                    Balancing AI Integration with Human Creativity
                  </div>
                </div>
                <div className="bg-blue flex flex-col p-[1.667vw] rounded-[1.25vw] text-white border-[0.104vw] border-dark-purple gap-[1.667vw] sticky top-[4vw] rotate-2">
                  <div className="text-styles-h4">02</div>
                  <div className="text-styles-h4">
                    Prioritizing Strategic and Creative Skills
                  </div>
                </div>
                <div className="bg-blue flex flex-col p-[1.667vw] rounded-[1.25vw] text-white border-[0.104vw] border-dark-purple gap-[1.667vw] sticky top-[4vw] -rotate-2">
                  <div className="text-styles-h4">03</div>
                  <div className="text-styles-h4">
                    Increased Focus on Relationship Management
                  </div>
                </div>
                <div className="bg-blue flex flex-col p-[1.667vw] rounded-[1.25vw] text-white border-[0.104vw] border-dark-purple gap-[1.667vw] sticky top-[4vw] rotate-2">
                  <div className="text-styles-h4">04</div>
                  <div className="text-styles-h4">
                    Attention on AI's Impact on PR Quality
                  </div>
                </div>
                <div className="bg-blue flex flex-col p-[1.667vw] rounded-[1.25vw] text-white border-[0.104vw] border-dark-purple gap-[1.667vw] sticky top-[4vw] -rotate-2">
                  <div className="text-styles-h4">05</div>
                  <div className="text-styles-h4">
                    The Critical Role of Adaptation and Skill Development
                  </div>
                </div>
                <div className="bg-blue flex flex-col p-[1.667vw] rounded-[1.25vw] text-white border-[0.104vw] border-dark-purple gap-[1.667vw] sticky top-[4vw] rotate-2">
                  <div className="text-styles-h4">06</div>
                  <div className="text-styles-h4">
                    Shifting PR Roles Towards ROI-Driven Responsibilities
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
                PR professionals now have access to&nbsp;a wealth of data and
                advanced technology, a resource once reserved for marketers.
                This means more informed decisions, more targeted strategies,
                and a sharper focus on ROI, especially in times of tight
                budgets.
              </div>
              <div className="text-styles-h4 secondary">
                PR professionals now have access to&nbsp;a wealth of data and
                advanced technology, a resource once reserved for marketers.
                This means more informed decisions, more targeted strategies,
                and a sharper focus on&nbsp;ROI, especially in times of tight
                budgets.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

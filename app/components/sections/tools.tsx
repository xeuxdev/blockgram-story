import React from "react";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";

export function Tools() {
  const [activeTab, setActiveTab] = React.useState<"charts" | "table">(
    "charts"
  );

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
              Use of <span className="alt">PR Tools</span>
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
                  PR Tool Adoption Rises,{" "}
                  <span className="alt text-orange">
                    <strong>Yet One-Third Still Go Without</strong>
                  </span>
                </h4>
              </div>
              <div className="flex flex-col gap-[4.103vw] md:gap-[1.042vw] flex-1">
                <div className="text-styles-h4">
                  The PR tool divide: agencies embrace,
                  solos&nbsp;lag&nbsp;behind
                </div>
                <div className="text-styles-content">
                  PR tool usage has surged to nearly{" "}
                  <span
                    counter-element="number"
                    className="text-orange text-bold"
                  >
                    68
                  </span>
                  <span className="text-orange">
                    <strong>%</strong>
                  </span>{" "}
                  in 2024. While adoption rates have grown, especially among
                  agencies where{" "}
                  <span
                    counter-element="number"
                    className="text-orange text-bold"
                  >
                    82
                  </span>
                  <span className="text-orange">
                    <strong>%</strong>
                  </span>{" "}
                  now leverage these tools, one-third of PR professionals are
                  still working without them, reflecting a significant gap in
                  the industry's tech integration.
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
                    <span className="alt text-orange">
                      <strong>any PR tools?</strong>
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
                  {(["charts", "table"] as const).map((item) => {
                    const isActive = item === activeTab;

                    return (
                      <button
                        key={item}
                        className={cn(
                          "bg-white rounded-full py-[1.282vw] px-[2.564vw] md:py-[0.521vw] md:px-[1.970vw] transition-all duration-250 text-center relative inline-block",
                          isActive ? "bg-orange text-white" : "text-dark-purple"
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
                  {activeTab === "charts" ? (
                    <div className="max-h-[1240px] size-full">
                      <img src="/tools-charts.png" alt="" />
                    </div>
                  ) : (
                    <div className="max-h-[202px] size-full">
                      <img src="/tools-table.png" alt="" />
                    </div>
                  )}
                </div>
              </div>

              {/* under */}
              <div className="flex flex-col gap-[4.103vw] md:gap-[1.042vw] *:md:text-center mt-[2vw] md:w-[52vw] mx-auto">
                <div className="text-styles-h4">
                  While budget constraints still hold back{" "}
                  <span>
                    <strong
                      counter-element="number"
                      className="text-orange font-bold"
                    >
                      68
                    </strong>
                  </span>
                  <span className="text-orange">
                    <strong>%</strong>
                  </span>{" "}
                  of PR professionals who have yet to adopt PR tools in 2024,
                  there’s a growing recognition that the time investment to
                  learn how to use them is worthwhile.
                </div>
                <div className="text-styles-content">
                  Each year, fewer PR pros see these tools as irrelevant,
                  signaling a shift in the industry
                  towards&nbsp;embracing&nbsp;technology despite ongoing
                  financial challenges.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <GraphTwo />
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
                  More PR Pros Find Value in Tools,
                  with&nbsp;Agencies&nbsp;Ahead of the Curve
                </h6>
                <div className="text-styles-content">
                  Satisfaction with PR tools has significantly increased, with{" "}
                  <span className="text-orange">
                    <strong>60%</strong>
                  </span>{" "}
                  of&nbsp;professionals happy with their outcomes in 2024, up
                  from just{" "}
                  <span className="text-orange">
                    <strong>36%</strong>
                  </span>{" "}
                  in&nbsp;2022. Agencies, in particular, show higher
                  satisfaction rates compared to&nbsp;brands, possibly due to
                  wider tool adoption and more tailored solutions that meet
                  their specific needs.
                </div>
              </div>
              <div className="title-desc_right-desc text-center">
                <div className="flex">
                  <div
                    counter-element="number"
                    className="text-styles-256 text-red"
                  >
                    60
                  </div>
                  <div className="text-styles-256 text-red">%</div>
                </div>
                <div className="text-styles-content bold">
                  Satisfaction Score
                </div>
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
                  <span className="alt text-orange">Proving Impact</span>
                </h5>
              </div>
              <div className="title-desc_right-desc">
                <div className="text-styles-h4">
                  More PR pros are tracking their efforts, with&nbsp;a&nbsp;
                  <span className="text-orange">
                    <strong>9%</strong>
                  </span>{" "}
                  increase in just one year
                </div>
                <div className="text-styles-content">
                  The number of PR professionals measuring their efforts has
                  jumped from{" "}
                  <span className="text-orange">
                    <strong>69%</strong>
                  </span>{" "}
                  in 2023 to{" "}
                  <span className="text-orange">
                    <strong>75%</strong>
                  </span>{" "}
                  in 2024, reflecting a growing emphasis on&nbsp;tracking
                  outcomes. As companies demand higher ROI, the pressure to
                  prove the impact of PR work is intensifying, driving a shift
                  towards data-driven decision-making and reporting.
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
                    Do you measure{" "}
                    <span className="alt text-red">your PR efforts?</span>
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
                <div className="bg-white rounded-[1.667vw] w-full sm:w-[34vw] p-[1.667vw]">
                  <div className="flex items-baseline gap-[0.521vw] text-[#ffb5a5] text-[19vw] sm:text-[7vw]/[115%]">
                    <span counter-element="number" className="text-styles-176">
                      13
                    </span>
                    <span className="text-styles-176">%</span>
                    <span className="text-[4.103vw] md:text-[2.083vw] -tracking-[0.104vw]">
                      in 2023
                    </span>
                  </div>
                  <div className="flex items-baseline gap-[0.521vw] pl-[1vw] text-[19vw] sm:text-[7vw]/[115%] text-red">
                    <div className="text-styles-176">→</div>
                    <div counter-element="number" className="text-styles-176">
                      19
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
                  The landscape of PR measurement is shifting, with a notable
                  rise in&nbsp;the use of sales metrics—from{" "}
                  <span className="text-orange">
                    <strong>13%</strong>
                  </span>{" "}
                  in 2023 to{" "}
                  <span className="text-orange">
                    <strong>19%</strong>
                  </span>{" "}
                  in 2024 —highlighting a growing expectation for PR to directly
                  impact business measure. As PR pros shift away from
                  traditional digital metrics, they’re embracing a more
                  strategic, results-oriented approach to&nbsp;measuring
                  success.
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

      <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <GraphThree />
      </motion.div>

      {/* monitoring */}
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
                <h4 className="text-styles-h2">
                  What PR pros are{" "}
                  <span className="alt text-red">monitoring closely</span>
                </h4>
              </div>
              <div className="title-desc_right-desc">
                <div className="text-styles-h4">
                  As the media landscape shifts, PR Pros are broadening their
                  focus
                </div>
                <div className="text-styles-content">
                  In the age where information moves at lightning speed,{" "}
                  <span className="text-red">
                    <strong>43%</strong>
                  </span>{" "}
                  of PR professionals are still opting out of using media
                  monitoring tools. Notably, PR pros are expanding their
                  monitoring efforts beyond online news and blogs, with
                  significant upticks in tracking social media, broadcast media,
                  and print media, reflecting a more comprehensive approach to
                  navigating today’s fragmented media landscape.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* type of media */}
      <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <MediaChart />
      </motion.div>

      {/* shift */}
      <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Shift />
      </motion.div>

      {/* most valued tech */}
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
                <h4 className="text-styles-h2">
                  PR’s Most Valued{" "}
                  <span className="alt text-orange">Tech&nbsp;Solutions</span>
                </h4>
              </div>
              <div className="title-desc_right-desc">
                <div className="text-styles-h4">
                  The rising importance of analytics and&nbsp;monitoring in PR
                </div>
                <div className="text-styles-content">
                  In today’s data-driven PR landscape, media databases
                  and&nbsp;monitoring software have become essential, with{" "}
                  <span className="text-orange">
                    <strong>79%</strong>
                  </span>{" "}
                  of&nbsp;professionals finding PR analytics and reporting tools
                  highly valuable. &nbsp;At the same time, traditional tools
                  like press release creators and online newsrooms are falling
                  out of favor, potentially signaling that their full potential
                  is being underutilized.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <HowValuable />
      </motion.div>
    </motion.section>
  );
}

function GraphTwo() {
  const [activeTab, setActiveTab] = React.useState<"charts" | "table">(
    "charts"
  );

  return (
    <div className="section_graphs">
      <div className="wrapper">
        <div className="paddings">
          <div className="flex flex-col gap-[4vw]">
            {/* title */}
            <div className="flex justify-center">
              <div className="flex md:w-[49vw] text-center flex-col gap-[4.103vw] md:gap-[1.042vw]">
                <h5 className="text-styles-h3">
                  What are the primary reasons why <br />
                  <span className="alt text-orange">
                    you do not use PR tools?
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
                {(["charts", "table"] as const).map((item) => {
                  const isActive = item === activeTab;

                  return (
                    <button
                      key={item}
                      className={cn(
                        "bg-white rounded-full py-[1.282vw] px-[2.564vw] md:py-[0.521vw] md:px-[1.970vw] transition-all duration-250 text-center relative inline-block",
                        isActive ? "bg-orange text-white" : "text-dark-purple"
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
                {activeTab === "charts" ? (
                  <div className="max-h-[570px] size-full">
                    <img src="/tools-charts-2.png" alt="" />
                  </div>
                ) : (
                  <div className="max-h-[321px] size-full">
                    <img src="/tools-table-2.png" alt="" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GraphThree() {
  const [activeTab, setActiveTab] = React.useState<"charts" | "table">(
    "charts"
  );

  return (
    <div className="section_graphs">
      <div className="wrapper">
        <div className="paddings">
          <div className="flex flex-col gap-[4vw]">
            {/* title */}
            <div className="flex justify-center">
              <div className="flex md:w-[49vw] text-center flex-col gap-[4.103vw] md:gap-[1.042vw]">
                <h5 className="text-styles-h3">
                  What metrics do you consider when{" "}
                  <span className="alt text-red">
                    measuring&nbsp;the&nbsp;success of a PR campaign?
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
                {(["charts", "table"] as const).map((item) => {
                  const isActive = item === activeTab;

                  return (
                    <button
                      key={item}
                      className={cn(
                        "bg-white rounded-full py-[1.282vw] px-[2.564vw] md:py-[0.521vw] md:px-[1.970vw] transition-all duration-250 text-center relative inline-block",
                        isActive ? "bg-red text-white" : "text-dark-purple"
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
                {activeTab === "charts" ? (
                  <div className="max-h-[890px] size-full">
                    <img src="/tools-charts-3.png" alt="" />
                  </div>
                ) : (
                  <div className="max-h-[920px] size-full">
                    <img src="/tools-table-3.png" alt="" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MediaChart() {
  const [activeTab, setActiveTab] = React.useState<"2024" | "2023" | "table">(
    "2024"
  );

  return (
    <div className="section_graphs">
      <div className="wrapper">
        <div className="paddings">
          <div className="flex flex-col gap-[4vw]">
            {/* title */}
            <div className="flex justify-center">
              <div className="flex md:w-[49vw] text-center flex-col gap-[4.103vw] md:gap-[1.042vw]">
                <h5 className="text-styles-h3">
                  What type of media{" "}
                  <span className="alt text-red">do you monitor?</span>
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
                        isActive ? "bg-red text-white" : "text-dark-purple"
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
                  <div className="max-h-[595px] size-full">
                    <img src="/tools-media-2024.png" alt="" />
                  </div>
                ) : activeTab === "2023" ? (
                  <div className="max-h-[595px] size-full">
                    <img src="/tools-media-2023.png" alt="" />
                  </div>
                ) : (
                  <div className="max-h-[306px] size-full">
                    <img src="/tools-media-table.png" alt="" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Shift() {
  const [activeTab, setActiveTab] = React.useState<"charts" | "table">(
    "charts"
  );

  return (
    <div className="section_title_desc">
      <div className="wrapper">
        <div className="paddings">
          <div className="flex flex-col gap-[4vw]">
            {/* title */}
            <div className="flex justify-center">
              <div className="md:w-[55vw] mx-auto flex text-center flex-col gap-[4.103vw] md:gap-[1.042vw]">
                <h5 className="text-styles-h4">
                  The shift toward data-driven precision in media monitoring
                </h5>
                <div className="text-styles-content">
                  PR is becoming increasingly data-driven and professionals are
                  moving away from Google Alerts, with usage dropping from{" "}
                  <span className="text-red">
                    <strong>31%</strong>
                  </span>{" "}
                  in 2023 to{" "}
                  <span className="text-red">
                    <strong>21%</strong>
                  </span>{" "}
                  in 2024. This decline reflects a growing preference for paid
                  media monitoring tools that offer more detailed and reliable
                  insights, as PR pros demand greater precision in their
                  strategies.
                </div>
              </div>
            </div>

            {/* graphs */}
            <div className="flex flex-col relative space-y-[2.5vw]">
              {/* tablist */}
              <div
                className="flex p-[1.6vw] md:p-[0.625vw] justify-center rounded-full bg-white gap-[2.564vw] md:gap-[0.417vw] relative w-fit mx-auto"
                role="tablist"
              >
                {(["charts", "table"] as const).map((item) => {
                  const isActive = item === activeTab;

                  return (
                    <button
                      key={item}
                      className={cn(
                        "bg-white rounded-full py-[1.282vw] px-[2.564vw] md:py-[0.521vw] md:px-[1.970vw] transition-all duration-250 text-center relative inline-block",
                        isActive ? "bg-red text-white" : "text-dark-purple"
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
                {activeTab === "charts" ? (
                  <div className="max-h-[615px] size-full">
                    <img src="/tools-shift-chart.png" alt="" />
                  </div>
                ) : (
                  <div className="max-h-[210ox] size-full">
                    <img src="/tools-shift-table.png" alt="" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HowValuable() {
  const [activeTab, setActiveTab] = React.useState<"charts" | "table">(
    "charts"
  );

  return (
    <div className="section_title_desc">
      <div className="wrapper">
        <div className="paddings">
          <div className="flex flex-col gap-[4vw]">
            {/* title */}
            <div className="flex justify-center">
              <h5 className="text-styles-h3">
                How valuable{" "}
                <span className="alt text-red">
                  do you find these solutions?
                </span>
              </h5>
            </div>

            {/* graphs */}
            <div className="flex flex-col relative space-y-[2.5vw]">
              {/* tablist */}
              <div
                className="flex p-[1.6vw] md:p-[0.625vw] justify-center rounded-full bg-white gap-[2.564vw] md:gap-[0.417vw] relative w-fit mx-auto"
                role="tablist"
              >
                {(["charts", "table"] as const).map((item) => {
                  const isActive = item === activeTab;

                  return (
                    <button
                      key={item}
                      className={cn(
                        "bg-white rounded-full py-[1.282vw] px-[2.564vw] md:py-[0.521vw] md:px-[1.970vw] transition-all duration-250 text-center relative inline-block",
                        isActive ? "bg-red text-white" : "text-dark-purple"
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
                {activeTab === "charts" ? (
                  <div className="max-h-[938px] size-full">
                    <img src="/tools-val-chart.png" alt="" />
                  </div>
                ) : (
                  <div className="max-h-[685px] size-full">
                    <img src="/tools-val-table.png" alt="" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

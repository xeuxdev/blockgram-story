import React from "react";
import { cn } from "~/lib/utils";

export function AISection() {
  return (
    <section id="ai" className="flex flex-col gap-[1.563vw] relative">
      <img
        src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66dae4640e8f1f59e6564cfe_ai%20robot.svg"
        loading="lazy"
        alt=""
        className="z-10 w-[13vw] absolute inset-[25vw_auto_auto_16vw]"
      />

      <img
        src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d992f54d92de071eb94b46_pencil.svg"
        loading="lazy"
        alt=""
        className="pointer-events-none w-[16vw] top-[25.6vw] left-auto right-0 absolute inset-[25vw_auto_auto_16vw]"
      />

      <section className="section_title">
        <div className="wrapper small bg-green text-white">
          <div className="text-center">
            <h3 className="text-styles-h1">
              AI in PR: <span className="alt">Promise or Pitfall?</span>
            </h3>
          </div>
        </div>
      </section>

      <section className="section_title-desc">
        <div className="wrapper">
          <div className="paddings">
            <div className="title-desc_wrapper">
              <div className="title-desc_left-title">
                <h4 className="text-styles-h2">
                  PR Pros Are Turning to{" "}
                  <span className="alt text-green">
                    AI&nbsp;for Data, Not Ideas
                  </span>
                </h4>
              </div>
              <div className="title-desc_right-desc">
                <div className="text-styles-h4">
                  Thanks to AI, PR teams have more time&nbsp;for&nbsp;strategic
                  tasks
                </div>
                <div className="text-styles-content">
                  As AI-driven tools fall short in content creation, PR
                  professionals are&nbsp;increasingly turning to them for
                  research, analysis, and reporting tasks. With a sharp rise in
                  AI use for data-driven tasks — from{" "}
                  <span className="text-green">
                    <strong>53%</strong>
                  </span>
                  &nbsp;
                  <span className="text-green">
                    <strong>to</strong>
                  </span>
                  &nbsp;
                  <span className="text-green">
                    <strong>67%</strong>
                  </span>{" "}
                  in research and{" "}
                  <span className="text-green">
                    <strong>8%</strong>
                  </span>{" "}
                  <span className="text-green">
                    <strong>to</strong>
                  </span>{" "}
                  <span className="text-green">
                    <strong>31%</strong>
                  </span>{" "}
                  in analysis—it's clear that AI’s true strength lies in
                  processing data, not generating creative content.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatDoYouUse />

      <section className="section_title-desc">
        <div className="wrapper">
          <div className="paddings">
            <div className="title-desc_wrapper center">
              <div className="title-desc_left-title">
                <h4 className="text-styles-h2">
                  Human Touch and Misinformation <br />‍
                  <span className="alt text-green">
                    Top the List of AI&nbsp;Concerns
                  </span>
                </h4>
              </div>
              <div className="title-desc_right-desc">
                <div className="text-styles-h4">
                  AI won’t steal your job, just your boring tasks
                </div>
                <div className="text-styles-content">
                  In 2024,{" "}
                  <span className="text-green">
                    <strong>80%</strong>
                  </span>{" "}
                  of PR professionals fear that AI is stripping away the human
                  touch, up sharply from{" "}
                  <span className="text-green">
                    <strong>56%</strong>
                  </span>{" "}
                  in 2023. Alongside this, anxiety over AI-driven misinformation
                  and content overload is growing, raising serious questions
                  about the ethical and practical implications of AI in the PR
                  industry.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BiggestThreat />

      <section className="section_title-desc">
        <div className="wrapper">
          <div className="paddings">
            <div className="title-desc_wrapper center">
              <div className="title-desc_left-title">
                <h4 className="text-styles-h2">
                  Top AI Perks According to{" "}
                  <span className="alt text-green">Communications Experts</span>
                </h4>
              </div>
              <div className="title-desc_right-desc">
                <div className="text-styles-h4">
                  PR pros embrace AI for measurement, research,&nbsp;and
                  efficiency gains
                </div>
                <div className="text-styles-content">
                  PR professionals are increasingly recognizing the data-driven
                  perks of AI. With{" "}
                  <span className="text-green">
                    <strong>40%</strong>
                  </span>{" "}
                  now valuing AI for its ability to enhance measurement and
                  reporting, and{" "}
                  <span className="text-green">
                    <strong>61%</strong>
                  </span>{" "}
                  appreciating its role in&nbsp;streamlining research, AI is
                  helping PR teams become more data-driven, efficient, and
                  focused on delivering measurable results.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BiggestPerks />

      <section className="section_title-desc">
        <div className="wrapper">
          <div className="paddings">
            <div className="title-desc_wrapper">
              <div className="title-desc_left-title">
                <h4 className="text-styles-h2">
                  Critical Skills for <br />
                  <span className="alt text-green">PR Pros in the AI Era</span>
                </h4>
              </div>
              <div className="title-desc_right-desc">
                <div className="text-styles-h4">
                  Data analysis skills decline as AI takes over
                </div>
                <div className="text-styles-content">
                  The importance of data analysis and interpretation skills in
                  PR has dropped by{" "}
                  <span className="text-green">
                    <strong>8%</strong>
                  </span>{" "}
                  from 2023 to 2024, reflecting a growing reliance on AI to
                  handle these tasks. As AI capabilities expand, PR
                  professionals are shifting their focus to more uniquely human
                  skills that AI can't replicate.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
    </section>
  );
}

function WhatDoYouUse() {
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
              <div className="flex w-[49vw] text-center flex-col gap-[1.042vw]">
                <h5 className="text-styles-h3">
                  What type of media{" "}
                  <span className="alt text-green">do you monitor?</span>
                </h5>
              </div>
            </div>

            {/* graphs */}
            <div className="flex flex-col relative space-y-[2.5vw]">
              {/* tablist */}
              <div
                className="flex p-[0.625vw] justify-center rounded-full bg-white gap-[0.417vw] relative w-fit mx-auto"
                role="tablist"
              >
                {(["2024", "2023", "table"] as const).map((item) => {
                  const isActive = item === activeTab;

                  return (
                    <button
                      key={item}
                      className={cn(
                        "bg-white rounded-full py-[0.521vw] px-[1.970vw] transition-all duration-250 text-center relative inline-block",
                        isActive ? "bg-green text-white" : "text-dark-purple"
                      )}
                      role="tab"
                      onClick={() => setActiveTab(item)}
                    >
                      <span className="font-bold font-sec text-[1.042vw]/[145%] capitalize">
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* content */}
              <div className="overflow-visible relative w-full">
                {activeTab === "2024" ? (
                  <div className="max-h-[620px] size-full">
                    <img src="/ai/ai-use-2024.png" alt="" />
                  </div>
                ) : activeTab === "2023" ? (
                  <div className="max-h-[620px] size-full">
                    <img src="/ai/ai-use-2023.png" alt="" />
                  </div>
                ) : (
                  <div className="max-h-[210px] size-full">
                    <img src="/ai/ai-use-table.png" alt="" />
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

function BiggestThreat() {
  const [activeTab, setActiveTab] = React.useState<"charts" | "table">(
    "charts"
  );

  return (
    <section className="section_graphs">
      <div className="wrapper">
        <div className="paddings">
          <div className="flex flex-col gap-[4vw]">
            {/* title */}
            <div className="flex justify-center">
              <div className="flex w-[40vw] text-center flex-col gap-[1.042vw]">
                <h5 className="text-styles-h3">
                  What are the biggest threats{" "}
                  <span className="alt text-green">
                    posed&nbsp;by&nbsp;AI to the PR industry?
                  </span>
                </h5>
              </div>
            </div>

            {/* graphs */}
            <div className="flex flex-col relative space-y-[2.5vw]">
              {/* tablist */}
              <div
                className="flex p-[0.625vw] justify-center rounded-full bg-white gap-[0.417vw] relative w-fit mx-auto"
                role="tablist"
              >
                {(["charts", "table"] as const).map((item) => {
                  const isActive = item === activeTab;

                  return (
                    <button
                      key={item}
                      className={cn(
                        "bg-white rounded-full py-[0.521vw] px-[1.970vw] transition-all duration-250 text-center relative inline-block",
                        isActive ? "bg-green text-white" : "text-dark-purple"
                      )}
                      role="tab"
                      onClick={() => setActiveTab(item)}
                    >
                      <span className="font-bold font-sec text-[1.042vw]/[145%] capitalize">
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* content */}
              <div className="overflow-visible relative w-full">
                {activeTab === "charts" ? (
                  <div className="max-h-[641px] size-full">
                    <img src="/ai/ai-threat-chart.png" alt="" />
                  </div>
                ) : (
                  <div className="max-h-[615px] size-full">
                    <img src="/ai/ai-threat-table.png" alt="" />
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

function BiggestPerks() {
  const [activeTab, setActiveTab] = React.useState<"charts" | "table">(
    "charts"
  );

  return (
    <section className="section_graphs">
      <div className="wrapper">
        <div className="paddings">
          <div className="flex flex-col gap-[4vw]">
            {/* title */}
            <div className="flex justify-center">
              <div className="flex w-[49vw] text-center flex-col gap-[1.042vw]">
                <h5 className="text-styles-h3">
                  What are the biggest perks <br />
                  <span className="alt text-green">
                    of introducing AI to the PR industry?
                  </span>
                </h5>
              </div>
            </div>

            {/* graphs */}
            <div className="flex flex-col relative space-y-[2.5vw]">
              {/* tablist */}
              <div
                className="flex p-[0.625vw] justify-center rounded-full bg-white gap-[0.417vw] relative w-fit mx-auto"
                role="tablist"
              >
                {(["charts", "table"] as const).map((item) => {
                  const isActive = item === activeTab;

                  return (
                    <button
                      key={item}
                      className={cn(
                        "bg-white rounded-full py-[0.521vw] px-[1.970vw] transition-all duration-250 text-center relative inline-block",
                        isActive ? "bg-green text-white" : "text-dark-purple"
                      )}
                      role="tab"
                      onClick={() => setActiveTab(item)}
                    >
                      <span className="font-bold font-sec text-[1.042vw]/[145%] capitalize">
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* content */}
              <div className="overflow-visible relative w-full">
                {activeTab === "charts" ? (
                  <div className="max-h-[517px] size-full">
                    <img src="/ai/ai-perks-chart.png" alt="" />
                  </div>
                ) : (
                  <div className="max-h-[631px] size-full">
                    <img src="/ai/ai-perks-table.png" alt="" />
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
              <div className="flex w-[63vw] text-center flex-col gap-[1.042vw]">
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
                className="flex p-[0.625vw] justify-center rounded-full bg-white gap-[0.417vw] relative w-fit mx-auto"
                role="tablist"
              >
                {(["2024", "2023", "table"] as const).map((item) => {
                  const isActive = item === activeTab;

                  return (
                    <button
                      key={item}
                      className={cn(
                        "bg-white rounded-full py-[0.521vw] px-[1.970vw] transition-all duration-250 text-center relative inline-block",
                        isActive ? "bg-green text-white" : "text-dark-purple"
                      )}
                      role="tab"
                      onClick={() => setActiveTab(item)}
                    >
                      <span className="font-bold font-sec text-[1.042vw]/[145%] capitalize">
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

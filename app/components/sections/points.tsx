import React from "react";
import { cn } from "~/lib/utils";

export function PainPoints() {
  const [activeTab, setActiveTab] = React.useState("charts");
  const [activeTabTwo, setActiveTabTwo] = React.useState("2024");

  return (
    <section id="points" className="flex flex-col gap-[1.563vw] relative">
      <img
        src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d89062645379e974e98f16_notebook.svg"
        loading="lazy"
        alt=""
        className="absolute inset-[30vw_-7vw_auto_auto] w-[27vw] pointer-events-none align-middle inline-block max-w-full z-10"
      />

      <div className="section_title">
        <div className="wrapper small text-white bg-purple">
          <div className="text-center">
            <h3 className="text-styles-h1">Pain Points in&nbsp;PR</h3>
          </div>
        </div>
      </div>

      <div className="text-dark-purple">
        <div className="wrapper">
          <div className="paddings">
            <div className="flex gap-[1.042vw]">
              <div className="flex flex-col gap-[1.042vw] w-[35.365vw]">
                <h4 className="text-styles-h2">
                  Growing Pains in&nbsp;PR:{" "}
                  <span className="text-purple">
                    Budgets, Engagement, and&nbsp;Value
                  </span>
                </h4>
              </div>
              <div className="flex flex-col gap-[1.042vw] flex-1">
                <div className="text-styles-h4">
                  Financial pressures and industry shifts are&nbsp;challenging
                  PR pros to adapt
                </div>
                <div className="text-[1.042vw]/[145%] font-sec font-medium">
                  As economic pressures rise, PR professionals are finding it
                  harder to&nbsp;navigate shrinking budgets, connect with
                  journalists, and prove their worth. In just two years, the
                  number of PR pros struggling with budget constraints has
                  jumped from{" "}
                  <span className="text-purple">
                    <strong>35%</strong>
                  </span>{" "}
                  to{" "}
                  <span className="text-purple">
                    <strong>57%</strong>
                  </span>
                  . These statistics reflect a rapidly evolving industry where
                  proving ROI is more critical — and more challenging —than
                  ever.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section_graphs">
        <div className="wrapper">
          <div className="paddings">
            <div className="flex flex-col gap-[4vw]">
              {/* title */}
              <div className="flex justify-center">
                <div className="flex w-[49vw] text-center flex-col gap-[1.042vw]">
                  <h5 className="text-styles-h3">
                    Did you struggle with any of the{" "}
                    <span className="alt text-purple">
                      following in the last 12 months?
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
                          isActive ? "bg-purple text-white" : "text-dark-purple"
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
                    <div className="max-h-[925px] size-full">
                      <img src="/pain-point-charts.png" alt="" />
                    </div>
                  ) : (
                    <div className="max-h-[845px] size-full">
                      <img src="/pain-point-table.png" alt="" />
                    </div>
                  )}
                </div>
              </div>

              {/* big num */}

              <div className="flex gap-[1.042vw] items-end -mt-[2.5vw]">
                <div className="text-purple flex-none w-[35.365vw]">
                  <div className="flex text-[13.333vw]/[100%] -tracking-[0.104vw]">
                    <span counter-element="number" className=" preloader-count">
                      43
                    </span>
                    <span>%</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-styles-h3 mobile-24">
                    of PR Pros have experienced budget cuts leading to the
                    cancellation of paid tools.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="text-dark-purple">
        <div className="wrapper">
          <div className="paddings">
            <div className="flex gap-[1.042vw]">
              <div className="flex flex-col gap-[1.042vw] w-[35.365vw]">
                <h4 className="text-styles-h2">
                  PR Pros Double Down on&nbsp;
                  <span className="alt text-purple">
                    Strategy and&nbsp;Results in&nbsp;2024
                  </span>
                </h4>
              </div>
              <div className="flex flex-col gap-[1.042vw] flex-1">
                <div className="text-styles-h4">
                  Top-tier coverage, measurable impact, and reporting efficiency
                  take center stage
                </div>
                <div className="text-[1.042vw]/[145%] font-sec font-medium">
                  PR pros are more strategic and results-driven than ever.
                  Securing top-tier publications has surged as a priority. The
                  focus on tracking and measuring PR efforts has jumped
                  significantly, reaching nearly{" "}
                  <span
                    counter-element="number"
                    className="text-purple font-bold"
                  >
                    39
                  </span>
                  <strong className="text-purple font-bold">%</strong> in 2024.
                  Additionally, the push to create PR reports faster has more
                  than tripled, rising from{" "}
                  <span
                    counter-element="number"
                    className="text-purple font-bold"
                  >
                    6
                  </span>
                  <span className="text-purple font-bold">
                    <strong>%</strong>
                  </span>{" "}
                  in 2022 to{" "}
                  <span
                    counter-element="number"
                    className="text-purple font-bold"
                  >
                    22
                  </span>
                  <span className="text-purple font-bold">
                    <strong>%</strong>
                  </span>{" "}
                  in 2024, highlighting the industry’s increasing emphasis on
                  efficiency and proving value.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section_graphs">
        <div className="wrapper">
          <div className="paddings">
            <div className="flex flex-col gap-[4vw]">
              {/* title */}
              <div className="flex justify-center">
                <div className="flex w-[49vw] text-center flex-col gap-[1.042vw]">
                  <h5 className="text-styles-h3">
                    What's the one thing you'd most like{" "}
                    <span className="alt text-purple">
                      to&nbsp;improve in your PR work right now?
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
                  {(["2024", "2023", "2022", "table"] as const).map((item) => {
                    const isActive = item === activeTabTwo;

                    return (
                      <button
                        key={item}
                        className={cn(
                          "bg-white rounded-full py-[0.521vw] px-[1.970vw] transition-all duration-250 text-center relative inline-block",
                          isActive ? "bg-purple text-white" : "text-dark-purple"
                        )}
                        role="tab"
                        onClick={() => setActiveTabTwo(item)}
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
                  {activeTabTwo === "2024" ? (
                    <div className="max-h-[573px] size-full">
                      <img src="/pain-point-2024.png" alt="" />
                    </div>
                  ) : activeTabTwo === "2023" ? (
                    <div className="max-h-[573px] size-full">
                      <img src="/pain-point-2023.png" alt="" />
                    </div>
                  ) : activeTabTwo === "2022" ? (
                    <div className="max-h-[573px] size-full">
                      <img src="/pain-point-2022.png" alt="" />
                    </div>
                  ) : (
                    <div className="max-h-[293px] size-full">
                      <img src="/pain-point-table-2.png" alt="" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export function Introduction() {
  return (
    <section className="flex flex-col gap-[1.563vw]" id="introduction">
      <section>
        <div className="wrapper bg-[#ac93be] h-[44.583vw]">
          <div className="flex flex-col gap-[1.667vw] pl-[4.167vw]">
            <div className="hero_title">
              <h1 className="text-[6.667vw]/[100%] font-medium -tracking-[0.068vw]">
                The State of&nbsp;PR
              </h1>
              <h2 className="text-[6.667vw]/[100%] -tracking-[0.068vw] font-ter">
                Technology <br />
                2024
              </h2>
            </div>
            <div className="text-[1.563vw]/[125%]">
              A complete overview of trends
              <br />
              &amp; pain points in public relations software
            </div>
          </div>

          <img
            src="/hero-image.svg"
            alt=""
            className="absolute bottom-0 -right-3 size-[35vw]"
          />
        </div>
      </section>

      <section className="">
        <div className="wrapper small bg-[#cfc9e1]">
          <h3 className="text-styles-h1 text-center">Introduction</h3>
        </div>
      </section>

      <section className="text-dark-purple">
        <div className="wrapper">
          <div className="paddings">
            <div className="flex flex-col gap-[1.667vw]">
              <div className="text-styles-h4 secondary">
                PR is rapidly shifting towards an ROI-driven model, with growing
                pressure to deliver measurable results that directly impact the
                bottom line.
              </div>
              <div className="text-styles-h4 secondary">
                Our study reveals that over{" "}
                <span counter-element="number" className="number-counter">
                  57
                </span>
                <strong>
                  % of PR professionals are struggling with tight budgets
                </strong>
                , pushing them to embrace advanced tools and data-driven
                strategies. With an emphasis on sales metrics in&nbsp;PR
                measurement rising sharply, the question arises: how are PR
                practitioners adapting to the changes?
              </div>
              <div className="text-styles-h4 secondary">
                Dive into our study to explore how PR is evolving to meet the
                needs of the tech-savvy, ROI-focused landscape.
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

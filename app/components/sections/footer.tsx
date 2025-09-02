import React from "react";

export function Footer() {
  return (
    <footer
      data-w-id="f587807f-63fe-0333-bbd6-10f1eb0414d6"
      className="footer-wrapper"
      style={{
        opacity: 1,
        transform:
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="wrapper py-0! bg-[#cfc9e1]">
        <div className="flex flex-col justify-between h-[29.427vw] px-[1.563vw] pt-[1.563vw]">
          <div className="flex justify-between pb-[1.25vw] mb-[1.25vw] border-b-[0.104vw] border-dark-purple">
            <div className="flex items-center gap-[1.042vw] text-dark-purple uppercase">
              <div className="font-ter text-[0.938vw]/[140%]">
                Let’s stay in touch
              </div>
              <div className="flex gap-[1.042vw] items-center">
                <a
                  href="https://www.linkedin.com/company/prowly-com"
                  target="_blank"
                  className="w-[1.458vw]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1dd157c2e698c39e0cfae_LN.svg"
                    loading="lazy"
                    alt=""
                    className="image"
                  />
                </a>
                <a
                  href="https://twitter.com/Prowly_com"
                  target="_blank"
                  className="w-[1.458vw]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1dd15ec3e5efa0ff50975_X.svg"
                    loading="lazy"
                    alt=""
                    className="image"
                  />
                </a>
                <a
                  href="https://www.instagram.com/prowly_com/"
                  target="_blank"
                  className="w-[1.458vw]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1dd151b0f5c6564c13cdf_IN.svg"
                    loading="lazy"
                    alt=""
                    className="image"
                  />
                </a>
                <a
                  href="https://www.threads.net/@prowly_com"
                  target="_blank"
                  className="w-[1.458vw]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66e31db1c23c150da790b0b3_Threads.svg"
                    loading="lazy"
                    alt=""
                    className="image"
                  />
                </a>
              </div>
            </div>
            <a
              href="https://go.prowly.com/pr_collective"
              target="_blank"
              className="bg-blue text-white rounded-full py-[0.625vw] px-[2.5vw]"
            >
              <div className="text-[1.042vw]/[145%] font-sec font-medium uppercase">
                join the community
              </div>
            </a>
          </div>
          <img
            src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d1dd7d3db9b7726fd0b240_Footer%20logo.svg"
            loading="lazy"
            alt=""
            className="image footer-logo"
          />
        </div>
      </div>
      <div className="mt-[1.563vw] flex justify-between items-center text-dark-purple uppercase">
        <div className="text-[0.833vw]/[145%] font-bold font-sec">
          © 2025 All rights reserved
        </div>
        <div className="flex items-center gap-[1.042vw]">
          <a
            href="https://prowly.com/terms-of-service/"
            target="_blank"
            className="text-dark-purple text-[0.833vw]/[145%] font-bold font-sec"
          >
            Legal info
          </a>
          <a
            href="https://prowly.com/privacy-policy/"
            target="_blank"
            className="text-dark-purple text-[0.833vw]/[145%] font-bold font-sec"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

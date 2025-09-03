export function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="wrapper py-0! bg-[#cfc9e1]">
        <div className="flex flex-col justify-between h-[77.436vw] md:h-[29.427vw] px-[1.563vw] pt-[7.692vw] md:pt-[1.563vw]">
          <div className="flex max-md:flex-col max-md:gap-[9.231vw] items-center justify-between pb-[1.25vw] mb-[1.25vw] md:border-b-[0.104vw] border-dark-purple">
            <div className="flex items-center max-md:flex-col gap-[4.103vw] md:gap-[1.042vw] text-dark-purple uppercase">
              <div className="font-ter text-[4.103vw] md:text-[0.938vw]/[140%]">
                Let’s stay in touch
              </div>
              <div className="flex gap-[5.128vw] md:gap-[1.042vw] items-center">
                <a
                  href="https://www.linkedin.com/company/prowly-com"
                  target="_blank"
                  className="w-[7.179vw] md:w-[1.458vw]"
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
                  className="w-[7.179vw] md:w-[1.458vw]"
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
                  className="w-[7.179vw] md:w-[1.458vw]"
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
                  className="w-[7.179vw] md:w-[1.458vw]"
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
              className="bg-blue text-white rounded-full py-[2.051vw] md:py-[0.625vw] px-[5.128vw] md:px-[2.5vw]"
            >
              <div className="text-styles-content font-medium uppercase">
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

      {/* under */}
      <div className="mt-[5.128vw] md:mt-[1.563vw] flex-col md:flex-row max-md:gap-[2.564vw] max-md:pb-[7.692vw] flex justify-between items-center text-dark-purple uppercase">
        <div className="text-styles-content font-bold">
          © 2025 All rights reserved
        </div>
        <div className="flex max-md:flex-col items-center gap-[1.042vw]">
          <a
            href="https://prowly.com/terms-of-service/"
            target="_blank"
            className="text-dark-purple text-styles-content font-bold"
          >
            Legal info
          </a>
          <a
            href="https://prowly.com/privacy-policy/"
            target="_blank"
            className="text-dark-purple text-styles-content font-bold"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

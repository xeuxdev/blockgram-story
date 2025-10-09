import { motion } from "framer-motion";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="wrapper py-0! bg-[#A8D6F3]">
        <motion.div
          className="flex flex-col justify-between h-[60vw] md:h-[20vw] px-[1.563vw] pt-[5vw] md:pt-[2vw]"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex max-md:flex-col max-md:gap-[6vw] items-center justify-between pb-[2vw] mb-[2vw] md:border-b-[0.104vw] border-dark-purple">
            <div className="flex items-center max-md:flex-col gap-[2vw] md:gap-[1.042vw] text-dark-purple uppercase">
              <div className="font-ter text-[4.103vw] md:text-[0.938vw]/[140%]">
                Let’s stay in touch
              </div>
              <div className="flex gap-[5.128vw] md:gap-[1.042vw] items-center">
                <a
                  href=""
                  target="_blank"
                  className="w-[7.179vw] md:w-[1.458vw]"
                >
                  <img
                    src="/linkedin.svg"
                    loading="lazy"
                    alt=""
                    className="image"
                  />
                </a>
                <a
                  href=""
                  target="_blank"
                  className="w-[7.179vw] md:w-[1.458vw]"
                >
                  <img src="X.svg" loading="lazy" alt="" className="image" />
                </a>
                <a
                  href=""
                  target="_blank"
                  className="w-[7.179vw] md:w-[1.458vw]"
                >
                  <img src="IN.svg" loading="lazy" alt="" className="image" />
                </a>
                <a
                  href=""
                  target="_blank"
                  className="w-[7.179vw] md:w-[1.458vw]"
                >
                  <img
                    src="Threads.svg"
                    loading="lazy"
                    alt=""
                    className="image"
                  />
                </a>
              </div>
            </div>
            <a
              href=""
              target="_blank"
              className="bg-[#2EA4DF] text-white rounded-full py-[2.051vw] md:py-[0.625vw] px-[5.128vw] md:px-[2.5vw]"
            >
              <div className="text-styles-content font-medium uppercase">
                join the community
              </div>
            </a>
          </div>
          <div className="flex justify-between items-center">
            {" "}
            <Link
              to="#"
              className="text-[2.5vw] font-main flex items-center justify-center md:justify-start gap-[1vw] md:gap-[0.5vw]"
            >
              <img
                src="/logo.png"
                loading="lazy"
                alt=""
                className="w-[70px] md:w-[80px]"
              />
              <p className="text-[6vw] md:text-[2.5vw] font-medium">
                Blockgram
              </p>
            </Link>
            <div className="text-styles-content font-bold">
              © 2025 All rights reserved
            </div>
          </div>
        </motion.div>
      </div>

      {/* under */}
      {/* <motion.div
        className="mt-[5.128vw] md:mt-[1.563vw] flex-col md:flex-row max-md:gap-[2.564vw] max-md:pb-[7.692vw] flex justify-between items-center text-dark-purple uppercase"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
     
        <div className="flex max-md:flex-col items-center gap-[1.042vw]">
          <a
            href=""
            target="_blank"
            className="text-dark-purple text-styles-content font-bold"
          >
            Legal info
          </a>
          <a
            href=""
            target="_blank"
            className="text-dark-purple text-styles-content font-bold"
          >
            Privacy Policy
          </a>
        </div>
      </motion.div> */}
    </footer>
  );
}

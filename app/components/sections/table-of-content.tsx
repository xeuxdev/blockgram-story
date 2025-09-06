import { Link } from "react-router";
import { motion } from "framer-motion";

const nav_links = [
  {
    number: "01",
    title: "Introduction",
    href: "#introduction",
    color: "light-purple",
  },
  {
    number: "02",
    title: "Table of Contents",
    href: "#table",
    color: "light-purple",
  },
  { number: "03", title: "Key Findings", href: "#keys", color: "light-purple" },
  {
    number: "04",
    title: "Pain Points in Messaging",
    href: "#points",
    color: "purple",
  },
  {
    number: "05",
    title: "The Use of Blockgram Tools",
    href: "#tools",
    color: "red",
  },
  {
    number: "06",
    title: "AI in Blockgram: Promise or Pitfall",
    href: "#ai",
    color: "green",
  },
  {
    number: "07",
    title: "How Will Chat Roles Change Next Year",
    href: "#features",
    color: "blue",
  },
  {
    number: "08",
    title: "About Blockgram",
    href: "#blockgram",
    color: "light-purple",
  },
];

export function TableOfContent() {
  return (
    <section
      id="table"
      className="flex flex-col gap-[2.564vw] md:gap-[1.563vw]"
    >
      <motion.section
        className="text-dark-purple"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="wrapper small bg-[#cfc9e1]">
          <div className="text-center">
            <h3 className="text-styles-h1">
              Table of <span className="alt">Contents</span>
            </h3>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section_nav"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="wrapper">
          <div className="paddings">
            <div className="flex justify-between md:justify-start max-sm:flex-col sm:flex-wrap gap-[3vw] sm:gap-[1.042vw]">
              {nav_links.map((link, index) => (
                <motion.div
                  key={link.number}
                  initial={{ y: 80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className={`rounded-[6.154vw] sm:rounded-[1.25vw] flex transition-all duration-250 p-[6.154vw] md:p-[1.667vw] size-auto md:size-[16vw] justify-between flex-col border-[0.513vw] sm:border-[0.104vw] border-dark-purple text-dark-purple  hover:bg-light-purple hover:text-white nav-card ${link.color}`}
                  >
                    <div className="text-styles-h4">{link.number}</div>
                    <div className="text-styles-h4">{link.title}</div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
}

import React from "react";
import { Link } from "react-router";
import { cn } from "~/lib/utils";

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
  {
    number: "03",
    title: "Key Findings",
    href: "#keys",
    color: "light-purple",
  },
  {
    number: "04",
    title: "Pain Points in PR",
    href: "#points",
    color: "purple",
  },
  {
    number: "05",
    title: "The Use of PR Tools",
    href: "#tools",
    color: "red",
  },
  {
    number: "06",
    title: "AI in PR: Promise or Pitfall?",
    href: "#ai",
    color: "green",
  },
  {
    number: "07",
    title: "What’s Next in PR Tech",
    href: "#next",
    color: "blue",
  },
  {
    number: "08",
    title: "About Prowly",
    href: "#prowly",
    color: "light-purple",
  },
];

export function TableOfContent() {
  return (
    <section id="table" className="flex flex-col gap-[1.563vw]">
      <section className="text-dark-purple">
        <div className="wrapper small bg-[#cfc9e1]">
          <div className="text-center">
            <h3 className="text-styles-h1">
              Table of <span className="alt">Contents</span>
            </h3>
          </div>
        </div>
      </section>

      <section className="section_nav">
        <div className="wrapper">
          <div className="paddings">
            <div className="flex justify-between flex-wrap gap-[1.042vw]">
              {nav_links.map((link) => (
                <Link
                  to={link.href}
                  key={link.number}
                  className={
                    "rounded-[1.25vw] flex transition-all duration-250 p-[1.667vw] size-[16vw] justify-between flex-col border-[0.104vw] border-dark-purple text-dark-purple hover:text-white"
                  }
                >
                  <div className="text-styles-h4">{link.number}</div>
                  <div className="text-styles-h4">{link.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

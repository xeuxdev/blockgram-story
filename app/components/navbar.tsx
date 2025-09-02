import { Link } from "react-router";

const nav_links = [
  {
    number: "01",
    title: "Introduction",
    href: "#introduction",
  },
  {
    number: "02",
    title: "Table of Contents",
    href: "#table",
  },
  { number: "03", title: "Key Findings", href: "#keys" },
  {
    number: "04",
    title: "Pain Points in PR",
    href: "#points",
  },
  { number: "05", title: "The Use of PR Tools", href: "#tools" },
  {
    number: "06",
    title: "AI in PR: Promise or Pitfall?",
    href: "#ai",
  },
  {
    number: "07",
    title: "What’s Next in PR Tech",
    href: "#next",
  },
  { number: "08", title: "About Prowly", href: "#prowly" },
];

export function Navbar() {
  return (
    <nav>
      <div className="flex sticky top-[1.5vw] h-auto w-[18vw] flex-col gap-[.5vw]">
        <Link to="#" className="inline-block">
          <img
            src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d6db329ed60108107185e2_logo.svg"
            loading="lazy"
            alt=""
            className="image"
          />
        </Link>

        {nav_links.map((link) => (
          <Link
            to={link.href}
            className={`flex transition-all duration-200 gap-[0.5vw] border-[0.104vw] border-dark-purple rounded-[0.833vw] items-center py-[1.042vw] pl-[1.042vw]`}
          >
            <div className="w-[1.3vw]">
              <div className="font-main text-[1.042vw] font-medium leading-[145%]">
                {link.number}
              </div>
            </div>
            <div className="font-main text-[1.042vw] font-medium leading-[145%]">
              {link.title}
            </div>
          </Link>
        ))}

        <Link
          to="https://go.prowly.com/hubfs/The%20State%20of%20PR%20Technology%202024%20by%20Prowly%20PR%20Software.pdf"
          target="_blank"
          className="flex justify-center items-center gap-[0.625vw] border-[0.104vw] border-dark-purple text-dark-purple bg-[#cfc9e1] rounded-[100vw] py-[1.042vw] underline-none transition-all duration-250"
        >
          <div className="font-main text-[1.042vw] font-medium leading-[145%]">
            DOWNLOAD PDF
          </div>
          <div className="size-[0.75vw] flex items-center justify-end mt-[0.25vw]">
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 18 25"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 11.5H18L9 21.5L0 11.5H5V0.5H13V11.5ZM14 22.5H4V24.5H14V22.5Z"></path>
            </svg>
          </div>
        </Link>
      </div>
    </nav>
  );
}

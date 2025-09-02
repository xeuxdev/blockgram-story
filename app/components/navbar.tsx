import { Link } from "react-router";
import { useState, useEffect } from "react";

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
    title: "Pain Points in PR",
    href: "#points",
    color: "purple",
  },
  { number: "05", title: "The Use of PR Tools", href: "#tools", color: "red" },
  {
    number: "06",
    title: "AI in PR: Promise or Pitfall?",
    href: "#ai",
    color: "green",
  },
  {
    number: "07",
    title: "What's Next in PR Tech",
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

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = nav_links.map((link) => link.href.substring(1)); // Remove # from href
      const scrollPosition = window.scrollY + 100; // Offset for better UX

      // Find the current section
      let currentSection = "";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;

          // Check if we're within this section
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = `#${sectionId}`;
            break;
          }
        }
      }

      // If no section is found, check which section we're closest to
      if (!currentSection) {
        let closestSection = "";
        let closestDistance = Infinity;

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const distance = Math.abs(element.offsetTop - scrollPosition);
            if (distance < closestDistance) {
              closestDistance = distance;
              closestSection = `#${sectionId}`;
            }
          }
        }
        currentSection = closestSection;
      }

      setActiveSection(currentSection);
    };

    // Set initial active section
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getLinkClasses = (link: (typeof nav_links)[0], isActive: boolean) => {
    const baseClasses =
      "flex transition-all duration-300 gap-[0.5vw] border-[0.104vw] border-dark-purple rounded-[0.833vw] items-center py-[1.042vw] pl-[1.042vw]";

    if (!isActive) {
      return baseClasses;
    }

    // Active state styling based on color - light-purple maintains text color, others get white text
    switch (link.color) {
      case "light-purple":
        return `${baseClasses} bg-light-purple text-dark-purple`;
      case "purple":
        return `${baseClasses} bg-purple text-white`;
      case "red":
        return `${baseClasses} bg-red text-white`;
      case "green":
        return `${baseClasses} bg-green text-white`;
      case "blue":
        return `${baseClasses} bg-blue text-white`;
      default:
        return `${baseClasses} bg-light-purple text-dark-purple`;
    }
  };

  const handleLinkClick = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const getDownloadButtonClasses = () => {
    const baseClasses =
      "flex justify-center items-center gap-[0.625vw] border-[0.104vw] border-dark-purple rounded-[100vw] py-[1.042vw] underline-none transition-all duration-300";

    // Find the active link to get its color
    const activeLink = nav_links.find((link) => link.href === activeSection);

    if (!activeLink) {
      return `${baseClasses} text-dark-purple bg-[#cfc9e1]`;
    }

    // Apply background color based on active section
    switch (activeLink.color) {
      case "light-purple":
        return `${baseClasses} bg-light-purple text-dark-purple`;
      case "purple":
        return `${baseClasses} bg-purple text-white`;
      case "red":
        return `${baseClasses} bg-red text-white`;
      case "green":
        return `${baseClasses} bg-green text-white`;
      case "blue":
        return `${baseClasses} bg-blue text-white`;
      default:
        return `${baseClasses} text-dark-purple bg-[#cfc9e1]`;
    }
  };

  return (
    <nav>
      <div className="flex sticky top-[1.5vw] h-auto w-[18vw] flex-col gap-[.5vw] max-md:hidden">
        <Link to="#" className="inline-block">
          <img
            src="https://cdn.prod.website-files.com/66c4ce97200d379d7b04a094/66d6db329ed60108107185e2_logo.svg"
            loading="lazy"
            alt=""
            className="image"
          />
        </Link>

        {nav_links.map((link) => {
          const isActive = activeSection === link.href;

          return (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={getLinkClasses(link, isActive)}
            >
              <div className="w-[1.3vw]">
                <div className="font-main text-[1.042vw] font-medium leading-[145%]">
                  {link.number}
                </div>
              </div>
              <div className="font-main text-[1.042vw] font-medium leading-[145%]">
                {link.title}
              </div>
            </button>
          );
        })}

        <Link
          to="https://go.prowly.com/hubfs/The%20State%20of%20PR%20Technology%202024%20by%20Prowly%20PR%20Software.pdf"
          target="_blank"
          className={getDownloadButtonClasses()}
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

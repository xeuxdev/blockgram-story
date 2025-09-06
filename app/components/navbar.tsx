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

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset body overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

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
      "flex transition-all items-start duration-300 gap-[0.5vw] border-[0.104vw] border-dark-purple rounded-[0.833vw] py-[1.042vw] px-[1.042vw]";

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

  const handleMobileLinkClick = (href: string) => {
    handleLinkClick(href);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
      {/* mobile */}
      <div className="fixed md:hidden inset-[0%_0%_auto] flex items-center justify-between bg-white z-40 py-[2.7vw] px-[4.3vw]">
        <a href="#introduction" className="size-10">
          <img src="/logo.png" loading="lazy" alt="" className="image" />
        </a>
        <button
          onClick={toggleMobileMenu}
          className="w-[8vw] h-[8vw] flex items-center justify-center"
        >
          <img src="/hamburger.svg" loading="lazy" alt="" className="w-[8vw]" />
        </button>
      </div>

      {/* mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "transform translate-y-0 opacity-100 visible"
            : "transform -translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="bg-white w-full h-full flex flex-col">
          {/* mobile menu header */}
          <div className="flex items-center justify-between py-[2.7vw] px-[4.3vw] border-b border-gray-200">
            <img src="/logo.png" loading="lazy" alt="" className="size-10" />
            <button
              onClick={toggleMobileMenu}
              className="flex items-center justify-center"
            >
              <svg
                className="size-[10vw]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          {/* mobile menu content */}
          <div className="flex-1 flex flex-col justify-center px-[4.3vw] gap-[2vw]">
            {nav_links.map((link, index) => {
              const isActive = activeSection === link.href;

              return (
                <button
                  key={link.href}
                  onClick={() => handleMobileLinkClick(link.href)}
                  className={`flex items-center gap-[3vw] py-[3vw] px-[2vw] border-[0.3vw] border-dark-purple rounded-[2vw] transition-all duration-300 ${
                    isActive
                      ? link.color === "light-purple"
                        ? "bg-light-purple text-dark-purple"
                        : link.color === "purple"
                        ? "bg-purple text-white"
                        : link.color === "red"
                        ? "bg-red text-white"
                        : link.color === "green"
                        ? "bg-green text-white"
                        : link.color === "blue"
                        ? "bg-blue text-white"
                        : "bg-light-purple text-dark-purple"
                      : "bg-transparent text-dark-purple"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMobileMenuOpen
                      ? "slideInFromTop 0.3s ease-out forwards"
                      : "none",
                  }}
                >
                  <div className="font-main text-[3.5vw] font-medium leading-[145%]">
                    {link.number}
                  </div>
                  <div className="font-main text-[3.5vw] font-medium leading-[145%] text-left">
                    {link.title}
                  </div>
                </button>
              );
            })}

            {/* mobile download button */}
            <Link
              to=""
              target="_blank"
              className="flex justify-center items-center gap-[2vw] border-[0.3vw] border-dark-purple rounded-[100vw] py-[3vw] mt-[2vw] bg-light-purple text-dark-purple transition-all duration-300"
              style={{
                animationDelay: `${nav_links.length * 50}ms`,
                animation: isMobileMenuOpen
                  ? "slideInFromTop 0.3s ease-out forwards"
                  : "none",
              }}
            >
              <div className="font-main text-[3.5vw] font-medium leading-[145%]">
                DOWNLOAD PDF
              </div>
              <div className="size-[3vw] flex items-center justify-center">
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
        </div>
      </div>

      {/* desktop */}
      <div className="flex sticky top-[0.5vw] h-auto w-[18vw] flex-col gap-[.5vw] max-md:hidden">
        <Link to="#" className="inline-block text-[3vw] font-main">
          Blockgram
        </Link>

        {nav_links.map((link) => {
          const isActive = activeSection === link.href;

          return (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={getLinkClasses(link, isActive)}
            >
              <div className="font-main text-[1.042vw] font-medium leading-[145%]">
                {link.number}
              </div>
              <div className="font-main text-[1.042vw] font-medium leading-[145%] text-left">
                {link.title}
              </div>
            </button>
          );
        })}

        <Link to="" target="_blank" className={getDownloadButtonClasses()}>
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

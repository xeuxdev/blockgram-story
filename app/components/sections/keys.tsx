import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const keyFindings = [
  {
    title: "Missing AI Assistance",
    description:
      "Telegram leaves users drowning in information. There are no AI summaries, no contextual search, and no way to “ask the chat” for quick answers.",
    image: "/keys/Missing AI assistance.png",
  },
  {
    title: "Notification Overload",
    description:
      "Important messages get buried under endless pings. There is no smart way to prioritize what really matters.",
    image: "/keys/Notification Overload.png",
  },
  {
    title: "Too Many Accounts",
    description:
      "Power users juggle work groups, trading accounts, and communities separately. Telegram gives no easy way to unify or manage them.",
    image: "/keys/Too Many Accounts.png",
  },
  {
    title: "Scam Bots and Fake Accounts",
    description:
      "Scams are the number one frustration. Fake airdrops, phishing links, and impersonators target users daily. Over **60% of people say they face scam attempts every month**.",
    image: "/keys/Scam bots.png",
  },
  {
    title: "Risky Payments",
    description:
      "Copying and pasting wallet addresses is still the norm. A single mistake can cost users their money instantly.",
    image: "/keys/Risky payments.png",
  },
  {
    title: "Forgotten Chats",
    description:
      "Catching up in an active group is almost impossible. Hundreds of unread messages mean wasted time and missed context.",
    image: "/keys/Forgotten chats.png",
  },
  {
    title: "Identity Confusion",
    description:
      "Anyone can pretend to be a KOL or project lead. Communities spend hours verifying who is real and who is not.",
    image: "/keys/Identity Confusion.png",
  },
];

// Draggable scroll component
function DraggableScroll({ children, className, ...props }: any) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const animationRef = useRef<number | null>(null);

  const handleDragStart = () => {
    if (scrollRef.current) {
      setIsDragging(true);
      setStartX(scrollRef.current.scrollLeft);
    }
  };

  const handleDrag = (event: any, info: any) => {
    if (scrollRef.current && isDragging) {
      // Cancel any pending animation
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      // Use requestAnimationFrame for smooth scrolling
      animationRef.current = requestAnimationFrame(() => {
        if (scrollRef.current) {
          // Increased sensitivity: multiply drag movement by 3 for very responsive scrolling
          const newScrollLeft = startX - info.offset.x * 3;
          scrollRef.current.scrollLeft = newScrollLeft;
        }
      });
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={scrollRef}
      className={`${className} ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.1}
      dragMomentum={false}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      dragPropagation={true}
      dragControls={undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Keys() {
  return (
    <section id="keys" className="flex flex-col gap-[2.564vw] md:gap-[1.563vw]">
      <motion.div
        className="section_title text-dark-purple"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="wrapper small bg-[#A8D6F3]">
          <div className="text-center">
            <h3 className="text-styles-h1">
              Key <span className="alt">Findings</span>
            </h3>
          </div>
        </div>
      </motion.div>

      <motion.section
        className="section_keys"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="wrapper">
          <div className="paddings">
            <div className="flex flex-col gap-[2.5vw]">
              {/* desktop */}
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <DraggableScroll
                  className="pb-[1rem] pr-[7.5vw] max-md:hidden overflow-x-scroll custom-scrollbar select-none scroll-smooth"
                  style={{ scrollBehavior: "auto" }}
                >
                  <div className="flex gap-[1.042vw]">
                    {keyFindings.map((item, index) => {
                      return (
                        <div
                          className="overflow-hidden relative gap-[2.5vw] border-[0.104vw] border-dark-purple rounded-[1.25vw] flex flex-col p-[1.667vw] w-[22.917vw] flex-none pointer-events-none"
                          role="group"
                          aria-label={` ${index + 1} / ${keyFindings.length}`}
                          key={Math.random() + index}
                        >
                          <img
                            src={item.image}
                            loading="eager"
                            alt=""
                            className="image"
                          />
                          <div className="flex flex-col gap-[3vw] md:gap-[1.25vw]">
                            <div className="keys-card_title">
                              <div className="text-styles-h4">{item.title}</div>
                            </div>
                            <div className="text-styles-content">
                              {item.description
                                .split(/\*\*(.*?)\*\*/g)
                                .map((part, i) =>
                                  i % 2 === 1 ? (
                                    <strong key={i}>{part}</strong>
                                  ) : (
                                    part
                                  )
                                )}
                            </div>
                          </div>

                          {index === 4 && <QuestionCard />}
                        </div>
                      );
                    })}
                  </div>
                </DraggableScroll>
              </motion.div>

              {/* mobile */}
              <motion.div
                className="slider-mobile w-full md:hidden"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <DraggableScroll
                  className="flex w-auto -mx-[9.205vw] pl-[8.205vw] pr-[15vw] overflow-x-scroll py-4 static gap-[3.59vw] custom-scrollbar select-none scroll-smooth"
                  style={{ scrollBehavior: "auto" }}
                >
                  {keyFindings.map((item, index) => (
                    <div
                      className="overflow-hidden relative gap-[5.641vw] border-[0.104vw] border-dark-purple rounded-[4.103vw] w-[78vw] flex flex-col sm:w-full flex-none p-[4.641vw] pointer-events-none"
                      key={Math.random() + index}
                    >
                      <img
                        src={item.image}
                        loading="eager"
                        alt=""
                        className="image"
                      />
                      <div className="flex flex-col gap-[3vw] md:gap-[1.25vw]">
                        <div className="keys-card_title">
                          <div className="text-styles-h4">{item.title}</div>
                        </div>
                        <div className="text-styles-content">
                          {item.description
                            .split(/\*\*(.*?)\*\*/g)
                            .map((part, i) =>
                              i % 2 === 1 ? (
                                <strong key={i}>{part}</strong>
                              ) : (
                                part
                              )
                            )}
                        </div>
                      </div>
                      {index === 1 && <QuestionCard />}
                    </div>
                  ))}
                </DraggableScroll>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
}

function QuestionCard() {
  const [open, setOpen] = React.useState(true);

  return (
    <div
      className="absolute inset-0 z-10 gap-[4vw] md:gap-[2.083vw] bg-[#A8D6F3] text-center flex-col flex px-[1.667vw] justify-center pointer-events-auto"
      style={{
        display: open ? "flex" : "none",
      }}
    >
      <div className="text-styles-h3">
        Do you feel Telegram has become too overwhelming to manage?
      </div>
      <div className="flex gap-[1.667vw] md:gap-[0.625vw] items-center justify-center *:cursor-pointer">
        <div
          className="uppercase transition-all duration-200 p-[1.667vw_5vw] md:p-[0.625vw_2.5vw] rounded-full bg-dark-purple text-white hover:bg-blue hover:text-white"
          onClick={() => setOpen(false)}
        >
          <div className="text-styles-content font-bold">Yes</div>
        </div>
        <div
          data-w-id="050439f1-3ec6-570a-b613-392b4bcf186c"
          className="uppercase transition-all duration-200 p-[1.667vw_5vw] md:p-[0.625vw_2.5vw] rounded-full bg-transparent text-dark-purple hover:bg-[#3f2b4c40] hover:text-white border-[0.104vw] border-dark-purple"
          onClick={() => setOpen(false)}
        >
          <div className="text-styles-content font-bold">No</div>
        </div>
      </div>
    </div>
  );
}

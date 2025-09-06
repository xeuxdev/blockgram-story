const featureItems = [
  {
    title: "Send & receive crypto in-chat",
    description:
      "Inbuilt crypto wallet for seamless sending and receiving crypto.",

    media: "/features/Send & Receive Crypto In-Chat.mp4",
  },
  {
    title: "Track your entire portfolio",
    description:
      "You would be able to track your entire crypto portfolio in-app.",
    media: "/features/Track Your Entire Portfolio.mp4",
  },
  {
    title: "Auto-summarize messages",
    description:
      "Condense long conversations into key points, highlights, and actionable items instantly.",
    media: "/features/Auto-Summarize.mp4",
  },
  {
    title: "Real Time Translation",
    description:
      "Uses advanced AI to translate messages, voice messages, and inline queries in real-time.",
    media: "/features/Translate In Real Time.mp4",
  },
  {
    title: "Have An AI Assistant",
    description:
      "Context-aware, real-time AI directly integrated into your chat interface.",
    media: "/features/Have An Ai Assistant.mp4",
  },
  {
    title: "AI Keyboard",
    description:
      "Generate, edit, and improve text with AI-powered suggestions directly from your keyboard.",
    media: "/features/Ai Keyboard.mp4",
  },
];

export function FeaturesVideosSection() {
  return (
    <section id="features" className="relative">
      <div className="wrapper">
        <div className="px-[4vw] md:px-[1.043vw]">
          <div className="flex flex-col gap-[2.5vw]">
            {/* desktop */}
            <div className="pb-[1rem] pl-[2vw] pr-[7.5vw] max-md:hidden overflow-x-scroll custom-scrollbar">
              <div className="flex gap-[1.042vw]">
                {featureItems.map((item, index) => (
                  <div
                    key={item.title}
                    className="overflow-hidden relative gap-[1.5vw] border-[0.104vw] border-dark-purple rounded-[1.25vw] flex flex-col p-[1vw] w-[22.917vw] flex-none"
                    role="group"
                    aria-label={`${index + 1} / ${featureItems.length}`}
                  >
                    <div className="w-full aspect-video rounded-[1.25vw] relative">
                      <video
                        src={item.media}
                        autoPlay
                        muted
                        playsInline
                        loop
                        className="size-full rounded-[0.625vw]"
                      />
                    </div>
                    <div className="flex flex-col gap-[3vw] md:gap-[1.25vw] relative">
                      <div className="keys-card_title">
                        <div className="text-styles-h4">{item.title}</div>
                      </div>
                      <div className="text-styles-content">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* mobile */}
            <div className="slider-mobile w-full md:hidden">
              <div className="flex w-auto -mx-[9.205vw] pl-[15.205vw] pr-[15vw] overflow-x-scroll py-4 static gap-[3.59vw] custom-scrollbar">
                {featureItems.map((item, index) => (
                  <div
                    key={item.title}
                    className="overflow-hidden relative gap-[5.641vw] md:gap-[2.5vw] border-[0.104vw] border-dark-purple rounded-[4.103vw] w-[78vw] md:rounded-[1.25vw] flex flex-col md:p-[1.667vw] sm:w-full flex-none p-[6.641vw]"
                  >
                    <div className="w-full aspect-video rounded-[4.103vw] md:rounded-[1.25vw] p-[1.282vw] md:p-[0.521vw] bg-white/8 backdrop-blur-[20px] relative">
                      <video
                        src={item.media}
                        autoPlay
                        muted
                        playsInline
                        loop
                        className="size-full rounded-[2.051vw] md:rounded-[0.625vw]"
                      />
                    </div>
                    <div className="flex flex-col gap-[3vw] md:gap-[1.25vw] relative">
                      <div className="keys-card_title">
                        <div className="text-styles-h4">{item.title}</div>
                      </div>
                      <div className="text-styles-content">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const PRChallengesChart = () => {
  const chartData = [
    {
      title: "Outdated & tedious payments",
      data: [
        {
          year: "Yes",
          value: 34,
          color: "bg-[#2EA4DF]",
        },
        {
          year: "No",
          value: 48,
          color: "bg-[#2EA4DF98]",
        },
      ],
    },
    {
      title: "Missing alpha in noisy groups?",
      data: [
        {
          year: "Yes",
          value: 60,
          color: "bg-[#2EA4DF]",
        },
        {
          year: "No",
          value: 52,
          color: "bg-[#2EA4DF98]",
        },
      ],
    },
    {
      title: "Limited account logins",
      data: [
        {
          year: "Yes",
          value: 46,
          color: "bg-[#2EA4DF]",
        },
        {
          year: "No",
          value: 44,
          color: "bg-[#2EA4DF98]",
        },
      ],
    },
    {
      title: "Buying tokens is tedious",
      data: [
        {
          year: "Yes",
          value: 41,
          color: "bg-[#2EA4DF]",
        },
        {
          year: "No",
          value: 41,
          color: "bg-[#2EA4DF98]",
        },
      ],
    },
    {
      title: "Too many irrelevant messages",
      data: [
        {
          year: "Yes",
          value: 35,
          color: "bg-[#2EA4DF]",
        },
        {
          year: "No",
          value: 47,
          color: "bg-[#2EA4DF98]",
        },
      ],
    },
    {
      title: "No seamless video calls",
      data: [
        {
          year: "Yes",
          value: 38,
          color: "bg-[#2EA4DF]",
        },
        {
          year: "No",
          value: 36,
          color: "bg-[#2EA4DF98]",
        },
      ],
    },
    {
      title: "Scammers everywhere",
      data: [
        {
          year: "Yes",
          value: 30,
          color: "bg-[#2EA4DF]",
        },
        {
          year: "No",
          value: 25,
          color: "bg-[#2EA4DF98]",
        },
      ],
    },
    {
      title: "All notifications treated the same",
      data: [
        {
          year: "Yes",
          value: 33,
          color: "bg-[#2EA4DF]",
        },
        {
          year: "No",
          value: 26,
          color: "bg-[#2EA4DF98]",
        },
      ],
    },
    {
      title: "Unsafe file sharing",
      data: [
        {
          year: "Yes",
          value: 32,
          color: "bg-[#2EA4DF]",
        },
        {
          year: "No",
          value: 29,
          color: "bg-[#2EA4DF98]",
        },
      ],
    },
    {
      title: "No reminders or scheduling",
      data: [
        {
          year: "Yes",
          value: 12,
          color: "bg-[#2EA4DF]",
        },
        {
          year: "No",
          value: 28,
          color: "bg-[#2EA4DF98]",
        },
      ],
    },
  ];

  const legendItems = [
    { year: "Yes", color: "bg-[#2EA4DF]" },
    { year: "No", color: "bg-[#2EA4DF98]" },
  ];

  return (
    <div className="w-full overflow-visible mt-[2.5vw]">
      <div className="flex max-md:flex-col gap-[4.103vw] md:gap-[1.042vw] md:flex-wrap">
        {/* legend */}
        <div className="flex w-full max-md:flex-wrap gap-[3.077vw] md:gap-[1.563vw]">
          {legendItems.map((item) => (
            <div
              key={item.year}
              className="flex items-center gap-[1.538vw] md:gap-[0.625vw]"
            >
              <div
                className={`rounded-[1.026vw] size-[3.59vw] md:size-[1.25vw] md:rounded-[0.208vw] ${item.color}`}
              ></div>
              <span className="text-styles-small">{item.year}</span>
            </div>
          ))}
        </div>

        {chartData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col flex-1 gap-[2.051vw] md:gap-[0.83vw] min-w-[30vw]"
          >
            <h3 className="text-styles-content font-bold">{item.title}</h3>
            <div className="bg-white rounded-[3vw] md:rounded-[1.042vw]">
              {item.data.map((bar, barIndex) => (
                <div
                  key={barIndex}
                  className="relative flex items-center py-[0.513vw] md:py-[0.313vw] pr-[2vw] md:pr-[0.83vw] h-5"
                >
                  <div
                    className={`h-6 ${bar.color} flex items-center justify-end pr-3 text-white font-semibold text-xs shadow-sm`}
                    style={{ width: `${bar.value}%` }}
                  >
                    {bar.value}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

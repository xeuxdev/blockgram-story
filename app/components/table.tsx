import React from "react";
import { cn } from "~/lib/utils";

const tableData = [
  {
    feature: "Scam Protection",
    telegram: {
      status: "❌",
      description: "Scam bots, phishing links, no AI filters",
    },
    blockgram: {
      status: "✅",
      description: "AI spam detection + file scanner",
    },
  },
  {
    feature: "Crypto Transactions",
    telegram: {
      status: "❌",
      description: "No native wallet, relies on risky bots",
    },
    blockgram: {
      status: "✅",
      description: "Username = wallet, in-chat transfers",
    },
  },
  {
    feature: "Notifications",
    telegram: {
      status: "❌",
      description: "All pings are equal, chaotic alerts",
    },
    blockgram: {
      status: "✅",
      description: "Smart credit system, priority alerts",
    },
  },
  {
    feature: "Identity Verification",
    telegram: {
      status: "❌",
      description: "Easy impersonation of KOLs & devs",
    },
    blockgram: {
      status: "✅",
      description: "Verified badges + impersonator check",
    },
  },
  {
    feature: "Group Management",
    telegram: {
      status: "❌",
      description: "Overloaded chats, manual sorting",
    },
    blockgram: {
      status: "✅",
      description: "Auto folders, whale groups, token badges",
    },
  },
  {
    feature: "Productivity Tools",
    telegram: {
      status: "❌",
      description: "No reminders or scheduling",
    },
    blockgram: {
      status: "✅",
      description: 'Built-in reminders + "Meet" scheduling',
    },
  },
  {
    feature: "Calling",
    telegram: {
      status: "❌",
      description: "Basic, unreliable calls",
    },
    blockgram: {
      status: "✅",
      description: "Video calls + calendar-style scheduling",
    },
  },
  {
    feature: "Account Limits",
    telegram: {
      status: "❌",
      description: "Restricted multiple account handling",
    },
    blockgram: {
      status: "✅",
      description: "Unlimited accounts, seamless switching",
    },
  },
];

export function Tables() {
  return (
    <div className="w-full ">
      {/* Mobile: Horizontal scroll container */}
      <div className="overflow-auto lg:overflow-hidden bg-[#f0f0f0] -mx-[8vw] md:mx-0 px-[8vw] md:px-0">
        <div className="min-w-[800px] lg:min-w-0">
          {/* Header */}
          <div className="grid grid-cols-3 bg-red rounded-t-[3vw] md:rounded-t-[1.067vw] overflow-hidden">
            <div className="max-md:py-[1.5vw] flex items-center justify-center flex-1 p-[0.9vw_1vw]">
              <h3 className="text-white font-bold text-styles-content">
                Feature / Need
              </h3>
            </div>
            <div className="max-md:py-[1.5vw] flex items-center justify-center flex-1 p-[0.9vw_1vw] ">
              <h3 className="text-white font-bold text-styles-content">
                Telegram
              </h3>
            </div>
            <div className="max-md:py-[1.5vw] flex items-center justify-center flex-1 p-[0.9vw_1vw] ">
              <h3 className="text-white font-bold text-styles-content">
                Blockgram
              </h3>
            </div>
          </div>

          {/* Table Body */}
          <div className="bg-white rounded-b-[3vw] md:rounded-b-[1.067vw] overflow-hidden">
            {tableData.map((row, index) => (
              <div
                key={row.feature}
                className={cn(
                  "grid grid-cols-3 last:border-b-0 bg-white",
                  index % 2 === 0 ? "bg-[#f9f9f9]" : "bg-white"
                )}
              >
                {/* Feature Column */}
                <div className="px-[0.9vw] py-[1.5vw] md:py-[1vw] text-center flex items-center justify-center text-white bg-[#ffb5a5] text-styles-content">
                  {row.feature}
                </div>

                {/* Telegram Column */}
                <div className="px-[0.9vw] py-[1.5vw] md:py-[1vw]">
                  <div className="flex items-start gap-2 text-dark-purple">
                    <span className="text-styles-content flex-shrink-0">
                      {row.telegram.status}
                    </span>
                    <span className="text-styles-content">
                      {row.telegram.description}
                    </span>
                  </div>
                </div>

                {/* Blockgram Column */}
                <div className="px-[0.9vw] py-[1.5vw] md:py-[1vw]">
                  <div className="flex items-start gap-2 text-dark-purple">
                    <span className="text-styles-content flex-shrink-0">
                      {row.blockgram.status}
                    </span>
                    <span className="text-styles-content">
                      {row.blockgram.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const pointData = [
  {
    title: "Outdated & tedious payments",
    data: [
      {
        year: "Yes",
        value: 34,
      },
      {
        year: "No",
        value: 48,
      },
      {
        year: "Maybe",
        value: 57,
      },
    ],
  },
  {
    title: "Missing alpha in noisy groups?",
    data: [
      {
        year: "Yes",
        value: 60,
      },
      {
        year: "No",
        value: 52,
      },
      {
        year: "Maybe",
        value: 56,
      },
    ],
  },
  {
    title: "Limited account logins",
    data: [
      {
        year: "Yes",
        value: 46,
      },
      {
        year: "No",
        value: 44,
      },
      {
        year: "Maybe",
        value: 50,
      },
    ],
  },
  {
    title: "Buying tokens is tedious",
    data: [
      {
        year: "Yes",
        value: 41,
      },
      {
        year: "No",
        value: 41,
      },
      {
        year: "Maybe",
        value: 48,
      },
    ],
  },
  {
    title: "Too many irrelevant messages",
    data: [
      {
        year: "Yes",
        value: 35,
      },
      {
        year: "No",
        value: 47,
      },
      {
        year: "Maybe",
        value: 43,
      },
    ],
  },
  {
    title: "No seamless video calls",
    data: [
      {
        year: "Yes",
        value: 38,
      },
      {
        year: "No",
        value: 36,
      },
      {
        year: "Maybe",
        value: 41,
      },
    ],
  },
  {
    title: "Scammers everywhere",
    data: [
      {
        year: "Yes",
        value: 30,
      },
      {
        year: "No",
        value: 25,
      },
      {
        year: "Maybe",
        value: 31,
      },
    ],
  },
  {
    title: "All notifications treated the same",
    data: [
      {
        year: "Yes",
        value: 33,
      },
      {
        year: "No",
        value: 26,
      },
      {
        year: "Maybe",
        value: 31,
      },
    ],
  },
  {
    title: "Unsafe file sharing",
    data: [
      {
        year: "Yes",
        value: 32,
      },
      {
        year: "No",
        value: 29,
      },
      {
        year: "Maybe",
        value: 30,
      },
    ],
  },
  {
    title: "No reminders or scheduling",
    data: [
      {
        year: "Yes",
        value: 12,
      },
      {
        year: "No",
        value: 28,
      },
      {
        year: "Maybe",
        value: 25,
      },
    ],
  },
];

export function PointsTables() {
  return (
    <div className="w-full">
      {/* Mobile: Horizontal scroll container */}
      <div className="overflow-auto lg:overflow-hidden bg-[#f0f0f0] -mx-[8vw] md:mx-0 px-[8vw] md:px-0">
        <div className="min-w-[800px] lg:min-w-0">
          {/* Header */}
          <div className="grid grid-cols-4 bg-[#9889fb] rounded-t-[3vw] md:rounded-t-[1.067vw] overflow-hidden">
            <div className="max-md:py-[1.5vw] flex items-center justify-center flex-1 p-[0.9vw_1vw]">
              <h3 className="text-white font-bold text-styles-content"></h3>
            </div>
            <div className="max-md:py-[1.5vw] flex items-center justify-center flex-1 p-[0.9vw_1vw] ">
              <h3 className="text-white font-bold text-styles-content">Yes</h3>
            </div>
            <div className="max-md:py-[1.5vw] flex items-center justify-center flex-1 p-[0.9vw_1vw] ">
              <h3 className="text-white font-bold text-styles-content">No</h3>
            </div>
            <div className="max-md:py-[1.5vw] flex items-center justify-center flex-1 p-[0.9vw_1vw] ">
              <h3 className="text-white font-bold text-styles-content">
                Maybe
              </h3>
            </div>
          </div>

          {/* Table Body */}
          <div className="bg-white rounded-b-[3vw] md:rounded-b-[1.067vw] overflow-hidden">
            {pointData.map((row, index) => (
              <div
                key={row.title}
                className={cn("grid grid-cols-4 last:border-b-0 bg-white", {
                  "bg-[#f9f9f9]": index % 2 === 0,
                })}
              >
                {/* Feature Column */}
                <div className="px-[0.9vw] py-[1.5vw] md:py-[1vw] text-center flex items-center justify-center font-bold! bg-[#998afb80] text-styles-content">
                  {row.title}
                </div>

                {/* 2024 Column */}
                <div className="px-[0.9vw] py-[1.5vw] md:py-[1vw] text-dark-purple text-center">
                  <span className="text-styles-content flex-shrink-0">
                    {row.data[0].value}%
                  </span>
                </div>

                {/* 2023 Column */}
                <div className="px-[0.9vw] py-[1.5vw] md:py-[1vw] text-dark-purple text-center">
                  <span className="text-styles-content flex-shrink-0">
                    {row.data[1].value}%
                  </span>
                </div>

                {/* 2022 */}
                <div className="px-[0.9vw] py-[1.5vw] md:py-[1vw] text-dark-purple text-center">
                  <span className="text-styles-content flex-shrink-0">
                    {row.data[2].value}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

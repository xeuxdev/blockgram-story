import { motion } from "framer-motion";
import { cn } from "~/lib/utils";

const chartData = [
  {
    label: "Staying safe from scam bots & impersonators",
    percentage: 52,
    color: "bg-purple",
  },
  {
    label: "Having native crypto transfers inside chats",
    percentage: 41,
    color: "bg-purple",
  },
  {
    label: "Reducing noise and organizing groups better",
    percentage: 36,
    color: "bg-purple",
  },
  {
    label: "Managing multiple accounts seamlessly",
    percentage: 33,
    color: "bg-purple",
  },
  {
    label: "Getting smarter, prioritized notifications",
    percentage: 25,
    color: "bg-purple",
  },
  {
    label: "Access to reliable video calls & scheduling",
    percentage: 21,
    color: "bg-purple",
  },
  {
    label: "Safer file sharing with built-in malware checks",
    percentage: 18,
    color: "bg-purple",
  },
  {
    label: "Having chats auto-summarized by AI",
    percentage: 12,
    color: "bg-purple",
  },
  {
    label: "Other improvements",
    percentage: 6,
    color: "bg-purple",
  },
];

export function BarChart() {
  const maxPercentage = Math.max(...chartData.map((item) => item.percentage));

  return (
    <div className="overflow-x-scroll overflow-y-hidden lg:overflow-hidden w-full">
      <div className="min-w-[1000px]">
        <div className="flex items-end justify-between gap-[4vw] md:gap-[1.042vw] h-[38vw] md:h-[23.854vw]">
          {chartData.map((item, index) => {
            const barHeight = (item.percentage / maxPercentage) * 100;

            return (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                whileInView={{ height: `${barHeight}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col items-end flex-1 h-full justify-end"
              >
                {/* Bar */}
                <div className="relative w-full flex flex-col items-center justify-end h-full">
                  <div
                    className={cn(
                      "w-full rounded-[2.5vw] md:rounded-[1.25vw] flex items-start justify-center pt-[2.5vw] md:pt-[0.8vw] relative min-h-[40px]",
                      item.color
                    )}
                    style={{ height: `max(${barHeight}%, 40px)` }}
                  >
                    {/* Percentage label */}
                    <span className="text-white font-bold text-lg">
                      {item.percentage}%
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex items-start justify-between gap-[4vw] md:gap-[1.042vw]">
          {chartData.map((item, index) => {
            const barHeight = (item.percentage / maxPercentage) * 100;

            return (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                whileInView={{ height: `${barHeight}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col items-end flex-1 h-full justify-end"
              >
                {/* Label */}
                <div className="mt-4 text-center max-w-[140px]">
                  <p className="text-sm font-medium text-gray-800 leading-tight">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

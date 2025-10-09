import { motion } from "framer-motion";
import { cn } from "~/lib/utils";

const chartData = [
  {
    label: "safer chats without scam bots or impersonators",
    percentage: 51,
    color: "bg-[#2EA4DF]",
  },
  {
    label: "AI tools to summarize and organize conversations",
    percentage: 39,
    color: "bg-[#2EA4DF]",
  },
  {
    label: "clearer identity checks so they know who is real",
    percentage: 33,
    color: "bg-[#2EA4DF]",
  },
  {
    label: "to manage group chats more efficiently",
    percentage: 32,
    color: "bg-[#2EA4DF]",
  },
  {
    label: "payments and transactions built into the chat",
    percentage: 22,
    color: "bg-[#2EA4DF]",
  },
  {
    label: "smarter notifications that highlight what matters",
    percentage: 19,
    color: "bg-[#2EA4DF]",
  },
  {
    label: "other small improvements",
    percentage: 5,
    color: "bg-[#2EA4DF]",
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
                      "w-full rounded-[2.5vw] md:rounded-[1.25vw] flex items-center justify-center relative min-h-[40px]",
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
                  <p className="text-sm font-medium text-gray-800 leading-tight first-letter:capitalize">
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

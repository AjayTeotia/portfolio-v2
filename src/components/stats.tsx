import { StatsData } from "@/constants";
import CountUp from "react-countup";

const formatNumber = (num: number) => {
  if (num >= 1_000_000_000)
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  if (num >= 1_000_000)
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return num.toString();
};

export function Stats() {
  return (
    <section className="pt-8 xl:pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {StatsData.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                formattingFn={formatNumber}
                className="text-4xl xl:text-6xl text-primary font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-xl font-semibold text-muted-foreground`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

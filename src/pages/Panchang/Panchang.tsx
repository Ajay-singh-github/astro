import { useState } from "react";
import moon from "../../assets/moon.svg";
import PToday from "../../components/Panchang/PToday/PToday";
import P2024 from "../../components/Panchang/P2024/P2024";
import P2025 from "../../components/Panchang/P2025/P2025";
import CTimings from "../../components/Panchang/CTimings/CTimings";
import Articles from "../../components/common/Articles/Articles";

const Panchang = () => {
  const [selIt, setSelIt] = useState("1");
  const items = [
    {
      key: "1",
      value: "Todays Panchang",
    },
    {
      key: "2",
      value: "Panchang 2024",
    },
    {
      key: "3",
      value: "Panchang 2025",
    },
    {
      key: "4",
      value: "Chogadiya Timings",
    },
  ];
  return (
    <div className="py-8 md:py-20 flex flex-col items-center justify-center bg-primary-100">
      <div className="font-bold">
        <div className="text-xl md:text-3xl ">Panchang</div>
        <div className="w-full relative my-3 border-b border-primary-300 flex justify-center">
          <div className="absolute -top-4 bg-primary-100">
            <img src={moon} className="text-xs" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 md:gap-8 text-sm md:text-xl px-2 flex-wrap my-6 md:my-[4vw]">
        {items.map((item) => (
          <div
            className={`p-1 px-4 md:p-2 md:px-8 ${
              selIt === item.key
                ? "bg-secondary-100 text-primary-200"
                : "bg-secondary-200"
            } rounded-full cursor-pointer`}
            onClick={() => setSelIt(item.key)}
          >
            {item.value}
          </div>
        ))}
      </div>

      <div className="px-2 md:px-8">
        {selIt === "1" ? (
          <PToday />
        ) : selIt === "2" ? (
          <P2024 />
        ) : selIt === "3" ? (
          <P2025 />
        ) : (
          <CTimings />
        )}
      </div>
      <div className="w-[90%] md:w-full">
        
      <Articles />
      </div>

      <div className="px-2 md:px-8">
        <div className="my-6 md:my-[4vw] w-full">
          <div className="font-bold w-max">
            <div className="text-xl md:text-3xl ">PANCHANG - FAQS</div>
            <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
              <div className="absolute -top-4 bg-primary-100">
                <img src={moon} className="text-xs" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <ul className="flex flex-col gap-8 text-sm md:text-xl mb-6 md:mb-[10vw]">
            <li>
              <div className="font-bold">
                Q: What is the significance of Tithi in Panchang?
              </div>
              <div>
                A: Tithi refers to the lunar day and is one of the most
                important elements of the Panchang. It helps determine
                auspicious times for various activities.
              </div>
            </li>
            <li>
              <div className="font-bold">
                Q: Can I use Panchang for personal decisions like travel or
                shopping?
              </div>
              <div>
                A: Yes, Panchang can guide you on the best times for a wide
                range of activities, including personal decisions like travel,
                shopping, or even signing contracts.
              </div>
            </li>
            <li>
              <div className="font-bold">
                Q: How often should I consult Panchang?
              </div>
              <div>
                A: You can consult Panchang daily to plan your activities,
                especially when you need to choose auspicious times for
                significant events.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Panchang;

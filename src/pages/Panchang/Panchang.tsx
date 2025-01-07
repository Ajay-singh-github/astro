import { useState, useEffect, useRef } from "react";
import moon from "../../assets/moon.svg";
import PToday from "../../components/Panchang/PToday/PToday";
import P2024 from "../../components/Panchang/P2024/P2024";
import P2025 from "../../components/Panchang/P2025/P2025";
import CTimings from "../../components/Panchang/CTimings/CTimings";
import Articles from "../../components/common/Articles/Articles";
import Scrollc from "@/lib/scrollc";
import { items } from "@/constants/constants";
import { Dosha, Dashas, ExtendedHoroscope } from "@/constants/constants";
import { useNavigate } from "react-router-dom";
const Panchang = () => {
  var navigate = useNavigate()
  const [link] = useState<string>("");
  const [data] = useState<any>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [error] = useState<string | null>(null);


  const [selIt, setSelIt] = useState("1");
  const section = Scrollc();


  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const year = urlParams.get("year");
    const chogadiya = urlParams.get("chogadiya");

    if (year) {
      if (year === "2024") {
        setSelIt("2");
      } else if (year === "2025") {
        setSelIt("3");
      }
      return;
    }
    if (chogadiya) {
      setSelIt("4");
      return;
    }
    setSelIt("1");
  }, []);


  function convertToCapitalizedWords(str: string) {
    return str
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <div ref={section} className="py-8 md:py-10 flex flex-col items-center justify-center bg-primary-100">
      <div className="font-bold">
        <div className="text-xl md:text-4xl ">Panchang</div>
        <div className="w-full relative my-3 border-b border-primary-300 flex justify-center">
          <div className="absolute -top-4 bg-primary-100">
            <img src={moon} className="text-xs" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 md:gap-8 text-sm md:text-xl px-2 flex-wrap my-6 md:my-[4vw]">
        {items.map((item) => (
          <div
            className={`p-1 px-4 md:p-2 md:px-8 ${selIt === item.key
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





      <div className="pl-10 sm:pl-5 pr-5 sm:pr-5 h-[65vh]" >
        <div className="flex item-center justify-center flex-wrap gap-4 md:gap-10 w-full  h-full">
          <div className="w-full md:w-[30%] h-full">
            <h1 className="text-lg md:text-3xl font-semibold border-b border-primary-300 pb-2 pl-2 rounded-t-2xl bg-[#fed7aa]">
              Dosha
            </h1>
            <div className="mt-2 flex flex-wrap gap-1 pl-2 bg-orange-400 py-4 rounded-b-2xl h-[80%]">
              {Dosha.map((item) => (
                <div
                  onClick={() => navigate("/more")}
                  key={item.key}
                  className="flex items-center justify-center w-full md:w-auto h-12 bg-primary-500 hover:bg-[#ffd937] transition-all duration-300 shadow-md p-2 rounded-md cursor-pointer"
                >
                  {item.key}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-[30%] h-full">
            <h1 className="text-lg md:text-3xl font-semibold border-b border-primary-300 pb-2  pl-2 rounded-t-2xl bg-[#fed7aa]">Disha</h1>
            <div className="mt-2 flex flex-wrap gap-2 pl-2 py-4 bg-orange-400 rounded-b-2xl h-[80%]">
              {Dashas.map((item) => (
                <div onClick={() => {
                  navigate("/more")

                }} key={item.key} className=" w-fit  bg-primary-500 hover:bg-[#ffd937] transition-all duration-300 shadow-md  p-2 rounded-md cursor-pointer">{convertToCapitalizedWords(item.key)}</div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[30%] h-full">
            <h1 className="text-lg md:text-3xl font-semibold border-b border-primary-300 pb-2  pl-2 rounded-t-2xl bg-[#fed7aa]">Extended Horoscope</h1>
            <div className="mt-2 flex flex-wrap gap-2 pl-2 bg-orange-400 rounded-b-2xl py-4 h-[80%]">
              {ExtendedHoroscope.map((item) => (
                <div onClick={() => {
                  navigate("/more")
                  // setFormShow(true);
                }} key={item.key} className=" w-fit  bg-primary-500 hover:bg-[#ffd937] transition-all duration-300 shadow-md  p-2 rounded-md cursor-pointer">{item.key}</div>
              ))}
            </div>
          </div>
        </div>
        <div>
          {
            data ? <div className="min-h-screen flex mt-10 items-center justify-center">
              <div className="w-full max-w-6xl" ref={sectionRef} >
                <TableComponent data={data} link={link} />
              </div>
            </div> : error && <div className="min-h-screen flex mt-10 items-center justify-center">
              <div className="w-full max-w-6xl">
                <div className="text-xl md:text-4xl font-bold text-center">{error}</div>
              </div>
            </div>
          }
        </div>
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





const TableComponent = ({ data, link }: { data: any, link: string }) => {
  // Helper function to render arrays or objects inline
  const renderValue = (value: any) => {
    // Check for false values first
    if (value === false) {
      return "False";
    }
    if (value === true) {
      return "True";
    }

    // Handle arrays
    if (Array.isArray(value)) {
      return (
        <ul className="list-disc pl-4">
          {value.map((item, index) => (
            <li key={index}>{item || "N/A"}</li>
          ))}
        </ul>
      );
    }

    // Handle objects
    if (typeof value === "object" && value !== null) {
      return (
        <div className="pl-4">
          {Object.entries(value).map(([key, val], index) => (
            <div key={index} className="flex gap-2">
              <span className="font-medium capitalize">{key.replace(/_/g, " ")}:</span>
              <span>{val?.toString()}</span>
            </div>
          ))}
        </div>
      );
    }

    // Handle empty strings, null, or undefined
    if (!value && value !== 0) {
      return "N/A";
    }

    // Return the value as is
    return value;
  };

  return (
    <div className="overflow-x-auto">
      <div>
        <h1 className="text-xl md:text-4xl font-semibold border-b border-primary-300 pb-2">{link.split("/")[0]?.toUpperCase().replace(/-/g, " ")}</h1>
      </div>
      <table className="w-full border-collapse border bg-orange-100 border-orange-500">
        <thead>
          <tr className="bg-orange-200">
            <th className="border border-orange-500 px-4 py-2 text-left font-semibold">Key</th>
            <th className="border border-orange-500 px-4 py-2 text-left font-semibold">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value], index) => (
            <tr
              key={index}
              className="transition-colors"
            >
              <td className="border border-orange-500 px-4 py-2 font-medium capitalize">
                {key.replace(/_/g, " ")}
              </td>
              <td className="border border-orange-500 px-4 py-2">{renderValue(value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
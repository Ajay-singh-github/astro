import moon from "../../assets/moon.svg";
import aries from "../../assets/aries.webp";
import taurus from "../../assets/taurus.webp";
import gemini from "../../assets/gemini.avif";
import cancer from "../../assets/cancer.webp";
import leo from "../../assets/leo.avif";
import virgo from "../../assets/virgo.avif";
import libra from "../../assets/libra.avif";
import scorpio from "../../assets/scorpio.jpg";
import sagittarius from "../../assets/sagittarius.webp";
import capricorn from "../../assets/capricorn.jpg";
import aquarius from "../../assets/aquarius.avif";
import pisces from "../../assets/pisces.webp";
import arieslogo from "../../assets/arieslogo.svg";
import aquariuslogo from "../../assets/aquariuslogo.svg";
import tauruslogo from "../../assets/tauruslogo.svg";
import geminilogo from "../../assets/geminilogo.svg";
import cancerlogo from "../../assets/cancerlogo.svg";
import leologo from "../../assets/leologo.svg";
import virgologo from "../../assets/virgologo.svg";
import libralogo from "../../assets/libralogo.svg";
import scorpiologo from "../../assets/scorpiologo.svg";
import sagittariuslogo from "../../assets/sagittariuslogo.svg";
import capricornlogo from "../../assets/capricornlogo.svg";
import pisceslogo from "../../assets/pisceslogo.svg";
import Articles from "../../components/common/Articles/Articles";
import Passage from "../../components/Horoscope/Passage/Passage";
import axios from "axios";
import { useEffect, useState } from "react";

const Horoscope = () => {
  const [type, setType] = useState("daily");
  const [year, setYear] = useState<string | null>(null);
  const [lang, setLang] = useState<string>("en");

  const [data, setData] = useState<any>(null);
  const items = [
    {
      key: "1",
      value: "aries",
      img: aries,
      logo: arieslogo,
    },
    {
      key: "2",
      value: "taurus",
      img: taurus,
      logo: tauruslogo,
    },
    {
      key: "3",
      value: "gemini",
      img: gemini,
      logo: geminilogo,
    },
    {
      key: "4",
      value: "cancer",
      img: cancer,
      logo: cancerlogo,
    },
    {
      key: "5",
      value: "leo",
      img: leo,
      logo: leologo,
    },
    {
      key: "6",
      value: "virgo",
      img: virgo,
      logo: virgologo,
    },
    {
      key: "7",
      value: "libra",
      img: libra,
      logo: libralogo,
    },
    {
      key: "8",
      value: "scorpio",
      img: scorpio,
      logo: scorpiologo,
    },
    {
      key: "9",
      value: "sagittarius",
      img: sagittarius,
      logo: sagittariuslogo,
    },
    {
      key: "10",
      value: "capricorn",
      img: capricorn,
      logo: capricornlogo,
    },
    {
      key: "11",
      value: "aquarius",
      img: aquarius,
      logo: aquariuslogo,
    },
    {
      key: "12",
      value: "pisces",
      img: pisces,
      logo: pisceslogo,
    },
  ];
  const languages = [
    {
      key: "en",
      value: "English"
    },
    {
      key: "ta",
      value: "Tamil"
    },
    {
      key: "ka",
      value: "Kannada"
    },
    {
      key: "te",
      value: "Telugu"
    },
    {
      key: "hi",
      value: "Hindi"
    },
    {
      key: "ml",
      value: "Malayalam"
    },
    {
      key: "mr",
      value: "Marathi"
    },
    {
      key: "bn",
      value: "Bengali"
    },
    {
      key: "sp",
      value: "Spanish"
    },
    {
      key: "fr",
      value: "French"
    }
  ]
  const date = new Date(Date.now());
  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const y = String(date.getFullYear());
  const [im, setIm] = useState<any>(items[1].img);
  console.log(process.env.VITE_API_KEY, "----------------------------");

  const handleClick = async (item: any) => {
    if (type === "daily") {
      try {
        const res: any = await axios.get(
          `https://api.vedicastroapi.com/v3-json/prediction/daily-sun?zodiac=${item.key}&date=${d}/${m}/${y}&show_same=true&api_key=${process.env.VITE_API_KEY}&lang=${lang}&split=true&type=big`
        );
        setIm(item.img);
        setData(res.data.response);
      } catch (error) {
        console.log(error);
      }
    } else if (type === "weekly") {
      try {
        const res: any = await axios.get(
          `https://api.vedicastroapi.com/v3-json/prediction/weekly-sun?zodiac=${item.key}&week=thisweek&show_same=true&api_key=${process.env.VITE_API_KEY}&lang=${lang}`
        );
        setIm(item.img);
        setData(res.data.response);
      } catch (error) {
        console.log(error);
      }

    } else if (type === "yearly") {
      try {
        const res: any = await axios.get(
          `https://api.vedicastroapi.com/v3-json/prediction/yearly?zodiac=${item.key}&year=${year}&show_same=true&api_key=${process.env.VITE_API_KEY}&lang=${lang}`
        );
        setIm(item.img);
        setData(res.data.response);
      } catch (error) {
        console.log(error);
      }
    }
  };
  //  useEffect(()=>{
  //     handleClick(items[0])
  //   },[])


  return (
    <div className="py-8 md:py-20 bg-primary-100 px-4 md:px-8">
      <div className="xl:grid xl:grid-cols-3 items-center justify-center">
        <div className=" items-center justify-center xl:flex hidden">
          <div> Language:{" "} </div>
          <select
            className="p-2 rounded-md border"
            onChange={(e) => setLang(e.target.value)}
          >
            {languages.map((item) => (
              <option value={item.key} key={item.key}>{item.value}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-between items-center">
          <div className="text-xl md:text-4xl ">Free Horoscope</div>
          <div className="w-full relative my-3 border-b border-primary-300 flex justify-center">
            <div className="absolute -top-4 bg-primary-100">
              <img src={moon} className="text-xs" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-7 flex-wrap items-center justify-center mt-4 md:mt-0">
            <div className=" items-center justify-center xl:hidden flex">
              <div> Language:{" "} </div>
              <select
                className="p-2 rounded-md border"
                onChange={(e) => setLang(e.target.value)}
              >
                {languages.map((item) => (
                  <option value={item.key} key={item.key}>{item.value}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-4 items-center">
              <div>Sort By:</div>
              <select
                className="p-2 rounded-md border"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>

            {type === "yearly" && (
              <div className="flex gap-4 items-center">
                Select Year:{" "}
                <select
                  className="p-2 rounded-md border"
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* <div className="font-bold flex flex-col items-center justify-center bg-red-500">
        <div>

        </div>
      </div>
      <div className="w-full md:text-xl gap-4 items-center md:-top-16 flex flex-col md:flex-row px-4 md:px-12 justify-end relative">
        <div className="flex gap-4 items-center justify-center">

        </div>

        <div className="flex flex-col gap-7 items-center justify-center mt-4 md:mt-0">
          <div className="flex gap-4 items-center">
            <div>Sort By:</div>
            <select
              className="p-2 rounded-md border"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          {type === "yearly" && (
            <div className="flex gap-4 items-center">
              Select Year:{" "}
              <select
                className="p-2 rounded-md border"
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
          )}
        </div>
      </div> */}

      <div className="flex flex-wrap gap-2 md:gap-6 items-center justify-center my-4 md:my-8">
        {items.map((item) => (
          <div
            key={item.key}
            className="cursor-pointer rounded-full text-primary-300 font-bold text-center"
            onClick={() => handleClick(item)}
          >
            <img src={item.logo} className="" />
            <div>{item.value}</div>
          </div>
        ))}
      </div>
      {data ? (
        <Passage data={data} img={im} />
      ) : (
        <div className="w-full p-12 text-center text-xl md:text-3xl">
          Loading...
        </div>
      )}
      <div className="w-full">
        <Articles />
      </div>{" "}
    </div>
  );
};

export default Horoscope;

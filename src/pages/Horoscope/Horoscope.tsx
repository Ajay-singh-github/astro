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
import { useState } from "react";

const Horoscope = () => {
  const [type, setType] = useState("daily");
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
  const date = new Date(Date.now());
  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const y = String(date.getFullYear());
  const [im, setIm] = useState<any>(items[1].img);

  const handleClick = async (item: any) => {
    if (type === "daily") {
      const res: any = await axios.get(
        `https://api.vedicastroapi.com/v3-json/prediction/daily-sun?zodiac=${item.key}&date=${d}/${m}/${y}&show_same=true&api_key=${process.env.VITE_API_KEY}&lang=en&split=true&type=big`
      );
      setIm(item.img);
      setData(res.data.response);
    } else {
      const res: any = await axios.get(
        `https://api.vedicastroapi.com/v3-json/prediction/weekly-sun?zodiac=${item.key}&week=thisweek&show_same=true&api_key=${process.env.VITE_API_KEY}&lang=en`
      );
      setIm(item.img);
      setData(res.data.response);
    }
  };

  // useEffect(()=>{
  //   handleClick(items[0])
  // },[])

  return (
    <div className="py-8 md:py-20 bg-primary-100 px-4 md:px-8">
      <div className="font-bold flex flex-col items-center justify-center">
        <div>
          <div className="text-xl md:text-4xl ">Free Horoscope</div>
          <div className="w-full relative my-3 border-b border-primary-300 flex justify-center">
            <div className="absolute -top-4 bg-primary-100">
              <img src={moon} className="text-xs" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:text-xl gap-2 items-center md:-top-16 flex px-4 md:px-12 justify-end relative ">
        <div>Sort By:</div>
        <select
          className="p-2 rounded-md border"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>
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

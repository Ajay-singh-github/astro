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
import Passage, { PassageForWeekly, PassageForYearly } from "../../components/Horoscope/Passage/Passage";
import axios from "axios";
import { useEffect, useState } from "react";
import { VITE_API_KEY } from "@/api/userAPI";
import Loader from "@/components/Loader/loader";


export type HoroscopeProps = {
  lucky_color: string;
  lucky_color_code: string;
  lucky_number: number[];
  bot_response: {
    physique: {
      score: number;
      split_response: string;
    };
    status: {
      score: number;
      split_response: string;
    };
    finances: {
      score: number;
      split_response: string;
    };
    relationship: {
      score: number;
      split_response: string;
    };
    career: {
      score: number;
      split_response: string;
    };
  };
  zodiac: string;

};

export type HoroscopePropWeekly = {
  total_score: number;
  lucky_color: string;
  lucky_color_code: string;
  lucky_number: number[];
  status: number;
  finances: number;
  relationship: number;
  career: number;
  travel: number;
  family: number;
  friends: number;
  health: number;
  bot_response: string;
  zodiac: string;
};

type Phase = {
  score: number;
  period: string;
  prediction: string;
  health: {
    score: number;
    prediction: string;
  };
  career: {
    score: number;
    prediction: string;
  };
  relationship: {
    score: number;
    prediction: string;
  };
  travel: {
    score: number;
    prediction: string;
  };
  family: {
    score: number;
    prediction: string;
  };
  friends: {
    score: number;
    prediction: string;
  };
  finances: {
    score: number;
    prediction: string;
  };
  status: {
    score: number;
    prediction: string;
  };

};

export type HoroscopePropYearly = {
  phase_1: Phase; 
  phase_2: Phase;
  phase_3: Phase;
  phase_4: Phase;
  
};




type ZodiacListProps = {
  key: string;
  value: string;
  img: string;
  logo: string;
}

export type LanguageProps = {
  key: string;
  value: string;
}



const zodiacList: ZodiacListProps[] = [
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

export const languages: LanguageProps[] = [
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


const Horoscope = () => {
  const [type, setType] = useState("daily");
  const [year, setYear] = useState<string | null>(null);
  const [lang, setLang] = useState<string>("en");

  const [data, setData] = useState<HoroscopeProps | null>(null);
  const [dataWeekly, setDataWeekly] = useState<HoroscopePropWeekly | null>(null);
  const [dataYearly, setDataYearly] = useState<HoroscopeProps | null>(null);


  const date = new Date(Date.now());
  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const y = String(date.getFullYear());
  const [im, setIm] = useState<string>(zodiacList[1].img);



  const handleClick = async (item: ZodiacListProps) => {
    if (type === "daily") {
      try {
        const res = await axios.get(
          `https://api.vedicastroapi.com/v3-json/prediction/daily-sun?zodiac=${item.key}&date=${d}/${m}/${y}&show_same=true&api_key=${VITE_API_KEY}&lang=${lang}&split=true&type=big`
        );
        console.log(res);
        setIm(item.img);
        setData(res.data.response);
      } catch (error) {
        console.log(error);
      }
    } else if (type === "weekly") {
      try {
        const res = await axios.get(
          `https://api.vedicastroapi.com/v3-json/prediction/weekly-sun?zodiac=${item.key}&week=thisweek&show_same=true&api_key=${VITE_API_KEY}&lang=${lang}`
        );
        console.log(res);
        setIm(item.img);
        setDataWeekly(res.data.response);
      } catch (error) {
        console.log(error);
      }

    } else if (type === "yearly") {
      try {
        const res = await axios.get(
          `https://api.vedicastroapi.com/v3-json/prediction/yearly?zodiac=${item.key}&year=${year}&show_same=true&api_key=${process.env.VITE_API_KEY}&lang=${lang}`
        );
        setIm(item.img);
        setDataYearly(res.data.response);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    handleClick(zodiacList[0])
  }, [lang, type, year])


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


      <div className="flex flex-wrap gap-2 md:gap-6 items-center justify-center my-4 md:my-8">
        {zodiacList.map((item) => (
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
      {
        data ? (
          type === "daily" ? (
            <Passage data={data} img={im} />
          ) : type === "weekly" ? (
            dataWeekly ? (
              <PassageForWeekly data={dataWeekly} img={im} />
            ) : (
              <div className="w-full p-12 text-center text-xl md:text-3xl">
                <Loader />  
              </div>
            )
          ) : type === "yearly" ? (
            dataYearly ? (
              <PassageForYearly data={dataYearly} img={im} />
            ) : (
              <div className="w-full p-12 text-center text-xl md:text-3xl">
                <Loader />  
              </div>
            )
          ) : (
            <div className="w-full p-12 text-center text-xl md:text-3xl">
              <Loader />  
            </div>
          )
        ) : (
          <div className="w-full p-12 text-center text-xl md:text-3xl">
            <Loader />  
          </div>
        )
      }

      <div className="w-full">
        <Articles />
      </div>{" "}
    </div>
  );
};

export default Horoscope;

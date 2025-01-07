import moon from "../../assets/moon.svg";
// import aries from "../../assets/aries.webp";

import taurus from "../../assets/taurus.webp";
import gemini from '../../assets/gemini.jpg';
// import gemini from "../../assets/gemini.avif";
import cancer from "../../assets/cancer.jpg";
// import leo from "../../assets/leo.avif";
import leo from "../../assets/leo.jpg";

// import virgo from "../../assets/virgo.avif";
import virgo from "../../assets/virgo.jpg";

// import libra from "../../assets/libra.avif";
import libra from "../../assets/libra.png";

import scorpio from "../../assets/scorpio.jpg";
// import sagittarius from "../../assets/sagittarius.webp";
import sagittarius from "../../assets/sagittarius.jpg";

// import capricorn from "../../assets/capricorn.jpg";
import capricorn from "../../assets/capricorn.jpg";

// import aquarius from "../../assets/aquarius.avif";
import aquarius from "../../assets/aquarius.jpg";

import pisces from "../../assets/pisces.jpg";
import arieslogo from "../../assets/arieslogo.svg";
import ariesaa from "../../assets/aries.jpg";
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
import { useEffect, useRef, useState } from "react";
import Loader from "@/components/Loader/loader";
import { useNavigate } from "react-router-dom";
import Scrollc from "@/lib/scrollc";
import { VITE_API_KEY } from "@/api/userAPI";


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
    travel: {
      score: number;
      split_response: string;
    };
    family: {
      score: number;
      split_response: string;
    };
    friends: {
      score: number;
      split_response: string;
    };
    health: {
      score: number;
      split_response: string;
    };
    total_score: {
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

// type Phase = {
//   score: number;
//   period: string;
//   prediction: string;
//   health: {
//     score: number;
//     prediction: string;
//   };
//   career: {
//     score: number;
//     prediction: string;
//   };
//   relationship: {
//     score: number;
//     prediction: string;
//   };
//   travel: {
//     score: number;
//     prediction: string;
//   };
//   family: {
//     score: number;
//     prediction: string;
//   };
//   friends: {
//     score: number;
//     prediction: string;
//   };
//   finances: {
//     score: number;
//     prediction: string;
//   };
//   status: {
//     score: number;
//     prediction: string;
//   };

// };






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
    img: ariesaa,
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
    key: "sp",
    value: "Spanish"
  },
  {
    key: "fr",
    value: "French"
  }
]


const Horoscope = () => {
  const navigate = useNavigate();
  const section = Scrollc();
  const section2 = useRef<HTMLDivElement>(null);
  const [type, setType] = useState("daily");
  const [year,] = useState<string>(new Date().getFullYear().toString());
  const [lang, setLang] = useState<string>("en");

  const [data, setData] = useState<HoroscopeProps | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [dataWeekly, setDataWeekly] = useState<HoroscopePropWeekly | null>(null);
  const [weeklyError, setWeeklyError] = useState<boolean>(false);
  const [dataYearly, setDataYearly] = useState(null);
  const [yearlyError, setYearlyError] = useState<boolean>(false);

  const [load, setLoad] = useState<boolean>(false);


  const date = new Date(Date.now());
  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const y = String(date.getFullYear());
  const [im, setIm] = useState<string>(zodiacList[1].img);
  const [zodiacName, setZodiacName] = useState<string>("");


  const handleClick = async (item: ZodiacListProps) => {
    setLoad(true);
    if (type === "daily") {
      try {
        const res = await axios.get(
          `https://api.vedicastroapi.com/v3-json/prediction/daily-sun?zodiac=${item.key}&date=${d}/${m}/${y}&show_same=true&api_key=${VITE_API_KEY}&lang=${lang}&split=true&type=big`
        );
        if (res.data.status === 200) {
          console.log(res.data.response, "res.data.response");
          setIm(item.img);
          setData(res.data.response);
        } else {
          setError(true);
          setData(null);
        }
        console.log(res);

      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoad(false);
        section.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        section2.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (type === "weekly") {
      try {
        const res = await axios.get(
          `https://api.vedicastroapi.com/v3-json/prediction/weekly-sun?zodiac=${item.key}&week=thisweek&show_same=true&api_key=${VITE_API_KEY}&lang=${lang}`
        );
        console.log(res, "----------------------");
        if (res.data.status === 200) {
          setIm(item.img);
          setDataWeekly(res.data.response);
        } else {
          setWeeklyError(true);
          setDataWeekly(null);
        }
        console.log(res);

      } catch (error) {
        setWeeklyError(true);
        console.log(error);
      } finally {
        setLoad(false);
        section.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        section2.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

    } else if (type === "yearly") {
      try {
        const res = await axios.get(
          `https://api.vedicastroapi.com/v3-json/prediction/yearly?year=2024&zodiac=${item.key}&api_key=${VITE_API_KEY}&lang=${lang}`
        );
        if (res.data.status === 200) {
          setIm(item.img);
          setDataYearly(res.data.response);
          console.log(item.img);
        } else {
          setYearlyError(true);
          setDataYearly(null);
        }
      } catch (error) {
        setYearlyError(true);
        console.log(error);
      } finally {
        setLoad(false);
        section.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        section2.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  useEffect(() => {
    const zodiac = new URLSearchParams(window.location.search).get('zodiac');
    if (zodiac) {
      const zodiacItem = zodiacList.find(item => item.key === zodiac);
      if (zodiacItem) {
        handleClick(zodiacItem);
        setZodiacName(zodiacItem.value);
      }
    } else {
      handleClick(zodiacList[0])
    }

  }, [lang, type, year, error, weeklyError, yearlyError])


  return (
    <div ref={section} className="py-8 md:py-10 bg-primary-100 px-4 md:px-8">
      <div className="xl:grid xl:grid-cols-3 items-center justify-center">
        <div className=" items-center gap-4  justify-center xl:flex hidden">
          <div> Language:{" "} </div>
          <select
            className="p-2 rounded-md border "
            onChange={(e) => setLang(e.target.value)}
          >
            {languages.map((item) => (
              <option value={item.key} key={item.key}>{item.value}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-between items-center">
          <div className="text-xl md:text-4xl font-bold ">Free Horoscope</div>
          <div className="w-full relative my-3 border-b border-primary-300 flex justify-center">
            <div className="absolute -top-4 bg-primary-100">
              <img src={moon} className="text-xs" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-7 flex-wrap items-center justify-center mt-4 md:mt-0">
            <div className=" items-center gap-4 justify-center xl:hidden flex">
              <div> Language:{"   "} </div>
              <select
                className="p-2 rounded-md border"
                onChange={(e) => { setLang(e.target.value); setYearlyError(false); setWeeklyError(false); setError(false) }}
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
                onChange={(e) => { setType(e.target.value); setYearlyError(false); setWeeklyError(false); setError(false) }}
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>


          </div>
        </div>
      </div>


      <div className="flex flex-wrap gap-2 md:gap-6 items-center justify-center my-4 md:my-8">
        {zodiacList.map((item) => (
          <div
            key={item.key}
            className="cursor-pointer rounded-full text-primary-300 font-bold text-center"
            onClick={() => {
              handleClick(item);
              setZodiacName(item.value);
              navigate(`/horoscope?zodiac=${item.key}`);
              setYearlyError(false);
              setWeeklyError(false);
              setError(false);
            }}
          >
            <img src={item.logo} className="" />
            <div>{item.value}</div>
          </div>
        ))}
      </div>
      <div ref={section2} className="w-full">
        {
          yearlyError || weeklyError || error ? <div className="w-full p-[15%] text-center text-xl md:text-3xl text-red-500">Something went wrong</div> : data ? (
            type === "daily" ? (
              data ? (
                load ? (
                  <div className="w-full p-12 text-center text-xl md:text-3xl">
                    <Loader />
                  </div>
                ) : (
                  <Passage data={data} img={im} />
                )
              ) : (
                <div className="w-full p-12 text-center text-xl md:text-3xl">
                  <Loader />
                </div>
              )
            ) : type === "weekly" ? (
              dataWeekly ? (
                load ? (
                  <div className="w-full p-12 text-center text-xl md:text-3xl">
                    <Loader />
                  </div>
                ) : (
                  <PassageForWeekly data={dataWeekly} img={im} />
                )
              ) : (
                <div className="w-full p-12 text-center text-xl md:text-3xl">
                  <Loader />
                </div>
              )
            ) : type === "yearly" ? (
              dataYearly ? (
                load ? (
                  <div className="w-full p-12 text-center text-xl md:text-3xl">
                    <Loader />
                  </div>
                ) : (
                  <PassageForYearly data={dataYearly} zodiacName={zodiacName} img={im} />
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
          ) : (
            <div className="w-full p-12 text-center text-xl md:text-3xl">
              <Loader />
            </div>
          )
        }
      </div>

      <div className="w-full">
        <Articles />
      </div>{" "}
    </div>
  );
};

export default Horoscope;

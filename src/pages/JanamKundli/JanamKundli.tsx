import moon from "../../assets/moon.svg";
import Articles from "../../components/common/Articles/Articles";
import Kundli from "../../components/JanamKundli/Kundli/Kundli";
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
import { useNavigate } from "react-router-dom";
import Scrollc from "../../lib/scrollc";

const JanamKundli = () => {
  const section = Scrollc();
  const navigate = useNavigate()
  const items = [
    {
      key: "1",
      img: arieslogo,
    },
    {
      key: "2",
      img: aquariuslogo,
    },
    {
      key: "3",
      img: tauruslogo,
    },
    {
      key: "4",
      img: geminilogo,
    },
    {
      key: "5",
      img: cancerlogo,
    },
    {
      key: "6",
      img: leologo,
    },
    {
      key: "7",
      img: virgologo,
    },
    {
      key: "8",
      img: libralogo,
    },
    {
      key: "9",
      img: scorpiologo,
    },
    {
      key: "10",
      img: sagittariuslogo,
    },
    {
      key: "11",
      img: capricornlogo,
    },
    {
      key: "12",
      img: pisceslogo,
    },
  ];
  return (
    <div ref={section} className="px-4 py-8 md:py-10 flex flex-col items-center justify-center bg-primary-100">
      <div className="font-bold">
        <div className="text-xl md:text-4xl font-bold ">Janam Kundli</div>
        <div className="w-full relative my-3 border-b border-primary-300 flex justify-center">
          <div className="absolute -top-4 bg-primary-100">
            <img src={moon} className="text-xs" />
          </div>
        </div>
      </div>

      <Kundli />

      <div className="font-bold">
        <div className="text-xl md:text-3xl ">Free Horoscope</div>
        <div className="w-full relative my-3 border-b border-primary-300 flex justify-center">
          <div className="absolute -top-4 bg-primary-100">
            <img src={moon} className="text-xs" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 md:gap-6 items-center justify-center my-4 md:my-8">
        {items.map((item) => (
          <div
            key={item.key}
            className="cursor-pointer rounded-full text-primary-300 font-bold "
            onClick={() => navigate(`/horoscope?zodiac=${item.key}`)}>
            <img src={item.img} className="" />
          </div>
        ))}
      </div>

      <div className="w-full">
        <Articles />
      </div>
    </div>
  );
}

export default JanamKundli
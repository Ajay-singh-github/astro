import { useNavigate } from 'react-router-dom';
import hero from '../../assets/hero.svg';
import moon from '../../assets/moon.svg';
import arieslogo from '../../assets/arieslogo.svg';
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
import About from '../../components/Home/About/About';
import Articles from '../../components/common/Articles/Articles';

const Home = () => {
  const navigate = useNavigate()
    const items = [
        {
          key: "1",
          img: arieslogo
        },
        {
          key: "2",
          img: aquariuslogo
        },
        {
          key: "3",
          img: tauruslogo
        },
        {
          key: "4",
          img: geminilogo
        },
        {
          key: "5",
          img: cancerlogo
        },
        {
          key: "6",
          img: leologo
        },
        {
          key: "7",
          img: virgologo
        },
        {
          key: "8",
          img: libralogo
        },
        {
          key: "9",
          img: scorpiologo
        },
        {
          key: "10",
          img: sagittariuslogo
        },
        {
          key: "11",
          img: capricornlogo
        },
        {
          key: "12",
          img: pisceslogo
        },
    ]
  return (
    <div className="bg-primary-100 px-4 md:px-8">
      <div className="">
        <div className="bg-gradient-to-b from-primary-400 to-primary-500 rounded-xl md:rounded-tl-[6rem] flex flex-col justify-between md:flex-row mt-8 md:mt-0 p-6 md:px-[5%] md:pt-[5%]">
          <div>
            <div className="font-bold">
              Your Cosmic Journey Awaits
            </div>
            <div className="md:text-5xl font-bold md:my-6 my-2 flex flex-col gap-2">
              <div>Unveil The Mysteries Of </div>
              <div>Your Stars</div>
            </div>
            <div className="text-primary-300/90 font-thin md:w-[60%]">
              <p>
                Discover the hidden secrets of the cosmos and their influence on your life. Get personalized astrological readings for clarity in love, career, and destiny. Your journey to self-discovery and celestial guidance starts here
              </p>
            </div>
            <div className="rounded-lg bg-secondary-100 text-primary-200 p-2 px-4 md:p-4 md:px-8 md:text-xl w-max my-4 md:my-8">
              Consult now
            </div>
          </div>
          <div className="w-[80%]">
            <img src={hero} />
          </div>
        </div>
      </div>

      <div className="py-8 md:py-20 flex flex-col items-center justify-center">
        <div className="font-bold">
          <div className="text-xl md:text-3xl ">Welcome to Astro Magic</div>
          <div className="w-full relative my-3 border-b border-primary-300 flex justify-center">
            <div className="absolute -top-4 bg-primary-100">
              <img src={moon} className="text-xs" />
            </div>
          </div>
        </div>
        <div className="my-4 text-center">
          {/* <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </div>
          <div>do eiusmod tempor incididunt ut labore et</div> */}
        </div>
        <div className="flex flex-wrap gap-2 md:gap-6 items-center justify-center my-4 md:my-8">
          {items.map((item) => (
            <div
              key={item.key}
              className="cursor-pointer rounded-full text-primary-300 font-bold "
              onClick={()=>navigate(`/horoscope?zodiac=${item.key}`)}
            >
              <img src={item.img} className=''/>
            </div>
          ))}
        </div>
      </div>

      <About />
      <Articles />
    </div>
  );
}

export default Home
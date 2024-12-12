import { articlesList } from "../../constants/constants";
import moon from "../../assets/moon.svg";

const Articles = () => {
  return (
    <div className="text-primary-300 bg-primary-100 px-4 md:px-8 py-4 md:py-[5vw]">
      <div className="font-bold w-max mb-4 md:mb-[5vw]">
        <div className="text-xl md:text-3xl ">Articles on Astrology</div>
        <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
          <div className="absolute -top-4 bg-primary-100">
            <img src={moon} className="text-xs" />
          </div>
        </div>
      </div>

      <div className="">
        {articlesList.map((item) => (
          <div className="w-full flex flex-col gap-4 md:gap-8 my-4 md:my-[5vw]">
            <div>
              <div className="w-max max-w-full m-auto">
                <img src={item.image} className="object-none min-h-40" />
                <div className="w-full">{item.Date}</div>
              </div>
            </div>
            <div className="text-xl md:text-3xl font-bold uppercase px-4 md:px-8">
              <ul className="list-disc">
                <li>{item.title}</li>
              </ul>
            </div>
            <div className="md:text-xl text-justify">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;

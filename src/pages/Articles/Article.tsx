import { articlesList } from "../../constants/constants";
import moon from "../../assets/moon.svg";
import { useState } from "react";
import { useEffect } from "react";

const Article = () => {
  const [key, setKey] = useState<string>("");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const key = searchParams.get("key") || "";
    if(!key){
      setKey(articlesList[0].key);
      searchParams.set("key", articlesList[0].key);
      window.history.pushState({}, '', window.location.pathname + '?' + searchParams.toString());
      window.scrollTo(0, 0);
    }else{
      setKey(key);
    }
  }, []);

  return (
    <div className="text-primary-300 bg-primary-100 px-4 md:px-8 py-4 md:py-[5vw]">
      <div className="font-bold flex flex-col gap-4 px-4 md:px-16 items-center mb-4 md:mb-[5vw]">
        <div className="text-xl md:text-3xl ">
          {articlesList.find((item) => item.key === key)?.title}
        </div>
        <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
          <div className="absolute -top-4 bg-primary-100">
            <img src={moon} className="text-xs" />
          </div>
        </div>
        <div className="w-full mt-4 md:mt-8 flex justify-center">
          <img src={articlesList.find((item) => item.key === key)?.image} className="object-none min-h-40" />
        </div>
        <div className="md:text-xl mt-4 md:mt-8 text-justify">
          {articlesList.find((item) => item.key === key)?.desc}
        </div>
      </div>
    </div>
  );
};

export default Article;

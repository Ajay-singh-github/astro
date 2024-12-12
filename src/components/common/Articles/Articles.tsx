import { FaArrowRightLong } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import { articlesList } from "../../../constants/constants";

const Articles = () => {
  const navigate = useNavigate()
  
  return (
    <div className="">
      <div className=" px-4 md:px-8">
        <div className="border-b w-full border-primary-300 flex justify-between items-center">
          <div className="text-xl md:text-3xl mb-2">Articles</div>
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <div className="cursor-pointer" onClick={()=>navigate("/articles")}>VIEW MORE</div>
            <FaArrowRightLong />
          </div>
        </div>
        <div className="my-2 md:my-4">Top Articles of this week</div>
      </div>
      <div className="flex items-center justify-center">
        <Carousel className="w-[70%] md:w-[85%]">
          <CarouselContent className="py-4 md:py-8 flex items-center justify-around gap-8 flex-nowrap">
            {articlesList.map((item) => (
              <CarouselItem className="w-full max-w-[20rem] md:w-[48%] lg:w-[23%] shadow-xl bg-primary-200 p-2">
                <div className="w-full flex justify-center items-center p-2">
                  <img
                    src={item.image}
                    className="rounded-md object-none h-40"
                  />
                </div>
                <div className="flex flex-col gap-2 p-2 md:p-4">
                  <div className="text-md md:text-lg text-center">
                    {item.title}
                  </div>
                  <div className="text-xs md:text-md text-center truncate">
                    {item.desc}
                  </div>
                </div>
                <div className="p-2">
                  <div className="rounded-lg bg-secondary-100 text-primary-200 w-full p-2 md:text-lg text-center cursor-pointer" onClick={()=>navigate("/articles")}>
                    More
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Articles;

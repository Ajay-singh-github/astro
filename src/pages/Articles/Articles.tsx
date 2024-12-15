import { articlesList } from "../../constants/constants";
import moon from "../../assets/moon.svg";
import { useNavigate } from "react-router-dom";

const Articles = () => {
    const navigate = useNavigate()
    return (
        <div className="text-primary-300 bg-primary-100 px-4 md:px-8 py-4 md:py-[5vw]">
            <div className="text-xl md:text-3xl items-center justify-center flex font-semibold">
                Articles
            </div>
            <div className="relative my-3 border-b bg-red-500 border-primary-300 flex justify-center">
                <div className="absolute -top-4 bg-primary-100 ">
                    <img src={moon} className="text-xs" />
                </div>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-6 items-center justify-center my-4 md:my-8">
                {articlesList.map((item) => (
                    <div className="w-full max-w-[20rem] md:w-[48%] lg:w-[23%] shadow-xl bg-primary-200 p-2">
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
                            <div className="rounded-lg bg-secondary-100 text-primary-200 w-full p-2 md:text-lg text-center cursor-pointer" onClick={() => navigate(`/article?key=${item.key}`)}>
                                More
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

};

export default Articles;

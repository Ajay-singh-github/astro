import moon from "../../../assets/moon.svg";

const Passage = ({data,img}:{data:any,img:any}) => {
  const { lucky_color, lucky_color_code, lucky_number, bot_response, zodiac } =
    data;
  return (
    <div className="p-2 md:p-8 font-sans">
      <div className="w-full flex items-center justify-center">
        <img src={img} className="w-[80%]"/>
      </div>
      <div className="font-bold w-max my-4 md:my-8">
        <div className="text-xl md:text-3xl flex gap-2 uppercase">
          {zodiac} daily horoscope
        </div>
        <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
          <div className="absolute -top-4 bg-primary-100">
            <img src={moon} className="text-xs" />
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Zodiac Sign: {zodiac}
      </h1>

      <div className="mb-8 w-full bg-secondary-800 rounded-xl p-2 md:p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Lucky Information
        </h2>
        <p className="text-lg">
          <strong>Lucky Color:</strong>
          <span style={{ color: lucky_color_code }} className="ml-2">
            {lucky_color}
          </span>
        </p>
        <p className="text-lg">
          <strong>Lucky Numbers:</strong> {lucky_number.join(", ")}
        </p>
      </div>

      <div className="mb-8 bg-secondary-800 rounded-xl p-2 md:p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Horoscope Details
        </h2>
        {Object.keys(bot_response).map((category, index) => {
          if (category !== "total_score") {
            return (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-600">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <p className="text-lg">
                  <strong>Score:</strong> {bot_response[category].score}
                </p>
                <p className="text-lg">
                  <strong>Message:</strong>{" "}
                  {bot_response[category].split_response}
                </p>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className=" bg-secondary-800 rounded-xl p-2 md:p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Total Score
        </h2>
        <p className="text-lg">
          <strong>Score:</strong> {bot_response.total_score.score}
        </p>
        <p className="text-lg">
          <strong>Message:</strong> {bot_response.total_score.split_response}
        </p>
      </div>
    </div>
  );
};

export default Passage;

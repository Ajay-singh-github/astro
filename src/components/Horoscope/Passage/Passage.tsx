import { HoroscopeProps, HoroscopePropWeekly, HoroscopePropYearly } from "@/pages/Horoscope/Horoscope";
import moon from "../../../assets/moon.svg";

const Passage = ({ data, img }: { data: HoroscopeProps; img: string }) => {
  const { lucky_color, lucky_color_code, lucky_number, bot_response, zodiac } = data;

  return (
    <div className="p-4 md:p-10 font-sans space-y-8">
      {/* Header Section */}
      <div className="w-full flex items-center justify-center">
        <img src={img} className="w-[80%]" alt="Zodiac symbol" />
      </div>
      <div className="font-bold w-max my-4 md:my-8">
        <div className="text-xl md:text-3xl flex gap-2 uppercase">
          {zodiac} Daily Horoscope
        </div>
        <div className="relative my-3 border-b w-full border-primary-500 flex justify-center">
          <div className="absolute -top-4 bg-primary-100">
            <img src={moon} className="text-xs" alt="Moon Icon" />
          </div>
        </div>
      </div>

      {/* Lucky Information Section */}
      <table className="w-full mb-8 bg-orange-100 rounded-xl p-4 border-collapse border border-orange-500">
        <thead>
          <tr className="bg-orange-200">
            <th className="border border-orange-500 p-2">Attribute</th>
            <th className="border border-orange-500 p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-orange-500 p-2">Zodiac Sign</td>
            <td className="border border-orange-500 p-2">{zodiac}</td>
          </tr>
          <tr>
            <td className="border border-orange-500 p-2">Lucky Color</td>
            <td className="border border-orange-500 p-2" style={{ color: lucky_color_code }}>
              {lucky_color}
            </td>
          </tr>
          <tr>
            <td className="border border-orange-500 p-2">Lucky Numbers</td>
            <td className="border border-orange-500 p-2">{lucky_number.join(", ")}</td>
          </tr>
        </tbody>
      </table>

      {/* Horoscope Details Section */}
      <table className="w-full mb-8 bg-orange-100 rounded-xl p-4 border-collapse border border-orange-500">
        <thead>
          <tr className="bg-orange-200">
            <th className="border border-orange-500 p-2">Category</th>
            <th className="border border-orange-500 p-2">Score</th>
            <th className="border border-orange-500 p-2">Message</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(bot_response).map((category, index) => {
            if (category !== "total_score") {
              return (
                <tr key={index}>
                  <td className="border border-orange-500 p-2">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </td>
                  <td className="border border-orange-500 p-2">{bot_response[category].score }</td>
                  <td className="border border-orange-500 p-2">{bot_response[category].split_response }</td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>

      {/* Total Score Section */}
      <table className="w-full bg-orange-100 rounded-xl p-4 border-collapse border border-orange-500">
        <thead>
          <tr className="bg-orange-200">
            <th className="border border-orange-500 p-2">Attribute</th>
            <th className="border border-orange-500 p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-orange-500 p-2">Total Score</td>
            <td className="border border-orange-500 p-2">{bot_response.total_score.score}</td>
          </tr>
          <tr>
            <td className="border border-orange-500 p-2">Message</td>
            <td className="border border-orange-500 p-2">{bot_response.total_score.split_response}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Passage;



export const PassageForWeekly = ({ data, img }: { data: HoroscopePropWeekly ; img: string }) => {
  const {
    lucky_color,
    lucky_color_code,
    lucky_number,
    bot_response,
    zodiac,
    total_score,
    status,
    finances,
    relationship,
    career,
    travel,
    family,
    friends,
    health,
  } = data;

  return (
    <div className="p-4 md:p-10 font-sans space-y-8">
      {/* Header Section */}
      <div className="w-full flex items-center justify-center">
        <img src={img} className="w-[80%]" alt="Zodiac symbol" />
      </div>
      <div className="font-bold w-max my-4 md:my-8">
        <div className="text-xl md:text-3xl flex gap-2 uppercase">
          {zodiac} Daily Horoscope
        </div>
        <div className="relative my-3 border-b w-full border-primary-500 flex justify-center">
          <div className="absolute -top-4 bg-primary-100">
            <img src={moon} className="text-xs" alt="Moon Icon" />
          </div>
        </div>
      </div>

      {/* Lucky Information Section */}
      <table className="w-full mb-8 bg-orange-100 rounded-xl p-4 border-collapse border border-orange-500">
        <thead>
          <tr className="bg-orange-200">
            <th className="border border-orange-500 p-2">Attribute</th>
            <th className="border border-orange-500 p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-orange-500 p-2">Zodiac Sign</td>
            <td className="border border-orange-500 p-2">{zodiac}</td>
          </tr>
          <tr>
            <td className="border border-orange-500 p-2">Lucky Color</td>
            <td className="border border-orange-500 p-2" style={{ color: lucky_color_code }}>
              {lucky_color}
            </td>
          </tr>
          <tr>
            <td className="border border-orange-500 p-2">Lucky Numbers</td>
            <td className="border border-orange-500 p-2">{lucky_number.join(", ")}</td>
          </tr>
        </tbody>
      </table>

      {/* Score Details Section */}
      <table className="w-full mb-8 bg-orange-100 rounded-xl p-4 border-collapse border border-orange-500">
        <thead>
          <tr className="bg-orange-200">
            <th className="border border-orange-500 p-2">Category</th>
            <th className="border border-orange-500 p-2">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-orange-500 p-2">Status</td>
            <td className="border border-orange-500 p-2">{status}</td>
          </tr>
          <tr>
            <td className="border border-orange-500 p-2">Finances</td>
            <td className="border border-orange-500 p-2">{finances}</td>
          </tr>
          <tr>
            <td className="border border-orange-500 p-2">Relationship</td>
            <td className="border border-orange-500 p-2">{relationship}</td>
          </tr>
          <tr>
            <td className="border border-orange-500 p-2">Career</td>
            <td className="border border-orange-500 p-2">{career}</td>
          </tr>
          <tr>
            <td className="border border-orange-500 p-2">Travel</td>
            <td className="border border-orange-500 p-2">{travel}</td>
          </tr>
          <tr>
            <td className="border border-orange-500 p-2">Family</td>
            <td className="border border-orange-500 p-2">{family}</td>
          </tr>
          <tr>
            <td className="border border-orange-500 p-2">Friends</td>
            <td className="border border-orange-500 p-2">{friends}</td>
          </tr>
          <tr>
            <td className="border border-orange-500 p-2">Health</td>
            <td className="border border-orange-500 p-2">{health}</td>
          </tr>
        </tbody>
      </table>

      {/* Total Score Section */}
      <table className="w-full bg-orange-100 rounded-xl p-4 border-collapse border border-orange-500">
        <thead>
          <tr className="bg-orange-200">
            <th className="border border-orange-500 p-2">Attribute</th>
            <th className="border border-orange-500 p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-orange-500 p-2">Total Score</td>
            <td className="border border-orange-500 p-2">{total_score}</td>
          </tr>
        </tbody>
      </table>

      {/* Bot Response Section */}
      <div className="w-full bg-orange-100 rounded-xl p-4 border border-orange-500">
        <h2 className="text-lg font-bold mb-4">Horoscope Details</h2>
        <p>{bot_response}</p>
      </div>
    </div>
  );
};





export const PassageForYearly = ({ data, img }: { data: HoroscopePropYearly; img: string }) => {
  const phases = Object.keys(data);

  return (
    <div className="p-6 space-y-8">
      {phases.map((phase) => {
        const phaseData = data[phase];
        return (
          <div key={phase} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
              {phase.replace("_", " ").toUpperCase()}
            </h2>
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-indigo-200">
                  <th className="py-3 px-4 text-left text-gray-700">Category</th>
                  <th className="py-3 px-4 text-left text-gray-700">Score</th>
                  <th className="py-3 px-4 text-left text-gray-700">Prediction</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-indigo-50">
                  <td className="py-2 px-4">Period</td>
                  <td className="py-2 px-4">{phaseData.period}</td>
                  <td className="py-2 px-4">{phaseData.prediction}</td>
                </tr>
                <tr className="hover:bg-indigo-50">
                  <td className="py-2 px-4">Health</td>
                  <td className="py-2 px-4">{phaseData.health.score}</td>
                  <td className="py-2 px-4">{phaseData.health.prediction}</td>
                </tr>
                <tr className="hover:bg-indigo-50">
                  <td className="py-2 px-4">Career</td>
                  <td className="py-2 px-4">{phaseData.career.score}</td>
                  <td className="py-2 px-4">{phaseData.career.prediction}</td>
                </tr>
                <tr className="hover:bg-indigo-50">
                  <td className="py-2 px-4">Relationship</td>
                  <td className="py-2 px-4">{phaseData.relationship.score}</td>
                  <td className="py-2 px-4">{phaseData.relationship.prediction}</td>
                </tr>
                <tr className="hover:bg-indigo-50">
                  <td className="py-2 px-4">Travel</td>
                  <td className="py-2 px-4">{phaseData.travel.score}</td>
                  <td className="py-2 px-4">{phaseData.travel.prediction}</td>
                </tr>
                <tr className="hover:bg-indigo-50">
                  <td className="py-2 px-4">Family</td>
                  <td className="py-2 px-4">{phaseData.family.score}</td>
                  <td className="py-2 px-4">{phaseData.family.prediction}</td>
                </tr>
                <tr className="hover:bg-indigo-50">
                  <td className="py-2 px-4">Friends</td>
                  <td className="py-2 px-4">{phaseData.friends.score}</td>
                  <td className="py-2 px-4">{phaseData.friends.prediction}</td>
                </tr>
                <tr className="hover:bg-indigo-50">
                  <td className="py-2 px-4">Finances</td>
                  <td className="py-2 px-4">{phaseData.finances.score}</td>
                  <td className="py-2 px-4">{phaseData.finances.prediction}</td>
                </tr>
                <tr className="hover:bg-indigo-50">
                  <td className="py-2 px-4">Status</td>
                  <td className="py-2 px-4">{phaseData.status.score}</td>
                  <td className="py-2 px-4">{phaseData.status.prediction}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};
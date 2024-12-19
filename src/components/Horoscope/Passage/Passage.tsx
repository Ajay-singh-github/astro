import { HoroscopeProps, HoroscopePropWeekly, HoroscopePropYearly } from "@/pages/Horoscope/Horoscope";
import moon from "../../../assets/moon.svg";
import { useState } from "react";

const Passage = ({ data, img }: { data: HoroscopeProps; img: string }) => {
  const { lucky_color, lucky_color_code, lucky_number, bot_response, zodiac } = data;

  return (
    <div className="p-4 md:p-10 font-sans space-y-8">
      {/* Header Section */}
      <div className="w-full flex items-center justify-center">
        <img src={img} className="w-[80%]" alt="Zodiac symbol" />
      </div>
      <div className="font-bold w-max my-4 md:my-8 mx-auto">
        <div className="text-xl md:text-3xl text-center flex gap-2 uppercase">
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
            <td className="border border-orange-500 p-2">
              {lucky_color}
            </td>
          </tr>
          <tr>
            <td className="border border-orange-500 p-2">Lucky Numbers</td>
            <td className="border border-orange-500 p-2">{lucky_number?.join(", ")}</td>
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
                  <td className="border border-orange-500 p-2">{bot_response[category].score}</td>
                  <td className="border border-orange-500 p-2">{bot_response[category].split_response}</td>
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



export const PassageForWeekly = ({ data, img }: { data: HoroscopePropWeekly; img: string }) => {
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
      <div className="font-bold w-max my-4 md:my-8 mx-auto">
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
            <td className="border border-orange-500 p-2">
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



type HoroscopePhase = {
  score?: number;
  period?: string;
  prediction?: string;
  health?: { score: number; prediction: string };
  career?: { score: number; prediction: string };
  relationship?: { score: number; prediction: string };
  travel?: { score: number; prediction: string };
  family?: { score: number; prediction: string };
  friends?: { score: number; prediction: string };
  finances?: { score: number; prediction: string };
  status?: { score: number; prediction: string };
};

type HoroscopeData = {
  [key: string]: HoroscopePhase;
};

export const PassageForYearly = ({
  data,
  zodiacName,
  img,
}: {
  data: HoroscopeData;
  zodiacName: string;
  img: string;
}) => {
  const [selectedPhase, setSelectedPhase] = useState<string>(
    Object.keys(data)[0]
  );

  const renderTable = (phase: HoroscopePhase, zodiacName: string) => (
    <div className="overflow-x-auto">
      <table className="w-full h-full bg-orange-100 rounded-xl border-collapse border border-orange-500">
        <thead>
          <tr className="bg-orange-200">
            <th className="border border-orange-500 sm:p-2">Category</th>
            <th className="border border-orange-500 sm:p-2">Score</th>
            <th className="border border-orange-500 sm:p-2">Prediction</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Period", "-", phase.period ?? ""],
            ["Prediction", "-", phase.prediction ?? ""],
            ["Health", phase.health?.score ?? "", phase.health?.prediction ?? ""],
            ["Career", phase.career?.score ?? "", phase.career?.prediction ?? ""],
            ["Relationship", phase.relationship?.score ?? "", phase.relationship?.prediction ?? ""],
            ["Travel", phase.travel?.score ?? "", phase.travel?.prediction ?? ""],
            ["Family", phase.family?.score ?? "", phase.family?.prediction ?? ""],
            ["Friends", phase.friends?.score ?? "", phase.friends?.prediction ?? ""],
            ["Finances", phase.finances?.score ?? "", phase.finances?.prediction ?? ""],
            ["Status", phase.status?.score ?? "", phase.status?.prediction ?? ""],
          ].map(([category, score, prediction], index) => (
            <tr key={index}>
              <td className="border border-orange-500 sm:p-2">{category ?? ""}</td>
              <td className="border border-orange-500 sm:p-2">{score ?? "N/A"}</td>
              <td className="border border-orange-500 sm:p-2">{prediction ?? "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderHeading = (period: string) => {
    return period;
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header Section */}
      <div className="w-full flex items-center justify-center">
        <img src={img} className="w-[80%]" alt="Zodiac symbol" />
      </div>
      <div className="font-bold w-max my-4 md:my-8 mx-auto">
        <div className="text-xl md:text-3xl flex gap-2 uppercase">
          {zodiacName} Yearly Horoscope
        </div>
        <div className="relative my-3 border-b w-full border-primary-500 flex justify-center">
          <div className="absolute -top-4 bg-primary-100">
            <img src={moon} className="text-xs" alt="Moon Icon" />
          </div>
        </div>
      </div>
      <nav className="flex space-x-4 border-b pb-4 flex-wrap items-center justify-center ">
        {Object.keys(data).map((phase) => (
          <button
            key={phase}
            className={`px-4 py-2 rounded-lg my-1 ${
              phase === selectedPhase
                ? "bg-orange-500 text-white"
                : "bg-orange-100 text-orange-500"
            }`}
            onClick={() => setSelectedPhase(phase)}
          >
            {phase?.replace("_", " ")?.toUpperCase()}
          </button>
        ))}
      </nav>
      <h1 className="text-2xl w-full flex justify-center font-semibold text-center text-orange-500">
        {renderHeading(data[selectedPhase]?.period ?? "")}
      </h1>
      {renderTable(data[selectedPhase], zodiacName)}
    </div>
  );
};





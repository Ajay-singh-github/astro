import { useRef, useState } from "react";
import moon from "../../assets/moon.svg";
import Articles from "../../components/common/Articles/Articles";
import axios from "axios";
import { VITE_API_KEY } from "@/api/userAPI";
import { Location as LocationType } from "@/components/more/Form";
import { languages } from "../Horoscope/Horoscope";
import Loader from "@/components/Loader/loader";


type NumerologyData = {
  radical_number: number;
  radical_ruler: string;
  characteristics: string[];
  fav_color: string;
  fav_day: string;
  fav_god: string;
  fav_mantra: string;
  fav_metal: string;
  fav_stone: string;
  fav_substone: string;
  friendly_num: string;
  evil_num: string;
  neutral_num: string;
  destiny: number;
  name_number: number;
  date_considered: string;
}


const Numerology = () => {

  const [name, setName] = useState<string>("");
  const [dateofbirth, setDateofbirth] = useState<Date | null>(null)
  const [timeofbirth, setTimeofbirth] = useState<Date | null>(null)
  const [location, setLocation] = useState<string>("");
  const [latitude, setLatitude] = useState<string>("")
  const [longitude, setLongitude] = useState<string>("")
  const [timezone, setTimezone] = useState<string>("")
  const [language, setLanguage] = useState("en")


  const [locationOptions, setLocationOptions] = useState<LocationType[]>([])
  const [load, setLoad] = useState<boolean>(false);
  const [data, setData] = useState<NumerologyData>();

  const sectionRef = useRef(null);


  const handleSubmit = async () => {
    setLoad(true);
    // Format date of birth (DD/MM/YYYY)
    const formattedDateOfBirth = new Date(dateofbirth).toLocaleDateString("en-GB");

    // Format time of birth (HH:MM)
    const timeParts = new Date(timeofbirth).toTimeString().split(":");
    const formattedTimeOfBirth = `${timeParts[0]}:${timeParts[1]}`;

    // Format timezone (jumps of 0.5)
    const formattedTimezone = parseFloat(timezone).toFixed(1);

    // Format latitude and longitude (decimals)
    const formattedLatitude = parseFloat(latitude).toFixed(6);
    const formattedLongitude = parseFloat(longitude).toFixed(6);

    // Construct the API URL with parameters
    const apiUrl = `https://api.vedicastroapi.com/v3-json/extended-horoscope/numero-table?name=${encodeURIComponent(
      name
    )}&dob=${formattedDateOfBirth}&tob=${formattedTimeOfBirth}&lat=${formattedLatitude}&lon=${formattedLongitude}&tz=${formattedTimezone}&api_key=${VITE_API_KEY}&lang=${language}`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const result = await response.json();

      setData(result.response);
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } catch (error) {
      console.error("Error during API call:", error);
    } finally {
      setLoad(false);
      setName("");
      setDateofbirth(null);
      setTimeofbirth(null);
      setLocation("");
      setLatitude("");
      setLongitude("");
      setTimezone("");
    }
  };

  const getLocationOptions = async (city: string) => {
    if (city.trim() === "") {
      setLocationOptions([]);
      return;
    }
    try {
      const response = await axios.get(
        `https://api.vedicastroapi.com/v3-json/utilities/geo-search?city=${city}&api_key=${VITE_API_KEY}`
      );
      const locations = Array.isArray(response.data.response)
        ? response.data.response
        : [];
      const locationOptions = locations.filter((item:LocationType) => item.country === "IN");
      setLocationOptions(locationOptions);
    } catch (error) {
      console.error("Error fetching location data:", error);
      setLocationOptions([]);
    }
  };
  return (
    <div className="px-2 md:px-8 py-8 md:py-20 flex flex-col items-center justify-center bg-primary-100">
      <div className="font-bold mb-4 md:mb-10">
        <div className="text-xl md:text-5xl mb-6">Numerology Calculator</div>
        <div className="w-full relative my-3 border-b border-primary-300 flex justify-center">
          <div className="absolute -top-4 bg-primary-100">
            <img src={moon} className="text-xs" />
          </div>
        </div>
      </div>

      <div className="px-2 md:px-8 my-6 md:my-[6vw]">
        <div className="font-bold w-max">
          <div className="text-xl md:text-3xl ">UNDERSTANDING NUMEROLOGY</div>
          <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
            <div className="absolute -top-4 bg-primary-100">
              <img src={moon} className="text-xs" />
            </div>
          </div>
        </div>
        <div className="text-sm md:text-xl flex flex-col gap-4 items-center justify-between my-3 md:my-6">
          <div>
            Numerology is a fascinating practice that explores the hidden
            meanings and vibrations associated with numbers. It posits that each
            number, from your birth date to the letters in your name, carries
            unique energies that can influence your personality, destiny, and
            life's path. By understanding the numerical vibrations that surround
            you, you can gain valuable insights into your strengths, weaknesses,
            and the opportunities that await you.
          </div>
          <div>
            Numerology offers a framework for understanding the underlying
            patterns and influences that shape your life. Through the study of
            numbers, you can identify your natural talents, potential
            challenges, and the karmic lessons you are here to learn. This
            ancient practice provides a valuable tool for self-discovery and
            personal growth.
          </div>
        </div>
      </div>
      <div className="">
        <div className="my-6 md:my-[2vw] w-full px-4 md:px-8">
          <div className="font-bold w-max">
            <div className="text-xl md:text-3xl ">
              CALCULATE YOUR NUMEROLOGY
            </div>
            <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
              <div className="absolute -top-4 bg-primary-100">
                <img src={moon} className="text-xs" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6 md:my-[4vw] w-full px-4 md:px-[25vw]">

        <div className="rounded-lg bg-secondary-600 p-2 px-4 md:p-4 md:px-6 flex flex-col gap-4 md:gap-6">
          <div className="flex justify-end w-full items-center">
            <select className="align-middle py-1" onChange={(e) => setLanguage(e.target.value)}>
              {languages.map((item) => (
                <option value={item.key} className="cursor-pointer">{item.value}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2 md:gap-4 w-full">
            <label className="md:text-xl">
              Date of Birth for Life Path Number
            </label>
            <input
              type="date"
              className="w-full rounded-md p-2 px-4 focus:outline-none focus:ring-0"
              onChange={(e) => setDateofbirth(e.target.valueAsDate)}
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-4 w-full">
            <label className="md:text-xl">
              Time of Birth
            </label>
            <input
              type="time"
              className="w-full rounded-md p-2 px-4 focus:outline-none focus:ring-0"
              onChange={(e) => setTimeofbirth(e.target.valueAsDate)}
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-4 w-full">
            <label className="md:text-xl">
              To Calcultate Personality, Destiny and Soul Number
            </label>
            <div className="flex gap-2 w-full">
              <input
                type="text"
                value={name}
                className="w-[100%] rounded-md p-2 px-4 focus:outline-none focus:ring-0"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative flex flex-col gap-2 md:gap-4 w-full">
              <label className="md:text-xl">
                Location
              </label>
              <input
                type="text"
                value={location}
                className="w-full rounded-md p-2 px-4 focus:outline-none focus:ring-0"
                onChange={(e) => { getLocationOptions(e.target.value); setLocation(e.target.value) }}
              />
              {locationOptions.length > 0 && (
                <div className="absolute top-[90px] w-full h-[200px] bg-white overflow-y-auto ">
                  {locationOptions.map((item) => (
                    <div
                      key={item.name}
                      className="p-2 cursor-pointer hover:bg-primary-200"
                      onClick={() => {
                        setLocation(item.name);
                        setLatitude(item.coordinates[0]);
                        setLongitude(item.coordinates[1]);
                        setTimezone(item.tz.toString());
                        setLocationOptions([]);
                      }}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <div
              className="p-2 px-6 cursor-pointer rounded-md bg-secondary-100 text-primary-200"
              onClick={handleSubmit}
            >
              Submit
            </div>
          </div>
        </div>

      </div>
      <div ref={sectionRef} className="mt-4 md:mt-10 w-full">
        {load && <Loader />}
        {data && (
          <div className="rounded-lg p-2 md:p-6">
            <h2  className="text-xl md:text-3xl font-bold text-center mb-4">Details</h2>

            <div className="hidden md:grid md:grid-cols-2 gap-4">
              {/* First Table */}
              <div className="w-full">
                <table className="table-auto w-full text-left border-collapse border bg-orange-100 border-orange-500">
                  <thead>
                    <tr className="bg-orange-200">
                      <th className="border border-orange-500 p-2">Attribute</th>
                      <th className="border border-orange-500 p-2">Details</th>
                    </tr>
                  </thead>
                  <tbody className="bg-orange-100">
                    {Object.keys(data).slice(0, Math.ceil(Object.keys(data).length / 2)).map((key) => {
                      const value = data[key];
                      return (
                        <tr key={key} className="border-t border-orange-500">
                          <td className="border border-orange-500 p-2 font-semibold capitalize">
                            {key.replace(/_/g, " ")}
                          </td>
                          <td className="border border-orange-500 p-2">
                            {Array.isArray(value) ? (
                              <ul className="list-disc list-inside">
                                {value.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            ) : (
                              value.toString()
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Second Table */}
              <div className="w-full">
                <table className="table-auto w-full text-left border-collapse border bg-orange-100 border-orange-500">
                  <thead>
                    <tr className="bg-orange-200">
                      <th className="border border-orange-500 p-2">Attribute</th>
                      <th className="border border-orange-500 p-2">Details</th>
                    </tr>
                  </thead>
                  <tbody className="bg-orange-100">
                    {Object.keys(data).slice(Math.ceil(Object.keys(data).length / 2)).map((key) => {
                      const value = data[key];
                      return (
                        <tr key={key} className="border-t border-orange-500">
                          <td className="border border-orange-500 p-2 font-semibold capitalize">
                            {key.replace(/_/g, " ")} {/* Replace underscores with spaces */}
                          </td>
                          <td className="border border-orange-500 p-2">
                            {Array.isArray(value) ? (
                              <ul className="list-disc list-inside">
                                {value.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            ) : (
                              value.toString()
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>




            </div>
            {/* Mobile View table */}
            <div className="md:hidden">
              <div className="w-full">
                <table className="table-auto w-full text-left border-collapse border bg-orange-100 border-orange-500">
                  <thead>
                    <tr className="bg-orange-200">
                      <th className="border border-orange-500 p-2">Attribute</th>
                      <th className="border border-orange-500 p-2">Details</th>
                    </tr>
                  </thead>
                  <tbody className="bg-orange-100">
                    {Object.keys(data).map((key) => {
                      const value = data[key];
                      return (
                        <tr key={key} className="border-t border-orange-500">
                          <td className="border border-orange-500 p-2 font-semibold capitalize">
                            {key.replace(/_/g, " ")} {/* Replace underscores with spaces */}
                          </td>
                          <td className="border border-orange-500 p-2">
                            {Array.isArray(value) ? (
                              <ul className="list-disc list-inside">
                                {value.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            ) : (
                              value.toString()
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>


        )}
      </div>
      <div className="px-2 md:px-8 my-6 md:my-[6vw]">
        <div className="font-bold w-max">
          <div className="text-xl md:text-3xl flex gap-2">
            HOW{" "}
            <span className="hidden md:block">THE NUMEROLOGY CALCULATOR</span>
            <span className="md:hidden">IT</span> WORKS
          </div>
          <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
            <div className="absolute -top-4 bg-primary-100">
              <img src={moon} className="text-xs" />
            </div>
          </div>
        </div>
        <div className="text-sm md:text-xl flex flex-col gap-4 items-center justify-between my-3 md:my-6">
          <div>
            Our Numerology Calculator is a powerful tool that allows you to
            delve into the depths of your numerical vibrations. By simply
            entering your birth date and name, you can unlock a personalized
            numerology reading that reveals your unique Life Path Number,
            Destiny Number, Soul Urge Number, and other significant digits.
          </div>
          <div>
            These numbers serve as a roadmap, guiding you towards understanding
            your personality, strengths, weaknesses, and life's purpose. By
            exploring the meanings behind these numbers, you can gain valuable
            insights into how to navigate life's challenges, align with your
            true potential, and make informed decisions that support your
            journey.
          </div>
        </div>
      </div>

      <div className=" w-full px-4 md:px-8">
        <div className="my-6 md:my-[4vw] w-full">
          <div className="font-bold w-max">
            <div className="text-xl md:text-3xl flex gap-2">
              NUMEROLOGY NUMBERS{" "}
              <span className="hidden md:block">AND THEIR SIGNIFICANCE</span>
            </div>
            <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
              <div className="absolute -top-4 bg-primary-100">
                <img src={moon} className="text-xs" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <ul className="flex flex-col gap-8 text-sm md:text-xl mb-6 md:mb-[10vw]">
            <li>
              <div className="font-bold">Life Path Number:</div>
              <div>
                This number is derived from your birth date and represents your
                life's journey, challenges, and opportunities.
              </div>
            </li>
            <li>
              <div className="font-bold">Destiny Number:</div>
              <div>
                Calculated from your full name at birth, this number reveals
                your life's purpose and the goals you are meant to achieve.
              </div>
            </li>
            <li>
              <div className="font-bold">Soul Urge Number:</div>
              <div>
                This number is based on the vowels in your name and reflects
                your inner desires, motivations, and what truly drives you.
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full">
        <Articles />
      </div>
      <div className="">
        <div className="my-6 md:my-[4vw] w-full px-4 md:px-8">
          <div className="font-bold w-max">
            <div className="text-xl md:text-3xl ">NUMEROLOGY - FAQS</div>
            <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
              <div className="absolute -top-4 bg-primary-100">
                <img src={moon} className="text-xs" />
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8">
          <ul className="flex flex-col gap-8 text-sm md:text-xl mb-6 md:mb-[10vw]">
            <li>
              <div className="font-bold">
                Q: Can numerology predict my future?
              </div>
              <div>
                A: Numerology provides insights into your potential future based
                on the vibrations of your numbers. It helps guide your
                decisions, but it doesn't predict specific events.
              </div>
            </li>
            <li>
              <div className="font-bold">Q: How accurate is numerology?</div>
              <div>
                A: Numerology is a centuries-old practice with a strong
                spiritual foundation. Its accuracy depends on the interpretation
                of numbers and how they align with your life experiences.
              </div>
            </li>
            <li>
              <div className="font-bold">
                Q: Can numerology help with decision-making?
              </div>
              <div>
                A: Yes, numerology can provide clarity and direction, helping
                you make informed decisions in various areas of your life,
                including career, relationships, and personal growth.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Numerology;

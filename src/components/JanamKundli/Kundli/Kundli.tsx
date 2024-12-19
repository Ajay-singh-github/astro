import moon from "../../../assets/moon.svg";
import kundli from "../../../assets/kunli.svg";
import { useState } from "react";
import axios from "axios";
import Loader from "@/components/Loader/loader";
import { VITE_API_KEY } from "@/api/userAPI";
import { languages } from "@/pages/Horoscope/Horoscope";
import { Location as OptionLocation } from "@/pages/Horoscope/Horoscope";

type IndexedObject = {
  name: string;
  full_name: string;
  local_degree: number;
  global_degree: number;
  rasi_no: number;
  zodiac: string;
  house: number;
  nakshatra: string;
  nakshatra_lord: string;
  nakshatra_pada: number;
  nakshatra_no: number;
  zodiac_lord: string;
  is_planet_set: boolean;
  lord_status: string;
  basic_avastha: string;
  is_combust: boolean;
};

type Panchang = {
  ayanamsa: number;
  ayanamsa_name: string;
  karana: string;
  yoga: string;
  day_of_birth: string;
  day_lord: string;
  hora_lord: string;
  sunrise_at_birth: string;
  sunset_at_birth: string;
  tithi: string;
};

type GhatkaChakra = {
  rasi: string;
  tithi: string[];
  day: string;
  nakshatra: string;
  tatva: string;
  lord: string;
  same_sex_lagna: string;
  opposite_sex_lagna: string;
};

type KundliData = {
  "0": IndexedObject;
  "1": IndexedObject;
  "2": IndexedObject;
  "3": IndexedObject;
  "4": IndexedObject;
  "5": IndexedObject;
  "6": IndexedObject;
  "7": IndexedObject;
  "8": IndexedObject;
  "9": IndexedObject;
  birth_dasa: string;
  current_dasa: string;
  birth_dasa_time: string;
  current_dasa_time: string;
  lucky_gem: string[];
  lucky_num: number[];
  lucky_colors: string[];
  lucky_letters: string[];
  lucky_name_start: string[];
  rasi: string;
  nakshatra: string;
  nakshatra_pada: number;
  panchang: Panchang;
  ghatka_chakra: GhatkaChakra;
};





const kundaliFaq = [
  {
    question: "What information do I need to generate my Janam Kundali?",
    answer: "You need your exact birth date, time, and place to generate an accurate Janam Kundali.",
  },
  {
    question: "Can a Janam Kundali change over time?",
    answer: "The Janam Kundali remains constant as it is based on your birth details. However, the interpretation of its aspects can evolve with time and life experiences.",
  },
  {
    question: "How can Janam Kundali help me in my daily life?",
    answer: "By understanding your Janam Kundali, you can make better decisions, understand your strengths and weaknesses, and navigate challenges more effectively.",
  },
];

const kundliData = {

  0: {
    name: "As",
    full_name: "Ascendant",
    local_degree: 27.569488877783385,
    global_degree: 87.56948887778339,
    rasi_no: 3,
    zodiac: "Gemini",
    house: 1,
    nakshatra: "Ashlesha",
    nakshatra_lord: "Mercury",
    nakshatra_pada: 1,
    nakshatra_no: 9,
    zodiac_lord: "Mars",
    is_planet_set: false,
    lord_status: "Neutral",
    basic_avastha: "Vriddha",
    is_combust: false
  },
  1: {
    name: "Su",
    full_name: "Sun",
    local_degree: 7.220457066672964,
    global_degree: 7.220457066672964,
    rasi_no: 1,
    zodiac: "Aries",
    house: 11,
    nakshatra: "Ashvini",
    nakshatra_lord: "Ketu",
    nakshatra_pada: 3,
    nakshatra_no: 1,
    zodiac_lord: "Mars",
    is_planet_set: false,
    basic_avastha: "Kumara",
    lord_status: "Malefic",
    is_combust: false
  },
  2: {
    name: "Mo",
    full_name: "Moon",
    local_degree: 18.660634460340304,
    global_degree: 108.6606344603403,
    rasi_no: 4,
    zodiac: "Cancer",
    house: 2,
    nakshatra: "Ashlesha",
    nakshatra_lord: "Mercury",
    nakshatra_pada: 1,
    nakshatra_no: 9,
    zodiac_lord: "Moon",
    is_planet_set: true,
    basic_avastha: "Vriddha",
    lord_status: "Neutral",
    is_combust: false
  },
  3: {
    name: "Ma",
    full_name: "Mars",
    local_degree: 4.499931621419634,
    global_degree: 64.49993162141963,
    rasi_no: 3,
    zodiac: "Gemini",
    house: 1,
    nakshatra: "Mrigashira",
    nakshatra_lord: "Mars",
    nakshatra_pada: 4,
    nakshatra_no: 5,
    zodiac_lord: "Mercury",
    is_planet_set: false,
    basic_avastha: "Bala",
    lord_status: "Highly Malefic",
    is_combust: false,
  },
  4: {
    name: "Me",
    full_name: "Mercury",
    local_degree: 9.728014687152118,
    global_degree: 9.728014687152118,
    rasi_no: 1,
    zodiac: "Aries",
    house: 11,
    nakshatra: "Ashvini",
    nakshatra_lord: "Ketu",
    nakshatra_pada: 3,
    nakshatra_no: 1,
    zodiac_lord: "Mars",
    is_planet_set: false,
    basic_avastha: "Kumara",
    lord_status: "Benefic",
    is_combust: true
  },
  5: {
    name: "Me",
    full_name: "Mercury",
    local_degree: 9.728014687152118,
    global_degree: 9.728014687152118,
    rasi_no: 1,
    zodiac: "Aries",
    house: 11,
    nakshatra: "Ashvini",
    nakshatra_lord: "Ketu",
    nakshatra_pada: 3,
    nakshatra_no: 1,
    zodiac_lord: "Mars",
    is_planet_set: false,
    basic_avastha: "Kumara",
    lord_status: "Benefic",
    is_combust: true
  },
  6: {
    name: "Me",
    full_name: "Mercury",
    local_degree: 9.728014687152118,
    global_degree: 9.728014687152118,
    rasi_no: 1,
    zodiac: "Aries",
    house: 11,
    nakshatra: "Ashvini",
    nakshatra_lord: "Ketu",
    nakshatra_pada: 3,
    nakshatra_no: 1,
    zodiac_lord: "Mars",
    is_planet_set: false,
    basic_avastha: "Kumara",
    lord_status: "Benefic",
    is_combust: true
  },
  7: {
    name: "Me",
    full_name: "Mercury",
    local_degree: 9.728014687152118,
    global_degree: 9.728014687152118,
    rasi_no: 1,
    zodiac: "Aries",
    house: 11,
    nakshatra: "Ashvini",
    nakshatra_lord: "Ketu",
    nakshatra_pada: 3,
    nakshatra_no: 1,
    zodiac_lord: "Mars",
    is_planet_set: false,
    basic_avastha: "Kumara",
    lord_status: "Benefic",
    is_combust: true
  },
  8: {
    name: "Me",
    full_name: "Mercury",
    local_degree: 9.728014687152118,
    global_degree: 9.728014687152118,
    rasi_no: 1,
    zodiac: "Aries",
    house: 11,
    nakshatra: "Ashvini",
    nakshatra_lord: "Ketu",
    nakshatra_pada: 3,
    nakshatra_no: 1,
    zodiac_lord: "Mars",
    is_planet_set: false,
    basic_avastha: "Kumara",
    lord_status: "Benefic",
    is_combust: true
  },
  9: {
    name: "Me",
    full_name: "Mercury",
    local_degree: 9.728014687152118,
    global_degree: 9.728014687152118,
    rasi_no: 1,
    zodiac: "Aries",
    house: 11,
    nakshatra: "Ashvini",
    nakshatra_lord: "Ketu",
    nakshatra_pada: 3,
    nakshatra_no: 1,
    zodiac_lord: "Mars",
    is_planet_set: false,
    basic_avastha: "Kumara",
    lord_status: "Benefic",
    is_combust: true
  },
  birth_dasa: "Mercury>Ke>Ve",
  current_dasa: "Ke>Ke>Ke",
  birth_dasa_time: "06/01/2018",
  current_dasa_time: " 30/10/2023",
  lucky_gem: [
    "emerald"
  ],
  lucky_num: [
    5
  ],
  lucky_colors: [
    "black",
    "red"
  ],
  lucky_letters: [
    "D"
  ],
  lucky_name_start: [
    "Di",
    "Du",
    "Dae",
    "Do"
  ],
  rasi: "Cancer",
  nakshatra: "Ashlesha",
  nakshatra_pada: 1,
  panchang: {
    ayanamsa: 24.157071540169,
    ayanamsa_name: "Lahiri",
    karana: "Kaulava",
    yoga: "Soola",
    day_of_birth: "Wednesday",
    day_lord: "Mercury",
    hora_lord: "Sun",
    sunrise_at_birth: "06:12:00",
    sunset_at_birth: "18:29:00",
    tithi: "S.Navami"
  },
  ghatka_chakra: {
    rasi: "Leo",
    tithi: [
      "2 (dvitiya)",
      "7 (saptami)",
      "12 (dwadasi)"
    ],
    day: "Wednesday",
    nakshatra: "Anuradha",
    tatva: "Prithvi (Earth)",
    lord: "Mercury",
    same_sex_lagna: "Libra",
    opposite_sex_lagna: "Aries"
  }

}


const Kundli = () => {
  const [load, setLoad] = useState<boolean>(false);
  const [timeOfBirth, setTimeOfBirth] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [timezone, setTimezone] = useState<string>("");
  const [language, setLanguage] = useState<string>("en");
  const [data, setData] = useState<KundliData>();


  const [locationOptions, setLocationOptions] = useState<OptionLocation[]>([]);

  const getLocationOptions = async (city: string) => {
    if (city.trim() === "") {
      setLocationOptions([]);
      return;
    }
    try {
      const response = await axios.get(
        `https://api.vedicastroapi.com/v3-json/utilities/geo-search?city=${city}&api_key=${VITE_API_KEY}`
      );
      console.log(response.data.response);
      const locations = Array.isArray(response.data.response)
        ? response.data.response
        : [];
      setLocationOptions(locations);
    } catch (error) {
      console.error("Error fetching location data:", error);
      setLocationOptions([]);
    }
  };

  const handleSubmit = async () => {
    setLoad(true);

    const formattedDob = new Date(dateOfBirth).toLocaleDateString('en-GB'); // Converts to DD/MM/YYYY format

    const formattedTob = timeOfBirth;

    const formattedLat = parseFloat(latitude).toFixed(2);
    const formattedLon = parseFloat(longitude).toFixed(1);

    const formattedTz = timezone;

    const formattedLang = language ? language : 'en'; // Default to 'en' if not provided

    const apiUrl = `https://api.vedicastroapi.com/v3-json/horoscope/planet-details?dob=${formattedDob}&tob=${formattedTob}&lat=${formattedLat}&lon=${formattedLon}&tz=${formattedTz}&api_key=${VITE_API_KEY}&lang=${formattedLang}`;

    // Fetch the data from the API
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log('Horoscope Data:', data);
      setData(data.response);
    } catch (error) {
      console.error('Error fetching horoscope data:', error);
    } finally {
      setLoad(false);
    }

  };

  const renderPlanetaryData = () => {
    const planets = Object.keys(data).filter((key: any) => !isNaN(key)); // Filters out non-numeric keys

    return planets.map((planetKey) => {
      const planet = data[planetKey];
      return (
        <div key={planetKey} className="">
          <h3 className="text-md md:text-xl font-bold">{planet.full_name}</h3>
          <p><strong>Zodiac:</strong> {planet.zodiac} ({planet.rasi_no})</p>
          <p><strong>House:</strong> {planet.house}</p>
          <p><strong>Local Degree:</strong> {planet.local_degree}</p>
          <p><strong>Global Degree:</strong> {planet.global_degree}</p>
          <p><strong>Nakshatra:</strong> {planet.nakshatra} ({planet.nakshatra_lord})</p>
          <p><strong>Nakshatra Pada:</strong> {planet.nakshatra_pada}</p>
          <p><strong>Lord Status:</strong> {planet.lord_status}</p>
          <p><strong>Basic Avastha:</strong> {planet.basic_avastha}</p>
          <p><strong>Is Retrograde:</strong> {planet.retro ? "Yes" : "No"}</p>
          <p><strong>Is Combust:</strong> {planet.is_combust ? "Yes" : "No"}</p>
        </div>
      );
    });
  };

  return (
    <div className="text-primary-300 p-4 md:p-12">
      <div className="font-bold w-max">
        <div className="text-xl md:text-3xl flex gap-2">
          UNDERSTANDING <span className="hidden md:block">JANAM KUNDALI</span>
        </div>
        <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
          <div className="absolute -top-4 bg-primary-100">
            <img src={moon} className="text-xs" />
          </div>
        </div>
      </div>

      <div className="text-sm md:text-xl flex flex-col lg:flex-row items-center justify-between my-3 md:my-6">
        <div className="flex flex-col gap-4">
          <div>
            A Janam Kundali, or birth chart, is a personalized astrological map
            that captures the precise alignment of celestial bodies at the
            moment of your birth. This cosmic snapshot serves as a unique
            blueprint, offering profound insights into your personality,
            strengths, weaknesses, and life's journey.
          </div>
          <div>
            By analyzing the positions of planets, stars, and other celestial
            elements within your birth chart, Vedic astrologers can gain a
            deeper understanding of your inherent qualities, karmic imprints,
            and potential challenges. The birth chart reveals the underlying
            patterns and influences that shape your character, relationships,
            career, and overall destiny.
          </div>
        </div>
        <div className="p-2 md:p-4 w-full flex items-center justify-center">
          <img src={kundli} className="w-[50%] lg:w-[80%]" />
        </div>
      </div>

      <div className="text-sm md:text-xl flex flex-col lg:flex-row items-center justify-between my-3 md:my-6 lg:w-[80%]">
        Beyond providing insights into your personality, a Janam Kundali can
        also be used to predict future events and understand the karmic lessons
        you are here to learn. By examining the planetary movements and their
        interactions within your chart, astrologers can offer guidance on
        potential obstacles, opportunities, and the most auspicious times for
        important decisions.
      </div>

      <div className="my-6 md:my-[6vw]">
        <div className="font-bold w-max">
          <div className="text-xl md:text-3xl flex gap-2">
            GENERATE <span className="hidden md:block">YOUR</span> JANAM KUNDALI
          </div>
          <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
            <div className="absolute -top-4 bg-primary-100">
              <img src={moon} className="text-xs" />
            </div>
          </div>
        </div>
        <div className="text-sm md:text-xl flex flex-col lg:flex-row items-center justify-between my-3 md:my-6">
          By entering your birth details, you can generate your Janam Kundali,
          which serves as a blueprint of your life's journey. It offers insights
          into various aspects such as career, relationships, health, and
          spiritual growth. Understanding your Janam Kundali helps you align
          with your true purpose and make informed decisions.
        </div>
      </div>

      <div className="md:px-[10vw] my-6">
        <div className="bg-secondary-600 md:p-2 text-primary-300 rounded-md ">
          <div className="text-xl md:text-3xl font-bold w-full text-center py-4">
            Get Your Kundli by Date of Birth
          </div>
          <form className="">
            <div className="text-sm md:text-lg p-2 md:p-6  m-2 mx-4  flex flex-col gap-2">
              <div className="flex justify-end w-full items-center">
                <select className="align-middle py-1" onChange={(e) => setLanguage(e.target.value)}>
                  {languages.map((item) => (
                    <option value={item.key} className="cursor-pointer">{item.value}</option>
                  ))}
                </select>
              </div>
              <div className="flex md:flex-col justify-between gap-2">
                <div>
                  <label className="font-bold"> Date of Birth</label>
                  <input className="w-full p-1 rounded-md" type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}></input>
                </div>
                <div>
                  <label className="font-bold"> Time of Birth</label>
                  <input className="w-full p-1 rounded-md" type="time" value={timeOfBirth} onChange={(e) => setTimeOfBirth(e.target.value)}></input>
                </div>
              </div>
              <div className="flex flex-col gap-1 md:basis-2/3 mb-2 relative">
                <label className="font-bold">City of Birth</label>
                <input
                  type="text"
                  placeholder="City of Birth"
                  name="city"
                  minLength={3}
                  value={location}
                  onChange={(e) => { getLocationOptions(e.target.value); setLocation(e.target.value) }}

                  className="rounded-md border p-1 px-2 focus:outline-none focus:ring-0"
                />
                {locationOptions.length > 0 && (
                  <div className="absolute top-[75px] w-full h-[200px] z-10 bg-white overflow-y-auto ">
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

              {/* <div className="flex gap-2 md:justify-between">
                
                <div className="flex gap-2">
                  <div
                    onClick={handleLoc}
                    className="bg-primary-200 font-bold rounded-md shadow-lg cursor-pointer p-1 px-2 text-secondary-100"
                  >
                    CURRENT LOCATION
                  </div>
                  
                </div>
              </div> */}
            </div>
            <div className="flex items-center justify-center w-full my-2">
              <div
                className="p-1 px-2 text-primary-200 cursor-pointer bg-secondary-100 font-semibold shadow-md rounded-md text-xl"
                onClick={handleSubmit}
              >
                SHOW KUNDLI
              </div>
            </div>
          </form>
        </div>
        <div className="mt-4 md:mt-10">
          <div className="w-full text-center text-xl md:text-3xl">{load}</div>
          {/* {data && (
            <div className="rounded-lg bg-primary-200 p-2 md:p-6">
              <div className="flex flex-col gap-2 md:gap-4">
                <h1 className="text-xl md:text-3xl font-bold">
                  Astrological Data
                </h1>

                <h2 className="text-lg md:text-2xl font-bold">
                  Planetary Data
                </h2>
                {renderPlanetaryData()}
                <div>
                  <h2 className="text-md md:text-xl font-bold">
                    Dasa Information
                  </h2>
                  <p>
                    <strong>Birth Dasa:</strong> {data.birth_dasa}
                  </p>
                  <p>
                    <strong>Current Dasa:</strong> {data.current_dasa}
                  </p>
                  <p>
                    <strong>Birth Dasa Time:</strong> {data.birth_dasa_time}
                  </p>
                  <p>
                    <strong>Current Dasa Time:</strong> {data.current_dasa_time}
                  </p>
                </div>
                <div>
                  <h2 className="text-md md:text-xl font-bold">
                    Lucky Information
                  </h2>
                  <p>
                    <strong>Lucky Gem:</strong> {data.lucky_gem.join(", ")}
                  </p>
                  <p>
                    <strong>Lucky Number:</strong> {data.lucky_num.join(", ")}
                  </p>
                  <p>
                    <strong>Lucky Colors:</strong> {data.lucky_colors.join(", ")}
                  </p>
                  <p>
                    <strong>Lucky Letters:</strong>{" "}
                    {data.lucky_letters.join(", ")}
                  </p>
                  <p>
                    <strong>Lucky Name Start:</strong>{" "}
                    {data.lucky_name_start.join(", ")}
                  </p>
                </div><div>
                  <h2 className="text-md md:text-xl font-bold">
                    Rasi & Nakshatra
                  </h2>
                  <p>
                    <strong>Rasi:</strong> {data.rasi}
                  </p>
                  <p>
                    <strong>Nakshatra:</strong> {data.nakshatra}
                  </p>
                  <p>
                    <strong>Nakshatra Pada:</strong> {data.nakshatra_pada}
                  </p>
                </div><div>
                  <h2 className="text-md md:text-xl font-bold">Panchang</h2>
                  <p>
                    <strong>Ayanamsa:</strong> {data.panchang.ayanamsa} (
                    {data.panchang.ayanamsa_name})
                  </p>
                  <p>
                    <strong>Karana:</strong> {data.panchang.karana}
                  </p>
                  <p>
                    <strong>Yoga:</strong> {data.panchang.yoga}
                  </p>
                  <p>
                    <strong>Day of Birth:</strong> {data.panchang.day_of_birth}
                  </p>
                  <p>
                    <strong>Day Lord:</strong> {data.panchang.day_lord}
                  </p>
                  <p>
                    <strong>Hora Lord:</strong> {data.panchang.hora_lord}
                  </p>
                  <p>
                    <strong>Sunrise at Birth:</strong>{" "}
                    {data.panchang.sunrise_at_birth}
                  </p>
                  <p>
                    <strong>Sunset at Birth:</strong>{" "}
                    {data.panchang.sunset_at_birth}
                  </p>
                  <p>
                    <strong>Tithi:</strong> {data.panchang.tithi}
                  </p>
                </div><div>
                  <h2 className="text-md md:text-xl font-bold">Ghatka Chakra</h2>
                  <p>
                    <strong>Rasi:</strong> {data.ghatka_chakra.rasi}
                  </p>
                  <p>
                    <strong>Tithis:</strong> {data.ghatka_chakra.tithi.join(", ")}
                  </p>
                  <p>
                    <strong>Day:</strong> {data.ghatka_chakra.day}
                  </p>
                  <p>
                    <strong>Nakshatra:</strong> {data.ghatka_chakra.nakshatra}
                  </p>
                  <p>
                    <strong>Tatva:</strong> {data.ghatka_chakra.tatva}
                  </p>
                  <p>
                    <strong>Lord:</strong> {data.ghatka_chakra.lord}
                  </p>
                  <p>
                    <strong>Same Sex Lagna:</strong>{" "}
                    {data.ghatka_chakra.same_sex_lagna}
                  </p>
                  <p>
                    <strong>Opposite Sex Lagna:</strong>{" "}
                    {data.ghatka_chakra.opposite_sex_lagna}
                  </p>
                </div>
              </div>
            </div>
          )} */}
          {data && <ZodiacTabs response={data} />}
        </div>
      </div>
      <div className="my-6 md:my-[6vw] w-full">
        <div className="font-bold w-max">
          <div className="text-xl md:text-3xl ">JANAM KUNDALI - FAQS</div>
          <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
            <div className="absolute -top-4 bg-primary-100">
              <img src={moon} className="text-xs" />
            </div>
          </div>
        </div>
      </div>

      <ul className="flex flex-col gap-8 text-sm md:text-xl mb-6 md:mb-[5vw]">
        {kundaliFaq.map((faq, index) => (
          <li key={index}>
            <div className="font-bold">
              Q: {faq.question}
            </div>
            <div>
              A: {faq.answer}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Kundli;



const ZodiacTabs = ({ response }) => {
  // Extract objects 0 to 9
  const items = Object.entries(response).filter(([key]) => parseInt(key, 10) < 10);

  // State to track the active tab
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle tab click
  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const activeData = items[activeIndex][1];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4 text-center">Zodiac Tabs</h1>

      {/* Navigation Tabs */}
      <div className="hidden sm:flex justify-center mb-4 space-x-4 flex-wrap">
        {items.map(([key, value], index) => (
          <button
            key={key}
            onClick={() => handleTabClick(index)}
            className={`px-2  py-1  my-1 md:my-2 rounded-md ${
              activeIndex === index
                ? "bg-orange-500 text-white"
                : "bg-orange-100 text-orange-500"
            } hover:bg-orange-200`}
          >
            {value.zodiac}
          </button>
        ))}
      </div>

      <div className="flex sm:hidden justify-center mb-4 space-x-4 flex-wrap">
        <select className="w-full p-1 rounded-md bg-orange-100 text-orange-500 border border-orange-500 py-2">
          {items.map(([key, value], index) => (
            <option key={key} value={index}>{value.zodiac}</option>
          ))}
        </select>
      </div>

      {/* Tabular Data for Active Tab */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-orange-500 bg-orange-100">
          <thead>
            <tr className="bg-orange-200">
              <th className="px-4 py-2 border border-orange-500">Field</th>
              <th className="px-4 py-2 border border-orange-500">Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(activeData).map(([field, value], index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 border border-orange-500 capitalize">
                  {field.replace(/_/g, " ")}
                </td>
                <td className="px-4 py-2 border border-orange-500">
                  {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


















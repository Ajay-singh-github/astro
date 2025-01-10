import moon from "../../../assets/moon.svg";
import kundli from "../../../assets/kunli.svg";
import { useEffect, useState } from "react";
import { languages } from "@/pages/Horoscope/Horoscope";
import Scrollc from "@/lib/scrollc";
import Loader from "@/components/Loader/loader";
import getLocation from "@/utils/getLocation";
import { VITE_API_KEY } from "@/api/userAPI";
// import { Console } from "node:console";

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


interface KaalsarpDoshType {
  remedies: string[];  // remedies should be a string array
}

const KaalsarpDosh: KaalsarpDoshType = {
  remedies: ['Remedy 1', 'Remedy 2', 'Remedy 3'],  // example
};



const Kundli = () => {
  const section = Scrollc();
  const [load, setLoad] = useState<boolean>(false);
  const [timeOfBirth, setTimeOfBirth] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [timezone, setTimezone] = useState<string>("");
  const [language, setLanguage] = useState<string>("en");
  const [data, setData] = useState<KundliData>();
  const [loading, setLoading] = useState<boolean>(false);

  const [errorDate, setErrorDate] = useState<string | null>(null);
  const [errorTime, setErrorTime] = useState<string | null>(null);
  const [errorLocation, setErrorLocation] = useState<string | null>(null);


  // const [locationOptions, setLocationOptions] = useState<OptionLocation[]>([]);
  const [locationOptions, getLocationOptions, setLocationOptions] = getLocation();


  const validate = () => {
    if (dateOfBirth == "") {
      setErrorDate("Date of Birth is required");
      return false;
    }
    if (timeOfBirth == "") {
      setErrorTime("Time of Birth is required");
      return false;
    }
    if (location == "") {
      setErrorLocation("Location is required");
      return false;
    }
    return true;
  }

  const handleSubmit = async () => {
    if (!validate()) {
      return;
    }
    setLoad(true);

    const formattedDob = new Date(dateOfBirth).toLocaleDateString('en-GB'); // Converts to DD/MM/YYYY format

    const formattedTob = timeOfBirth;

    const formattedLat = parseFloat(latitude.toString()).toFixed(2);
    const formattedLon = parseFloat(longitude.toString()).toFixed(1);

    const formattedTz = timezone;

    const formattedLang = language ? language : 'en'; // Default to 'en' if not provided

    const apiUrl = `https://api.vedicastroapi.com/v3-json/horoscope/planet-details?dob=${formattedDob}&tob=${formattedTob}&lat=${formattedLat}&lon=${formattedLon}&tz=${formattedTz}&api_key=${VITE_API_KEY}&lang=${formattedLang}`;
    console.log("dateof birrth", dateOfBirth)
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
      section.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // setLanguage("en");
      // setDateOfBirth("");
      // setTimeOfBirth("");
      // setLocation("");
      // setLatitude(0);
      // setLongitude(0);
      // setTimezone("");
      // @ts-ignore
      setLocationOptions([]);
    }

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
                <div className="flex flex-col gap-1">
                  <label className="font-bold"> Date of Birth</label>
                  <input className="w-full p-1 rounded-md" type="date" value={dateOfBirth} onChange={(e) => { setDateOfBirth(e.target.value); setErrorDate(null) }}></input>
                  {errorDate && <span className="text-red-500 text-sm">{errorDate}</span>}
                </div>
                <div className="flex flex-col gap-1"  >
                  <label className="font-bold"> Time of Birth</label>
                  <input className="w-full p-1 rounded-md" type="time" value={timeOfBirth} onChange={(e) => { setTimeOfBirth(e.target.value); setErrorTime(null) }}></input>
                  {errorTime && <span className="text-red-500 text-sm">{errorTime}</span>}
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
                  // @ts-ignore
                  onChange={(e) => { getLocationOptions(e.target.value); setLocation(e.target.value); setLoading(true); setErrorLocation(null) }}

                  className="rounded-md border p-1 px-2 focus:outline-none focus:ring-0"
                />
                {errorLocation && <span className="text-red-500 text-sm">{errorLocation}</span>}
                {locationOptions.length > 0 ? (
                  <div className="absolute  sm:top-[75px] w-full h-[200px] z-10 bg-white overflow-y-auto">
                    {/* @ts-ignore */}
                    {locationOptions.map((item) => (
                      <div
                        key={item.name}
                        className="p-2 cursor-pointer hover:bg-primary-200"
                        onClick={() => {
                          setLocation(item.name);
                          setLatitude(Number(item.coordinates[0]));
                          setLongitude(Number(item.coordinates[1]));
                          setTimezone(item.tz.toString());
                          // @ts-ignore
                          setLocationOptions([]);
                          setLoading(false);
                        }}
                      >
                        {item.name ? item.name : <Loader />}
                      </div>
                    ))}
                  </div>
                ) : (
                  loading && location !== "" && (
                    <div className="w-full absolute h-[200px] bg-white z-10 top-[75px] p-12 text-center text-xl md:text-3xl">
                      <div className="flex items-center flex-col justify-center">
                        <div className="w-8 h-8 border-4 border-t-transparent border-orange-500 rounded-full animate-spin"></div>
                        <div>
                          Select location from the list...
                        </div>
                      </div>
                    </div>
                  )
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
            <div className="flex items-center  justify-center w-full my-2">
              <div
                className="p-1 px-2 mb-4 text-primary-200 cursor-pointer bg-secondary-100 font-semibold shadow-md rounded-md text-xl"
                onClick={handleSubmit}
              >
                SHOW KUNDLI
              </div>
            </div>
          </form>
        </div>
        <div className="mt-4 md:mt-10" ref={section}>
          <div className="w-full text-center text-xl md:text-3xl">{load}</div>

          {data && <ZodiacTabs response={data} dateOfBirth={dateOfBirth} timeOfBirth={timeOfBirth} latitude={latitude} longitude={longitude} timezone={timezone} language={language} />}
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


const ZodiacTabs = ({ response, dateOfBirth, timeOfBirth, latitude, longitude, timezone, language, }: { response: KundliData; dateOfBirth: string; timeOfBirth: string; timezone: string; latitude: number; longitude: number; language: string }) => {

  // Extract objects 0 to 9
  const [dataa] = useState<string[]>(["Personal", "Planetary", "Chart", "Ashtakvarga", "Binnastakvarga", "Dosha"]);
  const items = Object.entries(response).filter(([key]) => parseInt(key, 10) < 10);
  const [chartStatus, setChartStatus] = useState<string>("north")
  const [chartSvg, setchartSvg] = useState<string | null>(null)
  // State to track the active tab
  const [activeIndex, setActiveIndex] = useState(0);
  // Handle tab click
  const [chartImages] = useState<string[]>([
    "D1", "D2", "D3", "D3-s", "D4", "D5", "D7", "D8", "D9", "D10",
    "D10-R", "D12", "D16", "D20", "D24", "D24-R", "D27", "D40",
    "D45", "D60", "D30", "chalit", "sun", "moon", "kp_chalit"
  ]);

  const [mangalDosh, setmangalDosh] = useState<string[]>([])
  const [KaalsarpDosh, setKaalsarpDosh] = useState<string[]>([]);
  const [ManglikDosh, setManglikDosh] = useState<string[]>([])
  const [PitraDosh, setPitraDosh] = useState<string[]>([])
  const [Papasamaya, setPapasamaya] = useState<string[]>([])

  const [chartResponseImages, setChartResponseImages] = useState<string[]>([])
  const [planetData, setplanetData] = useState<string[]>([])
  const [astharvargaData, setAstharvargaData] = useState<string[]>([])
  const [BinastharrvargaData, setBinastharrvargaData] = useState<string[]>([])
  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };
  const formattedDob = new Date(dateOfBirth).toLocaleDateString('en-GB');
  const formattedTob = timeOfBirth;
  const formattedLat = parseFloat(latitude.toString()).toFixed(2);
  const formattedLon = parseFloat(longitude.toString()).toFixed(1);
  const formattedTz = timezone;
  const formattedLang = language ? language : 'en';

  const fetchchartData = async (div: string) => {
    try {
      const north = await fetch(`https://api.vedicastroapi.com/v3-json/horoscope/chart-image?dob=${formattedDob}&tob=${formattedTob}&lat=${formattedLat}&lon=${formattedLon}&tz=${formattedTz}&div=${div}&color=%23ff3366&style=${chartStatus}&api_key=72a5ab7e-aae6-5da8-8fa4-72175f05a260&lang=${formattedLang}&font_size=12&font_style=roboto&colorful_planets=0&size=300&stroke=2&format=base64&year=2024&transit_date=21/11/2024`);
      const northData = await north.text();
      setChartResponseImages((prevImages) => [...prevImages, northData]);
      setchartSvg(northData)
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleClick = (status: string) => {
    setChartStatus(status);
    setChartResponseImages([])
      const fetchAllCharts = async () => {
        for (const div of chartImages) {
          await fetchchartData(div);
        }
      };
      fetchAllCharts();
  };
  console.log("nice",chartStatus)
  const fetchplanetryData = async () => {
    try {
      const res = await fetch(`https://api.vedicastroapi.com/v3-json/horoscope/planet-report?dob=${formattedDob}&tob=${formattedTob}&lat=${formattedLat}&lon=${formattedLon}&tz=${formattedTz}&api_key=2bf60a31-ce09-5a51-abb4-900e7a710717&planet=Jupiter&lang=${formattedLang}`)
      const resData = await res.json();
      setplanetData(resData?.response);
    } catch (error) {
      console.error("error", error)
    }
  }
  const fetchAstharvargaData = async () => {
    const res = await fetch(`https://api.vedicastroapi.com/v3-json/horoscope/ashtakvarga?dob=${formattedDob}&tob=${formattedTob}&lat=${formattedLat}&lon=${formattedLon}&tz=${formattedTz}&api_key=72a5ab7e-aae6-5da8-8fa4-72175f05a260&lang=${language}`)
    const data = await res.json();
    setAstharvargaData(data?.response);
  }
  const fetchBinastharvargadata = async () => {
    const res = await fetch(`https://api.vedicastroapi.com/v3-json/horoscope/binnashtakvarga?dob=${formattedDob}&tob=${formattedTob}&lat=${formattedLat}&lon=${formattedLon}&tz=${formattedTz}&api_key=72a5ab7e-aae6-5da8-8fa4-72175f05a260&lang=${formattedLang}&planet=Ascendant`)
    const data = await res.json();
    setBinastharrvargaData(data?.response);
  }
  const fetchDoshadata = async () => {
    const mangalDoshfetch = await fetch(`https://api.vedicastroapi.com/v3-json/dosha/mangal-dosh?dob=11/03/1994&tob=11:40&lat=11&lon=77&tz=5.5&api_key=72a5ab7e-aae6-5da8-8fa4-72175f05a260&lang=en`)
    const mangalres = await mangalDoshfetch.json();
    setmangalDosh(mangalres?.response);

    const KaalsarpDoshfetch = await fetch(`https://api.vedicastroapi.com/v3-json/dosha/kaalsarp-dosh?dob=23/02/1985&tob=05:40&lat=11&lon=77&tz=5.5&api_key=72a5ab7e-aae6-5da8-8fa4-72175f05a260&lang=en`)
    const kalsarres = await KaalsarpDoshfetch.json();
    setKaalsarpDosh(kalsarres?.response);

    const manglikDoshfetch = await fetch(`https://api.vedicastroapi.com/v3-json/dosha/manglik-dosh?dob=21/04/2021&tob=11:40&lat=11&lon=77&tz=5.5&api_key=72a5ab7e-aae6-5da8-8fa4-72175f05a260&lang=en`)
    const manglikres = await manglikDoshfetch.json();
    setManglikDosh(manglikres?.response);

    const pitraDoshfetch = await fetch(`https://api.vedicastroapi.com/v3-json/dosha/pitra-dosh?dob=21/04/2021&tob=11:40&lat=11&lon=77&tz=5.5&api_key=72a5ab7e-aae6-5da8-8fa4-72175f05a260&lang=en`)
    const pitrares = await pitraDoshfetch.json();
    setPitraDosh(pitrares?.response)

    const pasamayaDoshfetch = await fetch(`https://api.vedicastroapi.com/v3-json/dosha/papasamaya?dob=21/04/2021&tob=11:40&lat=11&lon=77&tz=5.5&api_key=72a5ab7e-aae6-5da8-8fa4-72175f05a260&lang=en`)
    const papres = await pasamayaDoshfetch.json();
    setPapasamaya(papres?.response);
  }
  useEffect(() => {
    if (activeIndex === 1) {
      fetchplanetryData();
    }
    if (activeIndex === 2) {
      setChartResponseImages([])
      const fetchAllCharts = async () => {
        for (const div of chartImages) {
          await fetchchartData(div);
        }
      };
      fetchAllCharts();
    }
    if (activeIndex === 3) {
      fetchAstharvargaData();
    }
    if (activeIndex === 4) {
      fetchBinastharvargadata();
    }
    if (activeIndex === 5) {
      fetchDoshadata();
    }
  }, [activeIndex]);

  // const activeData = items[activeIndex][1];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4 text-center">Zodiac Tabs</h1>

      {/* Navigation Tabs */}
      <div className="hidden sm:flex justify-between bg-blue-600 md:h-12 items-center rounded-full overflow-hidden mb-5">
        {dataa.map((item, index) => (
          <button
            onClick={() => handleTabClick(index)}
            className={`flex-1 h-full border  shadow-md ${activeIndex === index
              ? "bg-orange-500 text-white"
              : "bg-orange-100 text-orange-500"
              } hover:bg-orange-200`}
          >
            {/* @ts-ignore */}
            {item}
          </button>
        ))}
      </div>

      <div className="flex sm:hidden justify-center mb-4 space-x-4 flex-wrap">
        <select onChange={(e) => handleTabClick(parseInt(e.target.value))} className="w-full p-1 rounded-md bg-orange-100 text-orange-500 border border-orange-500 py-2">
          {items.map(([key, value], index) => (
            //@ts-ignore
            <option key={key} value={index}>{value.zodiac}</option>
          ))}
        </select>
      </div>

      {activeIndex === 0 && (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border  border-orange-500  overflow-hidden rounded-3xl shadow-lg">
            <thead>
              <tr className="bg-orange-300 text-orange-900 text-sm font-semibold uppercase">
                {/* <th className="px-6 py-3 border-b border-orange-500">Field</th>
              <th className="px-6 py-3 border-b border-orange-500">Value</th> */}
                <th className="px-6 py-3 border-b border-orange-500"> personal data</th>
              </tr>
            </thead>
            <tbody>
              <tr
                key="0"
                className="bg-orange-100 text-orange-900 text-sm font-semibold uppercase"
              >
                <td className="px-6 py-3 border-b border-orange-500">Personal data</td>
              </tr>
              {/* {Object.entries(activeData).map(([field, value], index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-orange-100" : "bg-orange-50"
                  } hover:bg-orange-200 transition duration-150`}
              >
                <td className="px-6 py-3 border-b border-orange-500 capitalize">
                  {field.replace(/_/g, " ")}
                </td>
                <td className="px-6 py-3 border-b border-orange-500">
                  {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
                </td>
              </tr>
            ))} */}
            </tbody>
          </table>
        </div>
      )}
      {activeIndex === 1 && (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-orange-500  overflow-hidden rounded-3xl shadow-lg">
            <thead>
              <tr className="bg-orange-300 text-orange-900 text-sm font-semibold uppercase">
                <th className="px-6 py-3 border-b border-orange-500">Key</th>
                <th className="px-6 py-3 border-b border-orange-500">Value</th>
              </tr>
            </thead>
            <tbody>
              {planetData.length > 0 &&
                Object.entries(planetData[0]).map(([key, value], index) => (
                  <tr key={index} className="text-orange-200">
                    <td className="px-6 py-3 border-b border-orange-500">{key}</td>
                    <td className="px-6 py-3 border-b border-orange-500">
                      {Array.isArray(value) ? (
                        value.join(", ") // Render arrays as a comma-separated string
                      ) : typeof value === "string" || typeof value === "number" ? (
                        value
                      ) : (
                        JSON.stringify(value) // Safely render objects or other data types
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
      {activeIndex === 2 && (
        <div className="overflow-x-auto flex flex-col">
          <div className="flex items-center justify-center gap-5 p-2 pb-3">
            <button className="px-4 py-2 bg-yellow-400 rounded-full hover:bg-white border" onClick={() => handleClick("north")}>North Indian</button>
            <button className="px-4 py-2 bg-yellow-400 rounded-full hover:bg-white border" onClick={() => handleClick("south")}>South Indian</button>
          </div>
          <table className="table-auto w-full overflow-hidden shadow-lg">

            <tbody>
              <div className=" bg-blue-600">
                {chartResponseImages?.map((item) => (
                  <div
                    dangerouslySetInnerHTML={{ __html: item }}
                    style={{ width: "500px", height: "500px" }}
                  />
                ))}
              </div>
            </tbody>
          </table>
        </div>
      )}
      {activeIndex === 3 && (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-orange-500  overflow-hidden rounded-3xl shadow-lg">
            <thead>
              <tr className="bg-orange-300 text-orange-900 text-sm font-semibold uppercase">
                <th className="px-6 py-3 border-b border-orange-500">Planets</th>

              </tr>
            </thead>
            <tbody className="bg-orange-200 ">
              {astharvargaData?.ashtakvarga_order?.length > 0 ? (
                <div className="ashtakvarga-container">
                  {astharvargaData.ashtakvarga_order.map((planet, index) => (
                    <div key={index} className="diamond-grid-wrapper">
                      {/* Render planet name */}
                      <div className="grid-title">{planet}</div>

                      {/* Render diamond grid */}
                      <div className="diamond-grid">
                        <div className="grid-cell top-left">
                          {astharvargaData.ashtakvarga_points[index]?.[0] || "-"}
                        </div>
                        <div className="grid-cell top">
                          {astharvargaData.ashtakvarga_points[index]?.[1] || "-"}
                        </div>
                        <div className="grid-cell top-right">
                          {astharvargaData.ashtakvarga_points[index]?.[2] || "-"}
                        </div>
                        <div className="grid-cell left">
                          {astharvargaData.ashtakvarga_points[index]?.[3] || "-"}
                        </div>
                        <div className="grid-cell center">
                          {astharvargaData.ashtakvarga_points[index]?.[4] || "-"}
                        </div>
                        <div className="grid-cell right">
                          {astharvargaData.ashtakvarga_points[index]?.[5] || "-"}
                        </div>
                        <div className="grid-cell bottom-left">
                          {astharvargaData.ashtakvarga_points[index]?.[6] || "-"}
                        </div>
                        <div className="grid-cell bottom">
                          {astharvargaData.ashtakvarga_points[index]?.[7] || "-"}
                        </div>
                        <div className="grid-cell bottom-right">
                          {astharvargaData.ashtakvarga_points[index]?.[8] || "-"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-orange-200 text-center">No data available</div>
              )}


            </tbody>
          </table>
        </div>
      )}
      {activeIndex === 4 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-orange-200 rounded-lg">
          {BinastharrvargaData && Object.keys(BinastharrvargaData).length > 0 ? (
            Object.entries(BinastharrvargaData).map(([planet, points], index) => (
              <div
                key={index}
                className="border rounded-3xl shadow-lg p-4 bg-white text-orange-900"
              >
                {/* Planet Name */}
                <h3 className="text-center font-semibold text-lg uppercase mb-4">
                  {planet}
                </h3>

                {/* Points Grid */}
                <div className="grid grid-cols-4 ">
                  {points.map((point, pointIndex) => (
                    <div
                      key={pointIndex}
                      className={`flex items-center justify-center h-14 w-h-14 border border-black font-bold ${point === 1 ? "bg-orange-300" : "bg-orange-200"
                        }`}
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-orange-900">
              No data available
            </div>
          )}
        </div>
      )}
      {activeIndex === 5 && (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-orange-500 overflow-hidden rounded-3xl shadow-lg mb-5">
            <caption className="bg-orange-300 py-2 font-bold">Mangal Dosh</caption>
            <tbody>
              {/* Bot Response */}
              <tr key="botResponse" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Bot Response:</strong> {mangalDosh?.bot_response}
                </td>
              </tr>

              {/* Cancellation Reason */}
              <tr key="cancellationReason" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Cancellation Reason:</strong> {mangalDosh?.cancellation?.cancellationReason}
                </td>
              </tr>

              {/* Cancellation Score */}
              <tr key="cancellationScore" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Cancellation Score:</strong> {mangalDosh?.cancellation?.cancellationScore}
                </td>
              </tr>

              {/* Factors */}
              <tr key="factors" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Factors:</strong>
                  <ul>
                    <li><strong>Moon:</strong> {mangalDosh?.factors?.moon}</li>
                    <li><strong>Rahu:</strong> {mangalDosh?.factors?.rahu}</li>
                    <li><strong>Saturn:</strong> {mangalDosh?.factors?.saturn}</li>
                  </ul>
                </td>
              </tr>

              {/* Dosha Presence */}
              <tr key="isDoshaPresent" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Is Dosha Present:</strong> {mangalDosh?.is_dosha_present ? "Yes" : "No"}
                </td>
              </tr>

              {/* Mars Dosha Presence from Lagna */}
              <tr key="isDoshaPresentMarsFromLagna" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Is Dosha Present (Mars from Lagna):</strong> {mangalDosh?.is_dosha_present_mars_from_lagna ? "Yes" : "No"}
                </td>
              </tr>

              {/* Mars Dosha Presence from Moon */}
              <tr key="isDoshaPresentMarsFromMoon" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Is Dosha Present (Mars from Moon):</strong> {mangalDosh?.is_dosha_present_mars_from_moon ? "Yes" : "No"}
                </td>
              </tr>

              {/* Anshik */}
              <tr key="isAnshik" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Is Anshik:</strong> {mangalDosh?.is_anshik ? "Yes" : "No"}
                </td>
              </tr>

              {/* mangalDosh? Score */}
              <tr key="score" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Score:</strong> {mangalDosh?.score}%
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full border border-orange-500 overflow-hidden rounded-3xl shadow-lg mb-5">
            <caption className="bg-orange-300 py-2 font-bold">Mangalik Dosh</caption>
            <tbody>
              <tr key="botResponse" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Bot Response:</strong> {ManglikDosh?.bot_response}
                </td>
              </tr>
              <tr key="factors" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Factors:</strong>
                  <ul>
                    {ManglikDosh?.factors?.length > 0 ? (
                      <>
                        {ManglikDosh.factors.map((factor, index) => (
                          <li key={index}>{factor}</li>
                        ))}
                      </>
                    ) : (
                      <span>No factors available</span>
                    )}
                  </ul>
                </td>
              </tr>

              <tr key="factors" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Aspects:</strong>
                  <ul>
                    {ManglikDosh?.aspects?.length > 0 ? (
                      <>
                        {ManglikDosh.aspects.map((aspect, index) => (
                          <li key={index}>{aspect}</li>
                        ))}
                      </>
                    ) : (
                      <span>No data available</span>
                    )}
                  </ul>
                </td>
              </tr>
              <tr key="isDoshaPresent" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Manglik By mars:</strong> {ManglikDosh?.manglik_by_mars ? "Yes" : "No"}
                </td>
              </tr>

              <tr key="isDoshaPresentMarsFromLagna" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Manglik By rahuketu:</strong> {ManglikDosh?.manglik_by_rahuketu ? "Yes" : "No"}
                </td>
              </tr>

              <tr key="isDoshaPresentMarsFromMoon" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Manglik By Saturn:</strong> {ManglikDosh?.manglik_by_saturn ? "Yes" : "No"}
                </td>
              </tr>

              <tr key="score" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Score:</strong> {mangalDosh?.score}%
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full border border-orange-500 overflow-hidden rounded-3xl shadow-lg mb-5">
            <caption className="bg-orange-300 py-2 font-bold">Kal Dosh</caption>
            <tbody>
              <tr key="botResponse" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Bot Response:</strong> {KaalsarpDosh?.bot_response}
                </td>
              </tr>
              <tr key="factors" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Factors:</strong>
                  <ul>
                    {KaalsarpDosh?.dosha_direction}
                  </ul>
                </td>
              </tr>

              <tr key="factors" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Aspects:</strong>
                  <ul>
                    {KaalsarpDosh?.dosha_type}
                  </ul>
                </td>
              </tr>

              <tr key="isDoshaPresent" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Dosha Present</strong> {KaalsarpDosh?.is_dosha_present ? "Yes" : "No"}
                </td>
              </tr>

              <tr key="isDoshaPresentMarsFromLagna" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>kaal sharp rahu-ketu:</strong> {KaalsarpDosh?.rahu_ketu_axis}
                </td>
              </tr>

              

              <tr key="score" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                {KaalsarpDosh?.remedies?.length > 0 ? (
                      <>
                        {KaalsarpDosh.remedies.map((remedy:string, index:any) => (
                          <li key={index}>{remedy}</li>
                        ))}
                      </>
                    ) : (
                      <span>No factors available</span>
                    )}
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full border border-orange-500 overflow-hidden rounded-3xl shadow-lg mb-5">
            <caption className="bg-orange-300 py-2 font-bold">Pitra Dosh</caption>
            <tbody>
              <tr key="botResponse" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Bot Response:</strong> {PitraDosh?.bot_response}
                </td>
              </tr>
              <tr key="factors" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Factors:</strong>
                  <ul>
                  {PitraDosh?.effects?.length > 0 ? (
                      <>
                        {PitraDosh.effects.map((effect, index) => (
                          <li key={index}>{effect}</li>
                        ))}
                      </>
                    ) : (
                      <span>No effects available</span>
                    )}
                  </ul>
                </td>
              </tr>

              <tr key="isDoshaPresent" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Dosha Present</strong> {PitraDosh?.is_dosha_present ? "Yes" : "No"}
                </td>
              </tr>
              

              <tr key="score" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Remdies:</strong>
                {PitraDosh?.remedies?.length > 0 ? (
                      <>
                        {PitraDosh.remedies.map((remedy:string, index:any) => (
                          <li key={index}>{remedy}</li>
                        ))}
                      </>
                    ) : (
                      <span>No factors available</span>
                    )}
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full border border-orange-500 overflow-hidden rounded-3xl shadow-lg mb-5">
            <caption className="bg-orange-300 py-2 font-bold">Papsamya Dosh</caption>
            <tbody>
              <tr key="botResponse" className="bg-orange-100 text-orange-900 text-sm font-semibold">
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Mars dad</strong> {Papasamaya?.mars_papa}
                </td>
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Rahu dad</strong> {Papasamaya?.rahu_papa}
                </td>
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Saturn Dad</strong> {Papasamaya?.saturn_papa}
                </td>
                <td className="px-6 py-3 border-b border-orange-500">
                  <strong>Sun Dad</strong> {Papasamaya?.sun_papa}
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
import moon from "../../assets/moon.svg";
import matchmaking from "../../assets/matchmaking.svg";
import Form from "../../components/LoveMatching/Form/Form";
import Articles from "../../components/common/Articles/Articles";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Loader from "@/components/Loader/loader";
import { languages } from "../Horoscope/Horoscope";
import Scrollc from "@/lib/scrollc";
import { VITE_API_KEY } from "@/api/userAPI";


type MatchDetailValue = {
  // Boy properties
  boy_tara?: string;
  boy_gana?: string;
  boy_yoni?: string;
  boy_rasi?: number;
  boy_rasi_name?: string;
  boy_lord?: string;
  boy_vasya?: string;
  boy_nadi?: string;
  boy_varna?: string;

  // Girl properties
  girl_tara?: string;
  girl_gana?: string;
  girl_yoni?: string;
  girl_rasi?: number;
  girl_rasi_name?: string;
  girl_lord?: string;
  girl_vasya?: string;
  girl_nadi?: string;
  girl_varna?: string;

  // Score properties
  score?: number;
  description?: string;
  full_score?: number;

  // The specific match type score (e.g., tara: 3, yoni: 4)
  [key: string]: any;
};


type MatchDetailsData = {
  status: number;
  response: {
    tara?: MatchDetailValue;
    gana?: MatchDetailValue;
    yoni?: MatchDetailValue;
    bhakoot?: MatchDetailValue;
    grahamaitri?: MatchDetailValue;
    vasya?: MatchDetailValue;
    nadi?: MatchDetailValue;
    varna?: MatchDetailValue;
    score: number;
    bot_response: string;
  };
};


const LoveMatching = () => {
  const section = Scrollc();
  const section2 = useRef<HTMLDivElement>(null);

  const [dir, setDir] = useState("ashtakoot");
  const [data, setData] = useState<any>(null);
  const [load, setLoad] = useState<boolean>(false);

  const [boyName, setBoyName] = useState("");
  const [girlName, setGirlName] = useState("");
  const [boyDate, setBoyDate] = useState<Date | null>(null);
  const [boyTime, setBoyTime] = useState("");
  const [boyTz, setBoyTz] = useState("");
  const [boyLat, setBoyLat] = useState("");
  const [boyLon, setBoyLon] = useState("");
  const [boyLocation, setBoyLocation] = useState("");
  const [girlDate, setGirlDate] = useState<Date | null>(null);
  const [girlTime, setGirlTime] = useState("");
  const [girlTz, setGirlTz] = useState("");
  const [girlLat, setGirlLat] = useState("");
  const [girlLon, setGirlLon] = useState("");
  const [girlLocation, setGirlLocation] = useState("");
  const [lang, setLang] = useState("en");


  const clearFormFields = () => {
    setBoyName("");
    setGirlName("");
    setBoyDate(null);
    setBoyTime("");
    setBoyTz("");
    setBoyLat("");
    setBoyLon("");
    setGirlDate(null);
    setGirlTime("");
    setGirlTz("");
    setGirlLat("");
    setBoyLon("");
    setBoyLocation("");
    setGirlLon("");
    setGirlLocation("");
  };

  useEffect(() => {
    if (data && section2.current) {
      section2.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [data]);


  const handleSubmit = async () => {
    if (boyLocation === "" || boyDate === null || boyTime === "" || boyTz === "" || boyLat === "" || boyLon === "" || girlLocation === "" || girlDate === null || girlTime === "" || girlTz === "" || girlLat === "" || girlLon === "" || lang === "") {
      alert("Please fill all the fields");
      return;
    }
    setLoad(true);

    setLoad(false);

    if (!boyDate || !boyTime || !boyTz || !boyLat || !boyLon || !girlDate || !girlTime || !girlTz || !girlLat || !girlLon || !lang) {
      alert("Please fill all the fields");
      return;
    }

    if (boyDate && boyTime && boyTz && boyLat && boyLon && girlDate && girlTime && girlTz && girlLat && girlLon && lang) {
      try {
        // Formatting the boy's details
        const formattedDateOfBirthBoy = boyDate.toLocaleDateString("en-GB"); // DD/MM/YYYY
        const formattedTimeOfBirthBoy = boyTime; // HH:MM
        const formattedTimezoneBoy = parseFloat(boyTz).toFixed(1); // TimeZone in jumps of 0.5
        const formattedLatitudeBoy = parseFloat(boyLat).toFixed(2); // Latitude with decimals
        const formattedLongitudeBoy = parseFloat(boyLon).toFixed(2); // Longitude with decimals

        // Formatting the girl's details
        const formattedDateOfBirthGirl = girlDate.toLocaleDateString("en-GB"); // DD/MM/YYYY
        const formattedTimeOfBirthGirl = girlTime; // HH:MM
        const formattedTimezoneGirl = parseFloat(girlTz).toFixed(1); // TimeZone in jumps of 0.5
        const formattedLatitudeGirl = parseFloat(girlLat).toFixed(2); // Latitude with decimals
        const formattedLongitudeGirl = parseFloat(girlLon).toFixed(2); // Longitude with decimals

        // Constructing the request URL
        const requestUrl = `https://api.vedicastroapi.com/v3-json/matching/${dir}?boy_dob=${formattedDateOfBirthBoy}&boy_tob=${formattedTimeOfBirthBoy}&boy_tz=${formattedTimezoneBoy}&boy_lat=${formattedLatitudeBoy}&boy_lon=${formattedLongitudeBoy}&girl_dob=${formattedDateOfBirthGirl}&girl_tob=${formattedTimeOfBirthGirl}&girl_tz=${formattedTimezoneGirl}&girl_lat=${formattedLatitudeGirl}&girl_lon=${formattedLongitudeGirl}&api_key=${VITE_API_KEY}&lang=${lang}`;

        // Sending the API request
        const res = await axios.get(requestUrl);
        console.log(res);
        // Parsing the response into the required format
        setData(res.data);

      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      } finally {
        clearFormFields();
      }
    }
  };



  return (
    <div ref={section} className="px-4 md:px-8 py-8 md:py-10 flex flex-col items-center justify-center bg-primary-100 p-4 md:p-12">
      <div className="font-bold mb-4">
        <div className="text-xl md:text-4xl ">Love Matching</div>
        <div className="w-full relative my-3 border-b border-primary-300 flex justify-center">
          <div className="absolute -top-4 bg-primary-100">
            <img src={moon} className="text-xs" />
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8">
        <div className="bg-gradient-to-b min-w-[90vw] from-primary-400 to-primary-500 rounded-xl md:rounded-tl-[6rem] flex flex-col justify-between md:flex-row my-8 md:mt-0 py-6 pr-4 md:pr-[5%]">
          <div>
            <img src={matchmaking} className="w-[80%] md:w-full" />
          </div>
          <div>
            <div className="md:text-4xl font-bold md:my-6 my-2 flex flex-col gap-2 text-end">
              <div>FIND YOUR RIGHT ONE, THROUGH</div>
              <div>MATCHMAKING</div>
            </div>
            <div className="text-primary-300/90 font-thin text-end">
              <p>
                Our Kundali matching tool employs sophisticated algorithms to
                meticulously
              </p>
              <p> compare the birth charts of two individuals.</p>
            </div>
            <div className="w-full flex justify-center md:justify-end">
              <div className="rounded-lg bg-secondary-100 text-primary-200 p-2 px-4 md:p-4 md:px-8 md:text-xl w-max my-4 md:my-8">
                Consult now
              </div>
            </div>
          </div>
        </div>

        <div className="my-6 md:my-[6vw]">
          <div className="font-bold w-max">
            <div className="text-xl md:text-3xl flex gap-2">
              KUNDALI MATCHING{" "}
              <span className="hidden md:block">FOR RELATIONSHIPS</span>
            </div>
            <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
              <div className="absolute -top-4 bg-primary-100">
                <img src={moon} className="text-xs" />
              </div>
            </div>
          </div>
          <div className="text-sm md:text-xl flex flex-col gap-4 md:gap-6 items-center justify-between my-3 md:my-6">
            <div>
              Kundali matching, a cornerstone of Vedic astrology, is a
              time-honored practice that evaluates the compatibility between two
              individuals based on their birth charts. By analyzing the
              planetary positions and their influences on each person, this
              method offers valuable insights into the potential dynamics of a
              relationship, particularly in the context of marriage.
            </div>
            <div>
              Through Kundali matching, astrologers can identify potential
              challenges and areas of harmony within a partnership. By
              understanding the strengths and weaknesses of each individual, as
              well as the interplay between their cosmic energies, couples can
              make informed decisions and work towards building a fulfilling and
              enduring relationship.
            </div>
          </div>
        </div>
      </div>

      <div className="font-bold mb-4">
        <div className="text-xl md:text-3xl ">FILL UP PARTNER'S DETAIL</div>
        <div className="w-full relative my-3 border-b border-primary-300 flex justify-center">
          <div className="absolute -top-4 bg-primary-100">
            <img src={moon} className="text-xs" />
          </div>
        </div>
      </div>

      <div className="px-2 md:px-[10vw]">
        <div className="bg-secondary-600 rounded-lg items-center justify-center p-2 md:p-4">
          <div className="flex justify-end w-full items-center">
            <select className="align-middle py-1" onChange={(e) => setLang(e.target.value)}>
              {languages.map((item) => (
                <option value={item.key} className="cursor-pointer">{item.value}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col md:flex-row md:gap-4 gap-2">
            <Form
              name={boyName}
              time={boyTime}
              date={boyDate}
              tz={boyTz}
              lat={boyLat}
              lon={boyLon}
              title="Boy's Detail"
              setName={setBoyName}
              setDate={setBoyDate}
              setTime={setBoyTime}
              setTz={setBoyTz}
              setLat={setBoyLat}
              setLon={setBoyLon}
              setLocation={setBoyLocation}
              location={boyLocation}
            />
            <Form
              name={girlName}
              time={girlTime}
              date={girlDate}
              tz={girlTz}
              lat={girlLat}
              lon={girlLon}
              title="Girl's Detail"
              setName={setGirlName}
              setDate={setGirlDate}
              setTime={setGirlTime}
              setTz={setGirlTz}
              setLat={setGirlLat}
              setLon={setGirlLon}
              setLocation={setGirlLocation}
              location={girlLocation}
            />
          </div>
          <div className="w-full text-primary-200 rounded-full bg-secondary-100 text-center p-1 my-2 text-xl">
            <select
              className="bg-secondary-100"
              onChange={(e) => {
                setDir(e.target.value);
                setData(null);
              }}
            >
              <option value="ashtakoot">North</option>
              <option value="dashakoot">South</option>
            </select>
          </div>
          <div
            className="w-full text-primary-200 rounded-full bg-secondary-100 text-center p-1 my-2 text-xl cursor-pointer"
            onClick={() => {
              handleSubmit();
              setGirlLocation("");
              setBoyLocation("");
            }}

          >
            Match Horoscope
          </div>
        </div>
        <div className="mt-4 md:mt-10">
          {load && <Loader />}
        </div>

      </div>
      {data && (
        <div ref={section2} > <MatchDetailsTable data={data} sectionRef={section2} /></div>
      )}

      <div className="my-6 md:my-[6vw]">
        <div className="font-bold w-max">
          <div className="text-xl md:text-3xl flex gap-2">
            HOW <span className="hidden md:block">KUNDALI MATCHING</span>
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
            Our Kundali matching tool employs sophisticated algorithms to
            meticulously compare the birth charts of two individuals. By
            analyzing the planetary positions and interactions within each
            chart, we calculate the Guna Milan score, a numerical representation
            of compatibility based on various astrological factors.
            Additionally, the tool evaluates the presence of any potential
            Doshas, or negative planetary influences, that may impact the
            relationship.
          </div>
          <div>
            Through this comprehensive analysis, Kundali matching offers
            valuable insights into the dynamics of a relationship. Whether
            you're exploring the possibility of marriage or simply seeking to
            understand your connection with someone on a deeper level, our tool
            can provide valuable guidance. By understanding the strengths and
            potential challenges within your relationship, you can make informed
            decisions and work towards a harmonious partnership.
          </div>
        </div>
      </div>
      <div className="w-full">
        <Articles />
      </div>
      <div className="my-6 md:my-[4vw] w-full">
        <div className="font-bold w-max">
          <div className="text-xl md:text-3xl flex gap-2">
            MATCHMAKING{" "}
            <span className="hidden md:block">(KUNDALI MATCHING)</span> - FAQS
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
            <div className="font-bold">Q: What is Guna Milan?</div>
            <div>
              A: Guna Milan is a system used in Kundali matching to evaluate the
              compatibility between two individuals based on 36 points. A higher
              score indicates better compatibility.
            </div>
          </li>
          <li>
            <div className="font-bold">
              Q: Can Kundali matching predict a successful marriage?
            </div>
            <div>
              A: While Kundali matching provides insights into compatibility,
              the success of a marriage also depends on mutual understanding,
              respect, and effort from both partners.
            </div>
          </li>
          <li>
            <div className="font-bold">
              Q: What if our Kundalis don't match well?
            </div>
            <div>
              A: If Kundalis don't match well, astrologers may suggest remedies
              or precautions to mitigate potential challenges.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoveMatching;




const MatchDetailsTable = ({ data, sectionRef }: { data: MatchDetailsData, sectionRef: React.RefObject<HTMLDivElement> }) => {
  if (!data) return null;

  // Remove score and bot_response from the entries to process
  const { score, bot_response, ...matchDetails } = data.response;

  // Get all possible boy and girl property prefixes
  const boyProperties = ['boy_tara', 'boy_gana', 'boy_yoni', 'boy_rasi_name', 'boy_lord', 'boy_vasya', 'boy_nadi', 'boy_varna'];
  const girlProperties = ['girl_tara', 'girl_gana', 'girl_yoni', 'girl_rasi_name', 'girl_lord', 'girl_vasya', 'girl_nadi', 'girl_varna'];

  const getBoyValue = (entry: any) => {
    for (const prop of boyProperties) {
      if (entry?.[1]?.[prop]) return entry[1][prop];
    }
    return "N/A";
  };

  const getGirlValue = (entry: any) => {
    for (const prop of girlProperties) {
      if (entry?.[1]?.[prop]) return entry[1][prop];
    }
    return "N/A";
  };

  return (
    <div ref={sectionRef} className="w-full container mx-auto p-4">
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-2xl font-bold">Kundali Match Details</h1>
        <p className="text-lg font-medium">
          Total Match Score: {score} out of 36
        </p>
        <p className="text-md italic">
          {bot_response}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full mb-8 bg-orange-100 rounded-xl p-4 border-collapse border border-orange-500">
          <thead>
            <tr className="bg-orange-200">
              <th className="border border-orange-500 p-2">Aspect</th>
              <th className="border border-orange-500 p-2">Boy's Value</th>
              <th className="border border-orange-500 p-2">Girl's Value</th>
              <th className="border border-orange-500 p-2">Score</th>
              <th className="border border-orange-500 p-2">Maximum Score</th>
              <th className="border border-orange-500 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(matchDetails).map(([key, value], index) => (
              <tr key={index} className={'bg-orange-100'}>
                <td className="border border-orange-500 p-2 font-medium capitalize">
                  {key}
                </td>
                <td className="border border-orange-500 p-2 capitalize">
                  {getBoyValue([key, value])}
                </td>
                <td className="border border-orange-500 p-2 capitalize">
                  {getGirlValue([key, value])}
                </td>
                <td className="border border-orange-500 p-2 text-center font-medium">
                  {value[key] || "N/A"}
                </td>
                <td className="border border-orange-500 p-2 text-center">
                  {value?.full_score || "N/A"}
                </td>
                <td className="border border-orange-500 p-2">
                  {value?.description || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};





import moon from "../../assets/moon.svg";
import matchmaking from "../../assets/matchmaking.svg";
import Form from "../../components/LoveMatching/Form/Form";
import Articles from "../../components/common/Articles/Articles";
import { useState } from "react";
import axios from "axios";
import Loader from "@/components/Loader/loader";
import { languages } from "../Horoscope/Horoscope";
import { VITE_API_KEY } from "@/api/userAPI";

const LoveMatching = () => {
  // const [boyDate, setBoyDate] = useState("");
  // const [girlDate, setGirlDate] = useState("");
  // const [boyMonth, setBoyMonth] = useState("");
  // const [girlMonth, setGirlMonth] = useState("");
  // const [boyYear, setBoyYear] = useState("");
  // const [girlYear, setGirlYear] = useState("");
  // const [boyHr, setBoyHr] = useState("");
  // const [boyMin, setBoyMin] = useState("");
  // const [boySec, setBoySec] = useState("");
  // const [girlHr, setGirlHr] = useState("");
  // const [girlMin, setGirlMin] = useState("");
  // const [girlSec, setGirlSec] = useState("");
  // const [boyCity, setBoyCity] = useState("");
  // const [boyLat, setBoyLat] = useState("");
  // const [boyLon, setBoyLon] = useState("");
  // const [girlCity, setGirlCity] = useState("");
  // const [girlLat, setGirlLat] = useState("");
  // const [girlLon, setGirlLon] = useState("");
  const [dir, setDir] = useState("ashtakoot");
  const [data, setData] = useState<any>(null);
  const [load, setLoad] = useState<boolean>(false);

  const [boyDate, setBoyDate] = useState<Date | null>(null);
  const [boyTime, setBoyTime] = useState("");
  const [boyTz, setBoyTz] = useState("");
  const [boyLat, setBoyLat] = useState("");
  const [boyLon, setBoyLon] = useState("");
  const [girlDate, setGirlDate] = useState<Date | null>(null);
  const [girlTime, setGirlTime] = useState("");
  const [girlTz, setGirlTz] = useState("");
  const [girlLat, setGirlLat] = useState("");
  const [girlLon, setGirlLon] = useState("");
  const [lang, setLang] = useState("en");




  // const handleSubmit = async () => {
  //   setLoad(true);
  //   console.log(boySec, girlSec);
  //   const resBoy = await axios.get(
  //     `https://api.vedicastroapi.com/v3-json/utilities/geo-search?city=${boyCity}&api_key=${process.env.VITE_API_KEY}`
  //   );
  //   const rb = resBoy?.data.response.filter(
  //     (items: any) => items.country === "IN"
  //   );
  //   setBoyLat(rb[0].coordinates[0]);
  //   setBoyLon(rb[0].coordinates[1]);

  //   const resGirl = await axios.get(
  //     `https://api.vedicastroapi.com/v3-json/utilities/geo-search?city=${girlCity}&api_key=${process.env.VITE_API_KEY}`
  //   );
  //   const rg = resGirl?.data.response.filter(
  //     (items: any) => items.country === "IN"
  //   );
  //   setGirlLat(rg[0].coordinates[0]);
  //   setGirlLon(rg[0].coordinates[1]);

  //   await axios
  //     .get(
  //       `https://api.vedicastroapi.com/v3-json/matching/${dir}?boy_dob=${boyDate}/${boyMonth}/${boyYear}&boy_tob=${boyHr}:${boyMin}&boy_tz=5.5&boy_lat=${boyLat}&boy_lon=${boyLon}&girl_dob=${girlDate}/${girlMonth}/${girlYear}&girl_tob=${girlHr}:${girlMin}&girl_tz=5.5&girl_lat=${girlLat}&girl_lon=${girlLon}&api_key=${process.env.VITE_API_KEY}&lang=en`
  //     )
  //     .then((res) => {
  //       setData(res.data.response);
  //       console.log(res.data.response);
  //       console.log(res);
  //     });

  //   setLoad(false);
  // };



  const handleSubmit = async () => {
    setLoad(true);
    console.log(
      boyDate, "boy date",
      boyTime, "boy time",
      boyTz, "boy tz",
      boyLat, "boy lat",
      boyLon, "boy lon",
      girlDate, "girl date",
      girlTime, "girl time",
      girlTz, "girl tz",
      girlLat, "girl lat",
      girlLon, "girl lon",
      lang, "lang"
    );
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

        // Parsing the response into the required format
        console.log(res);
        setData(res.data.response);

      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      } finally {
        setLoad(false);
        setBoyDate(null);
        setBoyTime("");
        setBoyTz("");
        setBoyLat("");
        setBoyLon("");
        setGirlDate(null);
        setGirlTime("");
        setGirlTz("");
        setGirlLat("");
        setGirlLon("");
      }
    }
  };



  return (
    <div className="px-4 md:px-8 py-8 md:py-20 flex flex-col items-center justify-center bg-primary-100 p-4 md:p-12">
      <div className="font-bold mb-4">
        <div className="text-xl md:text-3xl ">Love Matching</div>
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
              title="Boy's Detail"
              setDate={setBoyDate}
              setTime={setBoyTime}
              setTz={setBoyTz}
              setLat={setBoyLat}
              setLon={setBoyLon}
            />
            <Form
              title="Girl's Detail"
              setDate={setGirlDate}
              setTime={setGirlTime}
              setTz={setGirlTz}
              setLat={setGirlLat}
              setLon={setGirlLon}
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
            onClick={handleSubmit}
          >
            Match Horoscope
          </div>
        </div>
        <div className="mt-4 md:mt-10">
          {load && <Loader />}
        </div>
        {/* {data && (
          <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold mb-4 text-center">Match Details</h1>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border border-orange-500 bg-orange-100">
                <thead>
                  <tr className="bg-orange-200">
                    <th className="px-4 py-2 border border-orange-500">Category</th>
                    <th className="px-4 py-2 border border-orange-500">Boy</th>
                    <th className="px-4 py-2 border border-orange-500">Girl</th>
                    <th className="px-4 py-2 border border-orange-500">Score</th>
                    <th className="px-4 py-2 border border-orange-500">Description</th>
                    <th className="px-4 py-2 border border-orange-500">Full Score</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    Object.entries(data).map(([key, value], index) => (
                      <tr key={index} className="border-t">
                        <td className="px-4 py-2 border border-orange-500 capitalize">{key}</td>
                        <td className="px-4 py-2 border border-orange-500">
                          {value.boy_tara ||
                            value.boy_gana ||
                            value.boy_yoni ||
                            value.boy_rasi_name ||
                            value.boy_lord ||
                            value.boy_vasya ||
                            value.boy_nadi ||
                            value.boy_varna ||
                            "N/A"}
                        </td>
                        <td className="px-4 py-2 border border-orange-500">
                          {value.girl_tara ||
                            value.girl_gana ||
                            value.girl_yoni ||
                            value.girl_rasi_name ||
                            value.girl_lord ||
                            value.girl_vasya ||
                            value.girl_nadi ||
                            value.girl_varna ||
                            "N/A"}
                        </td>
                        <td className="px-4 py-2 border border-orange-500">{value.score || "N/A"}</td>
                        <td className="px-4 py-2 border border-orange-500">{value.description || "N/A"}</td>
                        <td className="px-4 py-2 border border-orange-500">{value.full_score || "N/A"}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )} */}
      </div>
      {data && (
        <div className="w-full container mx-auto p-4">
          <h1 className="text-xl font-bold mb-4 text-center">Match Details</h1>
          <div className="overflow-x-auto">
            <table className="w-full mb-8 bg-orange-100 rounded-xl p-4 border-collapse border border-orange-500">
              <thead>
                <tr className="bg-orange-200">
                  <th className="border border-orange-500 p-2">Category</th>
                  <th className="border border-orange-500 p-2">Boy</th>
                  <th className="border border-orange-500 p-2">Girl</th>
                  <th className="border border-orange-500 p-2">Score</th>
                  <th className="border border-orange-500 p-2">Description</th>
                  <th className="border border-orange-500 p-2">Full Score</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  Object.entries(data).map(([key, value], index) => (
                    <tr key={index} className="border-t">
                      <td className="border border-orange-500 p-2 capitalize">{key}</td>
                      <td className="border border-orange-500 p-2">
                        {value.boy_tara ||
                          value.boy_gana ||
                          value.boy_yoni ||
                          value.boy_rasi_name ||
                          value.boy_lord ||
                          value.boy_vasya ||
                          value.boy_nadi ||
                          value.boy_varna ||
                          "N/A"}
                      </td>
                      <td className="border border-orange-500 p-2">
                        {value.girl_tara ||
                          value.girl_gana ||
                          value.girl_yoni ||
                          value.girl_rasi_name ||
                          value.girl_lord ||
                          value.girl_vasya ||
                          value.girl_nadi ||
                          value.girl_varna ||
                          "N/A"}
                      </td>
                      <td className="border border-orange-500 p-2">{value.score || "N/A"}</td>
                      <td className="border border-orange-500 p-2">{value.description || "N/A"}</td>
                      <td className="border border-orange-500 p-2">{value.full_score || "N/A"}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
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



const MatchTable = ({ response }: { response: any }) => {
  const { score, bot_response, ...details } = response;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4 text-center">Match Details</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-orange-500 bg-orange-100">
          <thead>
            <tr className="bg-orange-200">
              <th className="px-4 py-2 border border-orange-500">Category</th>
              <th className="px-4 py-2 border border-orange-500">Boy</th>
              <th className="px-4 py-2 border border-orange-500">Girl</th>
              <th className="px-4 py-2 border border-orange-500">Score</th>
              <th className="px-4 py-2 border border-orange-500">Description</th>
              <th className="px-4 py-2 border border-orange-500">Full Score</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(details).map(([key, value], index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 border border-orange-500 capitalize">{key}</td>
                <td className="px-4 py-2 border border-orange-500">
                  {value.boy_tara || value.boy_gana || value.boy_yoni || value.boy_rasi_name || value.boy_lord || value.boy_vasya || value.boy_nadi || value.boy_varna || "N/A"}
                </td>
                <td className="px-4 py-2 border border-orange-500">
                  {value.girl_tara || value.girl_gana || value.girl_yoni || value.girl_rasi_name || value.girl_lord || value.girl_vasya || value.girl_nadi || value.girl_varna || "N/A"}
                </td>
                <td className="px-4 py-2 border border-orange-500">{value[key] || "N/A"}</td>
                <td className="px-4 py-2 border border-orange-500">{value.description || "N/A"}</td>
                <td className="px-4 py-2 border border-orange-500">{value.full_score || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};




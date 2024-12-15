import moon from "../../../assets/moon.svg";
import kundli from "../../../assets/kunli.svg";
import { useState } from "react";
import axios from "axios";
import Loader from "@/components/Loader/loader";

const Kundli = () => {
  const [load, setLoad] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");
  const [data, setData] = useState<any>();
  const [date, setDate] = useState<number>(1);
  const [month, setMonth] = useState<number>(1);
  const [year, setYear] = useState<number>(1900);
  const [hr, setHr] = useState<number>(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState<number>(0);
  const [lat, setLat] = useState<number>(0);
  const [lon, setLon] = useState<number>(0);

  const handleLoc=()=>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      (err) => console.log("error fetching location", err),
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }

  const handleSubmit = async() => {
    setLoad(true);
    
    console.log(lat, lon);
    if(lat===0){
      await axios
        .get(
          `https://api.vedicastroapi.com/v3-json/utilities/geo-search?city=${city}&api_key=${process.env.VITE_API_KEY}`
        )
        .then((res: any) => {
          const r = res.data.response.filter(
            (items: any) => items.country === "IN"
          );
          console.log(r);
          setLat(r[0].coordinates[0]);
          setLon(r[0].coordinates[1]);
        });
    }

    await axios
      .get(
        `https://api.vedicastroapi.com/v3-json/horoscope/planet-details?dob=${date}/${month}/${year}&tob=${hr}:${min}&lat=${lat}&lon=${lon}&tz=5.5&api_key=${process.env.VITE_API_KEY}&lang=en`
      )
      .then((pla: any) => {
        setData(pla.data.response);
        console.log(data);
        setLoad(false);
      });    
  };

  const renderPlanetaryData = () => {
    const planets = Object.keys(data).filter((key:any) => !isNaN(key)); // Filters out non-numeric keys

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
              {/* <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                <div className="flex flex-col gap-1 md:basis-2/3">
                  <label className="font-bold">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="rounded-md border p-1 px-2 border-primary-300"
                  />
                </div>
                <div className="flex flex-col gap-1 md:basis-1/3">
                  <label className="font-bold">Gender</label>
                  <div className="flex w-full">
                    <label
                      htmlFor="male"
                      className={`p-1 px-2 border-primary-300 ${
                        gender === "male"
                          ? "bg-secondary-100 text-primary-200"
                          : "bg-primary-200"
                      } w-1/2 text-center rounded-md border`}
                      onClick={() => setGender("male")}
                    >
                      Male
                    </label>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      className="p-1 px-2 opacity-0"
                      value="male"
                    />
                    <label
                      htmlFor="male"
                      className={`p-1 px-2 border-primary-300 ${
                        gender === "female"
                          ? "bg-secondary-100 text-primary-200"
                          : "bg-primary-200"
                      } w-1/2 text-center border rounded-md`}
                      onClick={() => setGender("female")}
                    >
                      Female
                    </label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      className="p-1 px-2 opacity-0"
                      value="female"
                    />
                  </div>
                </div>
              </div> */}
              <div className="flex md:flex-col justify-between gap-2">
                <div className="w-1/2 md:w-full flex flex-col md:flex-row justify-between gap-2 md:gap-8">
                  <div className="flex flex-col gap-1 md:basis-2/3">
                    <label className="font-bold">Day</label>
                    <input
                      type="number"
                      min={1}
                      max={31}
                      value={date}
                      placeholder="Day"
                      name="day"
                      onChange={(e) => setDate(e.target.valueAsNumber)}
                      className="rounded-md border p-1 px-2 focus:outline-none focus:ring-0"
                    />
                  </div>
                  <div className="flex flex-col gap-1 md:basis-2/3">
                    <label className="font-bold">Month</label>
                    <input
                      type="number"
                      min={1}
                      max={12}
                      value={month}
                      onChange={(e) => setMonth(e.target.valueAsNumber)}
                      placeholder="Month"
                      name="month"
                      className="rounded-md border p-1 px-2 focus:outline-none focus:ring-0"
                    />
                  </div>
                  <div className="flex flex-col gap-1 md:basis-2/3">
                    <label className="font-bold">Year</label>
                    <input
                      type="number"
                      min={1900}
                      value={year}
                      onChange={(e) => setYear(e.target.valueAsNumber)}
                      placeholder="Year"
                      name="year"
                      className="rounded-md border p-1 px-2 focus:outline-none focus:ring-0"
                    />
                  </div>
                </div>
                <div className="w-1/2 md:w-full flex flex-col md:flex-row justify-between gap-2 md:gap-8">
                  <div className="flex flex-col gap-1 md:basis-2/3">
                    <label className="font-bold">Hrs</label>
                    <input
                      type="number"
                      min={0}
                      max={23}
                      value={hr}
                      onChange={(e) => setHr(e.target.valueAsNumber)}
                      placeholder="Hours"
                      name="hrs"
                      className="rounded-md border p-1 px-2 focus:outline-none focus:ring-0"
                    />
                  </div>
                  <div className="flex flex-col gap-1 md:basis-2/3">
                    <label className="font-bold">Min</label>
                    <input
                      type="number"
                      min={0}
                      max={59}
                      value={min}
                      onChange={(e) => setMin(e.target.valueAsNumber)}
                      placeholder="Minute"
                      name="min"
                      className="rounded-md border p-1 px-2 focus:outline-none focus:ring-0"
                    />
                  </div>
                  <div className="flex flex-col gap-1 md:basis-2/3">
                    <label className="font-bold">Sec</label>
                    <input
                      type="number"
                      min={0}
                      max={59}
                      value={sec}
                      onChange={(e) => setSec(e.target.valueAsNumber)}
                      placeholder="Second"
                      name="sec"
                      className="rounded-md border p-1 px-2 focus:outline-none focus:ring-0"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 md:basis-2/3 mb-2">
                <label className="font-bold">City of Birth</label>
                <input
                  type="text"
                  placeholder="City of Birth"
                  name="city"
                  minLength={3}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="rounded-md border p-1 px-2 focus:outline-none focus:ring-0"
                />
              </div>

              <div className="flex gap-2 md:justify-between">
                {/* <div className="bg-primary-200 font-bold rounded-md shadow-lg p-1 px-2 text-secondary-100">
                  [+] SETTINGS
                </div> */}
                <div className="flex gap-2">
                  <div
                    onClick={handleLoc}
                    className="bg-primary-200 font-bold rounded-md shadow-lg cursor-pointer p-1 px-2 text-secondary-100"
                  >
                    CURRENT LOCATION
                  </div>
                  {/* <div className="bg-primary-200 font-bold rounded-md shadow-lg p-1 px-2 text-secondary-100">
                    NOW
                  </div> */}
                </div>
              </div>
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
          {load && <Loader />}
          {data && (
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
          )}
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
        <li>
          <div className="font-bold">
            Q: What information do I need to generate my Janam Kundali?
          </div>
          <div>
            A: You need your exact birth date, time, and place to generate an
            accurate Janam Kundali.
          </div>
        </li>
        <li>
          <div className="font-bold">
            Q: Can a Janam Kundali change over time?
          </div>
          <div>
            A: The Janam Kundali remains constant as it is based on your birth
            details. However, the interpretation of its aspects can evolve with
            time and life experiences.
          </div>
        </li>
        <li>
          <div className="font-bold">
            Q: How can Janam Kundali help me in my daily life?
          </div>
          <div>
            A: By understanding your Janam Kundali, you can make better
            decisions, understand your strengths and weaknesses, and navigate
            challenges more effectively.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Kundli;


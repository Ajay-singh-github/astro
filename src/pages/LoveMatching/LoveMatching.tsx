import moon from "../../assets/moon.svg";
import matchmaking from "../../assets/matchmaking.svg";
import Form from "../../components/LoveMatching/Form/Form";
import Articles from "../../components/common/Articles/Articles";
import { useState } from "react";
import axios from "axios";
import Loader from "@/components/Loader/loader";

const LoveMatching = () => {
  const [boyDate, setBoyDate] = useState("");
  const [girlDate, setGirlDate] = useState("");
  const [boyMonth, setBoyMonth] = useState("");
  const [girlMonth, setGirlMonth] = useState("");
  const [boyYear, setBoyYear] = useState("");
  const [girlYear, setGirlYear] = useState("");
  const [boyHr, setBoyHr] = useState("");
  const [boyMin, setBoyMin] = useState("");
  const [boySec, setBoySec] = useState("");
  const [girlHr, setGirlHr] = useState("");
  const [girlMin, setGirlMin] = useState("");
  const [girlSec, setGirlSec] = useState("");
  const [boyCity, setBoyCity] = useState("");
  const [boyLat, setBoyLat] = useState("");
  const [boyLon, setBoyLon] = useState("");
  const [girlCity, setGirlCity] = useState("");
  const [girlLat, setGirlLat] = useState("");
  const [girlLon, setGirlLon] = useState("");
  const [dir, setDir] = useState("ashtakoot");
  const [data, setData] = useState<any>(null);
  const [load, setLoad] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoad(true);
    console.log(boySec, girlSec);
    const resBoy = await axios.get(
      `https://api.vedicastroapi.com/v3-json/utilities/geo-search?city=${boyCity}&api_key=${process.env.VITE_API_KEY}`
    );
    const rb = resBoy?.data.response.filter(
      (items: any) => items.country === "IN"
    );
    setBoyLat(rb[0].coordinates[0]);
    setBoyLon(rb[0].coordinates[1]);

    const resGirl = await axios.get(
      `https://api.vedicastroapi.com/v3-json/utilities/geo-search?city=${girlCity}&api_key=${process.env.VITE_API_KEY}`
    );
    const rg = resGirl?.data.response.filter(
      (items: any) => items.country === "IN"
    );
    setGirlLat(rg[0].coordinates[0]);
    setGirlLon(rg[0].coordinates[1]);

    await axios
      .get(
        `https://api.vedicastroapi.com/v3-json/matching/${dir}?boy_dob=${boyDate}/${boyMonth}/${boyYear}&boy_tob=${boyHr}:${boyMin}&boy_tz=5.5&boy_lat=${boyLat}&boy_lon=${boyLon}&girl_dob=${girlDate}/${girlMonth}/${girlYear}&girl_tob=${girlHr}:${girlMin}&girl_tz=5.5&girl_lat=${girlLat}&girl_lon=${girlLon}&api_key=${process.env.VITE_API_KEY}&lang=en`
      )
      .then((res) => {
        setData(res.data.response);
        console.log(res);
      });

    setLoad(false);
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
          <div className="flex flex-col md:flex-row md:gap-4 gap-2">
            <Form
              title="Boy's Detail"
              setDay={setBoyDate}
              setMonth={setBoyMonth}
              setYear={setBoyYear}
              setHr={setBoyHr}
              setMin={setBoyMin}
              setSec={setBoySec}
              setCity={setBoyCity}
            />
            <Form
              title="Girl's Detail"
              setDay={setGirlDate}
              setMonth={setGirlMonth}
              setYear={setGirlYear}
              setHr={setGirlHr}
              setMin={setGirlMin}
              setSec={setGirlSec}
              setCity={setGirlCity}
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
          {data &&
            (dir === "dashakoot" ? (
              <div className="rounded-lg bg-primary-200 p-2 md:p-6">
                <div className="flex flex-col gap-2 md:gap-4">
                  <h1 className="text-2xl md:text-4xl font-bold">
                    Dashakoot Match
                  </h1>

                  {/* Dina Section */}
                  <h2 className="text-xl md:text-3xl font-bold">Dina</h2>
                  <p>
                    <strong>Boy's Star:</strong> {data.dina.boy_star}
                  </p>
                  <p>
                    <strong>Girl's Star:</strong> {data.dina.girl_star}
                  </p>
                  <p>
                    <strong>Dina Score:</strong> {data.dina.dina}
                  </p>
                  <p>
                    <strong>Description:</strong> {data.dina.description}
                  </p>
                  <p>
                    <strong>Full Score:</strong> {data.dina.full_score}
                  </p>

                  {/* Gana Section */}
                  <h2 className="text-xl md:text-3xl font-bold">Gana</h2>
                  <p>
                    <strong>Boy's Gana:</strong> {data.gana.boy_gana}
                  </p>
                  <p>
                    <strong>Girl's Gana:</strong> {data.gana.girl_gana}
                  </p>
                  <p>
                    <strong>Gana Score:</strong> {data.gana.gana}
                  </p>
                  <p>
                    <strong>Description:</strong> {data.gana.description}
                  </p>
                  <p>
                    <strong>Full Score:</strong> {data.gana.full_score}
                  </p>

                  {/* Mahendra Section */}
                  <h2 className="text-xl md:text-3xl font-bold">Mahendra</h2>
                  <p>
                    <strong>Boy's Star:</strong> {data.mahendra.boy_star}
                  </p>
                  <p>
                    <strong>Girl's Star:</strong> {data.mahendra.girl_star}
                  </p>
                  <p>
                    <strong>Mahendra Score:</strong> {data.mahendra.mahendra}
                  </p>
                  <p>
                    <strong>Description:</strong> {data.mahendra.description}
                  </p>
                  <p>
                    <strong>Full Score:</strong> {data.mahendra.full_score}
                  </p>

                  {/* Sthree Section */}
                  <h2 className="text-xl md:text-3xl font-bold">Sthree</h2>
                  <p>
                    <strong>Boy's Star:</strong> {data.sthree.boy_star}
                  </p>
                  <p>
                    <strong>Girl's Star:</strong> {data.sthree.girl_star}
                  </p>
                  <p>
                    <strong>Sthree Score:</strong> {data.sthree.sthree}
                  </p>
                  <p>
                    <strong>Description:</strong> {data.sthree.description}
                  </p>
                  <p>
                    <strong>Full Score:</strong> {data.sthree.full_score}
                  </p>

                  {/* Yoni Section */}
                  <h2 className="text-xl md:text-3xl font-bold">Yoni</h2>
                  <p>
                    <strong>Boy's Yoni:</strong> {data.yoni.boy_yoni}
                  </p>
                  <p>
                    <strong>Girl's Yoni:</strong> {data.yoni.girl_yoni}
                  </p>
                  <p>
                    <strong>Yoni Score:</strong> {data.yoni.yoni}
                  </p>
                  <p>
                    <strong>Description:</strong> {data.yoni.description}
                  </p>
                  <p>
                    <strong>Full Score:</strong> {data.yoni.full_score}
                  </p>

                  {/* Rasi Section */}
                  <h2 className="text-xl md:text-3xl font-bold">Rasi</h2>
                  <p>
                    <strong>Boy's Rasi:</strong> {data.rasi.boy_rasi}
                  </p>
                  <p>
                    <strong>Girl's Rasi:</strong> {data.rasi.girl_rasi}
                  </p>
                  <p>
                    <strong>Rasi Score:</strong> {data.rasi.rasi}
                  </p>
                  <p>
                    <strong>Description:</strong> {data.rasi.description}
                  </p>
                  <p>
                    <strong>Full Score:</strong> {data.rasi.full_score}
                  </p>

                  {/* Rasiathi Section */}
                  <h2 className="text-xl md:text-3xl font-bold">Rasiathi</h2>
                  <p>
                    <strong>Boy's Lord:</strong> {data.rasiathi.boy_lord}
                  </p>
                  <p>
                    <strong>Girl's Lord:</strong> {data.rasiathi.girl_lord}
                  </p>
                  <p>
                    <strong>Rasiathi Score:</strong> {data.rasiathi.rasiathi}
                  </p>
                  <p>
                    <strong>Description:</strong> {data.rasiathi.description}
                  </p>
                  <p>
                    <strong>Full Score:</strong> {data.rasiathi.full_score}
                  </p>

                  {/* Vasya Section */}
                  <h2 className="text-xl md:text-3xl font-bold">Vasya</h2>
                  <p>
                    <strong>Boy's Rasi:</strong> {data.vasya.boy_rasi}
                  </p>
                  <p>
                    <strong>Girl's Rasi:</strong> {data.vasya.girl_rasi}
                  </p>
                  <p>
                    <strong>Vasya Score:</strong> {data.vasya.vasya}
                  </p>
                  <p>
                    <strong>Description:</strong> {data.vasya.description}
                  </p>
                  <p>
                    <strong>Full Score:</strong> {data.vasya.full_score}
                  </p>

                  {/* Rajju Section */}
                  <h2 className="text-xl md:text-3xl font-bold">Rajju</h2>
                  <p>
                    <strong>Boy's Rajju:</strong> {data.rajju.boy_rajju}
                  </p>
                  <p>
                    <strong>Girl's Rajju:</strong> {data.rajju.girl_rajju}
                  </p>
                  <p>
                    <strong>Rajju Score:</strong> {data.rajju.rajju}
                  </p>
                  <p>
                    <strong>Description:</strong> {data.rajju.description}
                  </p>
                  <p>
                    <strong>Full Score:</strong> {data.rajju.full_score}
                  </p>

                  {/* Vedha Section */}
                  <h2 className="text-xl md:text-3xl font-bold">Vedha</h2>
                  <p>
                    <strong>Boy's Star:</strong> {data.vedha.boy_star}
                  </p>
                  <p>
                    <strong>Girl's Star:</strong> {data.vedha.girl_star}
                  </p>
                  <p>
                    <strong>Vedha Score:</strong> {data.vedha.vedha}
                  </p>
                  <p>
                    <strong>Description:</strong> {data.vedha.description}
                  </p>
                  <p>
                    <strong>Full Score:</strong> {data.vedha.full_score}
                  </p>

                  {/* Overall Score */}
                  <h2 className="text-xl md:text-3xl font-bold">Total Score</h2>
                  <p>
                    <strong>Score:</strong> {data.score}
                  </p>
                  <p>
                    <strong>Bot Response:</strong> {data.bot_response}
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-lg bg-primary-200 p-2 md:p-6">
                <div className="flex flex-col gap-2 md:gap-4">
                  <h1 className="text-2xl md:text-4xl font-bold">
                    Ashtakoot Match
                  </h1>

                  {/* Tara Section */}
                  <h2 className="text-xl md:text-3xl font-bold">Tara</h2>
                  <p>
                    <strong>Boy's Tara:</strong> {data.tara.boy_tara}
                  </p>
                  <p>
                    <strong>Girl's Tara:</strong> {data.tara.girl_tara}
                  </p>
                  <p>
                    <strong>Tara Score:</strong> {data.tara.tara}
                  </p>
                  <p>
                    <strong>Description:</strong> {data.tara.description}
                  </p>
                  <p>
                    <strong>Full Score:</strong> {data.tara.full_score}
                  </p>

                  {/* Gana Section */}
                  <h2 className="text-xl md:text-3xl font-bold">Gana</h2>
                  <p>
                    <strong>Boy's Gana:</strong> {data.gana.boy_gana}
                  </p>
                  <p>
                    <strong>Girl's Gana:</strong> {data.gana.girl_gana}
                  </p>
                  <p>
                    <strong>Gana Score:</strong> {data.gana.gana}
                  </p>
                  <p>
                    <strong>Description:</strong> {data.gana.description}
                  </p>
                  <p>
                    <strong>Full Score:</strong> {data.gana.full_score}
                  </p>

                  {/* Yoni Section */}
                  <h2 className="text-xl md:text-3xl font-bold">Yoni</h2>
                  <p>
                    <strong>Boy's Yoni:</strong> {data.yoni.boy_yoni}
                  </p>
                  <p>
                    <strong>Girl's Yoni:</strong> {data.yoni.girl_yoni}
                  </p>
                  <p>
                    <strong>Yoni Score:</strong> {data.yoni.yoni}
                  </p>
                  <p>
                    <strong>Description:</strong> {data.yoni.description}
                  </p>
                  <p>
                    <strong>Full Score:</strong> {data.yoni.full_score}
                  </p>

                  {/* Bhakoot Section */}
                  <h2 className="text-xl md:text-3xl font-bold">Bhakoot</h2>
                  <p>
                    <strong>Boy's Rasi:</strong> {data.bhakoot.boy_rasi_name} (
                    {data.bhakoot.boy_rasi})
                  </p>
                  <p>
                    <strong>Girl's Rasi:</strong> {data.bhakoot.girl_rasi_name}{" "}
                    ({data.bhakoot.girl_rasi})
                  </p>
                  <p>
                    <strong>Bhakoot Score:</strong> {data.bhakoot.bhakoot}
                  </p>
                  <p>
                    <strong>Description:</strong> {data.bhakoot.description}
                  </p>
                  <p>
                    <strong>Full Score:</strong> {data.bhakoot.full_score}
                  </p>

                  {/* Grahamaitri Section */}
                  <h2 className="text-xl md:text-3xl font-bold">Grahamaitri</h2>
                  <p>
                    <strong>Boy's Lord:</strong> {data.grahamaitri.boy_lord}
                  </p>
                  <p>
                    <strong>Girl's Lord:</strong> {data.grahamaitri.girl_lord}
                  </p>
                  <p>
                    <strong>Grahamaitri Score:</strong>{" "}
                    {data.grahamaitri.grahamaitri}
                  </p>
                  <p>
                    <strong>Description:</strong> {data.grahamaitri.description}
                  </p>
                  <p>
                    <strong>Full Score:</strong> {data.grahamaitri.full_score}
                  </p>

                  {/* Vasya Section */}
                  <h2 className="text-xl md:text-3xl font-bold">Vasya</h2>
                  <p>
                    <strong>Boy's Vasya:</strong> {data.vasya.boy_vasya}
                  </p>
                  <p>
                    <strong>Girl's Vasya:</strong> {data.vasya.girl_vasya}
                  </p>
                  <p>
                    <strong>Vasya Score:</strong> {data.vasya.vasya}
                  </p>
                  <p>
                    <strong>Description:</strong> {data.vasya.description}
                  </p>
                  <p>
                    <strong>Full Score:</strong> {data.vasya.full_score}
                  </p>

                  {/* Nadi Section */}
                  <h2 className="text-xl md:text-3xl font-bold">Nadi</h2>
                  <p>
                    <strong>Boy's Nadi:</strong> {data.nadi.boy_nadi}
                  </p>
                  <p>
                    <strong>Girl's Nadi:</strong> {data.nadi.girl_nadi}
                  </p>
                  <p>
                    <strong>Nadi Score:</strong> {data.nadi.nadi}
                  </p>
                  <p>
                    <strong>Description:</strong> {data.nadi.description}
                  </p>
                  <p>
                    <strong>Full Score:</strong> {data.nadi.full_score}
                  </p>

                  {/* Varna Section */}
                  <h2 className="text-xl md:text-3xl font-bold">Varna</h2>
                  <p>
                    <strong>Boy's Varna:</strong> {data.varna.boy_varna}
                  </p>
                  <p>
                    <strong>Girl's Varna:</strong> {data.varna.girl_varna}
                  </p>
                  <p>
                    <strong>Varna Score:</strong> {data.varna.varna}
                  </p>
                  <p>
                    <strong>Description:</strong> {data.varna.description}
                  </p>
                  <p>
                    <strong>Full Score:</strong> {data.varna.full_score}
                  </p>

                  {/* Overall Score */}
                  <h2 className="text-xl md:text-3xl font-bold">Total Score</h2>
                  <p>
                    <strong>Score:</strong> {data.score}
                  </p>
                  <p>
                    <strong>Bot Response:</strong> {data.bot_response}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
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

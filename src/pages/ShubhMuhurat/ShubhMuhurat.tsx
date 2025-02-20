import moon from "../../assets/moon.svg";
import shubhmuhurat from "../../assets/shubhmuhurat.svg";
import shubhmuhurat2 from "../../assets/shubhmuhurat2.png";
import { GiBigDiamondRing } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { TbAbc } from "react-icons/tb";
import { LuBaby } from "react-icons/lu";
import { PiBowlFood } from "react-icons/pi";
import Articles from "../../components/common/Articles/Articles";
import { shubhMuhrat } from "@/constants/constants";
import { useState } from "react";
import { MProps, MonthProps, MonthKeys } from "@/constants/types";




const ShubhMuhurat = () => {
  const [month, setMonth] = useState<MonthProps>("Jan");
  const [muhrat, setMuhrat] = useState<MProps>("Marriage");
  const months: MonthKeys[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const renderMuhrats = () => {
    return (
      <div>
        {months.map((m) => {
          return (
            <div key={m}>
              {shubhMuhrat[muhrat]?.hasOwnProperty(m) ? (
                <>
                  <div className="text-xl md:text-3xl font-bold text-center mb-4 mt-6">
                    Muhrats in {m}, 2025
                  </div>

                  <div className="text-lg md:text-2xl text-center flex flex-col justify-center items-center gap-2">

                    <table className="w-full border bg-orange-100 border-orange-500 table-auto border-collapse">
                      <thead>
                        <tr className="border-b bg-orange-200">
                          <th className="border border-orange-500 px-4 py-2">Date</th>
                          <th className="border border-orange-500 px-4 py-2">From</th>
                          <th className="border border-orange-500 px-4 py-2">To</th>
                        </tr>
                      </thead>
                      <tbody>
                        {shubhMuhrat[muhrat] &&
                          shubhMuhrat[muhrat][m]?.map((event: any) => (
                            <tr key={event.Date} className="border-b">
                              <td className="border border-orange-500 px-4 py-2">{event.Date}</td>
                              <td className="border border-orange-500 px-4 py-2">{event.Time.split("-")[0]}</td>
                              <td className="border border-orange-500 px-4 py-2">{event.Time.split("-")[1]}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </>
              ) : (
                <div className="w-full text-center font-bold my-4 text-xl md:text-3xl">
                  No Muhrats in {m}, 2025
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="py-8 md:py-10 flex flex-col items-center justify-center bg-primary-100">
      <div className="font-bold mb-4 md:mb-10">
        <div className="text-xl md:text-4xl font-bold ">Shubhmuhurat Dates</div>
        <div className="w-full relative my-3 border-b border-primary-300 flex justify-center">
          <div className="absolute -top-4 bg-primary-100">
            <img src={moon} className="text-xs" />
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 w-full ">
        <img src={shubhmuhurat} className="w-full hidden md:block" />
        <img src={shubhmuhurat2} className="w-full md:hidden" />
      </div>

      <div className="px-2 md:px-8">
        <div className="my-6 md:my-[4vw] w-full px-4 md:px-8">
          <div className="font-bold w-max">
            <div className="text-xl md:text-3xl ">
              Finding the Right Shubh Muhurat
            </div>
            <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
              <div className="absolute -top-4 bg-primary-100">
                <img src={moon} className="text-xs" />
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8 mb-6 md:mb-[4vw]">
          <div className="text-sm md:text-xl mb-4 md:mb-[2vw]">
            Shubh Muhurat, or auspicious times, play a significant role in Vedic
            astrology. These specific moments, calculated based on the positions
            of celestial bodies, are believed to be particularly favorable for
            undertaking important activities. Whether you're planning a wedding,
            purchasing property, or launching a new business, selecting the
            right Shubh Muhurat can enhance the likelihood of success and
            prosperity.
          </div>
          <div className="text-sm md:text-xl mb-4 md:mb-[2vw]">
            Astrologers carefully analyze the planetary alignments and their
            influence on various aspects of life to determine the most
            auspicious times. By aligning your actions with these favorable
            periods, you can tap into the positive cosmic energies and increase
            your chances of achieving desired outcomes.
          </div>
        </div>
      </div>

      {/* <div className="font-bold mb-4">
        <div className="text-xl md:text-3xl ">MUHURAT CALCULATOR</div>
        <div className="w-full relative my-3 border-b border-primary-300 flex justify-center">
          <div className="absolute -top-4 bg-primary-100">
            <img src={moon} className="text-xs" />
          </div>
        </div>
      </div> */}

      {/* <div className="my-6 md:my-[4vw] w-full px-4 md:px-[25vw]">
        <div className="rounded-lg bg-secondary-600 p-2 px-4 md:p-4 md:px-6 flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col gap-2 md:gap-4 w-full">
            <label className="md:text-xl">Month</label>
            <div className="flex gap-2 w-full">
              <select
                className="w-[50%] rounded-md p-2 px-4"
                value={month}
                onChange={(e) => setMonth(e.target.value as MonthProps)}
              >
                <option value="Jan">Jan</option>
                <option value="Feb">Feb</option>
                <option value="Mar">Mar</option>
                <option value="Apr">Apr</option>
                <option value="May">May</option>
                <option value="Jun">Jun</option>
                <option value="Jul">Jul</option>
                <option value="Aug">Aug</option>
                <option value="Sep">Sep</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="Dec">Dec</option>
              </select>
              <input
                type="number"
                readOnly
                min={2024}
                max={3000}
                className="w-[50%] rounded-md p-2 px-4 focus:outline-none focus:ring-0"
                defaultValue={2024}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-4 w-full">
            <label className="md:text-xl">Muhurat Events</label>
            <select
              className="w-full rounded-md p-2 px-4"
              value={muhrat}
              onChange={(e) => setMuhrat(e.target.value as MProps)}
            >
              <option value="Marriage">Marriage</option>
              <option value="Vehicle">Vehicle</option>
              <option value="Mundan">Mundan</option>
              <option value="Namkaran">Namkaran</option>
              <option value="GrihaPravesh">Griha Pravesh</option>
              <option value="Annaprashan">Annaprashan</option>
            </select>
          </div>
          
          <div className="flex w-full items-center justify-center">
            <div className="p-2 px-6 rounded-md bg-secondary-100 text-primary-200">
              Submit
            </div>
          </div>
        </div>
      </div> */}
     
      <div className="w-full md:h-lvh">
        <div className="w-full h-[10%] flex px-4 md:px-10 justify-between ">
          <div className="w-full md:w-[40%] ">
            <p className="text-[1.5rem] md:text-[2rem] font-bold">Subh Muhurat 2025</p>
            <div className="border border-black"></div>
          </div>
          <div className="w-[40%] md:w-[40%] md:block hidden">
            <p className="text-[1.5rem] md:text-[2rem] font-bold">Subh Muhurat 2026</p>
            <div className="border border-black"></div>
          </div>
        </div>

        <div className="w-full md:h-[80%] flex flex-col md:flex-row justify-between">
          <div className="px-4 md:px-8 w-full md:w-1/2">
            <div className="my-6 md:my-[4vw] w-full px-4 md:px-8 flex items-start justify-start">
              <div className="grid grid-cols-1 gap-4 md:gap-6 w-full">
                <div
                  className="border-2 border-secondary-200 p-3 flex gap-4 rounded-md cursor-pointer"
                  onClick={() => {
                    setMonth("all");
                    setMuhrat("Marriage");
                  }}
                >
                  <div className="bg-secondary-200 rounded-md flex items-center justify-center p-3">
                    <GiBigDiamondRing />
                  </div>
                  <div className="text-lg md:text-xl">Marriage Muhurat 2025</div>
                </div>
                <div
                  className="border-2 border-secondary-200 p-3 flex gap-4 rounded-md cursor-pointer"
                  onClick={() => {
                    setMonth("all");
                    setMuhrat("Vehicle");
                  }}
                >
                  <div className="bg-secondary-200 rounded-md flex items-center justify-center p-3">
                    <FaCarSide />
                  </div>
                  <div className="text-lg md:text-xl">Vehicle Purchase Muhurat 2025</div>
                </div>
                <div
                  className="border-2 border-secondary-200 p-3 flex gap-4 rounded-md cursor-pointer"
                  onClick={() => {
                    setMonth("all");
                    setMuhrat("GrihaPravesh");
                  }}
                >
                  <div className="bg-secondary-200 rounded-md flex items-center justify-center p-3">
                    <FaHome />
                  </div>
                  <div className="text-lg md:text-xl">Griha Pravesh Muhurat 2025</div>
                </div>
                <div
                  className="border-2 border-secondary-200 p-3 flex gap-4 rounded-md cursor-pointer"
                  onClick={() => {
                    setMonth("all");
                    setMuhrat("Namkaran");
                  }}
                >
                  <div className="bg-secondary-200 rounded-md flex items-center justify-center p-3">
                    <TbAbc />
                  </div>
                  <div className="text-lg md:text-xl">Naam Karan Muhurat 2025</div>
                </div>
                <div
                  className="border-2 border-secondary-200 p-3 flex gap-4 rounded-md cursor-pointer"
                  onClick={() => {
                    setMonth("all");
                    setMuhrat("Mundan");
                  }}
                >
                  <div className="bg-secondary-200 rounded-md flex items-center justify-center p-3">
                    <LuBaby />
                  </div>
                  <div className="text-lg md:text-xl">Mundan Muhurat 2025</div>
                </div>
                <div
                  className="border-2 border-secondary-200 p-3 flex gap-4 rounded-md cursor-pointer"
                  onClick={() => {
                    setMonth("all");
                    setMuhrat("Annanprashan");
                  }}
                >
                  <div className="bg-secondary-200 rounded-md flex items-center justify-center p-3">
                    <PiBowlFood />
                  </div>
                  <div className="text-lg md:text-xl">Annanprashan Muhurat 2025</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[40%] md:hidden block pl-6 ">
            <p className="text-[1.5rem] md:text-[2rem] font-bold">Subh Muhurat 2026</p>
            <div className="border border-black"></div>
          </div>
          <div className="px-4 md:px-8 w-full md:w-1/2 ">
            <div className="my-6 md:my-[4vw] w-full px-4 md:px-8 flex items-start justify-start">
              <div className="grid grid-cols-1 gap-4 md:gap-6 w-full">
                <div
                  className="border-2 border-secondary-200 p-3 flex gap-4 rounded-md cursor-pointer"
                  onClick={() => {
                    setMonth("all");
                    setMuhrat("Marriage");
                  }}
                >
                  <div className="bg-secondary-200 rounded-md flex items-center justify-center p-3">
                    <GiBigDiamondRing />
                  </div>
                  <div className="text-lg md:text-xl">Marriage Muhurat 2026</div>
                </div>
                <div
                  className="border-2 border-secondary-200 p-3 flex gap-4 rounded-md cursor-pointer"
                  onClick={() => {
                    setMonth("all");
                    setMuhrat("Vehicle");
                  }}
                >
                  <div className="bg-secondary-200 rounded-md flex items-center justify-center p-3">
                    <FaCarSide />
                  </div>
                  <div className="text-lg md:text-xl">Vehicle Purchase Muhurat 2026</div>
                </div>
                <div
                  className="border-2 border-secondary-200 p-3 flex gap-4 rounded-md cursor-pointer"
                  onClick={() => {
                    setMonth("all");
                    setMuhrat("GrihaPravesh");
                  }}
                >
                  <div className="bg-secondary-200 rounded-md flex items-center justify-center p-3">
                    <FaHome />
                  </div>
                  <div className="text-lg md:text-xl">Griha Pravesh Muhurat 2026</div>
                </div>
                <div
                  className="border-2 border-secondary-200 p-3 flex gap-4 rounded-md cursor-pointer"
                  onClick={() => {
                    setMonth("all");
                    setMuhrat("Namkaran");
                  }}
                >
                  <div className="bg-secondary-200 rounded-md flex items-center justify-center p-3">
                    <TbAbc />
                  </div>
                  <div className="text-lg md:text-xl">Naam Karan Muhurat 2026</div>
                </div>
                <div
                  className="border-2 border-secondary-200 p-3 flex gap-4 rounded-md cursor-pointer"
                  onClick={() => {
                    setMonth("all");
                    setMuhrat("Mundan");
                  }}
                >
                  <div className="bg-secondary-200 rounded-md flex items-center justify-center p-3">
                    <LuBaby />
                  </div>
                  <div className="text-lg md:text-xl">Mundan Muhurat 2026</div>
                </div>
                <div
                  className="border-2 border-secondary-200 p-3 flex gap-4 rounded-md cursor-pointer"
                  onClick={() => {
                    setMonth("all");
                    setMuhrat("Annanprashan");
                  }}
                >
                  <div className="bg-secondary-200 rounded-md flex items-center justify-center p-3">
                    <PiBowlFood />
                  </div>
                  <div className="text-lg md:text-xl">Annanprashan Muhurat 2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="px-2 md:px-8 w-full">
        <div className=" p-2 md:p-4 rounded-lg w-full flex flex-col gap-2 md:gap-4">
          <div className=" rounded-lg p-2 md:p-4 text-xl md:text-3xl font-bold text-center">
            {muhrat} Muhrat Dates
          </div>
          <div className="w-full p-2 md:p-4 rounded-lg flex flex-col gap-2 md:gap-4">
            {month === "all" ? (
              renderMuhrats()
              
            ) : (
              <div>
                <div className="text-xl md:text-3xl font-bold text-center mb-4">
                  Muhrat dates in {month}, 2025
                </div>
                {shubhMuhrat[muhrat]?.hasOwnProperty(month) && (
                  <div className="text-lg md:text-2xl text-center flex flex-col justify-center items-center gap-2">
                    <table className="w-full border bg-orange-100 border-orange-500 table-auto border-collapse">
                      <thead>
                        <tr className="border-b bg-orange-200">
                          <th className="border border-orange-500 px-4 py-2">Date</th>
                          <th className="border border-orange-500 px-4 py-2">From</th>
                          <th className="border border-orange-500 px-4 py-2">To</th>
                        </tr>
                      </thead>
                      <tbody>
                        {shubhMuhrat[muhrat][month]?.map((event: any, index: number) => (
                          <tr key={index} className="border-b">
                            <td className="border border-orange-500 px-4 py-2">{event.Date}</td>
                            <td className="border border-orange-500 px-4 py-2">{event.Time.split("-")[0]}</td>
                            <td className="border border-orange-500 px-4 py-2">{event.Time.split("-")[1]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      

      <div className="w-full">
        <Articles />
      </div>

      <div className="my-6 md:my-[4vw] w-full px-2 md:px-8">
        <div className="font-bold w-max px-2 md:px-8">
          <div className="text-xl md:text-3xl ">SHUBH MUHURAT - FAQS</div>
          <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
            <div className="absolute -top-4 bg-primary-100">
              <img src={moon} className="text-xs" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 md:px-8">
        <ul className="px-2 md:px-8 flex flex-col gap-8 text-sm md:text-xl mb-6 md:mb-[10vw]">
          <li>
            <div className="font-bold">Q: How is Shubh Muhurat calculated?</div>
            <div>
              A: Shubh Muhurat is calculated based on the positions of the Sun,
              Moon, and other planets, as well as the Tithi, Nakshatra, and
              other factors in the Panchang.
            </div>
          </li>
          <li>
            <div className="font-bold">
              Q: Can I perform important tasks outside of Shubh Muhurat?
            </div>
            <div>
              A: While it's ideal to perform significant tasks during Shubh
              Muhurat, it's not always possible. If necessary, consult an
              astrologer for remedies or alternative auspicious times.
            </div>
          </li>
          <li>
            <div className="font-bold">
              Q: Is Shubh Muhurat important for all activities?
            </div>
            <div>
              A: Shubh Muhurat is especially important for activities like
              weddings, housewarmings, and new ventures. For everyday tasks, it
              may be less critical but still beneficial.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShubhMuhurat;


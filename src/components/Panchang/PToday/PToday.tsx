import { useEffect, useState } from "react";
import moon from "../../../assets/moon.svg";
import ptoday2 from "../../../assets/ptoday2.svg";
import axios from "axios";
import Loader from "@/components/Loader/loader";

const PToday = () => {  
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [data, setData] = useState<any>();
  const [load, setLoad] = useState<boolean>(false);
  const d = new Date(Date.now());
  const date = `${String(d.getDate()).padStart(2, "0")}/${String(
    d.getMonth()
  ).padStart(2, "0")}/${d.getFullYear()}`;
  console.log(date);
  const time = `${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`

  const handleLoc = () => {
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
  };

  const getData = async()=>{
    handleLoc();
    setLoad(true);
    const res = await axios.get(
      `https://api.vedicastroapi.com/v3-json/panchang/hora-muhurta?api_key=${process.env.VITE_API_KEY}&date=${date}&tz=5.5&lat=${lat}&lon=${lon}&time=${time}&lang=en`
    );
    console.log(res.data.response)

    if(res.data.status===200){setData(res.data.response);
    setLoad(false);}
    console.log(res)

  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Set latitude and longitude from the position object
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        (err) => {
          console.log('Failed to get location. Error: ' + err.message);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      <div className="my-6 md:my-[6vw]">
        <div className="font-bold w-max">
          <div className="text-xl md:text-3xl ">UNDERSTANDING PANCHANG</div>
          <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
            <div className="absolute -top-4 bg-primary-100">
              <img src={moon} className="text-xs" />
            </div>
          </div>
        </div>
        <div className="text-sm md:text-xl flex flex-col lg:flex-row items-center justify-between my-3 md:my-6">
          Panchang is a traditional Vedic calendar that provides detailed
          information about the day's planetary positions, lunar phases, and
          other celestial events. It is an essential tool for planning important
          activities and ceremonies, ensuring they are conducted during
          auspicious times. Panchang includes five main elements: Tithi (lunar
          day), Nakshatra (star constellation), Yoga (auspicious time), Karana
          (half of a lunar day), and Var (weekday).
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="font-bold">
          <div className="text-xl md:text-3xl ">TODAY'S PANCHANG</div>
          <div className="w-full relative my-3 border-b border-primary-300 flex justify-center">
            <div className="absolute -top-4 bg-primary-100">
              <img src={moon} className="text-xs" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-6 md:my-[4vw] w-full px-4 md:px-8">
        <div className="font-bold w-max">
          <div className="text-xl md:text-3xl ">{date}</div>
          <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
            <div className="absolute -top-4 bg-primary-100">
              <img src={moon} className="text-xs" />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-sm md:text-xl mb-4 md:mb-[2vw]">
          The Panchang, a Hindu almanac, offers a wealth of information about
          the daily, weekly, and monthly movements of celestial bodies. By
          consulting the Panchang, you can gain valuable insights into the most
          auspicious times for various activities. Whether you're planning a
          wedding, starting a new business, or conducting religious ceremonies,
          the Panchang provides guidance on the best days and hours to ensure
          success and harmony.
        </div>
        <div className="text-sm md:text-xl mb-4 md:mb-[2vw]">
          By aligning your actions with the favorable planetary influences
          outlined in the Panchang, you can enhance the positive outcomes of
          your endeavors. This ancient practice helps you make informed
          decisions and seize opportunities at the most propitious moments.
        </div>
      </div>
      {
        load && <Loader />
      }
      <div className="w-full flex items-center justify-center my-6 md:my-[4vw]">
        {data && (
          <div>
            <h1 className="text-xl md:text-3xl font-bold mb-4">Hora Timings</h1>

            <div className="rounded-lg bg-primary-200 p-2 md:p-6">
              <div className="flex flex-col gap-2 md:gap-4">
                {data.horas.map((hora: any, index: number) => (
                  <div
                    key={index}
                    style={{
                      border: "1px solid #ddd",
                      padding: "10px",
                      margin: "10px 0",
                    }}
                  >
                    <h2 className="text-lg md:text-2xl font-bold">
                      {hora.hora} Hora
                    </h2>
                    <p>
                      <strong>Start Time:</strong> {hora.start}
                    </p>
                    <p>
                      <strong>End Time:</strong> {hora.end}
                    </p>
                    <p>
                      <strong>Benefits:</strong> {hora.benefits}
                    </p>
                    <p>
                      <strong>Lucky Gem:</strong> {hora.lucky_gem}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="my-6 md:my-[4vw] w-full px-4 md:px-8">
        <div className="font-bold w-max">
          <div className="text-xl md:text-3xl flex gap-2">
            UPCOMING HINDU FESTIVALS <span className="hidden md:inline">& VRAT/UPAVAS DAYS</span>
          </div>
          <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
            <div className="absolute -top-4 bg-primary-100">
              <img src={moon} className="text-xs" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 md:px-8">
        <div className="text-sm md:text-xl mb-4 md:mb-[2vw]">
          Lorem ipsum dolor sit amet consectetur. Tempor etiam ut quam gravida
          pellentesque. Pellentesque interdum turpis habitasse aenean morbi
          tempus integer leo sit. Purus mollis diam quis eleifend enim felis
          blandit volutpat. Ornare sed lobortis eget eu lobortis turpis justo.
          Quis in enim venenatis vestibulum phasellus sed lacus. Mi facilisis
          eget sit massa. Cras gravida sagittis amet malesuada.
        </div>
      </div>
      <div className="w-full flex items-center justify-center my-6 md:my-[4vw]">
        <img src={ptoday2} className="md:w-[60%]" />
      </div>
    </div>
  );
};

export default PToday;

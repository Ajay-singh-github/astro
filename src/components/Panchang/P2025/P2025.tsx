import { useEffect, useState } from "react";
// import calendar from '../../../assets/calendar.svg'
import { Calendar } from "@/components/ui/calendar";
import axios from "axios";
import Loader from "@/components/Loader/loader";
import { VITE_API_KEY } from "@/api/userAPI";
import { HoraTabsTable } from "../P2024/P2024";

const P2025 = () => {
  const [cdate, setCdate] = useState<Date | undefined>(new Date("2025-01-01"));
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [data, setData] = useState<any>();
  const [load, setLoad] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  let d = new Date("2025-01-01");
  if (typeof cdate !== "undefined" && cdate) {
    d = cdate;
  }
  const date = `${String(d.getDate()).padStart(2, "0")}/${String(
    d.getMonth() + 1
  ).padStart(2, "0")}/${d.getFullYear()}`;
  console.log(date);
  const time = `${String(d.getHours()).padStart(2, "0")}:${String(
    d.getMinutes()
  ).padStart(2, "0")}`;


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

  const getData = async () => {
    handleLoc();
    const res = await axios.get(
      `https://api.vedicastroapi.com/v3-json/panchang/hora-muhurta?api_key=${VITE_API_KEY}&date=${date}&tz=5.5&lat=${lat}&lon=${lon}&time=${time}&lang=en`
    );

    if (res.data.status === 200) {
      setData(res.data.response);
      setLoad(false);
    }else{
      setError("Something went wrong");
    }
    console.log(res);
  };

  useEffect(() => {
    getData();
    setError(null);
  }, [cdate]);
  return (
    <div className="px-4 md:px-8 mb-6 md:mb-[4vw]">
      <div className="text-sm md:text-xl mb-4 md:mb-[2vw]">
        <div>
          Detailed panchang for the current year 2024. Panchang 2024 shows the
          daily astrological aspects for each day of this year along with
          muhurat timings for different events and undertakings.
        </div>
        <div>
          Upcoming Hindu festivals this year, events and observances based on
          the Indian calendar, vrats and upavas like pradosh (प्रदोष व्रत),
          ekadashi (एकादशी व्रत), chaturdhi (चतुर्थी ) etc... is also listed
          below
        </div>
      </div>
      <div className="text-sm md:text-xl mb-4 md:mb-[2vw]">
        Calendar 2024 is shown with dates displayed. Click on a date to get
        panchangam for that day.
      </div>
      <div className="md:px-8 flex flex-col items-center justify-center gap-2 md:gap-4 mb-4 md:mb-[2vw]">
        <Calendar
          mode="single"
          selected={cdate}
          onSelect={setCdate}
          className="rounded-md border-2 bg-primary-200"
          defaultMonth={new Date(2025, 0)}
        />
      </div>
      {load && <Loader />}
      {error && <div className="flex my-3 items-center justify-center">
        <div className="w-full max-w-6xl">
          <div className="text-xl md:text-4xl font-bold text-center">{error}</div>
        </div>
      </div>}
      <div className="w-full flex items-center justify-center my-6 md:my-[4vw]">
        {data && (
          <div className="w-full flex items-center justify-center my-6 md:my-[4vw]">
            <div>
              <h1 className="text-xl md:text-3xl text-center font-bold mb-4">Hora Timings</h1>
              <HoraTabsTable data={data} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default P2025;

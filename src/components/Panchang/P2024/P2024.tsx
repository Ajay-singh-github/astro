import { useEffect, useState } from 'react';
// import calendar from '../../../assets/calendar.svg' 
import { Calendar } from "@/components/ui/calendar";
import axios from 'axios';


const P2024 = () => {
  const [cdate, setCdate] = useState<Date | undefined>(new Date());
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [data, setData] = useState<any>();
  const [load, setLoad] = useState("loading...");
  let d = new Date();
  if(typeof cdate !== "undefined" && cdate){
    d = cdate;
  }
  const date = `${String(d.getDate()).padStart(2, "0")}/${String(
    d.getMonth()+1
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
      `https://api.vedicastroapi.com/v3-json/panchang/hora-muhurta?api_key=${process.env.VITE_API_KEY}&date=${date}&tz=5.5&lat=${lat}&lon=${lon}&time=${time}&lang=en`
    );

    if (res.data.status === 200) {
      setData(res.data.response);
      setLoad("");
    }
    console.log(res);
  };

  useEffect(() => {
    getData();
    console.log("hi")
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
        />
      </div>
      <div className="w-full text-center text-xl md:text-3xl">{load}</div>
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
    </div>
  );
};

export default P2024;

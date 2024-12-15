import Loader from "@/components/Loader/loader";
import axios from "axios";
import { useEffect, useState } from "react";

const CTimings = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [data, setData] = useState<any>();
  const [load, setLoad] = useState<boolean>(false);
  const d = new Date(Date.now());
  const date = `${String(d.getDate()).padStart(2, "0")}/${String(
    d.getMonth()
  ).padStart(2, "0")}/${d.getFullYear()}`;
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
      `https://api.vedicastroapi.com/v3-json/panchang/choghadiya-muhurta?api_key=${process.env.VITE_API_KEY}&date=${date}&tz=5.5&lat=${lat}&lon=${lon}&time=${time}&lang=en`
    );

    setData(res.data.response);
    setLoad(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {load && <Loader />}
      {data && data.day && (
        <div className="rounded-lg bg-primary-200 p-2 md:p-6 w-full">
          <div className="flex flex-col gap-2 md:gap-4 w-full">
            <h1 className="text-xl md:text-3xl font-bold">
              Muhurat Timings for {data.day_of_week}
            </h1>

            {/* Day Section */}
            <h2 className="text-lg md:text-2xl font-bold">Day Muhurats</h2>
            <div>
              {data.day.map((muhurat: any, index: number) => (
                <div
                  key={index}
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    margin: "10px 0",
                  }}
                >
                  <h3 className="font-bold">{muhurat.muhurat} Muhurat</h3>
                  <p>
                    <strong>Start Time:</strong> {muhurat.start}
                  </p>
                  <p>
                    <strong>End Time:</strong> {muhurat.end}
                  </p>
                  <p>
                    <strong>Type:</strong> {muhurat.type}
                  </p>
                </div>
              ))}
            </div>

            {/* Night Section */}
            <h2 className="text-lg md:text-2xl font-bold">Night Muhurats</h2>
            <div>
              {data.night.map((muhurat: any, index: number) => (
                <div
                  key={index}
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    margin: "10px 0",
                  }}
                >
                  <h3 className="font-bold">{muhurat.muhurat} Muhurat</h3>
                  <p>
                    <strong>Start Time:</strong> {muhurat.start}
                  </p>
                  <p>
                    <strong>End Time:</strong> {muhurat.end}
                  </p>
                  <p>
                    <strong>Type:</strong> {muhurat.type}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CTimings;

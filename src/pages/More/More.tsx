import { moreItems } from "@/constants/constants";
import moon from "../../assets/moon.svg";
import Form from "@/components/more/Form";
import { useState } from "react";
import axios from "axios";

const More = () => {
  const [call, setCall] = useState(false);
  const [k, setK] = useState("");
  const [link, setLink] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [data, setData] = useState<any>({
    muntha_sign: "Cancer",
    muntha_lord: "Moon",
    varshpal_date: "Fri Apr 22 2022 11:43:03 AM",
    varsha_lagna: "Gemini",
    varsha_lagna_lord: "Mercury",
    dinratri_lord: "Mars",
    trirashi_lord: "Mercury",
    current_ayanamsa: 24.170955159462665,
  });
  const onSubmit = async(day: string, month: string, year: string, hr: string, min: string, sec: string, city: string) => {
    try{
      console.log(sec)
      const dob = day.padStart(2, "0") + "/" + String(Number(month)+1).padStart(2, "0") + "/" + year;
      const tob = hr + ":" + min;
      await axios
        .get(
          `https://api.vedicastroapi.com/v3-json/utilities/geo-search?city=${city}&api_key=${process.env.VITE_API_KEY}`
        )
        .then((res: any) => {
          const r = res.data.response.filter(
            (items: any) => items.country === "IN"
          );
          setLat(r[0].coordinates[0]);
          setLon(r[0].coordinates[1]);
          console.log(lat, lon)
        });
      const validLink = link
        .replace("Dateofbirth", dob)
        .replace("timeofbirth", tob)
        .replace("YOUR_API_KEY", process.env.VITE_API_KEY!)
        .replace("{{lat}}", lat)
        .replace("{{lon}}", lon);

      console.log(validLink)

      await axios.get(validLink).then((res) => {
        setData(res.data.response)
        console.log(res.data.response)
      });
    } catch(err){console.log(err)}
    setCall(false);
    document.body.style.overflow = "auto";
  }
  return (
    <div className="px-2 md:px-8 py-8 md:py-20 flex flex-col items-center justify-center bg-primary-100">
      <div className="font-bold mb-4 md:mb-10">
        <div className="text-xl md:text-5xl mb-6">More in Astrology</div>
        <div className="w-full relative my-3 border-b border-primary-300 flex justify-center">
          <div className="absolute -top-4 bg-primary-100">
            <img src={moon} className="text-xs" />
          </div>
        </div>
      </div>

      <div className="grid border-primary-300 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {moreItems.map((item) => (
          <div className="rounded-md md:rounded-xl bg-primary-100 border-2 border-primary-300/50">
            <div className="font-semibold p-2 md:p-4 text-xl md:text-4xl text-center bg-primary-200 rounded-t-md md:rounded-t-xl cursor-default">
              {item.name}
            </div>
            <div className="overflow-y-auto p-2 max-h-60">
              {item.content.map((content) => (
                <div
                  className="border-b border-primary-300/30 p-2 md:text-xl cursor-pointer"
                  onClick={() => {
                    setK(content.key);
                    setLink(content.link);
                    setCall(true);
                    document.body.style.overflow = "hidden";
                  }}
                >
                  {content.key}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {call && <Form onSubmit={onSubmit} setCall={setCall}/>}
      {data && (
        <div className="bg-primary-200 p-2 md:p-4 rounded-lg w-full my-4 md:my-10">
          <div className="w-full text-xl md:text-4xl text-center my-4 font-semibold">
            {k}
          </div>
          {Object.entries(data).map(([key, value]) => {
            // Check for nested objects
            if (
              typeof value === "object" &&
              !Array.isArray(value) &&
              value !== null
            ) {
              return (
                <div
                  key={key}
                  className="border border-primary-300 bg-primary-500 my-4 rounded-lg p-2 md:p-4 w-full shadow-md"
                >
                  <h3 className="md:text-3xl font-semibold mb-2">{key}</h3>
                  <div className="space-y-2">
                    {Object.entries(value).map(([nestedKey, nestedValue]) => (
                      <p key={nestedKey} className="text-sm md:text-xl">
                        <span className="font-semibold">{nestedKey}: </span>
                        {Array.isArray(nestedValue)
                          ? nestedValue.join(", ") // Handle arrays
                          : nestedValue}
                      </p>
                    ))}
                  </div>
                </div>
              );
            }

            // Check if the value is a boolean
            const content:any = typeof value === "boolean" ? (value ? "True" : "False") : value;

            return (
              <div
                key={key}
                className="border border-primary-300 bg-primary-500 my-4 rounded-lg p-2 md:p-4 w-full shadow-md"
              >
                <h3 className="md:text-3xl font-semibold mb-2">
                  {key}
                </h3>
                <div className="text-sm md:text-xl">
                  {Array.isArray(content)
                          ? content.map((con)=><div>{Array.isArray(con)
                          ? con.map((c)=><div>{c}</div>)
                          : typeof con === "object" ? Object.entries(con).map(([nestedKey, nestedValue]) => (
                      <p key={nestedKey} className="text-sm md:text-xl">
                        <span className="font-semibold">{nestedKey}: </span>
                        {Array.isArray(nestedValue)
                          ? nestedValue.join(", ") // Handle arrays
                          : nestedValue as string}
                      </p>
                    )) : con}</div>)
                          : content}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default More;

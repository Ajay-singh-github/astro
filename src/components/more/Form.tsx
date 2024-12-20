import { VITE_API_KEY } from "@/api/userAPI";
import axios from "axios";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export type Location = {
  name: string;
  alternate_name: string;
  country: string;
  country_name: string;
  full_name: string;
  coordinates: string[];
  tz: number;
  tz_dst: number;
  current_dst: boolean;
  tzone: string[];
};

interface Props {
  onSubmit(
    day: string,
    month: string,
    year: string,
    hr: string,
    min: string,
    sec: string,
    city: string
  ): void;
  setCall: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form: React.FC<Props> = ({ onSubmit, setCall }) => {
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("1980");
  const [hr, setHr] = useState<string>("0");
  const [min, setMin] = useState<string>("0");
  const [sec, setSec] = useState<string>("0");
  const [city, setCity] = useState<string>("");
  const [location, setLocation] = useState<Location[]>([]);

  const handleClick = () => {
    setCall(false);
    document.body.style.overflow = "auto";
  };

  const getLocationOptions = async (city: string) => {
    if (city.trim() === "") {
      setLocation([]);
      return;
    }
    try {
      const response = await axios.get(
        `https://api.vedicastroapi.com/v3-json/utilities/geo-search?city=${city}&api_key=${VITE_API_KEY}`
      );
      const locations = Array.isArray(response.data.response)
        ? response.data.response
        : [];
      const locationOptions = locations.filter((item:Location) => item.country === "IN");
      setLocation(locationOptions);
    } catch (error) {
      console.error("Error fetching location data:", error);
      setLocation([]);
    }
  };

  return (
    <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center bg-primary-300/50">
      <div className="rounded-lg border-4 border-primary-300 p-2 md:p-4 md:min-w-[20rem] bg-primary-100">
        <div className="bg-secondary-200 p-2 rounded text-center w-full text-xl flex gap-2">
          <span className="w-[90%]">Fill the Form</span>
          <span
            className="text-2xl flex items-center cursor-pointer"
            onClick={handleClick}
          >
            <IoMdClose />
          </span>
        </div>
        <div className="flex flex-col gap-2 w-full md:text-lg my-4">
          <label>Birth Details</label>
          <div className="flex justify-between gap-4">
            <div className="flex flex-col basis-1/3">
              <label>Day</label>
              <input
                type="number"
                min={1}
                max={31}
                value={day}
                className="p-1 border-2 rounded-md"
                onChange={(e) => setDay(e.target.value)}
              />
            </div>
            <div className="flex flex-col basis-1/3">
              <label>Month</label>
              <select
                value={month}
                className="p-1 border-2 rounded-md"
                onChange={(e) => setMonth(e.target.value)}
              >
                <option value="">Select</option>
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
            </div>
            <div className="flex flex-col basis-1/3">
              <label>Year</label>
              <input
                type="number"
                min={1}
                max={2030}
                value={year}
                className="p-1 border-2 rounded-md"
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="flex flex-col basis-1/3">
              <label>Hour</label>
              <input
                type="number"
                min={0}
                max={23}
                value={hr}
                className="p-1 border-2 rounded-md"
                onChange={(e) => setHr(e.target.value)}
              />
            </div>
            <div className="flex flex-col basis-1/3">
              <label>Minute</label>
              <input
                type="number"
                min={0}
                max={59}
                value={min}
                className="p-1 border-2 rounded-md"
                onChange={(e) => setMin(e.target.value)}
              />
            </div>
            <div className="flex flex-col basis-1/3">
              <label>Second</label>
              <input
                type="number"
                min={0}
                max={59}
                value={sec}
                className="p-1 border-2 rounded-md"
                onChange={(e) => setSec(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 relative">
            <label>Birth Place</label>
            <input
              type="text"
              value={city}
              placeholder="Enter place of birth"
              className="border-2 rounded-md p-1"
              onChange={(e) => {
                getLocationOptions(e.target.value);
                setCity(e.target.value);
              }}
            />
            {location.length > 0 && (
              <div className="absolute top-[74px] w-full h-[200px] bg-white overflow-y-auto ">
                {location.map((item) => (
                  <div
                    key={item.name}
                    className="p-2 cursor-pointer hover:bg-primary-200"
                    onClick={() => {
                      setCity(item.name);
                      setLocation([]);
                    }}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div
            className="w-full p-2 text-center border cursor-pointer text-xl bg-secondary-100 text-primary-200 rounded-lg"
            onClick={() => onSubmit(day, month, year, hr, min, sec, city)}
          >
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

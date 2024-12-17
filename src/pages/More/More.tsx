import { moreItems } from "@/constants/constants";
import moon from "../../assets/moon.svg";
import Form from "@/components/more/Form";
import { useRef, useState } from "react";
import axios from "axios";
import { VITE_API_KEY } from "@/api/userAPI";
import { IoMdClose } from "react-icons/io";
import { Location as LocationType } from "@/components/more/Form";
import { languages } from "../Horoscope/Horoscope";

const Dosha: { key: string; link: string }[] = [
  {
    key: "Mangal Dosh",
    link: "dosha/mangal-dosh",
  },
  {
    key: "Kaalsarp Dosh",
    link: "dosha/kaalsarp-dosh",
  },
  {
    key: "Manglik Dosh",
    link: "dosha/manglik-dosh",
  },
  {
    key: "Pitra Dosh",
    link: "dosha/pitra-dosh",
  },
  {
    key: "Papasamaya",
    link: "dosha/papasamaya",
  },
];

const Dashas: { key: string; link: string }[] = [
  {
    key: "Mahadasha",
    link: "dosha/maha-dasha",
  },
  {
    key: "Mahadasha Predictions",
    link: "dashas/maha-dasha-predictions",
  },
  {
    key: "antardasha",
    link: "dashas/antar-dasha",
  },
  {
    key: "charDashaCurrent",
    link: "dashas/char-dasha-current",
  },
  {
    key: "CharDashaMain",
    link: "dashas/char-dasha-main",
  },
  {
    key: "CharDashaSub",
    link: "dashas/char-dasha-sub",
  },
  {
    key: "currentMahaDashaFull",
    link: "dashas/current-mahadasha-full",
  },
  {
    key: "CurrentMahadasha",
    link: "dashas/current-mahadasha",
  },
  {
    key: "ParyantarDasha",
    link: "dashas/paryantar-dasha",
  },
  {
    key: "SpecificDasha",
    link: "dashas/specific-sub-dasha",
  },
  {
    key: "yoginiDashaMain",
    link: "dashas/yogini-dasha-main",
  },
  {
    key: "YoginiDashaSub",
    link: "dashas/yogini-dasha-sub",
  },
];

const ExtendedHoroscope: { key: string; link: string }[] = [
  {
    key: "Find Moon Sign",
    link: "extended-horoscope/find-moon-sign",
  },
  {
    key: "Find Sun Sign",
    link: "extended-horoscope/find-sun-sign",
  },
  {
    key: "Find ascendant",
    link: "extended-horoscope/find-ascendant",
  },
  {
    key: "Current Sade Sati",
    link: "extended-horoscope/current-sade-sati",
  },
  {
    key: "Extended Kundli Details",
    link: "extended-horoscope/extended-kundli-details",
  },
  {
    key: "Shad Bala",
    link: "extended-horoscope/shad-bala",
  },
  {
    key: "Sade Sati Table",
    link: "extended-horoscope/sade-sati-table",
  },
  {
    key: "Friendship Table",
    link: "extended-horoscope/friendship",
  },
  {
    key: "KP-Houses",
    link: "extended-horoscope/kp-houses",
  },
  {
    key: "KP-Planets",
    link: "extended-horoscope/kp-planets",
  },
  {
    key: "Gem Suggestion",
    link: "extended-horoscope/gem-suggestion",
  },
  {
    key: "Numero Table",
    link: "extended-horoscope/numero-table",
  },
  {
    key: "Rudraksh Suggestion",
    link: "extended-horoscope/rudraksh-suggestion",
  },
  {
    key: "Varshapal Details",
    link: "extended-horoscope/varshapal-details",
  },
  {
    key: "Varshapal Month Chart",
    link: "extended-horoscope/varshapal-month-chart",
  },
  {
    key: "Varshapal Year Chart",
    link: "extended-horoscope/varshapal-year-chart",
  },
  {
    key: "List of yogas",
    link: "extended-horoscope/list-of-yogas",
  },
];

const More = () => {
  const [link, setLink] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const [formShow, setFormShow] = useState<boolean>(false);
  const [dateofbirth, setDateofbirth] = useState<Date | null>();
  const [timeofbirth, setTimeofbirth] = useState<string | null>();
  const [location, setLocation] = useState<string>("");
  const [latitude, setLatitude] = useState<string>("");
  const [longitude, setLongitude] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");
  const [language, setLanguage] = useState("en");

  const [locationOptions, setLocationOptions] = useState<LocationType[]>([]);

  const sectionRef = useRef(null);


  const handleSubmit = async () => {
    try {
      // Check if all required fields are filled
      if (!dateofbirth || !timeofbirth || !latitude || !longitude || !timezone) {
        alert("Please fill all the fields");
        return;
      }

      // Format date of birth (DD/MM/YYYY)
      const formattedDateOfBirth = dateofbirth.toLocaleDateString("en-GB"); // 'en-GB' for DD/MM/YYYY format

      // Format time of birth (HH:MM)
      const formattedTimeOfBirth = timeofbirth;


      // Format latitude, longitude, and timezone
      const formattedLatitude = parseFloat(latitude).toFixed(6);
      const formattedLongitude = parseFloat(longitude).toFixed(6);
      const formattedTimezone = parseFloat(timezone).toFixed(1);

      // Construct API URL
      const apiUrl = `https://api.vedicastroapi.com/v3-json/${link}?dob=${formattedDateOfBirth}&tob=${formattedTimeOfBirth}&lat=${formattedLatitude}&lon=${formattedLongitude}&tz=${formattedTimezone}&api_key=${VITE_API_KEY}&lang=${language}`;

      console.log("API URL:", apiUrl);

      // Make the API call
      const response = await axios.get(apiUrl);
      if(response.status==200){
        setData(response.data.response);
        sectionRef.current.scrollIntoView({
          behavior: "smooth", 
          block: "start", 
        });
      }
      else{
        alert("Something went wrong");
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setFormShow(false);
      setDateofbirth(null);
      setTimeofbirth(null);
      setLocation("");
      setLatitude("");
      setLongitude("");
      setTimezone("");
    }
  };


  const getLocationOptions = async (city: string) => {
    if (city.trim() === "") {
      setLocationOptions([]);
      return;
    }
    try {
      const response = await axios.get(
        `https://api.vedicastroapi.com/v3-json/utilities/geo-search?city=${city}&api_key=${VITE_API_KEY}`
      );
      const locations = Array.isArray(response.data.response)
        ? response.data.response
        : [];
      setLocationOptions(locations);
    } catch (error) {
      console.error("Error fetching location data:", error);
      setLocationOptions([]);
    }

  };

  function convertToCapitalizedWords(str: string) {
    return str
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .split(" ") 
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(" "); 
  }

  return (
    <div className="px-2 md:px-8 py-8 md:py-20 bg-primary-100 w-full">
      {/* heading */}
      <div className="font-bold mb-4 md:mb-10">
        <div className="text-xl md:text-5xl mb-6">More in Astrology</div>
        <div className="w-full relative my-3 border-b border-primary-300 flex justify-center">
          <div className="absolute -top-4 bg-primary-100">
            <img src={moon} className="text-xs" />
          </div>
        </div>
      </div>

      {/* components */}
      <div className="">
        <div className="flex flex-col gap-4 w-full">
          <div><h1 className="text-xl md:text-4xl font-semibold border-b border-primary-300 pb-2">Dosha</h1>
            <div className="mt-2 flex flex-wrap gap-2">
              {Dosha.map((item) => (
                <div onClick={() => {
                  setLink(item.link);
                  setFormShow(true);
                }} key={item.key} className=" w-fit  bg-primary-500 hover:bg-[#ffd937] transition-all duration-300 shadow-md  p-2 rounded-md cursor-pointer">{item.key}</div>
              ))}
            </div>
          </div>
          <div><h1 className="text-xl md:text-4xl font-semibold border-b border-primary-300 pb-2">Disha</h1>
            <div className="mt-2 flex flex-wrap gap-2">
              {Dashas.map((item) => (
                <div onClick={() => {
                  setLink(item.link);
                  setFormShow(true);
                }} key={item.key} className=" w-fit  bg-primary-500 hover:bg-[#ffd937] transition-all duration-300 shadow-md  p-2 rounded-md cursor-pointer">{convertToCapitalizedWords(item.key)}</div>
              ))}
            </div>
          </div>
          <div><h1 className="text-xl md:text-4xl font-semibold border-b border-primary-300 pb-2">Extended Horoscope</h1>
            <div className="mt-2 flex flex-wrap gap-2">
              {ExtendedHoroscope.map((item) => (
                <div onClick={() => {
                  setLink(item.link);
                  setFormShow(true);
                }} key={item.key} className=" w-fit  bg-primary-500 hover:bg-[#ffd937] transition-all duration-300 shadow-md  p-2 rounded-md cursor-pointer">{item.key}</div>
              ))}
            </div>
          </div>
        </div>
        <div>
          {
            data && <div className="min-h-screen flex mt-10 items-center justify-center">
              <div className="w-full max-w-6xl" ref={sectionRef} >
                <TableComponent data={data} />
              </div>
            </div>
          }
        </div>
      </div>
      {
        formShow && <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center bg-primary-300/50">
          <div className="rounded-lg border-4 border-primary-300 p-2 md:p-4 sm:min-w-[20rem] md:min-w-[30rem] bg-primary-100">
            <div className="bg-secondary-200 p-2 rounded text-center w-full text-xl flex gap-2">
              <span className="w-[90%]">Fill the Form</span>
              <span className="text-2xl flex items-center cursor-pointer" onClick={() => setFormShow(false)}>
                <IoMdClose />
              </span>
            </div>
            <div className="flex justify-end w-full pt-2 items-center">
              <select className="align-middle py-1" onChange={(e) => setLanguage(e.target.value)}>
                {languages.map((item) => (
                  <option value={item.key} className="cursor-pointer">{item.value}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full md:text-lg my-4">
              <label>Birth Date</label>
              <div className="flex justify-between gap-4">
                <input
                  type="date"
                  placeholder="DD/MM/YYYY"
                  className="p-1 border-2 rounded-md w-full cursor-pointer"
                  onChange={(e) => setDateofbirth(new Date(e.target.value))}
                />
              </div>

              <label>Birth Time</label>
              <div className="flex justify-between gap-4">
                <input
                  type="time"
                  className="p-1 border-2 rounded-md w-full cursor-pointer"
                  onChange={(e) => {
                    setTimeofbirth(e.target.value);
                  }}
                />

              </div>
              <div className="relative">
                <label>Location</label>
                <div className="flex justify-between gap-4">
                  <input
                    type="text"
                    value={location}
                    placeholder="Enter place of birth"
                    className="p-1 border-2 rounded-md w-full cursor-pointer"
                    onChange={(e) => {
                      getLocationOptions(e.target.value);
                      setLocation(e.target.value);
                    }}
                  />
                  {locationOptions.length > 0 && (
                    <div className="absolute top-[70px] w-full h-[200px] bg-white overflow-y-auto ">
                      {locationOptions.map((item) => (
                        <div
                          key={item.name}
                          className="p-2 cursor-pointer hover:bg-primary-200"
                          onClick={() => {
                            setLocation(item.name);
                            setLatitude(item.coordinates[0]);
                            setLongitude(item.coordinates[1]);
                            setTimezone(item.tz.toString());
                            setLocationOptions([]);
                          }}
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full p-2 text-center border cursor-pointer text-xl bg-secondary-100 text-primary-200 rounded-lg" onClick={handleSubmit}>
                Submit
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default More;


const TableComponent = ({ data }) => {
  // Helper function to render arrays or objects inline
  const renderValue = (value) => {
    if (Array.isArray(value)) {
      return (
        <ul className="list-disc pl-4">
          {value.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else if (typeof value === "object" && value !== null) {
      return (
        <div className="pl-4">
          {Object.entries(value).map(([key, val], index) => (
            <div key={index} className="flex gap-2">
              <span className="font-medium capitalize">{key.replace(/_/g, " ")}:</span>
              <span>{val}</span>
            </div>
          ))}
        </div>
      );
    }
    return value;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border bg-orange-100 border-orange-500">
        <thead>
          <tr className="bg-orange-200">
            <th className="border border-orange-500 px-4 py-2 text-left font-semibold">Key</th>
            <th className="border border-orange-500 px-4 py-2 text-left font-semibold">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value], index) => (
            <tr
              key={index}
              className=" transition-colors"
            >
              <td className="border border-orange-500 px-4 py-2 font-medium capitalize">
                {key.replace(/_/g, " ")} {/* Replace underscores with spaces */}
              </td>
              <td className="border border-orange-500 px-4 py-2">{renderValue(value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



 



import { useRef, useState } from "react";
import axios from "axios";
import { languages } from "@/pages/Horoscope/Horoscope";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import getLocation from "@/utils/getLocation";
import { VITE_API_KEY } from "@/api/userAPI";
import { Loader } from "lucide-react";

const PToday = () => {
  const [data, setData] = useState<any>(null); // Initialize as null
  const [load, setLoad] = useState<boolean>(false);
  const [language, setLanguage] = useState("en");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [timezone, setTimezone] = useState("");
  const [location, setLocation] = useState("");
  const [locationOptions, getLocationOptions, setLocationOptions] = getLocation();

  const section = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState<boolean>(false);

  const [errorLocation, setErrorLocation] = useState<string | null>(null);

  const validateInput = () => {
    if (location === "") {
      setErrorLocation("Location is required");
      return false;
    }
    if (latitude === "") {
      alert("Something went wrong");
      return false;
    }
    if (longitude === "") {
      alert("Something went wrong");
      return false;
    }
    return true;
  }

  
  const handleSubmit = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent default form submission
    if(!validateInput()){
      return;
    }
    setLoad(true);
    try {
      const formattedDate = `${new Date().getDate().toString().padStart(2, '0')}/${(new Date().getMonth() + 1).toString().padStart(2, '0')}/${new Date().getFullYear()}`
      const formattedTz = timezone;
      const formattedLat = parseFloat(latitude).toFixed(2);
      const formattedLon = parseFloat(longitude).toFixed(1);
      const formattedTime = `${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`

      const res = await axios.get(`https://api.vedicastroapi.com/v3-json/panchang/choghadiya-muhurta?api_key=${VITE_API_KEY}&date=${formattedDate}&tz=${formattedTz}&lat=${formattedLat}&lon=${formattedLon}&time=${formattedTime}&lang=${language}`);
      console.log("EEEEEEEEEEEEEEE:",res)
      
      const resh  = await axios.get(`https://api.vedicastroapi.com/v3-json/panchang/hora-muhurta?api_key=${VITE_API_KEY}&date=${formattedDate}&tz=${formattedTz}&lat=${formattedLat}&lon=${formattedLon}&time=${formattedTime}&lang=${language}`)
       console.log("HURA MUHURAT",resh)
     
      setData(res.data); // Store the response data
      setLoad(false);
    } catch (error) {
      console.log(error);
      setLoad(false);
    } finally {
      if (section.current) {
        section.current.scrollIntoView({ behavior: 'smooth' });
      }
      setLoad(false);
      setLanguage("en");
      setLocation("");
      // @ts-ignore
      setLocationOptions([]);
      setLatitude("");
      setLongitude("");
      setTimezone("");
    }
  };

  return (
    <>
      <div className=" flex justify-center items-center w-full my-6">
        <div className="bg-secondary-600 md:p-2 text-primary-300 rounded-md mx-auto w-full">
          <div className="text-xl md:text-3xl font-bold w-full text-center py-4">
            Choghadiya Timings
          </div>
          <div className="">
            <div className="text-sm md:text-lg p-2 md:p-6 m-2 mx-4 flex flex-col gap-2">
              <div className="flex w-full items-center">
                <select
                  className="w-full py-1"
                  onChange={(e) => setLanguage(e.target.value)}
                  value={language}
                >
                  {languages.map((item) => (
                    <option key={item.key} value={item.key} className="cursor-pointer">
                      {item.value}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1 md:basis-2/3 mb-2 relative">
                <label className="font-bold">City of Birth</label>
                <input
                  type="text"
                  placeholder="City of Birth"
                  name="city"
                  minLength={3}
                  value={location}
                  onChange={(e) => {
                    setLoading(true);
                    // @ts-ignore
                    getLocationOptions(e.target.value);
                    setLocation(e.target.value);
                    setErrorLocation(null);
                  }}
                  className="rounded-md border p-1 px-2 focus:outline-none focus:ring-0"
                />
                {errorLocation && <span className="text-red-500 text-sm">{errorLocation}</span>}
                {locationOptions.length > 0 && location !== "" ? (
                  <div className="absolute top-[75px] w-full h-[200px] z-10 bg-white overflow-y-auto">
                    {/* @ts-ignore */}
                    {locationOptions.map((item) => (
                      <div
                        key={item.name}
                        className="p-2 cursor-pointer hover:bg-primary-200"
                        onClick={() => {
                          setLocation(item.name);
                          setLatitude(item.coordinates[0]);
                          setLongitude(item.coordinates[1]);
                          setTimezone(item.tz.toString());
                          // @ts-ignore
                          setLocationOptions([]);
                          setLoading(false);
                        }}
                      >
                        {item.name ? item.name : <Loader />}
                      </div>
                    ))}
                  </div>
                ) : (
                  loading && location !== "" && (
                    <div className="w-full absolute h-[200px] bg-white z-10 top-[75px] p-12 text-center text-xl md:text-3xl">
                      <div className="flex items-center flex-col justify-center">
                        <div className="w-8 h-8 border-4 text-sm border-t-transparent border-orange-500 rounded-full animate-spin"></div>
                        <div className="text-sm">
                          Select location from the list...
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="flex items-center justify-center w-full my-2">
              <button
                className="p-1  text-primary-200 cursor-pointer bg-secondary-100 font-semibold shadow-md rounded-md md:text-xl mb-2  px-2"
                onClick={(e:any) => handleSubmit(e)}
                disabled={load}
              >
                {load ? 'Loading...' : 'SHOW TIMINGS'}
              </button>
            </div>
          </div>
        </div>


      </div>
      <div ref={section}>
        {/* Show loader while loading */}
        {load && <div className="text-center py-4">Loading...</div>}

        {/* Render table only when data is available and not loading */}
        {!load && data && <DynamicPanchangTable data={data} />}
      </div>
    </>
  );
};

export default PToday;



const DynamicPanchangTable = ({ data }: { data: any }) => {
  // Helper function to check if a value is an object
  const isObject = (value: any) => value && typeof value === 'object' && !Array.isArray(value);

  // Helper function to format key from snake_case to Title Case
  const formatKey = (key: string) => {
    return key
      .split('_')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Helper function to render a single data row
  const renderDataRow = (label: string, value: any) => (
    <tr key={label}>
      <td className="px-4 py-2 border border-orange-500 capitalize">{formatKey(label)}</td>
      <td className="px-4 py-2 border border-orange-500 capitalize">
        {typeof value === 'boolean' ? value.toString() : value}
      </td>
    </tr>
  );

  // Helper function to render a section of data
  const renderSection = (sectionData: any, sectionName: string) => {
    if (!isObject(sectionData)) return null;

    const rows = Object.entries(sectionData).map(([key, value]) => {
      if (isObject(value)) return null;
      return renderDataRow(key, value);
    }).filter(Boolean);

    if (rows.length === 0) return null;

    return (
      <div className="mb-6">
        <h3 className="text-lg text-center bg-orange-200 border border-b-0 border-orange-500 font-semibold ">{formatKey(sectionName)}</h3>
        <div className="overflow-x-auto">
          <table className="w-full mb-8 bg-orange-100 rounded-xl p-4 border-collapse border border-orange-500">
            <tbody>{rows}</tbody>
          </table>
        </div>
      </div>
    );
  };

  // Helper function to recursively render nested sections
  const renderNestedSections = (data: any) => {
    return Object.entries(data).map(([key, value]) => {
      if (isObject(value)) {
        return (
          <div key={key}>
            {renderSection(value, key)}
            {renderNestedSections(value)}
          </div>
        );
      }
      return null;
    });
  };

  if (!data || !data.response) {
    return (
      <Card className="w-full max-w-4xl">
        <CardContent>
          <p className="text-center py-4 text-gray-500">No data available</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full mt-4 max-w-4xl bg-primary-100 border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl w-full text-center">
          Panchang for {data.response.date}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {renderNestedSections(data.response)}
        </div>
      </CardContent>
    </Card>
  );
};


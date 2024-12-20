import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { languages } from "@/pages/Horoscope/Horoscope";
import { Location as LocationType } from "@/components/more/Form";
import { VITE_API_KEY } from "@/api/userAPI";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const PToday = () => {
  const [data, setData] = useState<any>(null);
  const [load, setLoad] = useState<boolean>(false);
  const [language, setLanguage] = useState("en");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [timezone, setTimezone] = useState("");
  const [location, setLocation] = useState("");
  const [locationOptions, setLocationOptions] = useState<LocationType[]>([]);

  const section = useRef<HTMLDivElement>(null);

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

      const locationOptions = locations.filter((item: LocationType) => item.country === "IN");
      setLocationOptions(locationOptions);
    } catch (error) {
      console.error("Error fetching location data:", error);
      setLocationOptions([]);
    } finally {
      setLoad(false);
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoad(true);
    try {
      const formattedDate = `${new Date().getDate().toString().padStart(2, '0')}/${(new Date().getMonth() + 1).toString().padStart(2, '0')}/${new Date().getFullYear()}`
      const formattedTz = timezone;
      const formattedLat = parseFloat(latitude).toFixed(2);
      const formattedLon = parseFloat(longitude).toFixed(1);
      const formattedTime = `${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`

      const res = await axios.get(`https://api.vedicastroapi.com/v3-json/panchang/panchang?api_key=${VITE_API_KEY}&date=${formattedDate}&tz=${formattedTz}&lat=${formattedLat}&lon=${formattedLon}&time=${formattedTime}&lang=${language}`);

      setData(res.data);
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
            Panchang for Today
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
                    getLocationOptions(e.target.value);
                    setLocation(e.target.value);
                  }}
                  className="rounded-md border p-1 px-2 focus:outline-none focus:ring-0"
                />
                {locationOptions.length > 0 && (
                  <div className="absolute top-[75px] w-full h-[200px] z-10 bg-white overflow-y-auto">
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
            <div className="flex items-center justify-center w-full md:my-2">
              <button
                className="p-1 px-2 text-primary-200 cursor-pointer bg-secondary-100 font-semibold shadow-md rounded-md md:text-xl mb-2"
                onClick={handleSubmit}
                disabled={load}
              >
                {load ? 'Loading...' : 'SHOW PANCHANG'}
              </button>
            </div>
          </div>
        </div>


      </div>

      <div ref={section}>
        {/* Show loader while loading */}
        {load && (
          <div className="flex justify-center items-center my-6">
            <div className="mx-[10vw] w-full text-center">Loading...</div>
          </div>
        )}

        {/* Render table only when data is available and not loading */}
        {!load && data && (
          <div className="flex justify-center items-center my-6">
            <div className="mx-[10vw] w-full">
              <DynamicPanchangTable data={data} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PToday;



const DynamicPanchangTable = ({ data }: { data: any }) => {
  // Helper function to check if a value is an object
  const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value);

  // Helper function to format key from snake_case to Title Case
  const formatKey = (key) => {
    return key
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
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
        <h3 className="text-lg text-center bg-orange-200 font-semibold ">{formatKey(sectionName)}</h3>
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


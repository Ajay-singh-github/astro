import { Dispatch, SetStateAction, useState } from "react";
import getLocation from "@/utils/getLocation";


interface Props {
  title: string;
  setDate: Dispatch<SetStateAction<Date | null>>;
  setTime: Dispatch<SetStateAction<string>>;
  setTz: Dispatch<SetStateAction<string>>;
  setLat: Dispatch<SetStateAction<string>>;
  setLon: Dispatch<SetStateAction<string>>;
  setLocation: Dispatch<SetStateAction<string>>;
  name: string;
  date: Date | null;
  time: string;
  tz: string;
  lat: string;
  lon: string;
  location: string;
  setName: Dispatch<SetStateAction<string>>;
  errorName: string | null;
  errorDate: string | null;
  errorTime: string | null;
  errorLocation: string | null;
  setErrorName: Dispatch<SetStateAction<string | null>>;
  setErrorDate: Dispatch<SetStateAction<string | null>>;
  setErrorTime: Dispatch<SetStateAction<string | null>>;
  setErrorLocation: Dispatch<SetStateAction<string | null>>;
}
const Form:React.FC<Props> = ({title, setDate, setTime, setTz, setLat, setLon, location, setLocation, name, date, time, setName, errorName, errorDate, errorTime, errorLocation, setErrorName, setErrorDate, setErrorTime, setErrorLocation}) => {

  const [locationOptions, getLocationOptions, setLocationOptions] = getLocation();
  const [loading, setLoading] = useState<boolean>(false);

 
  return (
    <div className="rounded-lg border-4 border-secondary-600 bg-secondary-600 p-2 md:p-4 md:min-w-[20rem]">
      <div className="bg-secondary-200 p-2 rounded text-center w-full text-xl">
        {title}
      </div>
      <div className="flex flex-col gap-2 w-full md:text-lg my-4">
        <div className="flex flex-col gap-2">
        <label>Name</label>
        <input
          type="text"
          value={name}
          placeholder="Enter name"
          className="border-2 rounded-md p-1 focus:outline-none focus:ring-0"
          onChange={(e) => {
            setName(e.target.value);
            setErrorName(null);
          }}
        />
        {errorName && <span className="text-red-500 text-sm">{errorName}</span>}
        </div>
        <label>Birth Details</label>
        <div className="flex flex-col gap-2 justify-between gap-4">
          <label>Date</label>
          <input
            type="date"
            value={date ? date.toISOString().split('T')[0] : ''}
            placeholder="DD/MM/YYYY"
            className="p-1 border-2 rounded-md w-full cursor-pointer"
            onChange={(e) => {
              setDate(e.target.valueAsDate);
              setErrorDate(null);
            }}
          />
          {errorDate && <span className="text-red-500 text-sm">{errorDate}</span>}
        </div>
        <div className="flex flex-col gap-2 justify-between gap-4">
          <label>Time</label>
          <input
            type="time"
            value={time}
            className="p-1 border-2 rounded-md w-full cursor-pointer"
            onChange={(e) => {
              setTime(e.target.value);
              setErrorTime(null);
            }}
          />
          {errorTime && <span className="text-red-500 text-sm">{errorTime}</span>}
        </div>
        <div className="relative">
          <label>Location</label>
          <div className="flex flex-col justify-between gap-4">
            <input
              type="text"
              value={location}
              placeholder="Enter place of birth"
              className="p-1 border-2 rounded-md w-full cursor-pointer"
                    onChange={(e) => {
                      // @ts-ignore
                      getLocationOptions(e.target.value);
                      setLocation(e.target.value);
                      setLoading(true);
                      setErrorLocation(null);
                    }}
                  />
                  {errorLocation && <span className="text-red-500 text-sm">{errorLocation}</span>}
                  {locationOptions.length > 0 && location !== "" ? (
                    <div className="absolute top-[70px] w-full h-[200px] bg-white overflow-y-auto ">
                      {/* @ts-ignore */}
                      {locationOptions.map((item) => (
                        <div
                          key={item.name}
                          className="p-2 cursor-pointer hover:bg-primary-200"
                          onClick={() => {
                            setLocation(item.name);
                            setLat(item.coordinates[0]);
                            setLon(item.coordinates[1]);
                            setTz(item.tz.toString());
                            // @ts-expect-error
                            setLocationOptions([]);
                            setLoading(false);
                            setErrorLocation(null);
                          }}
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  ):(
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
      </div>
    </div>
  );
}

export default Form
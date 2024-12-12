import { Dispatch, SetStateAction } from "react";

interface Props {
  title: string;
  setDay: Dispatch<SetStateAction<string>>;
  setMonth: Dispatch<SetStateAction<string>>;
  setYear: Dispatch<SetStateAction<string>>;
  setHr: Dispatch<SetStateAction<string>>;
  setMin: Dispatch<SetStateAction<string>>;
  setSec: Dispatch<SetStateAction<string>>;
  setCity: Dispatch<SetStateAction<string>>;
}
const Form:React.FC<Props> = ({title, setDay, setMonth, setYear, setHr, setMin, setSec, setCity}) => {

  return (
    <div className="rounded-lg border-4 border-secondary-600 bg-secondary-600 p-2 md:p-4 md:min-w-[20rem]">
      <div className="bg-secondary-200 p-2 rounded text-center w-full text-xl">
        {title}
      </div>
      <div className="flex flex-col gap-2 w-full md:text-lg my-4">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter name"
          className="border-2 rounded-md p-1 focus:outline-none focus:ring-0"
        />
        <label>Birth Details</label>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col basis-1/3">
            <label>Day</label>
            <input
              type="number"
              min={1}
              max={31}
              defaultValue={0}
              className="p-1 border-2 rounded-md focus:outline-none focus:ring-0"
              onChange={(e) => setDay(e.target.value)}
            />
          </div>
          <div className="flex flex-col basis-1/3">
            <label>Month</label>
            <select
              className="p-1 border-2 rounded-md focus:outline-none focus:ring-0"
              onChange={(e) => setMonth(e.target.value)}
            >
              <option value={1}>Jan</option>
              <option value={2}>Feb</option>
              <option value={3}>Mar</option>
              <option value={4}>Apr</option>
              <option value={5}>May</option>
              <option value={6}>Jun</option>
              <option value={7}>Jul</option>
              <option value={8}>Aug</option>
              <option value={9}>Sep</option>
              <option value={10}>Oct</option>
              <option value={11}>Nov</option>
              <option value={12}>Dec</option>
            </select>
          </div>
          <div className="flex flex-col basis-1/3">
            <label>Year</label>
            <input
              type="number"
              min={1}
              max={2030}
              defaultValue={1980}
              className="p-1 border-2 rounded-md focus:outline-none focus:ring-0"
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
              defaultValue={0}
              className="p-1 border-2 rounded-md focus:outline-none focus:ring-0"
              onChange={(e) => setHr(e.target.value)}
            />
          </div>
          <div className="flex flex-col basis-1/3">
            <label>Minute</label>
            <input
              type="number"
              min={0}
              max={59}
              defaultValue={0}
              className="p-1 border-2 rounded-md focus:outline-none focus:ring-0"
              onChange={(e) => setMin(e.target.value)}
            />
          </div>
          <div className="flex flex-col basis-1/3">
            <label>Second</label>
            <input
              type="number"
              min={0}
              max={59}
              defaultValue={0}
              className="p-1 border-2 rounded-md focus:outline-none focus:ring-0"
              onChange={(e) => setSec(e.target.value)}
            />
          </div>
        </div>
        <label>Birth Place</label>
        <input
          type="text"
          placeholder="Enter place of birth"
          className="border-2 rounded-md p-1 focus:outline-none focus:ring-0"
          onChange={(e)=>setCity(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Form
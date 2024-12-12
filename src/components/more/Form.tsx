import { useState } from "react";
import { IoMdClose } from "react-icons/io";

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
const Form: React.FC<Props> = ({
  onSubmit, setCall
}) => {
    const [day, setDay] = useState(""); 
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [hr, setHr] = useState("");
    const [min, setMin] = useState("");
    const [sec, setSec] = useState("");
    const [city, setCity] = useState("");

    const handleClick = () => {
      setCall(false);
      document.body.style.overflow = "auto";
    }
  return (
    <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-primary-300/50">
      <div className="rounded-lg border-4 border-primary-300 p-2 md:p-4 md:min-w-[20rem] bg-primary-100">
        <div className="bg-secondary-200 p-2 rounded text-center w-full text-xl flex gap-2">
          <span className="w-[90%]">Fill the Form</span>
          <span className="text-2xl flex items-center cursor-pointer" onClick={handleClick}><IoMdClose /></span>
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
                defaultValue={0}
                className="p-1 border-2 rounded-md"
                onChange={(e) => setDay(e.target.value)}
              />
            </div>
            <div className="flex flex-col basis-1/3">
              <label>Month</label>
              <select
                className="p-1 border-2 rounded-md"
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
                defaultValue={0}
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
                defaultValue={0}
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
                defaultValue={0}
                className="p-1 border-2 rounded-md"
                onChange={(e) => setSec(e.target.value)}
              />
            </div>
          </div>
          <label>Birth Place</label>
          <input
            type="text"
            placeholder="Enter place of birth"
            className="border-2 rounded-md p-1"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div
          className="w-full p-2 text-center border cursor-pointer text-xl bg-secondary-100 text-primary-200 rounded-lg"
          onClick={() => onSubmit(day, month, year, hr, min, sec, city)}
        >
          Submit
        </div>
      </div>
    </div>
  );
};

export default Form;

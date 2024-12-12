import SignUpForm from "@/components/common/SignUpForm/SignUpForm";
import { CiSearch } from "react-icons/ci";

const Signup = () => {
  
  return (
    <div>
      <div className="p-2 md:p-4 md:px-8 flex justify-between items-center bg-primary-400 border-b border-primary-300">
        <div className="md:px-4 md:text-3xl font-semibold text-primary-300">
          LOGO
        </div>
        <div className="flex gap-3 md:gap-8 items-center w-full justify-end text-xs md:text-base">
          <div className="rounded-full p-1 md:p-2 flex items-center justify-center md:gap-2 bg-primary-200 w-[8rem] md:w-max">
            <CiSearch className="md:text-3xl opacity-50" />
            <input
              type="text"
              className="border-none outline-none md:w-full w-1/2"
              placeholder="search"
            />
            <div className="rounded-full p-1 px-2 text-primary-200 md:px-4 md:text-md bg-secondary-100 text-center cursor-pointer">
              search
            </div>
          </div>
        </div>
      </div>

      <div className="md:py-[5vw] md:px-[20vw] lg:px-[30vw] p-6">
        <SignUpForm />
      </div>
    </div>
  );
};

export default Signup;

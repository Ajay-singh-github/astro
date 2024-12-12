import { USERS } from "@/api/userAPI";
// import axios from "axios";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const SignUpForm = () => {
  const [type, setType] = useState("Sign Up");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async() => {
    try{if(type === "Sign Up") {
      const res=await USERS.SignUp({fullName:fname+" "+lname,email:email,password:password})
      console.log(res)
      if(res.success){
        alert(res.message)
      }else{
        alert("Signup failed")
      }
    }else{
      const res=await USERS.Login({email:email,password:password})
      console.log(res)
      if(res.success){
        localStorage.setItem("token",res.data.token)
        alert(res.message)
      }else{
        alert("Login failed")
      }
    }
  }catch(err){
      console.log(err)
    }
    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="bg-primary-100 rounded-xl p-4 md:p-8 flex flex-col gap-4 md:gap-8 items-center justify-center text-lg md:text-xl">
      <div className="flex cursor-pointer">
        <div
          className={`${
            type === "Sign Up"
              ? "bg-primary-400"
              : "bg-primary-200 border border-primary-300"
          } rounded-l-md px-4 md:px-[5vw] py-2`}
          onClick={() => setType("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={`${
            type === "Log In"
              ? "bg-primary-400"
              : "bg-primary-200 border border-primary-300"
          } rounded-r-md px-4 md:px-[5vw] py-2`}
          onClick={() => setType("Log In")}
        >
          Log In
        </div>
      </div>

      <div className="font-bold w-full text-center text-xl md:text-2xl">
        {type}
      </div>

      <div className="flex flex-col items-center justify-center gap-2 md:gap-4 w-full">
        <div className="flex gap-2 items-center cursor-pointer bg-primary-200 justify-center rounded-full border border-primary-300 w-[75%] p-2 ">
          <FaFacebook className="text-[#0c82ee] text-2xl md:text-4xl" />
          <div className="text-xs md:text-lg">{type} with Facebook</div>
        </div>
        <div className="flex gap-2 items-center cursor-pointer bg-primary-200 justify-center rounded-full border border-primary-300 w-[75%] p-2 ">
          <FcGoogle className="text-2xl md:text-4xl" />
          <div className="text-xs md:text-lg">{type} with Google</div>
        </div>
      </div>

      <div className="w-[80%] relative my-3 border-b-2 border-primary-300/30 flex justify-center">
        <div className="absolute -top-4 bg-primary-100 px-4">OR</div>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center w-full">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-2 w-[80%] ${type === "Sign Up" ? "" : "hidden"}`}>
          <div className="flex flex-col gap-2">
            <label>First name</label>
            <input
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              className="bg-primary-200 border border-primary-300/30 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Last name</label>
            <input
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              className="bg-primary-200 border border-primary-300/30 rounded-md p-2"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-[80%]">
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-primary-200 border border-primary-300/30 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2 w-[80%]">
          <label>Password</label>
          <input
            type="passsword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-primary-200 border border-primary-300/30 rounded-md p-2"
          />
        </div>
      </div>

      <div
        className="w-[80%] cursor-pointer bg-primary-400 rounded-full text-primary-200 p-2 text-center"
        onClick={handleSubmit}
      >
        {type}
      </div>
    </div>
  );
};

export default SignUpForm;

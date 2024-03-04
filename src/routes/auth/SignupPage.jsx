import React, { useState } from "react";
import Logo from "../../assets/ui/Logo.svg";
import InputFieldComponent from "../../components/ui/InputFieldComponent";
import PrimaryButtonComponent from "../../components/ui/PrimaryButtonComponent";
import RegistrationComponent from "../../components/ui/RegistrationComponent";
import PasswordButtonComponent from "../../components/ui/PasswordButtonComponent";
import SeperatorComponent from "../../components/ui/SeperatorComponent";

const SignupPage = () => {
  const [continued, setContinued] = useState(false);
  const [enable, setEnable] = useState("hidden");
  // To handle Edit button in the email field
  const handleEdit = () => {
    setContinued(false);
  };
  // Enable Edit Button
  const setEnbale = () => {
    console.log("Clicked");
    // enable(true);
  };
  return (
    <div className="flex justify-center items-center h-svh relative w-full">
      <div className="flex gapy-2 flex-col w-full md:w-1/2 lg:w-1/4 px-4">
        <div className=" flex items-center justify-center">
          <img className="w-26" src={Logo} alt="Rearticle Logo" />
        </div>
        <div className="flex gap-y-6 flex-col">
          <h3 className="text-3xl text-[#424242] text-center font-bold">
            Create your account
          </h3>
          <InputFieldComponent
            type="email"
            placeholder="Email address"
            onClick={() => {
              handleEdit();
              setEnable("hidden");
            }}
            enable={enable}
          ></InputFieldComponent>
          {continued && <PasswordButtonComponent />}
          <PrimaryButtonComponent
            onClick={() => {
              console.log(continued);
              setContinued(true);
              if (enable === "hidden") setEnable("");
              else setEnable("hidden");
            }}
            name="Continue"
          ></PrimaryButtonComponent>
          <p className="text-[#424242b3] text-xs/[22px] font-medium cursor-default text-center">
            Don't have an account ?
            <a href="#" className="text-blue-600 ml-1">
              Sign up
            </a>
          </p>
          {!continued && <SeperatorComponent />}
          {!continued && <RegistrationComponent />}
        </div>
      </div>
      <div className="flex absolute bottom-5">
        <div>
          <a href="#" className="text-blue-600 text-xs mr-1">
            Terms of Use
          </a>
          <span className="text-xs">{"| "}</span>
          <a href="#" className="text-blue-600 text-xs ">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

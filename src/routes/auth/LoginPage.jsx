import React, { useState } from "react";
import Logo from "../../assets/ui/Logo.svg";
import InputFieldComponent from "../../components/ui/InputFieldComponent";
import PrimaryButtonComponent from "../../components/ui/PrimaryButtonComponent";
import RegistrationComponent from "../../components/ui/RegistrationComponent";
import PasswordButtonComponent from "../../components/ui/PasswordButtonComponent";
import SeperatorComponent from "../../components/ui/SeperatorComponent";

const LoginPage = () => {
  const [continued, setContinued] = useState(false);
  return (
    <div className="flex justify-center items-center h-svh relative w-full">
      <div className="flex gapy-2 flex-col w-full md:w-1/2 lg:w-1/4 px-4">
        <div className=" flex items-center justify-center">
          <img className="w-26" src={Logo} alt="Rearticle Logo" />
        </div>
        <h3 className="text-3xl text-[#424242] text-center font-bold">
          Verify your email
        </h3>
        <p className="text-center mt-3 text-[#424242b3] font-normal leading-5">
          We sent an email to cssaiganesh2001@gmail.com <br />
          Click the link inside to get started
        </p>
        <a
          href="#"
          className="text-center text-[#2262C6] text-xs font-bold mt-3 mb-5"
        >
          <p>Resend email</p>
        </a>
        <PrimaryButtonComponent name="Continue"></PrimaryButtonComponent>
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

export default LoginPage;

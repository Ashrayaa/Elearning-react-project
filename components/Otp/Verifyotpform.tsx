import React from "react";
import { useState } from "react";
import OtpInput from "react-otp-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

export default function Verifyotpform({}: Props) {
  const [otp, setState] = useState("");
  const notify = () => toast(`The OTP ${otp} was verified`);

  return (
    <div className="flex flex-column justify-center align-middle lg:w-6/12 lg:h-3/6 lg:m-52 md:h-2/5 md:mt-72 bg-[#FAFFFD] m-4 shadow-lg border rounded-xl">
      <form className="p-12 font-base">
        <h1 className="w-62 h-12 font-semibold font-base font-montserrat text-3xl">
          Verify OTP
        </h1>
        <p className="font-osans text-sm lg:text-base">
          Enter the OTP sent to the
        </p>
        <p className="font-osans pb-4 text-sm lg:text-base">
          Mobile number <span className="font-bold">+91 91828202029</span>
        </p>
        <div className="pr-5">
          <OtpInput
            className="border-2 border-[#D0D0D0] rounded-md bg-white p-4 w-10 h-10 mx-1 xl:w-14 xl:h-14 xl:mx-2;"
            value={otp}
            inputStyle="otpbox"
            onChange={(otp: string) => setState(otp)}
            numInputs={4}
          />
        </div>

        <p className="font-osans font-bold py-4">00:45</p>

        <button
          onClick={notify}
          className="font-base font-bold text-lg border-2 lg:mt-4 bg-[#00C285] text-white w-80 h-14 rounded-lg"
        >
          Login
        </button>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <p className="font-base text-center font-semibold lg:mt-8">
          {" "}
          <a href="">Resent OTP</a>
        </p>
      </form>
    </div>
  );
}

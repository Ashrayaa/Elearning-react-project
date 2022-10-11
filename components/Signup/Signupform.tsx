import React from 'react'

type Props = {}

export default function Signupform({}: Props) {
  return (
    <div className="flex flex-col sm:flex-col sm:justify-between h-auto lg:w-7/12 lg:h-3/5 lg:m-40 md:w-4/5 md:h-3/5 md:m-12 md:my-40  bg-[#FAFFFD] shadow-lg border rounded-xl">
    <form className="p-12 font-base">
      <h1 className="w-44 h-12 font-semibold font-base text-3xl">Signup</h1>
      <input
        className="border-black-200 border-2 rounded bg-[#F9F9F9] h-12 px-3 my-2 block w-full text-[#5B5858]"
        type="text"
        placeholder="Phone Number"
      ></input>
      <input
        className="border-black-200 border-2 rounded bg-[#F9F9F9] h-12 px-3 my-6 block w-full text-[#5B5858]"
        type="text"
        placeholder="Student Name"
      ></input>
      <input
        className="border-black-200 border-2 rounded bg-[#F9F9F9] h-12 px-3 my-6 block w-full text-[#5B5858]"
        type="text"
        placeholder="Student Email"
      ></input>
      <p className="my-1 font-semibold">Select className</p>
      <input
        className="w-32 h-10  rounded-3xl border-2 border-solid border-black-200 border-[#00C285]"
        type="button"
        value="Plus One"
      ></input>
      <input
        className="w-32 h-10 mx-2 my-4 rounded-3xl border-2 border-solid border-black-200"
        type="button"
        value="Plus Two"
      ></input>
      <button className="mx-24 font-base font-bold text-lg border-2 bg-[#00C285] text-white w-44 lg:w-64 lg:mx-14 md:mx-16 h-14 rounded-lg">
        <a href="http://localhost:3000/login">Signup</a>
      </button>
      <div className="flex flex-row pt-4 justify-center lg:py-8 md:w-80">
        <div className="border h-0 w-8 border-black bg-black mx-2 my-2"></div>
        <p className="text-xs font-semibold">
          Already have an account?{" "}
          <a href="" className="text-[#00C285]">
            Login
          </a>
        </p>
        <div className="border h-0 w-7 border-black bg-black mx-2 my-2"></div>
      </div>
    </form>
  </div>
  )
}
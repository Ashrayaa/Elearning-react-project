import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInputs {
  phonenumber: number;
}

const schema = yup
  .object()
  .shape({
    phonenumber: yup
      .number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(10)
      .required("A phone number is required"),
  })
  .required();

type Props = {};

export default function Loginform({}: Props) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const submitForm = (data: IFormInputs) => {
    console.log(data);
  };
  return (
    <div className="flex flex-column m-8 w-10/12 lg:w-3/6 lg:mt-64 lg:h-2/5 lg:ml-44 lg:justify-center bg-[#FAFFFD] shadow-lg border rounded-xl">
      <form onSubmit={handleSubmit(submitForm)} className="p-12 font-base">
        <h1 className="w-62 h-12 text-center font-semibold font-base font-montserrat text-3xl">
          Login / Lookup
        </h1>
        <input
          {...register("phonenumber")}
          className="border-black-200 my-12 border-2 rounded bg-[#F9F9F9] h-12 px-3 block w-full text-[#5B5858]"
          type="text"
          name="phonenumber"
          placeholder="Phone Number"
        ></input>
        <p>{errors.phonenumber?.message}</p>
        <button
          type="button"
          className="font-base font-bold text-lg border-2 bg-[#00C285] text-white w-80 h-14 rounded-lg"
        >
          <Link href="/otp"> Login </Link>
        </button>
      </form>
    </div>
  );
}

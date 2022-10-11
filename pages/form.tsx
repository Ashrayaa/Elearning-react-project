import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  confirmpassword: string;
}

const schema = yup
  .object()
  .shape({
    firstName: yup.string().required("Please enter your first name"),
    lastName: yup.string().required("Please enter your last name"),
    email: yup.string().email().required("Please enter your email"),
    age: yup.number().positive().integer().required("Please enter your age"),
    password: yup.string().min(4).max(8).required("Please enter the password"),
    confirmpassword: yup.string().oneOf([yup.ref("password"), null]),
  })
  .required();

type Props = {};

export default function form({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const submitForm = (data: IFormInputs) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col p-6">
      <div className="text-4xl font-bold text-center text-emerald-700">
        Sign Up
      </div>

      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col justify-center items-center p-10 gap-4"
      >
        <input
          {...register("firstName")}
          className="border-2 border-emerald-200 p-4 rounded-xl"
          type="text"
          name="firstName"
          placeholder="First Name.."
        />
        <p> {errors.firstName?.message} </p>
        <input
          {...register("lastName")}
          className="border-2 border-emerald-200 p-4 rounded-xl"
          type="text"
          name="lastName"
          placeholder="Last Name.."
          //  ref={register}
        />
        <p>{errors.lastName?.message}</p>
        <input
          {...register("email")}
          className="border-2 border-emerald-200 p-4 rounded-xl"
          type="text"
          name="email"
          placeholder="Email"
          //   ref={register}
        />
        <p>{errors.email?.message}</p>
        <input
          {...register("age")}
          className="border-2 border-emerald-200 p-4 rounded-xl"
          type="text"
          name="age"
          placeholder="Age"
        />
        <p>{errors.age?.message}</p>
        <input
          {...register("password")}
          className="border-2 border-emerald-200 p-4 rounded-xl"
          type="password"
          name="password"
          placeholder="Password"
          // ref={register}
        />
        <p>{errors.password?.message}</p>
        <input
          {...register("confirmpassword")}
          className="border-2 border-emerald-200 p-4 rounded-xl"
          type="password"
          name="confirmpassword"
          placeholder="Confirm Password"
          // ref={register}
        />
        <p>{errors.confirmpassword && "Passwords should match"}</p>
        <input
          type="submit"
          id="submit"
          className="border-2 cursor-wait text-bold text-white p-4 rounded-3xl text-xl bg-emerald-500 border-emerald-400"
          //ref={register}
        />
      </form>
    </div>
  );
}

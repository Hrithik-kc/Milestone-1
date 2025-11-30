"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Select = (props) => {
  const router = useRouter();
  return (
    <div>
      <select
        className="block md:hidden text-white w-4 -mt-2.5 -ml-4 rounded-4xl "
        onChange={(e) => {
          router.push(e.target.value);
        }}
      >
        <option className="mx-9 "  >
          {props.op1}
        </option>
        <option className=" text-black font-semibold " value="/login">
          {props.op2}
        </option>
        <option className=" text-black font-semibold"value="/register">
          {props.op3}
        </option >
        <option className=" text-black font-semibold"value="/menu">
          {props.op4}
        </option>
         <option className=" text-black font-semibold"value="/chef">
          {props.op5}
        </option>
      </select>
    </div>
  );
};

export default Select;

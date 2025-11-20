"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Select = (props) => {
  const router = useRouter();
  return (
    <div>
      <select
        className="hidden sm:block "
        onChange={(e) => {
          router.push(e.target.value);
        }}
      >
        <option className="mx-9" >
          {props.op1}
        </option>
        <option className=" text-black font-semibold" value="/login">
          {props.op2}
        </option>
        <option className=" text-black font-semibold"value="/register">
          {props.op3}
        </option>
      </select>
    </div>
  );
};

export default Select;

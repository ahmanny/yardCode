"use client";
import React from "react";
interface TextInputProps {
  label: string;
  name: string;
  register: any;
  errors: any;
  isReadOnly?: boolean;
  placeholder?: string;
}
export default function TextInput({
  label,
  name,
  register,
  errors,
  isReadOnly,
  placeholder,
}: TextInputProps) {
  return (
    <div className=" flex-col flex ">
      <label htmlFor={label} className="label">
        {label}
      </label>
      <input
        {...register(name)}
        id={label}
        className=" input h-[48px]"
        placeholder={placeholder}
        readOnly={isReadOnly}
      />
      {errors?.[name]?.message && (
        <p className="text-red-500 text-sm">{String(errors[name]?.message)}</p>
      )}
    </div>
  );
}

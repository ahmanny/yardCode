"use client";

import React from "react";
interface TextereaInputProps {
  label: string;
  name: string;
  register: any;
  errors: any;
  placeholder?: string;
}
export default function TextereaInput({
  label,
  name,
  register,
  errors,
  placeholder,
}: TextereaInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <textarea
        {...register(name)}
        id={name}
        rows={4}
        className=" input"
        placeholder={placeholder}
      />
      {errors?.[name]?.message && (
        <p className="text-red-500 text-sm">{String(errors[name]?.message)}</p>
      )}
    </div>
  );
}

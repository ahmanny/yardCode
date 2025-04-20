"use client";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Controller } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  control: any;
  placeholder?: string;
  errors?: any;
}

export default function PhoneNoInput({
  control,
  label,
  name,
  errors,
  placeholder,
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <PhoneInput
            {...field}
            international
            defaultCountry="NG"
            placeholder={placeholder}
          />
        )}
      />
      {errors?.[name]?.message && (
        <p className="text-red-500 text-sm">{String(errors[name]?.message)}</p>
      )}
    </div>
  );
}

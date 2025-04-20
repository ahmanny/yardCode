"use client";

import React from "react";
import TextInput from "./TextInput";
import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneNoInput from "./PhoneNoInput";
import TextereaInput from "./TextereaInput";
import toast from "react-hot-toast";

const WaitlistSchema = z.object({
  name: z.string().min(3, "Enter your name"),
  email: z.string().email("Enter a valid Email"),
  telephone: z.string().refine((val) => isValidPhoneNumber(val), {
    message: "Enter a valid phone number",
  }),
  feedback: z.string().optional(),
  reason: z.string().optional(),
  DoYouNeedCustomised: z.string().optional(),
});

type WaitlistFormData = z.infer<typeof WaitlistSchema>;
export default function WaitlistForm() {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(WaitlistSchema),
  });

  const onSubmit = (data: WaitlistFormData) => {
    console.log(data);
    toast.success("form submitted!");
    reset();
  };
  return (
    <div>
      <h3 className="heading mb-8">Sign Up Now</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full nam input */}
        <div>
          <TextInput
            name="name"
            label="Full Name"
            register={register}
            errors={errors}
            placeholder="Enter your full name"
          />
        </div>
        {/* Email input */}
        <div>
          <TextInput
            name="email"
            label="Email Address"
            placeholder="Enter your email"
            register={register}
            errors={errors}
          />
        </div>
        {/* telephone input */}
        <div>
          <PhoneNoInput
            name="telephone"
            label="Phone Number"
            control={control}
            placeholder="Enter your phone number"
            errors={errors}
          />
        </div>
        {/* feedback input */}
        <div>
          <TextereaInput
            name="feedback"
            label="Feedback/Comments/Recommendations (Optional)"
            placeholder="Share your thoughts..."
            register={register}
            errors={errors}
          />
        </div>
        {/* reason input */}
        <div>
          <TextereaInput
            name="reason"
            label="Why do you feel that you may need YardCode? (Optional)"
            placeholder="Explain why YardCode is important to you..."
            errors={errors}
            register={register}
          />
        </div>
        {/* DoYouNeedCustomised input */}
        <div>
          <TextereaInput
            name="DoYouNeedCustomised"
            label="Do You want Your Own Customised YardCode? (Optional)"
            placeholder="Get a Customised YardCode for your Business or Event, e.g Yardcode.ng/Kobis FastFood"
            register={register}
            errors={errors}
          />
        </div>
        <div>
          <button type="submit" className="btn ">
            Join the Waitlist
          </button>
        </div>
      </form>
    </div>
  );
}

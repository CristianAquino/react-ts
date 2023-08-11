import { z } from "zod";
import { COUNTRY } from "../models";
import { validationImage } from "../utils";

export const basicFormSchema = z
  .object({
    name: z
      .string()
      .nonempty({ message: "Name is required" })
      .min(3, { message: "Name must be at least 3 characters" })
      .max(10, { message: "Name must be less than 10 characters" }),
    email: z
      .string()
      .nonempty({ message: "Email is required" })
      .email({ message: "Invalid email" }),
    password: z
      .string()
      .nonempty({ message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" })
      .max(20, { message: "Password must be less than 20 characters" }),
    confirmPassword: z.string(),
    birthDate: z
      .string()
      .refine((value) => new Date(value).toString() !== "Invalid Date", {
        message: "Invalid date",
      })
      .transform((value) => new Date(value).toISOString()),
    adult: z
      .string()
      .refine((value) => new Date(value).toString() !== "Invalid Date", {
        message: "Invalid date",
      })
      .transform((value) => {
        const now = new Date();
        const birth = new Date(value);
        const age = now.getFullYear() - birth.getFullYear();
        return age >= 18;
      }),
    country: z.enum(COUNTRY, {
      errorMap: () => ({ message: "Invalid country" }),
    }),
    province: z.optional(
      z.string().nonempty({ message: "Province is required" })
    ),
    foto: z.any(),
    terms: z
      .boolean()
      .refine((value) => value, { message: "You must accept the terms" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

import { DateRange } from "react-day-picker";
import { z } from "zod";

export const searchSchema = z.object({
  city: z.string(),
  occupancy: z.string(),
  date: z.custom<DateRange>().optional(),
});
export type SearchFormData = z.infer<typeof searchSchema>;

export const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});
export type SignInFormData = z.infer<typeof signInSchema>;

export const signUpSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(8, "Should contain at least 8 characters"),
  name: z.string(),
  phone: z.string(),
});
export type SignUpFormData = z.infer<typeof signUpSchema>;

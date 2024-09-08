import { DateRange } from "react-day-picker";
import { z } from "zod";

import { ERRORS } from "@/constants/alerts";

export const searchSchema = z.object({
  city: z.string(),
  occupancy: z.string(),
  date: z.custom<DateRange>().optional(),
});
export type SearchFormData = z.infer<typeof searchSchema>;

export const signInSchema = z.object({
  email: z.string().min(1, ERRORS.min.default).email(ERRORS.format.email),
  password: z.string().min(1, ERRORS.min.default),
});
export type SignInFormData = z.infer<typeof signInSchema>;

export const signUpSchema = z.object({
  email: z.string().min(1, ERRORS.min.default).email(ERRORS.format.email),
  password: z.string().min(6, ERRORS.min.password),
  name: z.string().min(1, ERRORS.min.default),
});
export type SignUpFormData = z.infer<typeof signUpSchema>;

export const profileSchema = z.object({
  email: z.string().min(1, ERRORS.min.default).email(ERRORS.format.email),
  name: z.string().min(1, ERRORS.min.default),
});
export type ProfileFormData = z.infer<typeof profileSchema>;

export const paymentSchema = z.object({
  cardholder: z.string().min(1, ERRORS.min.default),
  cardCVC: z
    .string()
    .min(1, ERRORS.min.default)
    .regex(/^\d{3,4}$/, ERRORS.format.cardCVC),
  cardNumber: z
    .string()
    .min(1, ERRORS.min.default)
    .regex(/^(\d{4}[- ]?){3}\d{4}|\d{16,19}$/, ERRORS.format.cardNumber),
  cardExpirationDate: z
    .string()
    .min(1, ERRORS.min.default)
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, ERRORS.format.cardExpirationDate),
  email: z.string().min(1, ERRORS.min.default).email(ERRORS.format.email),
  name: z.string().min(1, ERRORS.min.default),
});
export type PaymentFormData = z.infer<typeof paymentSchema>;

"use client";

import { User } from "@/types/entities";
import { PaymentFormData } from "@/types/schemas";

import { Button } from "@/components/common/Button";
import { FormError } from "@/components/common/FormError";
import { Label } from "@/components/common/Label";
import { TextInput } from "@/components/inputs/TextInput";

import { useComponent } from "./useComponent";

interface PaymentFormProps {
  user: User | null;
  onPaymentConfirmed: (formData: PaymentFormData) => void;
}

export const PaymentForm = ({ user, onPaymentConfirmed }: PaymentFormProps) => {
  const { form, onSubmit } = useComponent({ user, onPaymentConfirmed });

  const { register, formState } = form;

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-8"
    >
      <div className="grid grid-cols-[2fr_1fr] gap-4">
        <div data-test="cardholder-field">
          <Label
            htmlFor="cardholder"
            required
          >
            Cardholder name
          </Label>

          <TextInput
            id="cardholder"
            {...register("cardholder", { required: true })}
          />

          <FormError error={form.formState.errors.cardholder?.message} />
        </div>

        <div data-test="cardCVC-field">
          <Label
            htmlFor="cardCVC"
            required
          >
            CVC
          </Label>

          <TextInput
            id="cardCVC"
            {...register("cardCVC", { required: true })}
          />

          <FormError error={form.formState.errors.cardCVC?.message} />
        </div>

        <div data-test="cardNumber-field">
          <Label
            htmlFor="cardNumber"
            required
          >
            Card number
          </Label>

          <TextInput
            id="cardNumber"
            {...register("cardNumber", { required: true })}
          />

          <FormError error={form.formState.errors.cardNumber?.message} />
        </div>

        <div data-test="cardExpirationDate-field">
          <Label
            htmlFor="cardExpirationDate"
            required
          >
            MM/YY
          </Label>

          <TextInput
            id="cardExpirationDate"
            {...register("cardExpirationDate", { required: true })}
          />

          <FormError
            error={form.formState.errors.cardExpirationDate?.message}
          />
        </div>
      </div>

      <div className="h-[1px] bg-slate-200" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div data-test="email-field">
          <Label
            htmlFor="email"
            required
          >
            Email
          </Label>

          <TextInput
            id="email"
            {...register("email", { required: true })}
          />

          <FormError error={form.formState.errors.email?.message} />
        </div>

        <div data-test="name-field">
          <Label
            htmlFor="name"
            required
          >
            Name
          </Label>

          <TextInput
            id="name"
            {...register("name", { required: true })}
          />

          <FormError error={form.formState.errors.name?.message} />
        </div>
      </div>

      <Button
        type="submit"
        isLoading={formState.isSubmitting}
        className="w-max"
      >
        Confirm payment
      </Button>
    </form>
  );
};

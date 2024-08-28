import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import {
  useRouter,
  usePathname,
  useSearchParams,
  ReadonlyURLSearchParams,
} from "next/navigation";
import { DateRange } from "react-day-picker";
import { useForm } from "react-hook-form";

import { SearchFormData, searchSchema } from "@/types/schemas";

export const useComponent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const form = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      city: searchParams.get("city") || "",
      occupancy: searchParams.get("occupancy") || "",
      date: getDefaultDateValue(searchParams),
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    const { city, occupancy, date } = values;

    const params = new URLSearchParams(searchParams.toString());

    params.set("page", "1");

    if (city) {
      params.set("city", city);
    } else {
      params.delete("city");
    }

    if (occupancy) {
      params.set("occupancy", occupancy);
    } else {
      params.delete("occupancy");
    }

    if (date?.from) {
      params.set("from", format(date.from, "yyyy-MM-dd"));
    } else {
      params.delete("from");
    }

    if (date?.to) {
      params.set("to", format(date.to, "yyyy-MM-dd"));
    } else {
      params.delete("to");
    }

    router.replace(`${pathname}?${params.toString()}#hotels`);
  });

  return { form, onSubmit };
};

const getDefaultDateValue = (
  searchParams: ReadonlyURLSearchParams,
): DateRange | undefined => {
  const from = searchParams.get("from");
  const to = searchParams.get("to");

  if (!from) {
    return undefined;
  } else if (to) {
    return { from: new Date(from), to: new Date(to) };
  } else {
    return { from: new Date(from) };
  }
};

"use client";

import { MapPinIcon, Users } from "lucide-react";
import { Controller } from "react-hook-form";

import { SelectOption } from "@/types/common";

import { Button } from "@/components/common/Button";
import { Label } from "@/components/common/Label";
import { DateInput } from "@/components/inputs/DateInput";
import { Select } from "@/components/inputs/Select";

import { useComponent } from "./useComponent";

interface SearchFormProps {
  cityOptions: SelectOption[];
  occupancyOptions: SelectOption[];
}

export const SearchForm = ({
  cityOptions,
  occupancyOptions,
}: SearchFormProps) => {
  const { form, onSubmit } = useComponent();

  return (
    <form
      onSubmit={onSubmit}
      className="grid w-full grid-cols-1 items-end gap-2 rounded-sm bg-white p-4 shadow-2xl sm:grid-cols-2 lg:grid-cols-5"
      data-test="search-form"
    >
      <div>
        <Label htmlFor="city">City</Label>
        <Controller
          control={form.control}
          name="city"
          render={() => (
            <Select
              id="city"
              options={cityOptions}
              defaultValue={form.getValues("city")}
              callback={(value) => form.setValue("city", value)}
              icon={<MapPinIcon />}
              dataTest="city"
            />
          )}
        />
      </div>

      <div>
        <Label htmlFor="occupancy">Occupancy</Label>
        <Controller
          control={form.control}
          name="occupancy"
          render={() => (
            <Select
              id="occupancy"
              options={occupancyOptions}
              defaultValue={form.getValues("occupancy")}
              callback={(value) => form.setValue("occupancy", value)}
              icon={<Users />}
              dataTest="occupancy"
            />
          )}
        />
      </div>

      <div className="col-span-1 lg:col-span-2">
        <Label htmlFor="date">Period of stay</Label>
        <Controller
          control={form.control}
          name="date"
          render={() => (
            <DateInput
              id="date"
              defaultValue={form.getValues("date")}
              callback={(value) => form.setValue("date", value)}
              dataTest="date"
            />
          )}
        />
      </div>

      <Button type="submit">Search</Button>
    </form>
  );
};

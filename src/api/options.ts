"use server";

import { SelectOption } from "@/types/common";

import { db } from "@/utils/db";

export const getCityOptions = async (): Promise<SelectOption[]> => {
  return db
    .selectFrom("city")
    .select(["id as value", "name as label"])
    .execute();
};

export const getOccupancyOptions = async (): Promise<SelectOption[]> => {
  return db
    .selectFrom("accommodation")
    .select(["id as value", "name as label"])
    .execute();
};

export const getFacilityOptions = async (): Promise<SelectOption[]> => {
  return db
    .selectFrom("facility")
    .select(["id as value", "name as label"])
    .execute();
};

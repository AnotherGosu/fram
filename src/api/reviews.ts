"use server";

import { Review } from "@/types/entities";

import { db } from "@/utils/db";

export const getReviews = async (): Promise<Review[]> => {
  return db.selectFrom("review").selectAll().execute();
};

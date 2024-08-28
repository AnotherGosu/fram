"use server";

import { News } from "@/types/entities";

import { db } from "@/utils/db";

export const getNews = async (): Promise<News[]> => {
  return db.selectFrom("news").selectAll().limit(4).execute();
};

export const getPopularNews = async (): Promise<News[]> => {
  return db.selectFrom("news").selectAll().limit(3).offset(4).execute();
};

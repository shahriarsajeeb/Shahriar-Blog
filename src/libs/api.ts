import { defineOneEntry } from "oneentry";

export const API = () => {
  const { Pages,Products } = defineOneEntry(process.env.API_URL!, {
    token: process.env.API_TOKEN,
  });
  return { Pages,Products };
};

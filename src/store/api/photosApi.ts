import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {} from "./types";
import { baseUrl } from "../../utils/baseUrl";

export const photosApi = createApi({
  reducerPath: "photosApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPhotoById: builder.query<string, number>({
      query: (photo_id) => `photo/photo_id=${photo_id}`,
    }),
  }),
});

export const { useGetPhotoByIdQuery } = photosApi;

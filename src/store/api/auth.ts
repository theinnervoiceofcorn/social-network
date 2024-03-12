import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import type {
  IGetUserByIdResponse,
  IRegisterUserPayload,
  IRegisterUserResponse,
  ILoginUserResponse,
  ILoginUserPayload,
} from "./types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUserById: builder.query<IGetUserByIdResponse, number>({
      query: (user_id) => `user?user_id=${user_id}`,
    }),
    registerUser: builder.mutation<IRegisterUserResponse, IRegisterUserPayload>(
      {
        query: (body) => ({
          url: "registration",
          method: "POST",
          body,
        }),
      }
    ),
    loginUser: builder.mutation<ILoginUserResponse, ILoginUserPayload>({
      query: (body) => ({
        url: "login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
} = authApi;

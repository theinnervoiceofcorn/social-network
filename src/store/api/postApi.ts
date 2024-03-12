import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import type {
  IDeletePostResponse,
  IGetPostByIdResponse,
  IPostPostPayload,
  IPostPostResponse,
  IUpdatePostPayload,
  IUpdatePostResponse,
} from "./types";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPostById: builder.query<IGetPostByIdResponse, number>({
      query: (post_id) => `post?post_id=${post_id}`,
    }),
    postPost: builder.mutation<IPostPostResponse, IPostPostPayload>({
      query: (body) => ({
        url: "post",
        method: "POST",
        body,
      }),
    }),
    updatePost: builder.mutation<IUpdatePostResponse, IUpdatePostPayload>({
      query: (body) => ({
        url: "post",
        method: "PUT",
        body,
      }),
    }),
    deletePost: builder.mutation<IDeletePostResponse, number>({
      query: (post_id) => ({
        url: `post?post_id=${post_id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPostByIdQuery,
  useDeletePostMutation,
  usePostPostMutation,
  useUpdatePostMutation,
} = postApi;

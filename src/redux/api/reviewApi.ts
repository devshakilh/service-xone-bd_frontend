import { tagTypes } from "../tag-types.ts";
import { baseApi } from "./baseApi";

const REVIEWS_URL = "/review";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //review list
    reviews: build.query({
      query: () => ({
        url: `${REVIEWS_URL}`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),
    // isngle review
    review: build.query({
      query: (id) => ({
        url: `${REVIEWS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),

    // review create
    createReview: build.mutation({
      query: (body) => ({
        url: `${REVIEWS_URL}/create`,
        method: "POST",
        data: body,
      }),
      invalidatesTags: [tagTypes.review],
    }),

    // review update
    updateReview: build.mutation({
      query: (paylod) => ({
        url: `${REVIEWS_URL}/${paylod.id}`,
        method: "PATCH",
        data: paylod.body,
      }),
      invalidatesTags: [tagTypes.review],
    }),
    // review delete
    deleteReview: build.mutation({
      query: (id) => ({
        url: `${REVIEWS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.review],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useReviewQuery,
  useReviewsQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;

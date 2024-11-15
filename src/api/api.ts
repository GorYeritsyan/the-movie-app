import { FilmInfo, FilmsData, GenreName, GenresList, TrailerData, TrailerState } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_BEAR_TOKEN}`,
    },
  }),
  endpoints: (builder) => ({
    getGenresList: builder.query<GenreName[], void>({
      query: () => "/genre/movie/list?language=en-US",
      transformResponse: (res: GenresList) => res.genres,
    }),

    //get all movies in the home page
    getAllMovies: builder.query<FilmsData, number | void>({
      query: (page = 1) => `/discover/movie?language=en-US&page=${page}`,
    }),

    // get specific movies filtered by genre
    getGenreMovies: builder.query<
      FilmsData,
      { page: number; genreId?: string }
    >({
      query: ({ page, genreId }) =>
        `/discover/movie?language=en-US&with_genres=${genreId}&page=${page}`,
    }),

    // get one movie by using unique id
    getOneMovie: builder.query<FilmInfo, string | undefined>({
      query: (movieId) => `/movie/${movieId}?language=en-US`
    }),

    // get trailers for current movie
    getMovieTrailer: builder.query<TrailerData[], string | undefined>({
      query: (movieId) => `/movie/${movieId}/videos?language=en-US`,
     transformResponse: (res: TrailerState) => res.results
    }),


    // search for movies
    searchMovies: builder.query<FilmInfo[], string>({
      query: (query) => `/search/movie?query=${query}`,
      transformResponse: (res: FilmsData) => res.results
    })

  }),
});

export const {
  useGetGenresListQuery,
  useGetAllMoviesQuery,
  useGetGenreMoviesQuery,
  useGetOneMovieQuery,
  useGetMovieTrailerQuery,
  useSearchMoviesQuery
} = api;

import { FilmInfo, FilmsData, GenreName, GenresList } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// 'https://api.themoviedb.org/3' <= baseURL

// getGenres => /genre/movie/list?api_key=${apiKey}&language=en-US
// MoviePage => discover/movie?api_key=${apiKey}&language=en-US&page=${pageCount}
// GETonemovie => /movie/${id}?api_key=${apiKey}&language=en-US
// getSerch => search/movie?api_key=${apiKey}&query=${text}`
// getGenreMovie => /discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genreId}&page=${1}

//get Trailer => /movie/${movieId}/videos?language=en-US

// attribute - https://www.youtube.com/embed/${elem.key}

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

    // get one movie

    getOneMovie: builder.query<FilmInfo, string | undefined>({
      query: (movieId) => `/movie/${movieId}?language=en-US`
    })

  }),
});

export const {
  useGetGenresListQuery,
  useGetAllMoviesQuery,
  useGetGenreMoviesQuery,
  useGetOneMovieQuery
} = api;

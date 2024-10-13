
import { GenreName, GenresList } from "@/types/types";
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
    baseUrl: "https://api.themoviedb.org/3",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_BEAR_TOKEN}`,
    },
  }),
  endpoints: (builder) => ({
    getGenresList: builder.query<GenresList, void>({
      query: () => "/genre/movie/list?language=en-US",
    }),
  }),
});

export const { useGetGenresListQuery } = api;

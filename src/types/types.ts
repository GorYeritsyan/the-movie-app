export type GenreName = {
  id: number;
  name: string;
};

export type GenresList = {
  genres: GenreName[];
};

export type FilmsData = {
  page: number;
  results: FilmInfo[];
  total_pages: number;
  total_results: number;
};

export type FilmInfo = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  genres?: GenreName[];
  origin_country?: string[];

  belongs_to_collection?: { name: string };
  production_countries?: Array<{ name: string }>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  runtime?: number;
  tagline?: string
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type FilmsSliceInitState = {
  page: number;
  paginationPortionNumber: number;
};

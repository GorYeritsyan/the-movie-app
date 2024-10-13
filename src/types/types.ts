export type GenreName = {
    id: number;
    name: string;
}

export type GenresList = {
    genres: GenreName[]
}

export type FilmsData = {
    page: number;
    results: FilmInfo[];
    total_pages: number;
    total_results: number
}

export type FilmInfo = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
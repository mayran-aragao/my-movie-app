interface Belongstocollection {
  backdrop_path: string;
  id: number;
  name: string;
  poster_path: string;
}
interface Genre {
  id: number;
  name: string;
}
interface Productioncompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}
interface Productioncountry {
  iso_3166_1: string;
  name: string;
}
interface Spokenlanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
export interface IMovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Belongstocollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Productioncompany[];
  production_countries: Productioncountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Spokenlanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ICastDetails {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface ICastReponse {
  cast: ICastDetails[];
}

export interface IFavoriteButtonProps {
  isMyFavorite: boolean;
}

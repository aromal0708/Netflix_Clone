export interface movieUrlsType {
  id?: number;
  genre: string;
  url: string;
}

export interface MovieProps {
  id?: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
}

export interface PosterProps {
  poster_path: string;
}

export interface CredentialsProps {
  email: string;
  password: string;
}

export interface UserType {
  email: string;
  password: string;
}

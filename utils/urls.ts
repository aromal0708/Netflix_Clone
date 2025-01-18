import { movieUrlsType } from "@/types";

export const trending: string = `trending/movie/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`;
export const topRated: string = `movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`;

export const movieUrls :movieUrlsType[] = [
  {
    id:1,
    genre: "Action",
    url: `discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=28`,
  },
  {
    id:2,
    genre: "Originals",
    url: `discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_networks=213`,
  },
  {
    id:3,
    genre: "Comedy",
    url: `discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=35`,
  },
  {
    id:4,
    genre: "Horror",
    url: `discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=27`,
  },
  {
    id:5,
    genre: "Romance",
    url: `discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10749`,
  },
];

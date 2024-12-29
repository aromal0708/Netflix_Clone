export interface movieProps {
    id: number;  
    genre: string;
    movies: Movie[];
}

export interface Movie {
    id: number;
    name: string;
    description: string;
    image: string;
}
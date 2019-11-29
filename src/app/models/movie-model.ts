import { MovieInterface } from "../interface/movie-interface";

export default class Movie implements MovieInterface {
    code: number;    title: string;
    year: number;
    rating: number;
}

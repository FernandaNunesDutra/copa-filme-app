import { MovieInterface } from "../interface/movie-interface";

export default class Movie implements MovieInterface {
    code: Number;    title: String;
    year: Number;
    rating: Number;
}

export default class Config {
  
  public static get baseURL(): string { return "https://copa-filme-server.herokuapp.com"; }

  public static get allMoviesURL(): string { return "movie/all"; }
  public static get championsMoviesURL(): string { return "movie/champions"; }

};
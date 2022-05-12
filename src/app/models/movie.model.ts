export class Person {
  id? : number;
  lastName : string;
  firstName : string;
}

export class Movie {
  id : number;
  title : string;
  description : string;
  releaseYear : number;
  realisator : Person;
  scenarist : Person;
  actors? : Actor[];
}

export class MovieToApi {

  title : string;
  description : string;
  releaseYear : number;
  realisatorID : number;
  scenaristID : number;
  actors? : SetRole[];
}

export class SetRole {
  movieId : number;
  personId : number;
  role : string;
}

export class Actor {
  role : string;
  firstName : string;
  lastName : string;
  id? : number;
}

export class CPerson {
  id : number;
  lastName : string;
  firstName : string;
  realMovies? : Movie[];
  scenMovies? : Movie[];
  castedAs? : Cast[];
}

export class Cast {
  role : string;
  movieTitle : string;
  movieID : number;
}

export class Comment {
  id : number;
  content : string;
  postDate : Date;
  userID : number;
  movieID : number;
  userName? : string;
}

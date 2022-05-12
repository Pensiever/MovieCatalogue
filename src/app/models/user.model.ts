export class User {
  id : number;
  email : string;
  token : string;
  firstName : string;
  lastName : string;
  birthDate : Date;
  isActive : boolean;
  isAdmin : boolean;
}

export class NewUser {
  email : string;
  password : string;
  lastName : string;
  firstName : string;
  birthDate : Date;
}

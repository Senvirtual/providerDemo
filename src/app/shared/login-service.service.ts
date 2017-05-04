import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }
  logging( message: string) {
    console.log(message);
  }

}

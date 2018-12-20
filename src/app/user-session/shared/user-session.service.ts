import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  private key: string = 'userSession';

  constructor() { }

  get(): User {
    let user = sessionStorage.getItem(this.key);
    return JSON.parse(user) || {};
  }

  set(user: User): void {
    let strUser = JSON.stringify(user);
    sessionStorage.setItem(this.key, strUser);
  }

  remove(): void {
    sessionStorage.removeItem(this.key);
  }
}

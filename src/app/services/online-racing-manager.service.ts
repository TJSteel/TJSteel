import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/onlineRacingManager';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineRacingManagerService {

  private users: User[];
  private usersObservable: Observable<User[]>;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {

    // already have users, return them
    if (this.users) {
      return of(this.users);

      // getting users is in progress, return the in progress call
    } else if (this.usersObservable) {
      return this.usersObservable;

      // we need to make a request to get the users
    } else {
      return of(new Array<User>());
      /*
      this.usersObservable = this.http.get<User[]>(`https://online-racing-manager.herokuapp.com/users/getAll`);
      this.usersObservable.subscribe(users => {
        this.usersObservable = null;
        if (users) {
          this.users = users;
        }
      });
      return this.usersObservable;
      */
    }
  }
}


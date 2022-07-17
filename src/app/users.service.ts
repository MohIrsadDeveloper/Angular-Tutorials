import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {
  }
  getData() {
    return {
      name : "abdul",
      age : 16,
      id : 100
    }
  }
}

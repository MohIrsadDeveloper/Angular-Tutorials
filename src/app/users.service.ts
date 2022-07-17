import { Injectable } from '@angular/core';
import { dataType } from "./users"
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getData() {
    const data: dataType = {
      name: "abdul",
      age: 16,
      Indian: true,
      address: "Mumbai, India"
    }
    return data;
  }
}

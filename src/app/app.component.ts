import { Component } from '@angular/core';
import { dataType } from './users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-tutorial';
  getData() {
    const data:dataType = {
      name : "abdul",
      age : 16,
      Indian : true,
      address : "Mumbai, India"
    }
    return data;
  }
  
}


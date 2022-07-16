import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-tutorial';
  // data = "Aiysha";
  data = [
    {
      name: "Abdul",
      age: 16,
      email: "abdul@gmail.com"
    },
    {
      name : "Asma",
      age : 18,
      email : "asma@gmail.com"
    },
    {
      name : "Aiysha",
      age : 19,
      email : "aiysha@gmail.com"
    }
  ]


}


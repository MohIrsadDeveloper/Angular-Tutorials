import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-tutorial';
  // data = ['abdul', 'asma', 'ayesha', 'kulsum'],
  data = [
    {
      name : "abdul",
      age : 16,
      email : "abdul@gmail.com"
    },
    {
      name : "asma",
      age : 18,
      email : "asma@gmail.com"
    },
    {
      name : "ayesha",
      age : 19,
      email : "ayesha@gmail.com"
    }
  ]

}


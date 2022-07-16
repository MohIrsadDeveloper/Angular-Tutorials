import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-tutorial';
  name = "Abdul IdrisI";
  today = Date.now();
  str = "Hello Angular";
  money = 100;
  
}


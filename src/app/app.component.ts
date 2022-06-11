import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tutorial';
  num = 20;
  arr = ['apple', 'mango', 'orange'];
  obj = {
    name : 'Abdul',
    age : 15
  }
  home = () => {
    return this.num
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-tutorial';
  color = 'blue';
  err = false;
  changeColor() {
    // this.err = true;
    this.err = !this.err
  }

}


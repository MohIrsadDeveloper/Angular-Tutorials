import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-tutorial';
  // call function
  getName() {
    alert('abdul')
  }

  // call function with parameter
  getName1(name:string) {
    alert(name)
  }

  // call function with property params
  myName = 'ayesha'
  getName2 = (name:string) => {
    alert(name);
  };
}

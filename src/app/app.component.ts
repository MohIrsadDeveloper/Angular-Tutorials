import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-tutorial';
  value = '';
  getValue(event: any)
  {
    console.warn(event);
    this.value=event
  }
}

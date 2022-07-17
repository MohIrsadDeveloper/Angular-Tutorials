import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-tutorial';
  name = "";
  constructor(private user:UsersService) {
    console.log(this.user.getData());
    this.name = this.user.getData().name;
  }
  
}


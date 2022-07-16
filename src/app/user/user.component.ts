import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output() parentFunction:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
   
  }
  getData() {
    let data = {
      name : "abdul",
      age : 16,
      email : "abdul@gmail.com"
    }
    this.parentFunction.emit(data)
  }

}

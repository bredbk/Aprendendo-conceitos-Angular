import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'angular-crud';



  ngOnInit() {
    this.userService.getAllData()
      .subscribe(data => {
        console.log(data)
      })
  }

  constructor(private userService: UsersService) {
  }

  submitData(value: any) {
    let body = {
      name: value.name,
      age: value.age
    }
    this.userService.postData(body)
      .subscribe(response => {
        console.log(response)
      })
  }

  updateData(value: any) {
    let body = {
      name: value.name,
      age: value.age
    }

    this.userService.updateData(body, "628677b054248d35a812d47f")
      .subscribe(response => {
        console.log(response)
      })
  }

  delete() {
    this.userService.deleteData("62868a2d6b59c8c24562a206")
      .subscribe(response => {
        console.log(response);
      })
  }


}
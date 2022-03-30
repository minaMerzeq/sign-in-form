import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private myService: UserService) { }

  name;

  ngOnInit(): void {
    const id = sessionStorage.getItem("id");
    let user;
    this.myService.GetUserById(id).subscribe(
      (res)=>{
        user = res;
        this.name = user.Name;
      },
      (err)=>{console.log(err);}
      );
  }

}

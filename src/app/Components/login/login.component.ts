import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private myService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  Validation = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    pass: new FormControl("", Validators.required)
  });

  get Email(){
    return this.Validation.controls.email.valid;
  }

  get Pass(){
    return this.Validation.controls.pass.valid;
  }

  validUser = true;

  SignIn(email, pass){
    if(!this.Email || !this.Pass)
      return;

    let users;
    this.myService.GetAllUsers().subscribe(
      (res)=>{users = res;
        users = users.filter(u => u.Email == email && u.Password == pass);
        if(users.length == 0){
          this.validUser = false;
        }
        else{
          sessionStorage.setItem("id", users[0].ID);
          this.router.navigate(["home"]);
        }
      },
      (err)=>{console.log(err);}
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;

  constructor(private http: HttpClient, private router: Router) {

  }
  ngOnInit(): void {
  }

  login() {
    this.http.post('http://localhost:8000/users/login', { email: this.email, password: this.password }).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/products']);
      alert('Login Successful!');
    }, (error: any) => {
      alert('Error occured!');
      console.error(error);
    });
  }

}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email;
  password;

  constructor(private http: HttpClient) {

  }
  login() {
    this.http.post('http://localhost:8000/users/login', { email: this.email, password: this.password }).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem('token', res.token);
      alert('Login Successful!');
    }, (error:any)=>{
      alert('Error occured!');
      console.error(error);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  API_URL = 'http://localhost:4000/courses';
  courses: any;

  constructor(public auth: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${this.API_URL}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
    })
    .subscribe(
      data => this.courses = data,
      error => this.courses = error
    )
  }

}

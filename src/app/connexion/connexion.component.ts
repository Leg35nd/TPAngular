import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  courriel = "";
  motdepasse = "";

  constructor(public http: HttpClient, private router: Router, public service: HttpService) {
  }

  ngOnInit() {
  }

  login() {
    let user = {
      "userName": this.courriel,
      "password": this.motdepasse
    }

    this.http.post<any>('https://localhost:44363/api/Account/Login', user).subscribe(suc => {
        console.log(suc);
        this.service.Token = suc.token;
        localStorage.setItem('token', suc.token);
        this.router.navigate(['/home']);
      },
      err => {
        console.log(err);
      });
  }
}

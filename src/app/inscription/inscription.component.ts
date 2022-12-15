import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(public http: HttpClient, private router: Router, public service: HttpService) { }

  courriel = "";
  utilisateur = "";
  motdepasse = "";
  motdepasseRetry = "";

  register(){
    let user = {
      "username" : this.utilisateur,
      "email" : this.courriel,
      "password" : this.motdepasse,
      "passwordConfirm" : this.motdepasseRetry
    }

    this.http.post<any>('https://localhost:44363/api/Account/Register', user).subscribe(suc => {
        console.log(suc);
        this.router.navigate(['/login'])
      },
      err => {
        console.log(err);
      });
  }

  ngOnInit(): void {
  }

}

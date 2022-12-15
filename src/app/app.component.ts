import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "./http.service";
import {Router} from "@angular/router";

class TokenService {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AnalyTIC';

  constructor(public http: HttpClient, public service: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.statusCheck();
  }

  statusCheck(){
    if (this.service.Token == ""){
      this.router.navigateByUrl('/connexion')
    }
    else{
      this.router.navigateByUrl('/accueil')
    }
  }

  isLogged() {
    return this.service.Token != "";
  }

  LogMeInTest(){
    this.service.Token = "test";
    this.statusCheck();
  }

  Deconnexion(){
    this.service.Token = "";
    this.statusCheck();
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { AnalyseComponent } from './analyse/analyse.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { GroupeComponent } from './groupe/groupe.component';
import { EquipementComponent } from './equipement/equipement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { PeriodeComponent } from './periode/periode.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalyseComponent,
    ConfigurationComponent,
    ConnexionComponent,
    InscriptionComponent,
    EntrepriseComponent,
    GroupeComponent,
    EquipementComponent,
    AccueilComponent,
    PeriodeComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/accueil', pathMatch: 'full'},
      {path: 'accueil', component: AccueilComponent},
      {path: 'analyse/periode', component: AnalyseComponent},
      {path: 'analyse/periode/liste/:id', component: PeriodeComponent},
      {path: 'analyse/periode/details/:entrepriseId/:periodeId', component: DetailsComponent},
      {path: 'configuration/entreprise', component: ConfigurationComponent},
      {path: 'connexion', component: ConnexionComponent},
      {path: 'inscription', component: InscriptionComponent},
      {path: 'configuration/entreprise/details/:id', component: EntrepriseComponent},
      {path: 'configuration/groupe/details/:id', component: GroupeComponent},
      {path: 'configuration/equipement/details/:id', component: EquipementComponent},
    ]),
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

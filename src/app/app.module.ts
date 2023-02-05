import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CompetencesComponent } from './competences/competences.component';
import { LanguagesComponent } from './languages/languages.component';
import { ExpeproComponent } from './expepro/expepro.component';
import { CursusscolaireComponent } from './cursusscolaire/cursusscolaire.component';
import { PersoComponent } from './perso/perso.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    CompetencesComponent,
    LanguagesComponent,
    ExpeproComponent,
    CursusscolaireComponent,
    PersoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

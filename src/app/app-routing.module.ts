import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CompetencesComponent } from './competences/competences.component';
import { CursusscolaireComponent } from './cursusscolaire/cursusscolaire.component';
import { ExpeproComponent } from './expepro/expepro.component';
import { LanguagesComponent } from './languages/languages.component';
import { PersoComponent } from './perso/perso.component';

const routes: Routes = [
  {
    path: 'Pages/compétences',
    component: CompetencesComponent
  },
  {
    path: 'Pages/langages',
    component: LanguagesComponent
  },
  {
    path: 'Pages/',
    component: AccueilComponent
  },
  {
    path: 'Pages/experienceProfesionelle',
    component: ExpeproComponent
  },
  {
    path: 'Pages/cursusScolaire',
    component: CursusscolaireComponent
  },
  {
    path: 'Pages/personel',
    component: PersoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

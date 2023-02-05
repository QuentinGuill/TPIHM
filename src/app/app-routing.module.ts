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
    path: 'compétences',
    component: CompetencesComponent
  },
  {
    path: 'langages',
    component: LanguagesComponent
  },
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'experienceProfesionelle',
    component: ExpeproComponent
  },
  {
    path: 'cursusScolaire',
    component: CursusscolaireComponent
  },
  {
    path: 'personel',
    component: PersoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

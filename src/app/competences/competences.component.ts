import { Component } from '@angular/core';
import { Status } from '../status';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})

export class CompetencesComponent {
  status= new Status();
  statusWeb= new Status();
  statusAutre= new Status;

  clickEvent(stat : Status, n : number){
      stat.statusList[n] = !stat.statusList[n];
      stat.statusGeneral = this.findValue(stat.statusList);
  }

  findValue(tab : boolean[]) {
    let res = false;
    //One true makes all true
    tab.forEach( element => res = res || !element);

    return res;
  }

  constructor() {
  }
}

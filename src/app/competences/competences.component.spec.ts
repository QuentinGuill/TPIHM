import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencesComponent } from './competences.component';

status: boolean = false;

clickEvent(){
    this.status = !this.status;       
}

describe('CompetencesComponent', () => {
  let component: CompetencesComponent;
  let fixture: ComponentFixture<CompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

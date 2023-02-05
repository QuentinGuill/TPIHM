import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursusscolaireComponent } from './cursusscolaire.component';

describe('CursusscolaireComponent', () => {
  let component: CursusscolaireComponent;
  let fixture: ComponentFixture<CursusscolaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursusscolaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursusscolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

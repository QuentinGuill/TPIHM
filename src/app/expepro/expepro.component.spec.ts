import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeproComponent } from './expepro.component';

describe('ExpeproComponent', () => {
  let component: ExpeproComponent;
  let fixture: ComponentFixture<ExpeproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpeproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpeproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

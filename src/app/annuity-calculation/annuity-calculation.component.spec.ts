import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuityCalculationComponent } from './annuity-calculation.component';

describe('AnnuityCalculationComponent', () => {
  let component: AnnuityCalculationComponent;
  let fixture: ComponentFixture<AnnuityCalculationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnuityCalculationComponent]
    });
    fixture = TestBed.createComponent(AnnuityCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoDeInteresCardComponent } from './punto-de-interes-card.component';

describe('PuntoDeInteresCardComponent', () => {
  let component: PuntoDeInteresCardComponent;
  let fixture: ComponentFixture<PuntoDeInteresCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntoDeInteresCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuntoDeInteresCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

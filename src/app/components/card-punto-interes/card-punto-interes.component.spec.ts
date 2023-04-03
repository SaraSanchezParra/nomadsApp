import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPuntoInteresComponent } from './card-punto-interes.component';

describe('CardPuntoInteresComponent', () => {
  let component: CardPuntoInteresComponent;
  let fixture: ComponentFixture<CardPuntoInteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPuntoInteresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPuntoInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

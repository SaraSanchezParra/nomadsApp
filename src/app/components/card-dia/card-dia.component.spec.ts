import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDiaComponent } from './card-dia.component';

describe('CardDiaComponent', () => {
  let component: CardDiaComponent;
  let fixture: ComponentFixture<CardDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

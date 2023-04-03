import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaViajeComponent } from './pagina-viaje.component';

describe('PaginaViajeComponent', () => {
  let component: PaginaViajeComponent;
  let fixture: ComponentFixture<PaginaViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaViajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrelaAppComponent } from './sobrela-app.component';

describe('SobrelaAppComponent', () => {
  let component: SobrelaAppComponent;
  let fixture: ComponentFixture<SobrelaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobrelaAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobrelaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

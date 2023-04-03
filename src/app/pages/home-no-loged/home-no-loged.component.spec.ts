import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNoLogedComponent } from './home-no-loged.component';

describe('HomeNoLogedComponent', () => {
  let component: HomeNoLogedComponent;
  let fixture: ComponentFixture<HomeNoLogedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNoLogedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeNoLogedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

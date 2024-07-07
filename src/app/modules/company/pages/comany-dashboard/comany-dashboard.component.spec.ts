import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComanyDashboardComponent } from './comany-dashboard.component';

describe('ComanyDashboardComponent', () => {
  let component: ComanyDashboardComponent;
  let fixture: ComponentFixture<ComanyDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComanyDashboardComponent]
    });
    fixture = TestBed.createComponent(ComanyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

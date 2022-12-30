import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServiceViewComponent } from './admin-service-view.component';

describe('AdminServiceViewComponent', () => {
  let component: AdminServiceViewComponent;
  let fixture: ComponentFixture<AdminServiceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminServiceViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminServiceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

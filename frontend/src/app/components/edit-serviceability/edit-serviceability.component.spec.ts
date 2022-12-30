import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceabilityComponent } from './edit-serviceability.component';

describe('EditServiceabilityComponent', () => {
  let component: EditServiceabilityComponent;
  let fixture: ComponentFixture<EditServiceabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditServiceabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

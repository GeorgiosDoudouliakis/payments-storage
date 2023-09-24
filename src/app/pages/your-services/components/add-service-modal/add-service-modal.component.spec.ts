import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceModalComponent } from './add-service-modal.component';

describe('AddServiceModalComponent', () => {
  let component: AddServiceModalComponent;
  let fixture: ComponentFixture<AddServiceModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddServiceModalComponent]
    });
    fixture = TestBed.createComponent(AddServiceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

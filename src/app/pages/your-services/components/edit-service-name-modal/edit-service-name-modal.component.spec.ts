import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceNameModalComponent } from './edit-service-name-modal.component';

describe('EditServiceNameModalComponent', () => {
  let component: EditServiceNameModalComponent;
  let fixture: ComponentFixture<EditServiceNameModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditServiceNameModalComponent]
    });
    fixture = TestBed.createComponent(EditServiceNameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

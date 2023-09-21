import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTableItemComponent } from './service-table-item.component';

describe('ServiceTableItemComponent', () => {
  let component: ServiceTableItemComponent;
  let fixture: ComponentFixture<ServiceTableItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceTableItemComponent]
    });
    fixture = TestBed.createComponent(ServiceTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

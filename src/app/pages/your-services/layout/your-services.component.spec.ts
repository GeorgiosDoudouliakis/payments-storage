import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourServicesComponent } from './your-services.component';

describe('ServiceManagementComponent', () => {
  let component: YourServicesComponent;
  let fixture: ComponentFixture<YourServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourServicesComponent]
    });
    fixture = TestBed.createComponent(YourServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourServicesWrapperComponent } from './your-services-wrapper.component';

describe('YourServicesWrapperComponent', () => {
  let component: YourServicesWrapperComponent;
  let fixture: ComponentFixture<YourServicesWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourServicesWrapperComponent]
    });
    fixture = TestBed.createComponent(YourServicesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

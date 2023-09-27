import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourServiceComponent } from './your-service.component';

describe('YourServiceComponent', () => {
  let component: YourServiceComponent;
  let fixture: ComponentFixture<YourServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [YourServiceComponent]
    });
    fixture = TestBed.createComponent(YourServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

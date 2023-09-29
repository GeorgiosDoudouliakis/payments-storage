import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourServiceInfoComponent } from './your-service-info.component';

describe('YourServiceInfoComponent', () => {
  let component: YourServiceInfoComponent;
  let fixture: ComponentFixture<YourServiceInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [YourServiceInfoComponent]
    });
    fixture = TestBed.createComponent(YourServiceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

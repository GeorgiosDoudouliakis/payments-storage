import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourServiceInfoActionsComponent } from './your-service-info-actions.component';

describe('YourServiceInfoComponent', () => {
  let component: YourServiceInfoActionsComponent;
  let fixture: ComponentFixture<YourServiceInfoActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [YourServiceInfoActionsComponent]
    });
    fixture = TestBed.createComponent(YourServiceInfoActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

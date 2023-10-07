import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceOnlinePaymentLinkModalComponent } from './edit-service-online-payment-link-modal.component';

describe('EditServiceOnlinePaymentLinkModalComponent', () => {
  let component: EditServiceOnlinePaymentLinkModalComponent;
  let fixture: ComponentFixture<EditServiceOnlinePaymentLinkModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditServiceOnlinePaymentLinkModalComponent]
    });
    fixture = TestBed.createComponent(EditServiceOnlinePaymentLinkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

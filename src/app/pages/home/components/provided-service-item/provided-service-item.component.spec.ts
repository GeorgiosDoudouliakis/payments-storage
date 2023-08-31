import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidedServiceItemComponent } from './provided-service-item.component';

describe('ProvidedServiceItemComponent', () => {
  let component: ProvidedServiceItemComponent;
  let fixture: ComponentFixture<ProvidedServiceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidedServiceItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvidedServiceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRegPageComponent } from './customer-reg-page.component';

describe('CustomerRegPageComponent', () => {
  let component: CustomerRegPageComponent;
  let fixture: ComponentFixture<CustomerRegPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRegPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRegPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

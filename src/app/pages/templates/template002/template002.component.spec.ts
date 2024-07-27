import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Template002Component } from './template002.component';

describe('Template002Component', () => {
  let component: Template002Component;
  let fixture: ComponentFixture<Template002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Template002Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Template002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

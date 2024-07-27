import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Template001Component } from './template001.component';

describe('Template001Component', () => {
  let component: Template001Component;
  let fixture: ComponentFixture<Template001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Template001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Template001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

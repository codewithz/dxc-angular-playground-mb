import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveSwithcComponent } from './directive-swithc.component';

describe('DirectiveSwithcComponent', () => {
  let component: DirectiveSwithcComponent;
  let fixture: ComponentFixture<DirectiveSwithcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveSwithcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveSwithcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

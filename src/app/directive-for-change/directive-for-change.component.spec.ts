import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveForChangeComponent } from './directive-for-change.component';

describe('DirectiveForChangeComponent', () => {
  let component: DirectiveForChangeComponent;
  let fixture: ComponentFixture<DirectiveForChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveForChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveForChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

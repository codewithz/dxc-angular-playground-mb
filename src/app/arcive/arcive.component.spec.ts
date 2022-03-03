import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArciveComponent } from './arcive.component';

describe('ArciveComponent', () => {
  let component: ArciveComponent;
  let fixture: ComponentFixture<ArciveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArciveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArciveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

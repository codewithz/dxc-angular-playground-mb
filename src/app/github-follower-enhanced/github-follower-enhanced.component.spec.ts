import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubFollowerEnhancedComponent } from './github-follower-enhanced.component';

describe('GithubFollowerEnhancedComponent', () => {
  let component: GithubFollowerEnhancedComponent;
  let fixture: ComponentFixture<GithubFollowerEnhancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubFollowerEnhancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubFollowerEnhancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

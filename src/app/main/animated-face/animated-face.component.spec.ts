import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedFaceComponent } from './animated-face.component';

describe('AnimatedFaceComponent', () => {
  let component: AnimatedFaceComponent;
  let fixture: ComponentFixture<AnimatedFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedFaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardFaceComponent } from './standard-face.component';

describe('StandardFaceComponent', () => {
  let component: StandardFaceComponent;
  let fixture: ComponentFixture<StandardFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardFaceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StandardFaceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

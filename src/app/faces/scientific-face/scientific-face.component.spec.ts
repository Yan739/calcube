import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificFaceComponent } from './scientific-face.component';

describe('ScientificFaceComponent', () => {
  let component: ScientificFaceComponent;
  let fixture: ComponentFixture<ScientificFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScientificFaceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScientificFaceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

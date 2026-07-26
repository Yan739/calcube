import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterFaceComponent } from './converter-face.component';

describe('ConverterFaceComponent', () => {
  let component: ConverterFaceComponent;
  let fixture: ComponentFixture<ConverterFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConverterFaceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConverterFaceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

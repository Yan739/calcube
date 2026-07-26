import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryFaceComponent } from './history-face.component';

describe('HistoryFaceComponent', () => {
  let component: HistoryFaceComponent;
  let fixture: ComponentFixture<HistoryFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryFaceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryFaceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

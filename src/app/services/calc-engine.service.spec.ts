import { TestBed } from '@angular/core/testing';
import { CalcEngineService } from './calc-engine.service';

describe('CalcEngineService', () => {
  let service: CalcEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcEngineService);
  });

  it('additionne correctement', () => {
    service.input('4');
    service.setOperator('+');
    service.input('6');
    service.equals();
    expect(service.display()).toBe('10');
  });

  it('garde une trace dans l\'historique', () => {
    service.input('2');
    service.setOperator('*');
    service.input('3');
    service.equals();
    expect(service.history()[0]).toContain('2 * 3 = 6');
  });
});
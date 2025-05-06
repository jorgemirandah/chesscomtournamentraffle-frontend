import { TestBed } from '@angular/core/testing';

import { ChesscomApiService } from './chesscom-api.service';

describe('ChesscomApiService', () => {
  let service: ChesscomApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChesscomApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

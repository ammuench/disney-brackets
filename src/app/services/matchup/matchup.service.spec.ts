import { TestBed, inject } from '@angular/core/testing';

import { MatchupService } from './matchup.service';

describe('MatchupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchupService]
    });
  });

  it('should be created', inject([MatchupService], (service: MatchupService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { OpenaiService } from './openai.service';

describe('OpenaiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenaiService = TestBed.get(OpenaiService);
    expect(service).toBeTruthy();
  });
});

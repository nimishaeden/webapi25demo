import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ThirdPartyApiService } from './third-party-api.service';

describe('ThirdPartyApiService', () => {
  let service: ThirdPartyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ThirdPartyApiService]
    });
    service = TestBed.inject(ThirdPartyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

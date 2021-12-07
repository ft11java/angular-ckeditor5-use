import { TestBed } from '@angular/core/testing';

import { ImageUploadServiceService } from './image-upload-service.service';

describe('ImageUploadServiceService', () => {
  let service: ImageUploadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageUploadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

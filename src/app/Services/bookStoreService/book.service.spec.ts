import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule ]
    });
    service = TestBed.inject(BookService);
  });

  it('Book service', () => {
    expect(service).toBeTruthy();
  });
});

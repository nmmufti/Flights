import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFlighComponent } from './book-fligh.component';

describe('BookFlighComponent', () => {
  let component: BookFlighComponent;
  let fixture: ComponentFixture<BookFlighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFlighComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookFlighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

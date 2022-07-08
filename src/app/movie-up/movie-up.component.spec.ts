import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieUpComponent } from './movie-up.component';

describe('MovieUpComponent', () => {
  let component: MovieUpComponent;
  let fixture: ComponentFixture<MovieUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

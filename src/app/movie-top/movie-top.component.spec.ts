import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTopComponent } from './movie-top.component';

describe('MovieTopComponent', () => {
  let component: MovieTopComponent;
  let fixture: ComponentFixture<MovieTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

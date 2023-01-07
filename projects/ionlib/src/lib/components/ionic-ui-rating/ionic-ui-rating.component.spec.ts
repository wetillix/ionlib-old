import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicUiRatingComponent } from './ionic-ui-rating.component';

describe('IonicUiRatingComponent', () => {
  let component: IonicUiRatingComponent;
  let fixture: ComponentFixture<IonicUiRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IonicUiRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicUiRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

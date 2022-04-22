import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicUiInputComponent } from './ionic-ui-input.component';

describe('IonicUiInputComponent', () => {
  let component: IonicUiInputComponent;
  let fixture: ComponentFixture<IonicUiInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IonicUiInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicUiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

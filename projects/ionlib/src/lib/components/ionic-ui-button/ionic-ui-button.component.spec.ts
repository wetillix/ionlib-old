import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicUiButtonComponent } from './ionic-ui-button.component';

describe('IonicUiButtonComponent', () => {
  let component: IonicUiButtonComponent;
  let fixture: ComponentFixture<IonicUiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IonicUiButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicUiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicUiCheckboxComponent } from './ionic-ui-checkbox.component';

describe('IonicUiCheckboxComponent', () => {
  let component: IonicUiCheckboxComponent;
  let fixture: ComponentFixture<IonicUiCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IonicUiCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicUiCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

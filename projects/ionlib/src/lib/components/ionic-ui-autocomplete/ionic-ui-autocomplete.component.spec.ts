import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicUiAutocompleteComponent } from './ionic-ui-autocomplete.component';

describe('IonicUiAutocompleteComponent', () => {
  let component: IonicUiAutocompleteComponent;
  let fixture: ComponentFixture<IonicUiAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IonicUiAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicUiAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

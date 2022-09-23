import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicUiSearchbarComponent } from './ionic-ui-searchbar.component';

describe('IonicUiSearchbarComponent', () => {
  let component: IonicUiSearchbarComponent;
  let fixture: ComponentFixture<IonicUiSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IonicUiSearchbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicUiSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

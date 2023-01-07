import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicUiListComponent } from './ionic-ui-list.component';

describe('IonicUiListComponent', () => {
  let component: IonicUiListComponent;
  let fixture: ComponentFixture<IonicUiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IonicUiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicUiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

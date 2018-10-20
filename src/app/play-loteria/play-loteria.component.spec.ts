import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayLoteriaComponent } from './play-loteria.component';

describe('PlayLoteriaComponent', () => {
  let component: PlayLoteriaComponent;
  let fixture: ComponentFixture<PlayLoteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayLoteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayLoteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

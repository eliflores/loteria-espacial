import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBoardComponent } from './big-board.component';

describe('BigBoardComponent', () => {
  let component: BigBoardComponent;
  let fixture: ComponentFixture<BigBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

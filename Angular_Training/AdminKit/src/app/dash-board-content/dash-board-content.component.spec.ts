import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardContentComponent } from './dash-board-content.component';

describe('DashBoardContentComponent', () => {
  let component: DashBoardContentComponent;
  let fixture: ComponentFixture<DashBoardContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashBoardContentComponent]
    });
    fixture = TestBed.createComponent(DashBoardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

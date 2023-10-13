import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageChildComponent } from './message-child.component';

describe('MessageChildComponent', () => {
  let component: MessageChildComponent;
  let fixture: ComponentFixture<MessageChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageChildComponent]
    });
    fixture = TestBed.createComponent(MessageChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

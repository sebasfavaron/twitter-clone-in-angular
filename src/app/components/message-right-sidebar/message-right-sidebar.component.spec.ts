import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRightSidebarComponent } from './message-right-sidebar.component';

describe('MessageRightSidebarComponent', () => {
  let component: MessageRightSidebarComponent;
  let fixture: ComponentFixture<MessageRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageRightSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

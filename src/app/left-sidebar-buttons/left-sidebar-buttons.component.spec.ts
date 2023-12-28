import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidebarButtonsComponent } from './left-sidebar-buttons.component';

describe('LeftSidebarButtonsComponent', () => {
  let component: LeftSidebarButtonsComponent;
  let fixture: ComponentFixture<LeftSidebarButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSidebarButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftSidebarButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

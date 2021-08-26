import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadOverViewComponent } from './thread-over-view.component';

describe('ThreadOverViewComponent', () => {
  let component: ThreadOverViewComponent;
  let fixture: ComponentFixture<ThreadOverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadOverViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

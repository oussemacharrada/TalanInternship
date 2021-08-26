import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryOverViewComponent } from './category-over-view.component';

describe('CategoryOverViewComponent', () => {
  let component: CategoryOverViewComponent;
  let fixture: ComponentFixture<CategoryOverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryOverViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

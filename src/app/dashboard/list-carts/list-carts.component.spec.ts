import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCartsComponent } from './list-carts.component';

describe('ListCartsComponent', () => {
  let component: ListCartsComponent;
  let fixture: ComponentFixture<ListCartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCartsComponent]
    });
    fixture = TestBed.createComponent(ListCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

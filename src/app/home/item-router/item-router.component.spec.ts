import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRouterComponent } from './item-router.component';

describe('ItemRouterComponent', () => {
  let component: ItemRouterComponent;
  let fixture: ComponentFixture<ItemRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

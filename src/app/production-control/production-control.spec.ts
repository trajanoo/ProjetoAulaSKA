import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionControl } from './production-control';

describe('ProductionControl', () => {
  let component: ProductionControl;
  let fixture: ComponentFixture<ProductionControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductionControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionControl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

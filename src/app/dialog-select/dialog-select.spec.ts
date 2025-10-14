import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSelect } from './dialog-select';

describe('DialogSelect', () => {
  let component: DialogSelect;
  let fixture: ComponentFixture<DialogSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

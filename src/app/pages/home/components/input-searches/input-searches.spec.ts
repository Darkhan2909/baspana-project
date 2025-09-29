import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearches } from './input-searches';

describe('InputSearches', () => {
  let component: InputSearches;
  let fixture: ComponentFixture<InputSearches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSearches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSearches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

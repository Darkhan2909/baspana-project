import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Programms } from './programms';

describe('Programms', () => {
  let component: Programms;
  let fixture: ComponentFixture<Programms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Programms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Programms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPool } from './search-pool';

describe('SearchPool', () => {
  let component: SearchPool;
  let fixture: ComponentFixture<SearchPool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPool]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPool);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

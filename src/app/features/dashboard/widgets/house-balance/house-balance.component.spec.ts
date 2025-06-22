import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseBalanceComponent } from './house-balance.component';

describe('HouseBalanceComponent', () => {
  let component: HouseBalanceComponent;
  let fixture: ComponentFixture<HouseBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseBalanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

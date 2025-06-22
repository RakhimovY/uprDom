import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentRequestsComponent } from './recent-requests.component';

describe('RecentRequestsComponent', () => {
  let component: RecentRequestsComponent;
  let fixture: ComponentFixture<RecentRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialOverviewComponent } from '../widgets/financial-overview/financial-overview.component';
import { HouseBalanceComponent } from '../widgets/house-balance/house-balance.component';
import { UpcomingPaymentsComponent } from '../widgets/upcoming-payments/upcoming-payments.component';
import { NewsAnnouncementsComponent } from '../widgets/news-announcements/news-announcements.component';
import { RecentRequestsComponent } from '../widgets/recent-requests/recent-requests.component';
import { UpcomingMeetingsComponent } from '../widgets/upcoming-meetings/upcoming-meetings.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FinancialOverviewComponent,
    HouseBalanceComponent,
    UpcomingPaymentsComponent,
    NewsAnnouncementsComponent,
    RecentRequestsComponent,
    UpcomingMeetingsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  // Dashboard data and methods will be added here
}

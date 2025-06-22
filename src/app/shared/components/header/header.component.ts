import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ThemeService} from '../../../core/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MenuModule,
    ButtonModule,
    OverlayPanelModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isDarkTheme = false;
  isMobileMenuOpen = false;
  userMenuItems: any[] = [];

  constructor(
    private themeService: ThemeService,
  ) {
  }

  ngOnInit(): void {
    this.themeService.getTheme().subscribe(theme => {
      this.isDarkTheme = theme === 'dark-theme';
    });

    this.initUserMenu();
  }

  private initUserMenu(): void {
    this.userMenuItems = [
      {
        label: 'Профиль',
        icon: 'assets/icons/user.svg',
        iconClass: 'svg-icon',
        command: () => {}
      },
      {
        label: 'Настройки',
        icon: 'assets/icons/settings.svg',
        iconClass: 'svg-icon',
        command: () => {}
      },
      {
        label: 'Выйти',
        icon: 'assets/icons/logout.svg',
        iconClass: 'svg-icon',
        command: () => {}
      }
    ];
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}

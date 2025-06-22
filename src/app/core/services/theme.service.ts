import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export type Theme = 'light-theme' | 'dark-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<Theme>('light-theme');

  constructor() {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      this.themeSubject.next(savedTheme);
      this.applyTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme: Theme = prefersDark ? 'dark-theme' : 'light-theme';
      this.themeSubject.next(initialTheme);
      this.applyTheme(initialTheme);
    }
  }

  getTheme(): Observable<Theme> {
    return this.themeSubject.asObservable();
  }

  getCurrentTheme(): Theme {
    return this.themeSubject.getValue();
  }

  setTheme(theme: Theme): void {
    this.themeSubject.next(theme);
    localStorage.setItem('theme', theme);
    this.applyTheme(theme);
  }

  toggleTheme(): void {
    const currentTheme = this.themeSubject.getValue();
    const newTheme: Theme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.setTheme(newTheme);
  }

  private applyTheme(theme: Theme): void {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme);
  }
}

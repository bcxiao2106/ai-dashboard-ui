import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../../services/themes.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(private themeService: ThemesService) {}

  ngOnInit(): void {

  }

  toggleTheme(theme: string) {
    this.themeService.switch(theme);
  }
}

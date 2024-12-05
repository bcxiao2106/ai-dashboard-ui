import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AiDashboardComponent } from './components/ai-dashboard/ai-dashboard.component';
import { ThemesService } from './services/themes.service';
import { Themes } from './config/themes.config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AiDashboardComponent],
  providers: [ThemesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ai-dashboard-ui';

  constructor(private themeService: ThemesService) { }

  ngOnInit(): void {
    this.themeService.init({ config: Themes });
  }
}

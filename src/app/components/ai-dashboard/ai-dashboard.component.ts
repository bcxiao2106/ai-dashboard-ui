import { Component } from '@angular/core';
import { AngularSplitModule } from 'angular-split';
import { LeftPanelComponent } from '../left-panel/left-panel.component';
import { RightPanelComponent } from '../right-panel/right-panel.component';

@Component({
  selector: 'ai-dashboard',
  imports: [AngularSplitModule, LeftPanelComponent, RightPanelComponent],
  templateUrl: './ai-dashboard.component.html',
  styleUrl: './ai-dashboard.component.scss'
})
export class AiDashboardComponent {

}

import { Component } from '@angular/core';
import { AngularSplitModule } from 'angular-split';
import { NewRsolutionComponent } from '../new-rsolution/new-rsolution.component';

@Component({
  selector: 'right-panel',
  imports: [AngularSplitModule, NewRsolutionComponent],
  templateUrl: './right-panel.component.html',
  styleUrl: './right-panel.component.scss'
})
export class RightPanelComponent {

}

import { Component } from '@angular/core';
import {HighlightDirective} from './highlight.directive';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private switch = true;
  private items = [1, 2, 3, 4, 5];
  private value = 10;
  onSwitch() {
    this.switch = !this.switch;
  }
}

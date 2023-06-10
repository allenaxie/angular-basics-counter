import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  countArray = []
  intervalCount = 0;

  onGameStarted() {
    this.countArray.push(this.intervalCount);
    this.intervalCount++;
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  gameInterval;

  // Create output event emitter
  @Output() gameStarted = new EventEmitter();

  handleCount = () => {
    this.gameStarted.emit();
  }

  onStartGame() {
    this.gameInterval = setInterval(this.handleCount, 1000);
  }

  onStopGame() {
    clearInterval(this.gameInterval);
  }
}

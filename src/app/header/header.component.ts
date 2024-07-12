import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() clicked = new EventEmitter<string>();

  onClicked(clickedLink: string) {
    this.clicked.emit(clickedLink);
  }
}

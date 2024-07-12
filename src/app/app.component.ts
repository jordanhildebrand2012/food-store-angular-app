import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  linkedClicked = 'recipes';

  onClickedLink(clickedLink: string) {
    this.linkedClicked = clickedLink;
  }
}

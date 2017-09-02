import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cards: Array<any> = [
    {text: 'Card 1'},
    {text: 'Card 2'},
    {text: 'Card 3'},
    {text: 'Card 4'},
  ];
}

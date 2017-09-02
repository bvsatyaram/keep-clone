import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  template: `
    <div class="row">
      <app-card *ngFor='let card of cards' [card]='card'></app-card>
    </div>
  `,
  styles: []
})

export class CardListComponent implements OnInit {
  @Input() cards: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}

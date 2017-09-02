import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'lodash';
import { card } from '../models/card';

@Component({
  selector: 'app-card-list',
  template: `
    <div class='container-fluid text-center' *ngIf='anyPinned()'>
      <h3 class='text-left mt-5'>Pinned</h3>
      <div class="row">
        <app-card *ngFor='let card of getPinned()' [card]='card'></app-card>
      </div>
    </div>
    <div class='container-fluid text-center' *ngIf='anyPinned(false)'>
      <h3 class='text-left mt-5'>Others</h3>
      <div class="row">
        <app-card *ngFor='let card of getPinned( false)' [card]='card'></app-card>
      </div>
    </div>
  `,
  styles: []
})

export class CardListComponent implements OnInit {
  @Input() cards: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  anyPinned(pinned = true) {
    return this.getPinned(pinned).length > 0;
  }

  getPinned(pinned = true) {
    return filter(this.cards, (card: card) => !!card.pinned == pinned);
  }

}

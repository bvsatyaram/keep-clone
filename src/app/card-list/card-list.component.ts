import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  template: `
    <div class="row">
      <app-card></app-card>
      <app-card></app-card>
      <app-card></app-card>
      <app-card></app-card>
    </div>
  `,
  styles: []
})
export class CardListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

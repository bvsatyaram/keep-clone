import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="card-block">
        <p class="card-text">Card Text</p>
      </div>
    </div>
  `,
  styles: [],
  host: {'class': 'col-3'}
})
export class CardComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}

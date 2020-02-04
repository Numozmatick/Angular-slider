import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../card';

@Component({
  selector: 'ui-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() public cards: Card[] = [];

  constructor() { }

  ngOnInit() {
  }

}

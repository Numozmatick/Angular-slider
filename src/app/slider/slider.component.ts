import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ISlide, SLIDE_TYPES } from './i-slide';
import { Control } from "./control";
import { Card } from "./card";

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() public slides: ISlide[] = [];

  public controls: Control[] = [];
  public cards: Card[] = [];

  constructor() {
  }

  ngOnInit() {
    this._buid(this.slides);
  }

  private _buid(slides: ISlide[]): void {
    slides.forEach((slide) => {
      this.cards.push(new Card(slide.src));
      this.controls.push(new Control(slide.time));
    });
  }
}

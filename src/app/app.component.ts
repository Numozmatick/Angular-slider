import { Component } from '@angular/core';
import { ISlide, SLIDE_TYPES } from "./slider/i-slide";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled11';
  public slides: ISlide[] = [
    {
      type: SLIDE_TYPES.IMAGE,
      src: 'sdsa',
      time: 600
    }
  ];
}

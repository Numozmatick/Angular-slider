import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsComponent } from './components/controls/controls.component';
import { ProgressbarComponent } from './components/controls/Progressbar/progressbar.component';
import { SliderComponent } from './slider.component';
import { ProgressComponent } from './components/controls/Progressbar/progress/progress.component';
import { CardsComponent } from './components/cards/cards.component';
import {CardComponent} from './components/cards/card/card.component';



@NgModule({
  declarations: [CardComponent, ControlsComponent, ProgressbarComponent, SliderComponent, ProgressComponent, CardsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SliderComponent
  ]
})
export class SliderModule { }

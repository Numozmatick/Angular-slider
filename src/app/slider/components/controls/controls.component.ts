import { Component, Input, OnInit } from '@angular/core';
import { Control } from "../../control";

@Component({
  selector: 'ui-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  @Input() public controls: Control[] = [];

  constructor() {

  }

  ngOnInit() {
  }

  public onAction(message: string) {
    console.log(message);
  }
}

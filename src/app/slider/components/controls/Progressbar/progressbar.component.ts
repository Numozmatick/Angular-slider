import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  @Input() public time = 105;
  @Input() public pause = false;
  @Input() public stop = false;
  @Input() public play = true;

  @Output() public action = new EventEmitter();

  private _interval: any;
  public timeCount = 0;

  constructor() { }

  ngOnInit() {
    this._interval = setInterval(() => {
      if (this.timeCount === this.time) {
        clearInterval(this._interval);
      }

      this.timeCount += 1;
    }, 5);
  }

  public onClick(): void {
    this.action.emit('xui');
  }

}

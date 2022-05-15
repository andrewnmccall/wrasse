import { Component, OnInit, Input } from '@angular/core';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  @Input() input : string = ''
  @Input() displayValue : string = 'Display!'

  constructor() { }

  ngOnInit(): void {
  }

  onRun(): void {
    this.displayValue = evaluate(this.input);
    console.log(this.displayValue);
  }

}

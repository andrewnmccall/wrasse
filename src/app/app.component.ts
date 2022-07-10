import {Component, Input} from '@angular/core';
import {DataInput} from "./data.input";
import {DataInputCategoryEnum} from "./data.input.category.enum";
import {evaluate} from "mathjs";
import { HistoryRecord } from './history.record';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wrasse';
  dataInputs : DataInput[] = [
    new DataInput({category: DataInputCategoryEnum.Operator, value: '+'}),
    new DataInput({category: DataInputCategoryEnum.Operator, value: '-'}),
    new DataInput({category: DataInputCategoryEnum.Operator, value: 'x'}),
    new DataInput({category: DataInputCategoryEnum.Operator, value: '/'}),
    new DataInput({category: DataInputCategoryEnum.Action, value: '='}),
    new DataInput({category: DataInputCategoryEnum.Value, value: '1'}),
    new DataInput({category: DataInputCategoryEnum.Value, value: '2'}),
    new DataInput({category: DataInputCategoryEnum.Value, value: '3'}),
    new DataInput({category: DataInputCategoryEnum.Value, value: '4'}),
    new DataInput({category: DataInputCategoryEnum.Value, value: '5'}),
    new DataInput({category: DataInputCategoryEnum.Value, value: '6'}),
    new DataInput({category: DataInputCategoryEnum.Value, value: '7'}),
    new DataInput({category: DataInputCategoryEnum.Value, value: '8'}),
    new DataInput({category: DataInputCategoryEnum.Value, value: '9'}),
    new DataInput({category: DataInputCategoryEnum.Value, value: '0'}),
    new DataInput({category: DataInputCategoryEnum.Value, value: '.'}),
  ];
  history: HistoryRecord[] = [];


  @Input() input : string = ''
  @Input() displayValue : string = 'Display!'

  constructor() { }

  ngOnInit(): void {
  }

  appendInputValue(value:string): void {
    if(value == '=') {
      this.onRun();
    } else {
      this.input += value;
    }
  }

  onRun(): void {
    try {
      const result = evaluate(this.input);
      this.displayValue = result;
      this.history.push(new HistoryRecord({
        value: this.input,
        type: 'command',
      }));
      this.history.push(new HistoryRecord({
        value: result,
        type: 'result',
      }));
    } catch (e:unknown) {
      if(e instanceof Error) {
        this.displayValue = e.message;
      }
    }
    console.log(this.displayValue);
  }
}

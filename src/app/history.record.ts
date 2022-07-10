import {DataInputCategoryEnum} from "./data.input.category.enum";

export class HistoryRecord {
  public value : string = '';
  public type : string = '';

  constructor(args = {value: '', type: 'result'}) {
    this.value = args.value;
    this.type = args.type;
  }
}

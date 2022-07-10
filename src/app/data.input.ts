import {DataInputCategoryEnum} from "./data.input.category.enum";

export class DataInput {
  public value : string = '';
  public category : DataInputCategoryEnum;

  constructor(args = {value: '', category: DataInputCategoryEnum.Value}) {
    this.value = args.value;
    this.category = args.category;
  }
}

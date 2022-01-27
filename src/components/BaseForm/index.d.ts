
import { IGridLayout } from '../GridLayout';
export declare type IGridLayoutConfig = Omit<IGridLayout, 'children'>
export enum FormItemType {
  INPUT = 'input',
  DATE = 'date',
  SELECT = 'select',
  textarea = 'textarea'
}
export interface IBaseFormItem {
   /**
   *
   * @description 类型
   * @default  input
   */
  type?: FormItemType;
  /**
   * @description 标签名
   * @default  input
   */
  label?: string;
  /**
   * @description 字段名
   */
  name: string;
  /**
   * @description 校验规则
   */
  rules?: any;
}
export interface IInputFormItem extends IBaseFormItem {}
export interface ISelectFormItem extends IBaseFormItem  {
  /**
   * @description 选项
   */
  options: Array<{[propName: string]: string}>
  labelKey?: string;
  valueKey?: string;
  [propName: string]: any;
}
export type IFormItem = IInputFormItem|ISelectFormItem
export interface IBaseForm {
  gridLayout: IGridLayoutConfig,
  config: Array<IFormItem>
}
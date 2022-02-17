
import { IGridLayout } from '../GridLayout';
import { InputProps, FormProps } from 'antd';
import {　ISelectProps　} from './BaseSelect';
import { IBaseInput } from './BaseInput';
import { IBaseDatePicker } from './BaseDatePicker';
// import { IBaseRangeDatePicker } from './BaseRangeDatePicker';
export declare type IGridLayoutConfig = Omit<IGridLayout, 'children'>
export enum FormItemType {
  INPUT = 'input',
  DATE = 'date',
  DATE_RANGE = 'dateRange',
  SELECT = 'select',
  TREE_SELECT = 'treeSelect',
  TEXTAREA = 'textarea',
  CASCADER = 'cascader',

}
export interface IBaseFormItem {
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
export interface IInputFormItem extends IBaseFormItem, Omit<InputProps, 'name'> {
/**
   *
   * @description 类型
   * @default  input
   */
  type: FormItemType.INPUT;
}
export interface ISelectFormItem extends ISelectProps,IBaseFormItem  {
  /**
   *
   * @description 类型
   * @default  input
   */
  type: FormItemType.SELECT;
}
export interface IDatePickerFormItem extends IBaseFormItem{
  /**
   *
   * @description 类型
   * @default  input
   */
  type: FormItemType.DATE;
}
export interface IRangeDatePickerFormItem extends IBaseFormItem  {
  /**
   *
   * @description 类型
   * @default  input
   */
  type: FormItemType.DATE_RANGE;
}
export type IFormItem = 
IInputFormItem | 
ISelectFormItem | 
IDatePickerFormItem | 
IRangeDatePickerFormItem;

export interface IBaseForm {
  gridLayout: IGridLayoutConfig,
  config: Array<IFormItem>,
  formProps?: FormProps
}
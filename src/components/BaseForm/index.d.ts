
import { IGridLayout } from '../GridLayout';
import { InputProps } from 'antd';
import {　ISelectProps　} from './BaseSelect';
export declare type IGridLayoutConfig = Omit<IGridLayout, 'children'>
export enum FormItemType {
  INPUT = 'input',
  DATE = 'date',
  SELECT = 'select',
  textarea = 'textarea'
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
export type IFormItem = IInputFormItem | ISelectFormItem
export interface IBaseForm {
  gridLayout: IGridLayoutConfig,
  config: Array<IFormItem>
}
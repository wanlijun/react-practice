
import { IGridLayout } from '../GridLayout';
import { InputProps, FormProps, FormInstance } from 'antd';
import {　ISelectProps　} from './BaseSelect';
import { IBaseInput } from './BaseInput';
import { IBaseDatePicker } from './BaseDatePicker';
import React from 'react';
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
   * @description 校验规则
   */
  rules?: any;
}
export interface IInputFormItem<Values> extends IBaseFormItem, Omit<InputProps, 'name'> {
/**
   *
   * @description 类型
   * @default  input
   */
  type: FormItemType.INPUT;
  name: keyof Values;
}
export interface ISelectFormItem<Values> extends ISelectProps,IBaseFormItem  {
  /**
   *
   * @description 类型
   * @default  input
   */
  type: FormItemType.SELECT;
  name: keyof Values;
}
export interface IDatePickerFormItem<Values> extends IBaseFormItem{
  /**
   *
   * @description 类型
   * @default  input
   */
  type: FormItemType.DATE;
  name: keyof Values;
}
export interface IRangeDatePickerFormItem<Values> extends IBaseFormItem  {
  /**
   *
   * @description 类型
   * @default  input
   */
  type: FormItemType.DATE_RANGE;
  name: keyof Values;
}
export type IFormItem<Values> = 
IInputFormItem<Values> | 
ISelectFormItem<Values> | 
IDatePickerFormItem<Values> | 
IRangeDatePickerFormItem<Values>;

export interface IBaseFormProps<Values> {
  gridLayout: IGridLayoutConfig,
  config: Array<IFormItem<Values>>,
  formProps?: FormProps,
}
export interface IBaseFormHandles<Values> {
  form: FormInstance<Values>,
}
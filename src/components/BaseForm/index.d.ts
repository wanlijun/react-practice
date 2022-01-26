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
  label: string;
  /**
   * @description 字段名
   */
  name: string;
  /**
   * @description 校验规则
   */
  rules: any;
}
export interface ISelectFormItem extends IBaseFormItem  {
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
  label: string;
  /**
   * @description 字段名
   */
  name: string;
  /**
   * @description 校验规则
   */
  rules: any;
  options: 
}
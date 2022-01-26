
import { Form, FormItemProps, InputProps } from 'antd';
import React, { Children } from 'react';
import BaseInput from './BaseInput';
import BaseSelect from './BaseSelect';
import GridLayout, { IGridLayout } from '../GridLayout';

export declare type IGridLayoutConfig = Omit<IGridLayout, 'children'>
export enum FormItemType {
  INPUT = 'input',
  DATE = 'date',
  SELECT = 'select',
  textarea = 'textarea'
}
export interface IFormItem  {
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
export interface IBaseForm {
  gridLayout: IGridLayoutConfig;
  config : IFormItem[];
}
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const BaseForm: React.FC<IBaseForm> = ({
  config,
  gridLayout
}) => {
  const [form] = Form.useForm();
  const renderFormItem = () => {
    return config.map((item) => {
      switch (item.type) {
        case FormItemType.INPUT:
          return (
            <Form.Item
             
            >
              <BaseInput />
            </Form.Item>
          );
        case FormItemType.SELECT:
          return (
            <Form.Item
             
            >
              <BaseSelect/>
            </Form.Item>
          );
      }
    })
  }
  return (
    <Form>
      <GridLayout {...gridLayout}>
        { renderFormItem() }
      </GridLayout>
    </Form>
  )
}
export default BaseForm;
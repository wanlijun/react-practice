
import { Form, Input, FormItemProps, InputProps } from 'antd';
import React from 'react';
import BaseInput from './BaseInput';
import GridLayout, { IGridLayout } from '../GridLayout';


export enum FormItemType {
  INPUT = 'input',
  DATE = 'date',
  SELECT = 'select',
  textarea = 'textarea'
}
export interface IFormItem {
  /**
   *
   * @description 类型
   * @default  input
   */
  type?: FormItemType;
  /**
   * @description　Form.Item属性
   */
  formItemProps: FormItemProps;
  /**
   * @description　表单组件属性,传递给Input Select的属性
   */
  childProps: InputProps
  
}
export interface IBaseForm {
  gridLayout: IGridLayout;
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
             {...item.formItemProps}
            >
              <BaseInput {...item.childProps}/>
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
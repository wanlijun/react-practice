
import { Form, FormItemProps, InputProps } from 'antd';
import React, { Children } from 'react';
import BaseInput from './BaseInput';
import BaseSelect from './BaseSelect';
import GridLayout, { IGridLayout } from '../GridLayout';
import {
  FormItemType,
  IBaseForm
 } from './index.d';



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
      const {
        label,
        name,
        rules,
        ...remainProps
      } = item;
      switch (item.type) {
        case FormItemType.INPUT:
          return (
            <Form.Item
             label={label}
             name={name}
             rules={rules}
            >
              <BaseInput {...remainProps}/>
            </Form.Item>
          );
        case FormItemType.SELECT:
          return (
            <Form.Item
              label={label}
              name={name}
              rules={rules}
            >
              <BaseSelect {...remainProps}/>
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
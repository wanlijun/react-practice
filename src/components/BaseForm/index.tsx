
import { Form } from 'antd';
import React from 'react';
import BaseInput from './BaseInput';
import BaseSelect from './BaseSelect';
import GridLayout from '../GridLayout';
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
      switch (item.type) {
        case FormItemType.INPUT:
          const {
            label: inputLabel,
            name: inputName,
            rules: inputRules,
            ...inputProps
          } = item;
         
          return (
            <Form.Item
             key={inputName}
             label={inputLabel}
             name={inputName}
             rules={inputRules}
            >
              <BaseInput {...inputProps}/>
            </Form.Item>
          );
        case FormItemType.SELECT:
          const {
            label: selectLabel,
            name: selectName,
            rules: selectRules,
            ...selectProps
          } = item;
          return (
            <Form.Item
              key={selectName}
              label={selectLabel}
              name={selectName}
              rules={selectRules}
            >
              <BaseSelect {...selectProps}/>
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

import { Form, DatePicker } from 'antd';
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
  gridLayout,
  formProps
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
            placeholder: inputPlaceHolder,
            ...inputProps
          } = item;
         
          return (
            <Form.Item
             key={inputName}
             label={inputLabel}
             name={inputName}
             rules={inputRules}
            >
              <BaseInput
                placeholder={inputPlaceHolder || `请输入${inputLabel|| ''}`}
                {...inputProps}
              />
            </Form.Item>
          );
        case FormItemType.SELECT:
          const {
            label: selectLabel,
            name: selectName,
            rules: selectRules,
            placeholder: selectPlaceHolder,
            ...selectProps
          } = item;
          return (
            <Form.Item
              key={selectName}
              label={selectLabel}
              name={selectName}
              rules={selectRules}
            >
              <BaseSelect
                placeholder={selectPlaceHolder || `请选择${selectLabel|| ''}`}
                {...selectProps}
              />
            </Form.Item>
          );
        case FormItemType.DATE:
          const {
            label: dateLabel,
            name: dateName,
            rules: dateRules,
            ...dateProps
          } = item;
          return (
            <Form.Item
              key={dateName}
              label={dateLabel}
              name={dateName}
              rules={dateRules}
            >
              <DatePicker
                {...dateProps}
              >
              </DatePicker>
            </Form.Item>
          );
      }
    })
  }
  return (
    <Form {...formProps}>
      <GridLayout {...gridLayout}>
        { renderFormItem() }
      </GridLayout>
    </Form>
  )
}
export default BaseForm;
import React, { useImperativeHandle, forwardRef } from 'react';
import { Form } from 'antd';
import { defs } from 'src/apis'
import BaseInput from './BaseInput';
import BaseSelect from './BaseSelect';
import BaseDatePicker from './BaseDatePicker';
import BaseRangeDatePicker from './BaseRangeDatePicker';
import GridLayout from '../GridLayout';
import styles from './index.module.less';
import {
  FormItemType,
  IBaseForm
 } from './index.d';
// TODO:第一个泛型要传什么
const BaseForm = forwardRef<unknown, IBaseForm>(({
  config,
  gridLayout,
  formProps
}, ref) => {
  // TODO:如何传自定义类型
  const [form] = Form.useForm<adminApi.UserBaseRequest>();
  const { validateFields } = form
  
  useImperativeHandle(ref, () => ({
    getValues: () => {
      return new Promise((resolve, reject) => {
        validateFields()
          .then((values) => {
            resolve(values)
          }).catch(errorInfo => {
            reject(errorInfo)
          })
      })
    },
    getForm: () => {
      return form;
    }
  }));
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
              <BaseDatePicker
                {...dateProps}
              >
              </BaseDatePicker>
            </Form.Item>
          );
        case FormItemType.DATE_RANGE:
          const {
            label: rangeDateLabel,
            name: rangeDateDateName,
            rules: rangeDateRules,
            ...rangeDateProps
          } = item;
          return (
            <Form.Item
              key={rangeDateDateName}
              label={rangeDateLabel}
              name={rangeDateDateName}
              rules={rangeDateRules}
            >
              <BaseRangeDatePicker
                {...rangeDateProps}
              >
              </BaseRangeDatePicker>
            </Form.Item>
          );
      }
    })
  }
  
  return (
    <div className={styles.formBox}>
      <Form form={form} {...formProps}>
        <GridLayout {...gridLayout}>
          { renderFormItem() }
        </GridLayout>
      </Form>
    </div>
    
  )
})
export default BaseForm;
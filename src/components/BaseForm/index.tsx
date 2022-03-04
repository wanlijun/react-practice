// import React, { useImperativeHandle, forwardRef } from 'react';
// import { Form } from 'antd';
// import { defs } from 'src/apis'
// import BaseInput from './BaseInput';
// import BaseSelect from './BaseSelect';
// import BaseDatePicker from './BaseDatePicker';
// import BaseRangeDatePicker from './BaseRangeDatePicker';
// import GridLayout from '../GridLayout';
// import styles from './index.module.less';
// import {
//   FormItemType,
//   IBaseFormProps,
//   IBaseFormHandles
//  } from './index.d';
// // TODO:第一个泛型要传什么
// function BaseForm<Values> ({
//   config,
//   gridLayout,
//   formProps
// }:IBaseFormProps<Values>  , ref: React.Ref<IBaseFormHandles<Values>>) {
//   const [form] = Form.useForm<Values>(); 
//   useImperativeHandle(ref, () => ({
//     form,
//   }));
//   const renderFormItem = () => {
//     return config.map((item) => {
//       switch (item.type) {
//         case FormItemType.INPUT:
//           const {
//             label: inputLabel,
//             name: inputName,
//             rules: inputRules,
//             placeholder: inputPlaceHolder,
//             ...inputProps
//           } = item;
         
//           return (
//             <Form.Item
//              key={inputName}
//              label={inputLabel}
//              name={inputName}
//              rules={inputRules}
//             >
//               <BaseInput
//                 placeholder={inputPlaceHolder || `请输入${inputLabel|| ''}`}
//                 {...inputProps}
//               />
//             </Form.Item>
//           );
//         case FormItemType.SELECT:
//           const {
//             label: selectLabel,
//             name: selectName,
//             rules: selectRules,
//             placeholder: selectPlaceHolder,
//             ...selectProps
//           } = item;
//           return (
//             <Form.Item
//               key={selectName}
//               label={selectLabel}
//               name={selectName}
//               rules={selectRules}
//             >
//               <BaseSelect
//                 placeholder={selectPlaceHolder || `请选择${selectLabel|| ''}`}
//                 {...selectProps}
//               />
//             </Form.Item>
//           );
//         case FormItemType.DATE:
//           const {
//             label: dateLabel,
//             name: dateName,
//             rules: dateRules,
//             ...dateProps
//           } = item;
//           return (
//             <Form.Item
//               key={dateName}
//               label={dateLabel}
//               name={dateName}
//               rules={dateRules}
//             >
//               <BaseDatePicker
//                 {...dateProps}
//               >
//               </BaseDatePicker>
//             </Form.Item>
//           );
//         case FormItemType.DATE_RANGE:
//           const {
//             label: rangeDateLabel,
//             name: rangeDateDateName,
//             rules: rangeDateRules,
//             ...rangeDateProps
//           } = item;
//           return (
//             <Form.Item
//               key={rangeDateDateName as string}
//               label={rangeDateLabel}
//               name={rangeDateDateName as string}
//               rules={rangeDateRules}
//             >
//               <BaseRangeDatePicker
//                 {...rangeDateProps}
//               >
//               </BaseRangeDatePicker>
//             </Form.Item>
//           );
//       }
//     })
//   }
  
//   return (
//     <div className={styles.formBox}>
//       <Form form={form} {...formProps}>
//         <GridLayout {...gridLayout}>
//           { renderFormItem() }
//         </GridLayout>
//       </Form>
//     </div>
    
//   )
// }
// export default forwardRef(BaseForm);

import BaseInput from './BaseInput';
import BaseSelect from './BaseSelect';
import BaseDatePicker from './BaseDatePicker';
import BaseRangeDatePicker from './BaseRangeDatePicker';
import CityCascader from './CityCascader';

export {
  BaseInput,
  BaseSelect,
  BaseDatePicker,
  BaseRangeDatePicker,
  CityCascader
}
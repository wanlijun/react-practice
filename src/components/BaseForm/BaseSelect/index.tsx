import { Select, SelectProps } from 'antd';
import type { BaseOptionType } from 'rc-select/lib/Select';
import React from 'react';

const Option = Select.Option;
/**
 * options的值：
 * ［{label: '测试', value: '11'}］
 * 也可是
 * [{name: '测试', id: '11'}]
 * name和id可以通过labelKey，　valueKey指定
 * 那options的类型zen
 */
type IValue =  string | number | boolean
interface IOptionItem {
  [propName: string]: IValue
}
export interface ISelectProps<valueType = any > extends SelectProps<valueType, BaseOptionType > {
  options: IOptionItem[]
  labelKey?: string;
  valueKey?: string;
  renderLabel?: ( value: IValue, label: IValue, item: IOptionItem ) => string | React.ReactNode
}
const BaseSelect: React.FC<ISelectProps>  = (props) => {
  const {
    options,
    labelKey = 'label',
    valueKey = 'value',
    renderLabel,
    ...remainProps
  } = props;
  return (
    <Select {...remainProps} >
      {
        options.map((item, idx) => (
          <Option
            key={idx}
            value={item[valueKey]}
            data={item}>
            {
              renderLabel
              ? renderLabel(item[valueKey], item[labelKey], item)
              : item[labelKey]
            }
          </Option>
        ))
      }
    </Select>
  )
}
export default BaseSelect
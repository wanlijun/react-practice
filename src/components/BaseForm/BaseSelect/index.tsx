import { Select, SelectProps } from 'antd';
import type { BaseOptionType } from 'rc-select/lib/Select';
import React from 'react';

const Option = Select.Option;
type IValue =  string | number | boolean
interface IOptionItem {
  [propName: string]: IValue
}
export interface ISelectProps<valueType = any > extends SelectProps<valueType, BaseOptionType > {
  /**
   * 下拉选项
   */
  options: IOptionItem[]
  /**
   * 指定label的key
   */
  labelKey?: string;
  /**
   * 指定value的key
   */
  valueKey?: string;
  /**
   *　自定义label渲染函数
   */
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
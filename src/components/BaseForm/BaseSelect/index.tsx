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
   * 是否自动注入全部选项
   */
  hasAll?: Boolean,
  /**
   *　自定义label渲染函数
   */
  renderLabel?: ( value: IValue, label: IValue, item: IOptionItem ) => string | React.ReactNode
}
const BaseSelect: React.FC<ISelectProps>  = (props) => {
  const {
    options,
    hasAll = false,
    labelKey = 'label',
    valueKey = 'value',
    renderLabel,
    placeholder = '请选择',
    ...remainProps
  } = props;
  const mergeOptions = options.slice()
  if(hasAll) {
    mergeOptions.splice(0, 0 , {[labelKey]: '全部', [valueKey]: ''})
  }
  return (
    <Select
      placeholder={placeholder}
      defaultValue={hasAll ? '' : undefined}
      {...remainProps}
    >
      {
        mergeOptions.map((item, idx) => (
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
import { Select, SelectProps } from 'antd';
import {} from '../index.d';

export interface ISelectProps extends SelectProps {
  options: Array<{[propName: string]: string}>
  labelKey?: string;
  valueKey?: string;
}
const BaseSelect: React.FC<SelectProps>  = (props) => {
  return (
    <Select></Select>
  )
}
export default BaseSelect
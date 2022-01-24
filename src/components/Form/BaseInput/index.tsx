import { Input, InputProps } from 'antd';
import { FormItemType } from '../index';

const BaseInput: React.FC<InputProps>  = (props) => {
  return (
    <Input {...props}/>
  )
}
export default BaseInput
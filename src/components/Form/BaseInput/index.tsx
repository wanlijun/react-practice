import { Input } from 'antd';
import { FormItemType } from '../index';

const BaseInput: React.FC<Input>  = ({props}) => {
  return (
    <Input {...props}/>
  )
}
export default BaseInput
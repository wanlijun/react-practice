import { Input, InputProps } from 'antd';

export　type IBaseInput = InputProps;
const BaseInput: React.FC<IBaseInput>  = (props) => {
  const {
    autoComplete,
    ...remainProps
  } = props;
  return (
    <Input
      autoComplete={autoComplete || 'off'}
      {...remainProps}
    />
  )
}
export default BaseInput
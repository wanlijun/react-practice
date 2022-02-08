import { Input, InputProps } from 'antd';

const BaseInput: React.FC<InputProps>  = (props) => {
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
import { ComponentProps } from 'react';
import { DatePicker} from 'antd';

const { RangePicker } = DatePicker;
const BaseRangeDatePicker: React.FC<ComponentProps<typeof RangePicker>>  = (props) => {
  const {
    ...remainProps
  } = props;
  return (
    <RangePicker
      {...remainProps}
    ></RangePicker>
  )
}
export default BaseRangeDatePicker
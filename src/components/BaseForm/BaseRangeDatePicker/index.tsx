import { DatePicker} from 'antd';

const { RangePicker } = DatePicker;
const BaseRangeDatePicker: React.FC<any>  = (props) => {
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
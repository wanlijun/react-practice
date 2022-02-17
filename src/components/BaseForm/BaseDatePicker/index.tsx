import { DatePicker, DatePickerProps } from 'antd';
import styles from './index.module.less';

export type IBaseDatePicker = DatePickerProps;
const BaseDatePicker: React.FC<IBaseDatePicker>  = (props) => {
  const {
    ...remainProps
  } = props;
  return (
    <DatePicker
      className={styles.datePicker}
      {...remainProps}
    ></DatePicker>
  )
}
export default BaseDatePicker
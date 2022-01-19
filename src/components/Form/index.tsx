
import { Form, Input } from 'antd';


export enum FormItemType {
  INPUT = 'input',
  DATE = 'date',
  SELECT = 'select',
  textarea = 'textarea'
}
export interface IFormItem {
  /**
   *
   * @description 类型
   * @default  input
   */
  type?: FormItemType;
  /**
   * @description　表单项的key
   */
  name: string;
  /**
   * @description　标签
   */
  label: String;
   /**
   * @description　校验规则
   */
  rules: any
}
export interface IBaseForm {
  config : IFormItem[];
}
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const BaseForm = ({config}) => {
  const [form] = Form.useForm();
  return (
    <Form>
      <Form.Item name="note" label="Note" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="note" label="Note" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
    </Form>
  )
}
export default BaseForm;
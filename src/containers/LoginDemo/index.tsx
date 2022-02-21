import { Form } from 'antd';
import { adminApi } from 'src/apis';
const LoginDemo = ()=> {
  // TODO:1.尽管useForm已经传入一个具体的类型给useForm,后续的参数也能接受到类型
  // 但其实关键的问题没有解决就是，form.item的name还是可以随意写
  // 2.可以提取adminApi.UserBaseRequest的字段值成为一个枚举类型吗？
  const [form] = Form.useForm<adminApi.UserBaseRequest>()
  const onSubmit = (value: adminApi.UserBaseRequest) => {
    console.log(value.password);
  }
 return (
    <Form form={form} onFinish={(value) => onSubmit(value)}>
      <Form.Item
        name="a">
        <input></input>
      </Form.Item>
    </Form>
  )
}
export default LoginDemo
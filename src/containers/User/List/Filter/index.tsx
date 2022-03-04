import { Form, FormInstance } from 'antd';
import {
  BaseInput,
  CityCascader,
  BaseSelect,
  BaseRangeDatePicker
} from 'src/components/BaseForm'
import {
  IFormItem,
  FormItemType
} from 'src/components/BaseForm/index.d';
import GridLayout from 'src/components/GridLayout';

const USER_TYPE_OPTIONS = [
  {
    label: '银行客户经理',
    value: 'BANK_CUSTOMER'
  },
  {
    label: '企业服务经纪人',
    value: 'ENTERPRISE_SERVICE'
  }
]
const USER_STATUS_OPTIONS = [
  {
    label: '是',
    value: 'ENABLE'
  },
  {
    label: '否',
    value: 'DISABLE'
  }
]
const INSIDERS_OPTIONS = [
  {
    label: '是',
    value: true
  },
  {
    label: '否',
    value: false
  }
]
const layOut = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 18
  }
}
const Filter = () => {
  const [form] = Form.useForm<API.adminApi.userManage.getUserPage.Params>();
  return (
    <Form form={form} {...layOut}>
      <GridLayout
        number={4}>
        <Form.Item
          name="name"
          label="姓名"
          >
          <BaseInput
            placeholder="请输入姓名"/>
        </Form.Item>
        <Form.Item
          name="phone"
          label="手机号"
          >
          <BaseInput
             placeholder="请输入手机号"/>
        </Form.Item>
        <Form.Item
          name="province"
          label="省市"
          >
          <CityCascader />
        </Form.Item>
        <Form.Item
          name="type"
          label="用户类型">
          <BaseSelect
            hasAll
            options={USER_TYPE_OPTIONS}
          />
        </Form.Item>
        <Form.Item
          name="insiders"
          label="是否内部人员">
          <BaseSelect
            hasAll
            options={INSIDERS_OPTIONS}
          />
        </Form.Item>
        <Form.Item
          name="status"
          label="账号状态">
          <BaseSelect
            hasAll
            options={USER_STATUS_OPTIONS}
          />
        </Form.Item>
        <Form.Item
          name="regTime"
          label="注册时间">
          <BaseRangeDatePicker/>
        </Form.Item>
      </GridLayout>
    </Form>
  )
}
export default Filter;
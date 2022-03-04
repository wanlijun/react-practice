
  import { BaseInput,BaseSelect} from 'src/components/BaseForm';
  const layOut = {
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 18
    }
  }
  const name_options = [{"label":"银行客户经理","value":"BANK_CUSTOMER"},{"label":"企业服务经纪人","value":"ENTERPRISE_SERVICE"}];
const name_options = [{"label":"是","value":true},{"label":"否","value":false}];

  const test = () => {
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
            name="name"
            label="用户类型"
          >
          <BaseSelect
            hasAll
            options={name_options}
          />
        </Form.Item>
        
          <Form.Item
            name="name"
            label="是否内部人员"
          >
          <BaseSelect
            hasAll
            options={name_options}
          />
        </Form.Item>
        
      </GridLayout>
      </Form>
  }
  export default test;

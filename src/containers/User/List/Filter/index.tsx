import BaseForm from 'src/components/BaseForm';
import {
  IFormItem,
  FormItemType
} from 'src/components/BaseForm/index.d';
const Filter = () => {
  const formProps = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }
  const config: IFormItem[] = [
    {
      type: FormItemType.INPUT,
      label: '姓名',
      name: 'name',
      rules: [
        {
          required: true,
          message: '请输入姓名',
        }
      ]
    },
    // 是否能满足只有SELECT的时候，才能传入options
    {
      type: FormItemType.SELECT,
      label: '用户类型',
      name: 'userType',
      rules: [
        {
          required: true,
          message: '请输入用户类型',
        }
      ],
      labelKey: 'name',
      valueKey: 'id',
      onSelect: (value:string, options: object) => {
        console.log(value, options)
      },
      renderLabel: (_, label, item) => {
        return <span>{`${label}(${item.role})`}</span>
      },
      options: [
        {
          name: '企业服务经纪人',
          id: 1,
          role: '中介'
        },
        {
          name: '银行服务经纪人',
          id: 2,
          role: 'bank'
        }
      ]
    },
    {
      type: FormItemType.DATE,
      label: '注册时间',
      name: 'registerDate',
      rules: [
        {
          required: true,
          message: '请选择注册时间',
        }
      ]
    },
    {
      type: FormItemType.DATE_RANGE,
      label: '时间范围',
      name: 'registerRangeDate',
      rules: [
        {
          required: true,
          message: '请选择时间范围',
        }
      ]
    },
  ]
  const gridLayout = {
    number: 2,
    gutter: 100
  }
  return (
    <div>
       <BaseForm
        formProps={formProps}
        config={config}
        gridLayout={gridLayout}
      />
    </div>
  )
}
export default Filter;
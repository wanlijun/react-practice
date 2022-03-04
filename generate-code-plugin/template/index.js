const componentMap = {
  INPUT: 'BaseInput',
  SELECT: 'BaseSelect'
};
function getItemType() {
  const types = filters === null || filters === void 0 ? void 0 : filters.map((item) => item.type);
  const typeList = new Array(...new Set(types));
  return typeList;
}
function getComponentType(filters) {
  const types = filters === null || filters === void 0 ? void 0 : filters.map((item) => item.type);
  const typeList = new Array(...new Set(types));
  const components = typeList.map((type) => componentMap[type]);
  return components.join(',');
}
function renderForm(filters) {
  let str = ``;
  let opts = ``;
  filters.forEach((item) => {
      switch (item.type) {
          case 'INPUT':
          str += `
          <Form.Item
            name="${item.key}"
            label="${item.label}"
          >
          <BaseInput
            placeholder="请输入${item.label}"/>
          </Form.Item>
        `;
          break;
          case 'SELECT':
              str += `
          <Form.Item
            name="${item.key}"
            label="${item.label}"
          >
          <BaseSelect
            hasAll
            options={${`${item.key}_options`}}
          />
        </Form.Item>
        `
        if(item.options) {
          opts+= `const ${item.key}_options = ${JSON.stringify(item.options)};\n`
        };
        break;
      }
  });
  return {str, opts };
}
function renderTable(data) {
  const { moduleName, filters } = data;
  if (!filters) {
      return '';
  }
  const components = getComponentType(filters);
  const { str, opts } = renderForm(filters);
  
  return `
  import { ${components}} from 'src/components/BaseForm';
  const layOut = {
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 18
    }
  }
  ${opts && opts}
  const ${moduleName} = () => {
    const [form] = Form.useForm();
    return (
      <Form form={form} {...layOut}>
      <GridLayout
        number={4}>
        ${str}
      </GridLayout>
      </Form>
    )
  }
  export default ${moduleName};
`;
}
module.exports = {
  renderTable
}
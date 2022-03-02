import React, { useState } from 'react';
import { Cascader, CascaderProps } from 'antd';
import { useRequest } from 'ahooks';
import { getPathValue } from 'pathval';

const CityCascader: React.FC<CascaderProps<defs.commonApi.ParamsArea>> = (props)=> {
  const { data } = useRequest(API.commonApi.common.getProvince.request)
  const content = getPathValue(data, 'data.data.content')
  const {
    placeholder,
    ...remainProps
  } = props;
  return (
    <Cascader
      fieldNames={{ label: 'name', value: 'code', children: 'child' }}
      options={content}
      placeholder={placeholder || '请输入'}
      {...remainProps}
    />
  );
}
export default CityCascader
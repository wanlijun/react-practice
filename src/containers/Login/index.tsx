import BaseForm from 'src/components/BaseForm';
import styles from './index.module.less';
import {
  IFormItem,
  FormItemType,
  IBaseFormExports
} from 'src/components/BaseForm/index.d';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Button, message } from 'antd';
import { useRef, useState } from 'react';
import { adminApi } from 'src/apis';

function login() {
  const formProps = {
    wrapperCol: { span: 24 },
  }
  const config: IFormItem[] = [
    {
      type: FormItemType.INPUT,
      name: 'name',
      prefix: <UserOutlined className="site-form-item-icon" />,
      size: 'large',
      rules: [
        {
          required: true,
          message: '请输入姓名',
        }
      ]
    },
    {
      type: FormItemType.INPUT,
      name: 'userType',
      prefix: <LockOutlined />,
      size: 'large',
      rules: [
        {
          required: true,
          message: '请输入用户类型',
        }
      ],
    }
  ]
  const gridLayout = {
    number: 1,
    gutter: 0
  }
  const formRef = useRef<IBaseFormExports<adminApi.UserBaseRequest>>(null);
  const { loading, run } = useRequest(() => {
      return formRef!.current!.getValues()
        .then((value) => {
           // TODO:怎么将表单的字段值和接口定义的类型关联起来
          adminApi.admin.loginByPwd.request(value)
        })
    },
    {
      manual: true,
      onError: (error) => {
        message.error(error.message);
      },
    }
  );
  const login = () => {
    run();
  }
  return (
    <div className={styles.logoBox}>
      <h2　className={styles.title}>管理后台</h2>
      <BaseForm
        ref={formRef}
        formProps={formProps}
        config={config}
        gridLayout={gridLayout}
        />
      <Button
        size="large"
        className={styles.submitButton}
        type="primary"
        onClick={login}
        loading={loading}
      >
          登录
      </Button>
    </div>
  )
}
export default login;
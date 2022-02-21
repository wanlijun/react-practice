import { Menu } from 'antd';

const AppMenu = ()=> {
 return (
  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
    <Menu.Item key="1">
      用户管理
    </Menu.Item>
  </Menu>
 )
}
export default AppMenu
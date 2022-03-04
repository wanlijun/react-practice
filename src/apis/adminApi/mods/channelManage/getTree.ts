/**
 * @desc 获取渠道功能权限树、数据权限
 */
import axios from 'axios';

export function request() {
  return axios({
    url: `/api/ctsSaaS/admin/channel/permission/tree`,
    method: 'get',
  });
}

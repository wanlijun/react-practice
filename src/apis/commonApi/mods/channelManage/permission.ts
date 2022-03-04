/**
 * @desc 用户权限配置
 */
import axios from 'axios';

export function request(
  id: string | number,
  bodyParams: defs.commonApi.UserPermissionRequest,
) {
  return axios({
    url: `/api/ctsSaaS/admin/channel/permission/${id}`,
    method: 'post',

    data: bodyParams,
  });
}

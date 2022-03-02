/**
 * @desc 后台账号编辑
 */
import axios from 'axios';

export function request(
  id: string | number,
  bodyParams: defs.adminApi.AdminUpdateRequest,
) {
  return axios({
    url: `/api/ctsSaaS/admin/${id}`,
    method: 'put',

    data: bodyParams,
  });
}

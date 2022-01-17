/**
 * @desc 修改密码
 */
import axios from 'axios';

export function request(bodyParams: defs.userApi.ChangePassWordRequest) {
  return axios({
    url: `/api/ctsSaaS/front/user/changePassWord`,
    method: 'put',

    data: bodyParams,
  });
}

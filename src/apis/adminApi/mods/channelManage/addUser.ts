/**
 * @desc 添加用户至渠道
 */
import axios from 'axios';

export function request(bodyParams: defs.adminApi.AddUserToOrgChannelRequest) {
  return axios({
    url: `/api/ctsSaaS/admin/channel/add/user`,
    method: 'post',

    data: bodyParams,
  });
}

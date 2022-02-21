/**
 * @desc 渠道转移
 */
import axios from 'axios';

export function request(bodyParams: defs.adminApi.ChannelTransferRequest) {
  return axios({
    url: `/api/ctsSaaS/admin/channel/transfer`,
    method: 'put',

    data: bodyParams,
  });
}

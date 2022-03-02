/**
 * @desc 渠道转移
 */
import axios from 'axios';

export function request(bodyParams: defs.commonApi.ChannelTransferRequest) {
  return axios({
    url: `/api/ctsSaaS/admin/channel/transfer`,
    method: 'put',

    data: bodyParams,
  });
}

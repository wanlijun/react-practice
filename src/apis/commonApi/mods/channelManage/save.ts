/**
 * @desc 渠道新增
 */
import axios from 'axios';

export function request(bodyParams: defs.commonApi.OrgChannelSaveRequest) {
  return axios({
    url: `/api/ctsSaaS/admin/channel/save`,
    method: 'post',

    data: bodyParams,
  });
}

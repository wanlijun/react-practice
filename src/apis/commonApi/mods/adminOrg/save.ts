/**
 * @desc 机构新增
 */
import axios from 'axios';

export function request(bodyParams: defs.commonApi.OrgChannelSaveRequest) {
  return axios({
    url: `/api/ctsSaaS/admin/org/save`,
    method: 'post',

    data: bodyParams,
  });
}

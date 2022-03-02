/**
 * @desc 渠道编辑
 */
import axios from 'axios';

export function request(
  id: string | number,
  bodyParams: defs.adminApi.OrgChannelSaveRequest,
) {
  return axios({
    url: `/api/ctsSaaS/admin/channel/${id}`,
    method: 'put',

    data: bodyParams,
  });
}

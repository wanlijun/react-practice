/**
 * @desc 机构编辑
 */
import axios from 'axios';

export function request(
  id: string | number,
  bodyParams: defs.commonApi.OrgChannelSaveRequest,
) {
  return axios({
    url: `/api/ctsSaaS/admin/org/${id}`,
    method: 'put',

    data: bodyParams,
  });
}

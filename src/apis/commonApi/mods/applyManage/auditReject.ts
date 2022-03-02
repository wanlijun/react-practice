/**
 * @desc 审核驳回
 */
import axios from 'axios';

export function request(
  id: string | number,
  bodyParams: defs.commonApi.ApplyAuditRequest,
) {
  return axios({
    url: `/api/ctsSaaS/admin/apply/audit/reject/${id}`,
    method: 'put',

    data: bodyParams,
  });
}

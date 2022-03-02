/**
 * @desc 保存企业报告pdf URL
 */
import axios from 'axios';

export function request(
  companyCollectId: string | number,
  bodyParams: defs.adminApi.PdfUrlRequest,
) {
  return axios({
    url: `/api/ctsSaaS/admin/companyCollect/report/${companyCollectId}/pdf`,
    method: 'put',

    data: bodyParams,
  });
}

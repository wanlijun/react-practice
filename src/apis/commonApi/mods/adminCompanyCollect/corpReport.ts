/**
 * @desc 获取企业报告数据
 */
import axios from 'axios';

export function request(companyCollectId: string | number) {
  return axios({
    url: `/api/ctsSaaS/admin/companyCollect/report/${companyCollectId}`,
    method: 'get',
  });
}

/**
 * @desc 渠道树
 */
import axios from 'axios';

export function request() {
  return axios({
    url: `/api/ctsSaaS/admin/channel/tree`,
    method: 'get',
  });
}

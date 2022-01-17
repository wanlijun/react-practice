/**
 * @desc 生成key
 */
import axios from 'axios';

export function request() {
  return axios({
    url: `/api/ctsSaaS/front/common/key`,
    method: 'get',
  });
}

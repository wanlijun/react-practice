/**
 * @desc 基本信息
 */
import axios from 'axios';

export function request() {
  return axios({
    url: `/api/ctsSaaS/front/user/info`,
    method: 'get',
  });
}

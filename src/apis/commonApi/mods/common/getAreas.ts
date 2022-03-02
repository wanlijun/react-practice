/**
 * @desc 省市区
 */
import axios from 'axios';

export function request() {
  return axios({
    url: `/api/ctsSaaS/front/common/area`,
    method: 'get',
  });
}

/**
 * @desc 生成二维码
 */
import axios from 'axios';

export function request() {
  return axios({
    url: `/api/ctsSaaS/front/common/createQrCode`,
    method: 'get',
  });
}

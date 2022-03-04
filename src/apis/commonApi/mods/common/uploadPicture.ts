/**
 * @desc 文件上传
 */
import axios from 'axios';

export function request() {
  return axios({
    url: `/api/ctsSaaS/front/common/file/upload`,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

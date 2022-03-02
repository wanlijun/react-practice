/**
 * @desc url转文件下载
 */
import axios from 'axios';
export class IQueryParams {
  /** fileUrl */
  fileUrl: string;
  /** filename */
  filename: string;
}

export function request(params: IQueryParams) {
  return axios({
    url: `/api/ctsSaaS/front/common/urlToFile`,
    method: 'get',

    params: params,
  });
}

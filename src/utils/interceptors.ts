import axios from 'axios';
import { getPathValue } from 'pathval';

const interceptors = () => {
  axios.interceptors.request.use((axiosConfig) => {
    axiosConfig.headers['saas-source'] = 'SAAS_WEB';
    axiosConfig.headers['x-forwarded-host'] = '192.168.31.81:13040';
    return axiosConfig;
  });
  axios.interceptors.response.use((response) => {
    return response
  }, (error) => {
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }
    const code = getPathValue(error, 'response.data.code');
    const noTokenCode = ['002003', '002004', '002005', '002006', '002007', '792100'];
    if (noTokenCode.includes(code)) {
      window.location.href = '/pages/login/password';
    }
    return Promise.reject(error);
  })
}

export default interceptors;
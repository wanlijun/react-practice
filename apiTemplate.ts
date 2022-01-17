import { CodeGenerator, Interface, Surrounding } from 'pont-engine'


function formatPath(rawPath: string) {
  const reg = /\{(\w+)\}/ // 匹配{something}
  const res = reg.exec(rawPath)
  if (res) {
    const index = res.index
    const params = res[1]
    return [rawPath.substr(0, index) + '$' + rawPath.substr(index), params]
  }
  return [rawPath, '']
}

function getRequestParams(params: string) {
  if (!params) {
    return ''
  }
  return `${params}: string | number`
}

export default class MyGenerator extends CodeGenerator {
  // 自定义接口生成模板
  getInterfaceContent(inter: Interface) {
    // 获取query params的类型定义
    //class Params {
       /** commonProductId */
    //  commonProductId: number;
    //}
    const queryParamsType = 'IQueryParams'
    const bodyParams = inter.getBodyParamsCode();
    const paramsCode = `class ${queryParamsType} {
      ${inter.parameters
            .filter(param => param.in === 'query')
            .map(param => param.toPropertyCode(Surrounding.typeScript, true))
            .join('')}
    }
  `
    const isEmptyParams = paramsCode.replace(/(\n|\s)/g, '') === `class${queryParamsType}{}`;
    let contentType = inter.consumes && inter.consumes.length ? inter.consumes[0] : '';
    contentType = contentType === 'application/json' || !contentType ? '' : contentType
    const [path, params] = formatPath(inter.path)
    const requestArgs: string[] = [];
    params && requestArgs.push(`${getRequestParams(params)}`);
    !isEmptyParams && requestArgs.push(`params: ${queryParamsType}`);
    bodyParams && requestArgs.push(`bodyParams: ${bodyParams}`);
    const requestParams = requestArgs.join(', ');
   
    return `
    /**
     * @desc ${inter.description}
     */
    import axios from 'axios'
    ${
      !isEmptyParams ? `export ${paramsCode}` : ''
    }
    export function request(${requestParams}) {
      return axios({
        url: \`${path}\`,
        method: '${inter.method}',
        ${
          contentType && 
         ` headers: {
            'Content-Type': '${contentType}'
          },`
        }
        ${isEmptyParams ? '' : '' + 'params: params,'}
        ${bodyParams ? 'data: bodyParams' : ''}
      });
    }
   `
  }
}
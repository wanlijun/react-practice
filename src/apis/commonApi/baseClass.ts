class BuriedPointRequest {
  /** 埋点code */
  buriedCode = '';
}

class CommonProductDetailResponse {
  /** 申请人要求 */
  applicantRequirements = '';

  /** 展业区域 */
  areas = '';

  /** 资金方 */
  capitalSource = '';

  /** 产品介绍 */
  description = '';

  /** 企业要求 */
  enterpriseRequirement = '';

  /** 产品id */
  id = '';

  /** 利率最大值 */
  interestRateMax = undefined;

  /** 利率最小值 */
  interestRateMin = undefined;

  /** 利率类型 */
  interestRateType = 'DAY';

  /** 借款周期结束 */
  loanPeriodEnd = undefined;

  /** 借款周期开始 */
  loanPeriodStart = undefined;

  /** logo */
  logo = '';

  /** 最高额度 */
  maxCreditLine = undefined;

  /** 产品名称 */
  name = '';

  /** pdfUrl */
  pdfUrl = '';

  /** 还款方式 */
  repaymentMethod = 'REPAYMENT_ANYTIME';

  /** 模型指标 */
  targetModel = [];

  /** 产品类型 */
  type = '';
}

class CommonProductPageResponse {
  /** id */
  id = undefined;

  /** 利率最大值 */
  interestRateMax = undefined;

  /** 利率最小值 */
  interestRateMin = undefined;

  /** 利率类型 */
  interestRateType = '';

  /** 借款周期结束 */
  loanPeriodEnd = undefined;

  /** 借款周期开始 */
  loanPeriodStart = undefined;

  /** logo */
  logo = '';

  /** 最高额度 */
  maxCreditLine = undefined;

  /** 产品名称 */
  name = '';

  /** 还款方式 */
  repaymentMethod = '';

  /** 状态 */
  status = 'UPPER_SHELF';
}

class CommonTargetLibraryInfo {
  /** 数据类型 */
  dataType = 'NUMBER';

  /** 是否热门 */
  hot = false;

  /** 指标id */
  id = undefined;

  /** 是否支持多选 */
  multiSelect = false;

  /** 指标名称 */
  name = '';

  /** 运算符 */
  operator = 'EQUAL';

  /** 可选值 */
  optionalValue = undefined;

  /** 是否选中 */
  selected = false;

  /** 指标类型 */
  type = 'HOT';

  /** 单位 */
  unit = 'M';

  /** 值 */
  value = undefined;

  /** 值名称：主要用于地区、行业 */
  valueStr = undefined;
}

class CommonTargetLibraryResponse {
  /** 指标列表 */
  infos = [];

  /** 指标类型 */
  type = 'HOT';
}

class CompanyBaseInfo {
  /** frName */
  frName = '';

  /** province */
  province = '';

  /** socialCode */
  socialCode = '';
}

class FunderInfo {
  /** funderName */
  funderName = '';

  /** id */
  id = undefined;
}

class Map {}

class ParamsArea {
  /** child */
  child = [];

  /** code */
  code = '';

  /** invoice */
  invoice = false;

  /** name */
  name = '';

  /** parentCode */
  parentCode = '';

  /** pinyin */
  pinyin = '';

  /** shortName */
  shortName = '';

  /** shortPinyin */
  shortPinyin = '';

  /** type */
  type = '';
}

class ParamsIndustry {
  /** child */
  child = [];

  /** firstLetter */
  firstLetter = '';

  /** industryCode */
  industryCode = '';

  /** industryName */
  industryName = '';
}

class PdfUrlRequest {
  /** pdfurl */
  pdfUrl = '';
}

class ProductTypeVo {
  /** id */
  id = undefined;

  /** typeName */
  typeName = '';
}

class ReportLevelVo {
  /** 报告类型 */
  collectType = 'SJ';

  /** id */
  id = undefined;

  /** 等级名称 */
  levelName = '';

  /** 是否推荐 */
  recommend = false;

  /** 说明 */
  remark = '';
}

class ScBaseDataType {
  /** 结果 */
  result = '';
}

class ScListData {
  /** 结果 */
  content = [];
}

class ScPage {
  /** size */
  size = undefined;

  /** total */
  total = undefined;
}

class ScPageData {
  /** content */
  content = [];

  /** page */
  page = new ScPage();
}

class ScPageResponse {
  /** code */
  code = '';

  /** data */
  data = new ScPageData();

  /** message */
  message = '';

  /** traceId */
  traceId = '';
}

class ScResponse {
  /** code */
  code = '';

  /** data */
  data = new CommonProductDetailResponse();

  /** message */
  message = '';

  /** traceId */
  traceId = '';
}

export const commonApi = {
  BuriedPointRequest,
  CommonProductDetailResponse,
  CommonProductPageResponse,
  CommonTargetLibraryInfo,
  CommonTargetLibraryResponse,
  CompanyBaseInfo,
  FunderInfo,
  Map,
  ParamsArea,
  ParamsIndustry,
  PdfUrlRequest,
  ProductTypeVo,
  ReportLevelVo,
  ScBaseDataType,
  ScListData,
  ScPage,
  ScPageData,
  ScPageResponse,
  ScResponse,
};

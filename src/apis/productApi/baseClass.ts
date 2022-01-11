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
  data = new UserProductDetailResponse();

  /** message */
  message = '';

  /** traceId */
  traceId = '';
}

class UserProductAddRequest {
  /** 申请人要求 */
  applicantRequirements = '';

  /** 产品介绍 */
  description = '';

  /** 企业要求 */
  enterpriseRequirement = '';

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

  /** 最高额度 */
  maxCreditLine = undefined;

  /** 产品名称 */
  name = '';

  /** 产品类型Id */
  productTypeId = undefined;

  /** 还款方式 */
  repaymentMethod = 'REPAYMENT_ANYTIME';
}

class UserProductDetailResponse {
  /** 申请人要求 */
  applicantRequirements = '';

  /** 展业区域 */
  areas = '';

  /** 产品介绍 */
  description = '';

  /** 企业要求 */
  enterpriseRequirement = '';

  /** id */
  id = undefined;

  /** 进件地址 */
  incomeUrl = '';

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

  /** 最高额度 */
  maxCreditLine = undefined;

  /** 产品名称 */
  name = '';

  /** 产品编号 */
  productNo = '';

  /** 产品类别Id */
  productTypeId = undefined;

  /** 是否推荐 */
  recommend = false;

  /** 还款方式 */
  repaymentMethod = 'REPAYMENT_ANYTIME';

  /** 模型指标 */
  targetModel = [];

  /** 产品类别 */
  type = '';
}

class UserProductPageResponse {
  /** id */
  id = undefined;

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

  /** 最高额度 */
  maxCreditLine = undefined;

  /** 产品名称 */
  name = '';

  /** 产品类别 */
  productType = '';

  /** 是否推荐 */
  recommend = false;

  /** 还款方式 */
  repaymentMethod = 'REPAYMENT_ANYTIME';

  /** 状态 */
  status = '';
}

class UserProductRequest {
  /** 申请人要求 */
  applicantRequirements = '';

  /** 产品介绍 */
  description = '';

  /** 企业要求 */
  enterpriseRequirement = '';

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

  /** 最高额度 */
  maxCreditLine = undefined;

  /** 产品名称 */
  name = '';

  /** 产品类型Id */
  productTypeId = undefined;

  /** 还款方式 */
  repaymentMethod = 'REPAYMENT_ANYTIME';
}

class UserTargetInfo {
  /** 运算符 */
  operator = 'EQUAL';

  /** 指标库ID */
  targetLibraryId = undefined;

  /** 值 */
  value = undefined;
}

class UserTargetRequest {
  /** 指标 */
  targets = [];
}

export const productApi = {
  CommonTargetLibraryInfo,
  CommonTargetLibraryResponse,
  ScPage,
  ScPageData,
  ScPageResponse,
  ScResponse,
  UserProductAddRequest,
  UserProductDetailResponse,
  UserProductPageResponse,
  UserProductRequest,
  UserTargetInfo,
  UserTargetRequest,
};

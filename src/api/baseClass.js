export class AdviceReportConditionMatchInfo {
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
  productName = '';

  /** 产品编号 */
  productNo = '';

  /** 产品类型 */
  productTypeName = '';

  /** 还款方式 */
  repaymentMethod = 'REPAYMENT_ANYTIME';

  /** 产品id */
  userProductId = undefined;
}

export class AdviceReportConditionNotMatchInfo {
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

  /** 不匹配原因 */
  noMatchDetail = [];

  /** 产品名称 */
  productName = '';

  /** 产品编号 */
  productNo = '';

  /** 产品类型 */
  productTypeName = '';

  /** 还款方式 */
  repaymentMethod = 'REPAYMENT_ANYTIME';

  /** 产品id */
  userProductId = undefined;
}

export class AdviceReportNoMatchInfo {
  /** 企业情况 */
  actual = '';

  /** 产品要求 */
  required = '';
}

export class AdviceReportNotJudgedInfo {
  /** 产品名称 */
  productName = '';

  /** 未判断原因 */
  reason = '';

  /** 不能执行的指标 */
  targetNames = [];

  /** 产品id */
  userProductId = undefined;
}

export class AdviceReportResponse {
  /** 条件符合 */
  conditionsMatch = [];

  /** 条件不符 */
  conditionsNotMatch = [];

  /** 未进行判断 */
  notJudged = [];
}

export class AdviceResponse {
  /** 报告类型 */
  collectType = 'SJ';

  /** 创建时间 */
  createTs = '';

  /** 创建人 */
  creator = '';

  /** 创建人手机号 */
  creatorPhone = '';

  /** 报告状态 */
  creditAdviceStatus = 'PENDING_AUTHORIZATION';

  /** 统一社会信用代码 */
  creditCode = '';

  /** 信用报告状态 */
  creditReportStatus = 'CREATED';

  /** 企业名称 */
  enterpriseName = '';

  /** 企业报告状态 */
  enterpriseReportStatus = 'CREATED';

  /** id */
  id = undefined;

  /** 是否需要发票信，即是否需要插件 */
  invoice = false;

  /** 订单号 */
  orderNo = '';

  /** pdfUrl */
  pdfUrl = '';

  /** 失败原因 */
  reason = '';

  /** 报告等级 */
  reportLevelName = '';

  /** 报告生成时间 */
  reportTs = '';

  /** 是否示例 */
  sample = false;
}

export class ApplyBankVersionRequest {
  /** 申请人姓名 */
  applyName = '';

  /** 所在银行 */
  bankName = '';

  /** 所在城市 */
  city = '';

  /** 手机号 */
  contactPhone = '';
}

export class BannerInfoResponse {
  /** image */
  image = '';

  /** seq */
  seq = undefined;

  /** uri */
  uri = '';
}

export class ChangePassWordRequest {
  /** 新密码(MD5) */
  newPwd = '';

  /** 旧密码(MD5) */
  oldPwd = '';

  /** 重复输入密码(MD5) */
  verifyPwd = '';
}

export class ConsumeRecordResponse {
  /** 消费点数 */
  consumerPoints = undefined;

  /** 消费时间 */
  createdTime = '';

  /** 企业名称 */
  enterpriseName = '';

  /** 消费流水号 */
  number = '';

  /** 是否扣费 */
  whetherDeduction = false;
}

export class CreditAdviceRequest {
  /** 报告状态 */
  creditAdviceStatus = [];

  /** 企业名称 */
  enterpriseName = '';

  /** 报告等级id */
  reportLevelIds = [];
}

export class RechargeRecordResponse {
  /** 充值金额 */
  amount = undefined;

  /** 充值时间 */
  createdTime = '';

  /** 充值点数 */
  points = undefined;

  /** 充值方式 */
  rechargeType = 'ADMIN';

  /** 充值流水号 */
  serialNumber = '';

  /** 充值状态 */
  status = 'SUCCESS';
}

export class ScListData {
  /** 结果 */
  content = [];
}

export class ScPage {
  /** size */
  size = undefined;

  /** total */
  total = undefined;
}

export class ScPageData {
  /** content */
  content = [];

  /** page */
  page = new ScPage();
}

export class ScPageResponse {
  /** code */
  code = '';

  /** data */
  data = new ScPageData();

  /** message */
  message = '';

  /** traceId */
  traceId = '';
}

export class ScResponse {
  /** code */
  code = '';

  /** data */
  data = new AdviceReportResponse();

  /** message */
  message = '';

  /** traceId */
  traceId = '';
}

export class UserBackPasswordRequest {
  /** 密码(MD5) */
  password = '';

  /** 手机号 */
  phone = '';

  /** 短信验证码 */
  smsCode = '';

  /** 重复输入密码(MD5) */
  verifyPassword = '';
}

export class UserBaseInfoResponse {
  /** 是否展示银行版 */
  bankVersion = false;

  /** 城市 */
  city = '';

  /** id */
  id = undefined;

  /** 是否有进件权限 */
  income = false;

  /** 姓名 */
  name = '';

  /** 手机号 */
  phone = '';

  /** 省 */
  province = '';

  /** 账户余额 */
  remainPoints = undefined;
}

export class UserBaseRequest {
  /** 密码(MD5) */
  password = '';

  /** 手机号 */
  phone = '';
}

export class UserInfoExternalResponse {
  /** 是否展示银行版 */
  bankVersion = false;

  /** 城市 */
  city = '';

  /** id */
  id = undefined;

  /** 身份证（已加密） */
  idCard = '';

  /** 是否有进件权限 */
  income = false;

  /** 姓名 */
  name = '';

  /** 密码 */
  password = '';

  /** 手机号 */
  phone = '';

  /** 省 */
  province = '';

  /** 账户余额 */
  remainPoints = undefined;
}

export class UserLoginCodeRequest {
  /** 验证码 */
  code = '';

  /** 手机号 */
  phone = '';
}

export class UserRegisterRequest {
  /** 所在城市 */
  city = '';

  /** 姓名 */
  name = '';

  /** 密码(MD5) */
  password = '';

  /** 手机号 */
  phone = '';

  /** 短信验证码 */
  smsCode = '';

  /** 重复输入密码(MD5) */
  verifyPassword = '';
}

export class WatermarkRequest {
  /** 内容 */
  content = '';
}

export class WatermarkResponse {
  /** 内容 */
  content = '';
}

class AbnormalOperationInfoVo {
  /** 列入名录原因 <-【经营异常】 */
  listedCause = '';

  /** 列入日期 */
  listedDate = '';

  /** 移除名录原因 */
  removeCause = '';

  /** 移除日期 */
  removeDate = '';
}

class AddUserToOrgChannelRequest {
  /** 渠道Id */
  channelId = undefined;

  /** 用户Id */
  userId = undefined;
}

class AdminAddRequest {
  /** 姓名 */
  name = '';

  /** 机构id */
  orgId = undefined;

  /** 手机号 */
  phone = '';

  /** 角色id */
  roleId = undefined;
}

class AdminAdvicePageResponse {
  /** 消费点数 */
  consumerPoints = undefined;

  /** 创建时间 */
  createTs = '';

  /** 报告状态 */
  creditAdviceStatus = 'PENDING_AUTHORIZATION';

  /** 统一社会信用代码 */
  creditCode = '';

  /** 企业名称 */
  enterpriseName = '';

  /** id */
  id = undefined;

  /** 更新时间 */
  lastModifiedTs = '';

  /** pdfurl */
  pdfUrl = '';

  /** 用户手机号 */
  phone = '';

  /** 是否使用插件 */
  plugin = false;

  /** 报告等级 */
  reportLevelName = '';

  /** 所属用户 */
  username = '';
}

class AdminAdviceRecordResponse {
  /** 取消的时间 */
  cancelTs = '';

  /** 创建时间 */
  createTs = '';

  /** 电子税局授权时间 */
  electronicTaxTs = '';

  /** 企业名称 */
  enterpriseName = '';

  /** id */
  id = undefined;

  /** 插件采集成功时间 */
  pluginTs = '';

  /** 失败原因 */
  reason = '';

  /** 报告生成时间 */
  reportTs = '';
}

class AdminDetailResponse {
  /** id */
  id = undefined;

  /** 姓名 */
  name = '';

  /** 机构id */
  orgId = undefined;

  /** 手机号 */
  phone = '';

  /** 角色id */
  roleId = undefined;
}

class AdminInfoResponse {
  /** 后台账号类型 */
  adminType = 'ADMIN';

  /** id */
  id = undefined;

  /** 姓名 */
  name = '';

  /** 权限码 */
  permissionCodes = [];

  /** 手机号 */
  phone = '';

  /** 状态 */
  status = 'ENABLE';
}

class AdminPageResponse {
  /** id */
  id = undefined;

  /** 更新时间 */
  lastModifiedTs = '';

  /** 姓名 */
  name = '';

  /** 所属部门 */
  orgName = '';

  /** 手机号 */
  phone = '';

  /** 所属角色 */
  roleName = '';

  /** 状态 */
  status = 'ENABLE';
}

class AdminRechargeRecordResponse {
  /** 充值后剩余点数 */
  afterPoints = undefined;

  /** 充值前剩余点数 */
  beforePoints = undefined;

  /** 充值时间 */
  createdTime = '';

  /** 操作人用户名 */
  creatorName = '';

  /** 操作人账号 */
  creatorPhone = '';

  /** id */
  id = undefined;

  /** 用户手机号 */
  phone = '';

  /** 充值点数 */
  points = undefined;

  /** 充值流水号 */
  serialNumber = '';

  /** 所属用户 */
  username = '';
}

class AdminResourceTreeResponse {
  /** child */
  child = [];

  /** 资源代码 */
  code = '';

  /** id */
  id = undefined;

  /** 资源名称 */
  name = '';

  /** 父资源 */
  parentId = undefined;
}

class AdminUpdateRequest {
  /** 机构id */
  orgId = undefined;

  /** 角色id */
  roleId = undefined;
}

class AdminUserProductPageResponse {
  /** id */
  id = undefined;

  /** 利率最大值 */
  interestRateMax = undefined;

  /** 利率最小值 */
  interestRateMin = undefined;

  /** 利率类型 */
  interestRateType = 'DAY';

  /** 更新时间 */
  lastModifiedTs = '';

  /** 借款周期结束 */
  loanPeriodEnd = undefined;

  /** 借款周期开始 */
  loanPeriodStart = undefined;

  /** 最高额度 */
  maxCreditLine = undefined;

  /** 产品名称 */
  name = '';

  /** 用户手机号 */
  phone = '';

  /** 产品类别 */
  productType = '';

  /** 还款方式 */
  repaymentMethod = 'REPAYMENT_ANYTIME';

  /** 状态 */
  status = 'UPPER_SHELF';

  /** 所属用户 */
  username = '';
}

class AlterInfoVo {
  /** 变更时间（年） */
  altDate = '';

  /** 法人变更次数 */
  legalPersonAltCnt = '';

  /** 股东变更次数 */
  shareholderAltCnt = '';
}

class AlterStatusVo {
  /** 变更后 */
  altAf = '';

  /** 变更前 */
  altBe = '';

  /** 变更日 */
  altDate = '';

  /** 变更项目 */
  altItem = '';
}

class ApplyAuditRequest {
  /** 驳回原因 */
  cause = '';
}

class ApplyPageResponse {
  /** 审核状态 */
  auditStatus = 'PENDING';

  /** 城市 */
  city = '';

  /** 申请时间 */
  createdTs = '';

  /** id */
  id = undefined;

  /** 更新时间 */
  lastModifiedTs = '';

  /** 姓名 */
  name = '';

  /** 所属机构 */
  orgName = '';

  /** 手机号 */
  phone = '';

  /** 省 */
  province = '';

  /** 账户余额 */
  remainPoints = undefined;

  /** 用户来源 */
  source = 'YRT';

  /** 用户类型 */
  type = '';

  /** 用户id */
  userId = undefined;
}

class BankTaxInteractionVo {
  /** 查询银行 */
  bankName = '';

  /** 查询日期 */
  queryDate = '';
}

class BasicInfoVo {
  /** 注册地址 */
  address = '';

  /** 法人年龄 */
  age = '';

  /** 实缴资本 */
  capito = '';

  /** 企业名称 */
  enterpriseName = '';

  /** 登记状态 */
  enterpriseStatus = '';

  /** 企业类型 */
  enterpriseType = '';

  /** 登记日期 */
  esDate = '';

  /** 法人持股比例 */
  frcgbl = '';

  /** 所属行业 */
  industry = '';

  /** 法定代表人 */
  legalPersonName = '';

  /** 经营范围 */
  operateScope = '';

  /** 注册资本 */
  regCap = '';

  /** 注册资本币种 */
  regCapCur = '';

  /** 登记机关 */
  regOrg = '';

  /** 统一社会信用代码 */
  socialCreditIdentifier = '';
}

class ChannelTransferRequest {
  /** 渠道Id */
  channelId = undefined;

  /** ids */
  ids = [];
}

class ChannelUserPageResponse {
  /** 渠道ids */
  channelIds = [];

  /** 所属渠道 */
  channelName = '';

  /** 所在市 */
  city = '';

  /** 已使用点数 */
  consumerPoints = undefined;

  /** id */
  id = undefined;

  /** 姓名 */
  name = '';

  /** 手机号 */
  phone = '';

  /** 所在省 */
  province = '';

  /** 注册时间 */
  regTime = '';

  /** 剩余点数 */
  remainPoints = undefined;

  /** 账号状态 */
  status = 'ENABLE';

  /** 用户类型 */
  type = '';

  /** 用户Id */
  userId = undefined;
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

  /** 资金方Id */
  funderId = undefined;

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

  /** 产品类型Id */
  productTypeId = undefined;

  /** 还款方式 */
  repaymentMethod = 'REPAYMENT_ANYTIME';

  /** 状态 */
  status = 'UPPER_SHELF';

  /** 模型指标 */
  targetModel = [];

  /** 产品类型 */
  type = '';
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

class CompanyBaseInfoExt {
  /** 申请资金类型 */
  applyCapitalType = 'APPRECIATION_EXPANSION';

  /** 所在区 */
  area = '';

  /** 资金用途 */
  capitalPurpose = 'SUPPLEMENTARY_CAPITAL';

  /** 所在市 */
  city = '';

  /** 企业名称 */
  companyName = '';

  /** 联系人手机号 */
  contactPhone = '';

  /** 社会统一信用代码 */
  creditCode = '';

  /** 企业经济类型 */
  economicType = 'STATE_OWNED';

  /** 企业人员数量 */
  employees = undefined;

  /** 融资金额 */
  financingAmount = '';

  /** 企业所属行业 */
  industry = '';

  /** 主营业务 */
  mainBusiness = '';

  /** 主营产品 */
  mainProduct = '';

  /** 企业净资产（万元） */
  netAssets = '';

  /** 企业净利润（万元） */
  netProfit = '';

  /** 所在省 */
  province = '';

  /** 报告生成时间 */
  reportCreatedTime = '';

  /** 企业销售收入（万元） */
  salesRevenue = '';

  /** 是否规上企业 */
  scale = false;

  /** 企业纳税金额（万元） */
  taxAmount = '';

  /** 企业总资产（万元） */
  totalAssets = '';

  /** 企业总负债（万元） */
  totalLiability = '';
}

class CompanyCollectDetailResponse {
  /** 企业基本信息 */
  companyBaseInfo = new CompanyBaseInfoExt();

  /** 项目信息 */
  projectInfo = new ProjectBaseInfo();
}

class CompanyCollectPageResponse {
  /** 所在区 */
  area = '';

  /** 授权时间 */
  authTime = '';

  /** 所在市 */
  city = '';

  /** 企业名称 */
  companyName = '';

  /** 建设状况 */
  construction = '';

  /** 联系人手机号 */
  contactPhone = '';

  /** 创建时间 */
  createdTs = '';

  /** 统一社会信用代码 */
  creditCode = '';

  /** 融资金额(万元) */
  financingAmount = '';

  /** ID */
  id = undefined;

  /** 企业所属行业 */
  industry = '';

  /** 项目名称 */
  projectName = '';

  /** 企业所属城市(省份) */
  province = '';

  /** 报告pdf URL */
  reportPdfUrl = '';

  /** 状态 */
  status = 'PENDING_AUTHORIZATION';

  /** 项目总投资(万元) */
  totalInvestAmount = '';
}

class CourtDishonestyInfoVo {
  /** 案号 */
  caseCode = '';

  /** 被执行人履行情况 */
  caseStatus = '';

  /** 执行时间 <-【企业失信被执行】 */
  publishDate = '';
}

class CourtExecuteInfoVo {
  /** 案号 */
  caseCode = '';

  /** 执行时间 <-【企业被执行】 */
  caseCreateDate = '';

  /** 案件状态 */
  caseStatus = '';
}

class CourtNegtiveAnalysisVo {
  /** 企业失信被执行次数 */
  dishonestyCnt = '';

  /** 企业被执行次数 */
  executeCnt = '';

  /** 年度 <-【司法负面统计】 */
  year = '';
}

class CreditAdviceCompanyReportResponse {
  /** 经营异常信息 */
  abnormalOperationInfo = [];

  /** 股东变更信息 */
  alterInfo = [];

  /** 工商变更记录 */
  alterStatus = [];

  /** 银税互动 */
  bankTaxInteraction = [];

  /** 基本消息 */
  basicInfo = new BasicInfoVo();

  /** 企业失信被执行信息 */
  courtDishonestyInfo = [];

  /** 企业被执行信息 */
  courtExecuteInfo = [];

  /** 司法负面统计 */
  courtNegtiveAnalysis = [];

  /** 股权冻结信息 */
  equityFreezeInfo = [];

  /** 对外投资 */
  invest = [];

  /** 近24个月每个月开票金额及张数 */
  invoiceAmtLast24m = [];

  /** 开票分析 */
  invoiceInfo = [];

  /** 主要成员 */
  managerInfo = [];

  /** 负面信息 */
  negtiveInfo = new NegtiveInfoVo();

  /** 没有数据标记 */
  noDataFlag = new NoDataFlagVo();

  /** 行政处罚信息 */
  punishInfo = [];

  /** 企业主基本信息 */
  qyzInfo = new QyzbasicInfo();

  /** 企业主借贷信息 */
  qyzdebtInfo = new QyzdebtInfoVo();

  /** 企业主消费信息 */
  qyzspendInfo = new QyzspendInfoVo();

  /** 企业主交易信息 */
  qyztradeInfo = new QyztradeInfoVo();

  /** 工商负面统计 */
  saicNegtiveAnalysis = [];

  /** 严重失信违法信息 */
  seriousDishonestyInfo = [];

  /** 股东信息 */
  shareholderInfo = [];

  /** 税务banner信息 */
  taxBannerInfo = new TaxBannerInfoVo();

  /** 发票信息A信息-纳税分析 */
  taxInfoA = [];

  /** 发票信息B信息-纳税信息 */
  taxInfoB = [];

  /** 发票信息B信息-纳税信息 */
  yssr = [];

  /** 综合评估 */
  zhEvaluation = [];

  /** 最近开票信息 */
  zjkp = new InvoicingZjkpVo();
}

class DataPermissionVo {
  /** id */
  id = undefined;

  /** 数据权限名称 */
  name = '';

  /** 数据权限类型：CURRENT_ACCOUNT:本账号,CURRENT_DEPT:本部门，SUB_DEPT:子部门，ALL_SUB_DEPT:所有子部门 */
  type = 'CURRENT_ACCOUNT';
}

class DelayInfoVo {
  /** 近14天是否有逾期记录 */
  yq14day = '';

  /** 近1天是否有逾期记录 */
  yq1day = '';

  /** 近30天是否有逾期记录 */
  yq30day = '';

  /** 近7天是否有逾期记录 */
  yq7day = '';

  /** 当前逾期金额 */
  yqje = '';

  /** 当前逾期机构数 */
  yqjgs = '';
}

class EquityFreezeInfoVo {
  /** 股权数额 */
  equityAmt = '';

  /** 被执行人 <-【股权冻结】 */
  executePersonName = '';

  /** 冻结期限自 */
  freezeFrom = '';

  /** 冻结期限至 */
  freezeTo = '';
}

class GlqyInfoVo {
  /** 作为被告次数 */
  glBgcs = '';

  /** 被执行次数 */
  glBzx = '';

  /** 失信被执行次数 */
  glSxbzx = '';

  /** 作为原告次数 */
  glYgcs = '';

  /** 年度 */
  nd = '';
}

class InvestVo {
  /** 投资比例 */
  fundedRatio = '';

  /** 认缴出资额 */
  investCur = '';

  /** 被投资企业名称 */
  investName = '';

  /** 投资金额 */
  subConam = '';
}

class InvoiceAmtLast24mVo {
  /** 日期 */
  date = '';

  /** 金额 */
  je = '';

  /** 张数 */
  num = '';
}

class InvoicingAnalysisVo {
  /** 近12个月 */
  m12 = '';

  /** 近24个月 */
  m24 = '';

  /** 近3个月 */
  m3 = '';

  /** 近6个月 */
  m6 = '';

  /** 指标 */
  zb = '';
}

class InvoicingZjkpVo {
  /** 近12个月开票月份数 */
  invoicedMonthCntLast12m = '';

  /** 近6个月开票月份数 */
  invoicedMonthCntLast6m = '';

  /** 发票开具数 */
  invoicehcration = '';

  /** 近45日是否有开票记录 */
  invoicelast45days = '';

  /** 近60日是否有开票记录 */
  invoicelast60days = '';

  /** 近12个月未开票月份数 */
  invoiceno12m = '';

  /** 近12个月是否有未开票月份 */
  invoiceyesno12m = '';

  /** 最近开票日期 */
  lastInvoiceDate = '';
}

class JgAnalysisVo {
  /** 金额不足交易失败比例 */
  jebzSbjybl = '';

  /** 持牌消金平台机构数 */
  jgsCpxj = '';

  /** 互联网信贷平台机构数 */
  jgsHlw = '';

  /** 历史信贷平台交易失败笔数 */
  jysbbsXdpt = '';

  /** 历史信贷平台总机构数 */
  lsjgsXdpt = '';

  /** 已结清信贷平台构数 */
  yjqjgsXdpt = '';
}

class JyjjDayVo {
  /** 机构 */
  zb = '';

  /** 最近交易距今天数 */
  zjjy = '';

  /** 最早交易距今天数 */
  zzjy = '';
}

class LogResponse {
  /** 操作内容 */
  cause = '';

  /** 操作人用户名 */
  creatorName = '';

  /** 操作人账号 */
  creatorPhone = '';

  /** id */
  id = undefined;

  /** 操作时间 */
  lastModifiedTs = '';
}

class ManagerInfoVo {
  /** 姓名 */
  managerName = '';

  /** 职位 */
  managerPosition = '';
}

class NegtiveInfoVo {
  /** 企业主逾期信息 */
  delayInfo = new DelayInfoVo();

  /** 关联企业司法负面统计 */
  glqyInfo = [];

  /** 企业司法负面统计 */
  qyInfo = [];

  /** 企业主司法负面统计 */
  qyzInfo = [];
}

class NoDataFlagVo {
  /** 银税互动数据 */
  bankTaxInteraction = false;

  /** 发票数据 */
  invoice = false;
}

class OrgChannelListResponse {
  /** child */
  child = [];

  /** id */
  id = undefined;

  /** 名称 */
  name = '';

  /** 父级机构Id */
  parentId = undefined;
}

class OrgChannelSaveRequest {
  /** 名称 */
  name = '';

  /** 父级机构Id */
  parentId = undefined;
}

class PdfUrlRequest {
  /** pdfurl */
  pdfUrl = '';
}

class PermissionResponse {
  /** 数据权限 */
  dataPermissionList = [];

  /** 资源权限 */
  resourceList = [];
}

class ProductAddRequest {
  /** 申请人要求 */
  applicantRequirements = '';

  /** 产品介绍 */
  description = '';

  /** 企业要求 */
  enterpriseRequirement = '';

  /** 资金方Id */
  funderId = undefined;

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

class ProductPageResponse {
  /** 是否银行用户暂时 */
  bankVersion = false;

  /** 产品id */
  id = undefined;

  /** 利率最大值 */
  interestRateMax = undefined;

  /** 利率最小值 */
  interestRateMin = undefined;

  /** 利率类型 */
  interestRateType = 'DAY';

  /** 更新时间 */
  lastModifiedTs = '';

  /** 借款周期结束 */
  loanPeriodEnd = undefined;

  /** 借款周期开始 */
  loanPeriodStart = undefined;

  /** 最高额度 */
  maxCreditLine = undefined;

  /** 产品名称 */
  name = '';

  /** 产品类型 */
  productTypeName = '';

  /** 是否推荐 */
  recommend = false;

  /** 还款方式 */
  repaymentMethod = '';

  /** 状态 */
  status = 'UPPER_SHELF';
}

class ProjectBaseInfo {
  /** 建设地点-所在市 */
  city = '';

  /** 建设状况 */
  construction = '';

  /** 经济效益 */
  economicEffect = '';

  /** 固定资产投资(万元) */
  fixedAssetsInvestAmount = '';

  /** 建设内容 */
  projectContent = '';

  /** 项目名称 */
  projectName = '';

  /** 项目手续情况 */
  projectProcedures = [];

  /** 建设地点-所在省 */
  province = '';

  /** 拟开工时间 */
  scheduledDate = '';

  /** 资金来源 */
  sourcesFunds = '';

  /** 拟完工时间 */
  toBeCompletedDate = '';

  /** 总投资(万元) */
  totalInvestAmount = '';
}

class ProjectProcedureInfo {
  /** type */
  type = '';

  /** url */
  url = '';
}

class PunishInfoVo {
  /** 决定书文号 <-【行政处罚】 */
  caseCode = '';

  /** 处罚内容 */
  punishContent = '';

  /** 决定日期 */
  punishDate = '';

  /** 处罚原因 */
  punishType = '';
}

class QyInfoVo {
  /** 年度 */
  nd = '';

  /** 作为被告次数 */
  qyBgcs = '';

  /** 被执行次数 */
  qyBzx = '';

  /** 失信被执行次数 */
  qySxbzx = '';

  /** 作为原告次数 */
  qyYgcs = '';
}

class QyzInfoVo {
  /** 年度 */
  nd = '';

  /** 作为被告次数 */
  qyzBgcs = '';

  /** 被执行次数 */
  qyzBzx = '';

  /** 失信被执行次数 */
  qyzSxbzx = '';

  /** 限高消费记录 */
  qyzXg = '';

  /** 作为原告次数 */
  qyzYgcs = '';
}

class QyzbasicInfo {
  /** 企业主类型 */
  czje3m = '';

  /** 企业主姓名 */
  name = '';
}

class QyzdebtInfoVo {
  /** 借贷机构分析 */
  jgAnalysis = new JgAnalysisVo();

  /** 借贷机构 */
  jyjjDay = [];

  /** 信贷平台分析 */
  xdptAnalysis = [];
}

class QyzspendInfoVo {
  /** 企业主消费信息 */
  qyzspend = [];

  /** 单笔消费金额分析 */
  xfjeAnalysis = [];
}

class QyztradeInfoVo {
  /** 企业主出入账信息 */
  crzInfo = [];

  /** 企业主交易信息 */
  qyzTradeInfo = [];

  /** 最近一笔失败交易距今天数 */
  sbjyjjts = '';
}

class RechargeRecordResponse {
  /** 充值后剩余点数 */
  afterPoints = undefined;

  /** 充值前剩余点数 */
  beforePoints = undefined;

  /** 充值时间 */
  createdTime = '';

  /** 操作人用户名 */
  creatorName = '';

  /** 操作人账号 */
  creatorPhone = '';

  /** id */
  id = undefined;

  /** 充值点数 */
  points = undefined;

  /** 充值流水号 */
  serialNumber = '';
}

class RoleDetailResponse {
  /** 资源权限Id */
  adminPermissions = [];

  /** id */
  id = undefined;

  /** 角色名称 */
  name = '';

  /** 描述 */
  remark = '';
}

class RoleInfoResponse {
  /** id */
  id = undefined;

  /** 角色名称 */
  name = '';
}

class RolePageResponse {
  /** id */
  id = undefined;

  /** 更新时间 */
  lastModifiedTs = '';

  /** 角色名称 */
  name = '';

  /** 角色状态 */
  status = 'ENABLE';
}

class RoleRequest {
  /** 角色名称 */
  name = '';

  /** 角色描述 */
  remark = '';

  /** 资源id */
  resourceIds = [];
}

class SaicNegtiveAnalysisVo {
  /** 工商经营异常 */
  abnormalOperationCnt = '';

  /** 行政处罚 */
  punishCnt = '';

  /** 严重违法 */
  seriousDishonestyCnt = '';

  /** 股权冻结 */
  stockFreezeCnt = '';

  /** 年度 <-【工商负面统计】 */
  year = '';
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
  data = new AdminAdviceRecordResponse();

  /** message */
  message = '';

  /** traceId */
  traceId = '';
}

class SeriousDishonestyInfoVo {
  /** 列入名录原因 <-【严重失信违法】 */
  listedCause = '';

  /** 列入日期 */
  listedDate = '';

  /** 移除名录原因 */
  removeCause = '';

  /** 移除日期 */
  removeDate = '';
}

class ShareholderInfoVo {
  /** 投资比例 */
  capitalRatio = '';

  /** 认缴出资币种 */
  currency = '';

  /** 投资金额币种 */
  regCapCur = '';

  /** 股东 */
  shareholderName = '';

  /** 投资金额 */
  subConAm = '';
}

class TaxBannerInfoVo {
  /** 当前欠税 */
  dqqs = '';

  /** 评价年度 */
  ratingYear = '';

  /** 纳税人信用级别 */
  taxCreditRating = '';

  /** 纳税人状态 */
  taxpayerStatus = '';

  /** 纳税人类型 <-【税务banner信息】 */
  taxpayerType = '';
}

class TaxInfoAVo {
  /** 企业所得税应纳税额 */
  corpIncomeTaxAmt = '';

  /** 企业所得税实缴金额 */
  corpIncomeTaxPaidAmt = '';

  /** 滞纳金 */
  overdueFineAmt = '';

  /** 逾期月份数 */
  overdueMonths = '';

  /** 实缴金额 */
  paidAmt = '';

  /** 应纳税额 */
  taxPayableAmt = '';

  /** 纳税类型 <-【发票信息A】3m/6m/12m/24m */
  type = '';

  /** 增值税应纳税额 */
  valueAddedTaxAmt = '';

  /** 增值税实缴金额 */
  valueAddedTaxPaidAmt = '';

  /** 增值税应纳税额环比 */
  ynseHb = '';

  /** 增值税应纳税额同比 */
  ynseTb = '';

  /** 0申报月份数 */
  zeroTaxDeclarationMonths = '';
}

class TaxInfoBVo {
  /** 企业所得税年度实缴金额 */
  corpIncomeTaxPaidAmt = '';

  /** 违法违章（次） */
  illegalCnt = '';

  /** 年度实缴金额 */
  paidAmt = '';

  /** 年度实缴金额同比增速 */
  paidAmtYoYGrowth = '';

  /** 增值税年度实缴金额 */
  valueAddedTaxPaidAmt = '';

  /** 年度 <-【发票信息B】2019/2018 */
  year = '';
}

class UserBaseRequest {
  /** 密码(MD5) */
  password = '';

  /** 手机号 */
  phone = '';
}

class UserInfoRequest {
  /** 所在市 */
  city = '';

  /** 是否有进件权限 */
  income = false;

  /** 是否内部人员 */
  insiders = false;

  /** 所属机构 */
  orgName = '';

  /** 所在省 */
  province = '';
}

class UserInfoResponse {
  /** 是否展示银行版 */
  bankVersion = false;

  /** 城市 */
  city = '';

  /** id */
  id = undefined;

  /** 是否有进件权限 */
  income = false;

  /** 是否内部人员 */
  insiders = false;

  /** 姓名 */
  name = '';

  /** 所属机构 */
  orgName = '';

  /** 手机号 */
  phone = '';

  /** 省 */
  province = '';

  /** 账户余额 */
  remainPoints = undefined;

  /** 用户类型 */
  type = '';
}

class UserPageInfoResponse {
  /** 所在市 */
  city = '';

  /** 消费点数 */
  consumerPoints = undefined;

  /** id */
  id = undefined;

  /** 是否有进件权限 */
  income = false;

  /** 是否内部人员 */
  insiders = false;

  /** 姓名 */
  name = '';

  /** 所属机构 */
  orgName = '';

  /** 手机号 */
  phone = '';

  /** 所在省 */
  province = '';

  /** 最近登录时间 */
  recentLoginTs = '';

  /** 注册时间 */
  regTime = '';

  /** 剩余点数 */
  remainPoints = undefined;

  /** 用户来源 */
  source = 'YRT';

  /** 状态 */
  status = 'ENABLE';

  /** 用户类型 */
  type = '';
}

class UserPermissionRequest {
  /** 数据权限Id */
  dataIds = [];

  /** 资源权限Id */
  resourceIds = [];
}

class UserPermissionResponse {
  /** 数据权限Id */
  dataIds = [];

  /** 资源权限Id */
  resourceIds = [];
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

  /** 产品状态 */
  status = 'UPPER_SHELF';

  /** 模型指标 */
  targetModel = [];

  /** 产品类别 */
  type = '';
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

class YssrVo {
  /** 近12个月 */
  m12 = '';

  /** 近4个月 */
  m24 = '';

  /** 近3个月 */
  m3 = '';

  /** 近6个月 */
  m6 = '';

  /** 指标 */
  zb = '';
}

class ZbMonthInfo {
  /** 近1个月 */
  m1 = '';

  /** 近12个月 */
  m12 = '';

  /** 近3个月 */
  m3 = '';

  /** 近6个月 */
  m6 = '';

  /** 指标 */
  zb = '';
}

class ZhEvaluationVo {
  /** 描述 */
  description = '';

  /** 维度 */
  module = '';

  /** 分值 */
  score = '';
}

export const adminApi = {
  AbnormalOperationInfoVo,
  AddUserToOrgChannelRequest,
  AdminAddRequest,
  AdminAdvicePageResponse,
  AdminAdviceRecordResponse,
  AdminDetailResponse,
  AdminInfoResponse,
  AdminPageResponse,
  AdminRechargeRecordResponse,
  AdminResourceTreeResponse,
  AdminUpdateRequest,
  AdminUserProductPageResponse,
  AlterInfoVo,
  AlterStatusVo,
  ApplyAuditRequest,
  ApplyPageResponse,
  BankTaxInteractionVo,
  BasicInfoVo,
  ChannelTransferRequest,
  ChannelUserPageResponse,
  CommonProductDetailResponse,
  CommonTargetLibraryInfo,
  CommonTargetLibraryResponse,
  CompanyBaseInfoExt,
  CompanyCollectDetailResponse,
  CompanyCollectPageResponse,
  CourtDishonestyInfoVo,
  CourtExecuteInfoVo,
  CourtNegtiveAnalysisVo,
  CreditAdviceCompanyReportResponse,
  DataPermissionVo,
  DelayInfoVo,
  EquityFreezeInfoVo,
  GlqyInfoVo,
  InvestVo,
  InvoiceAmtLast24mVo,
  InvoicingAnalysisVo,
  InvoicingZjkpVo,
  JgAnalysisVo,
  JyjjDayVo,
  LogResponse,
  ManagerInfoVo,
  NegtiveInfoVo,
  NoDataFlagVo,
  OrgChannelListResponse,
  OrgChannelSaveRequest,
  PdfUrlRequest,
  PermissionResponse,
  ProductAddRequest,
  ProductPageResponse,
  ProjectBaseInfo,
  ProjectProcedureInfo,
  PunishInfoVo,
  QyInfoVo,
  QyzInfoVo,
  QyzbasicInfo,
  QyzdebtInfoVo,
  QyzspendInfoVo,
  QyztradeInfoVo,
  RechargeRecordResponse,
  RoleDetailResponse,
  RoleInfoResponse,
  RolePageResponse,
  RoleRequest,
  SaicNegtiveAnalysisVo,
  ScListData,
  ScPage,
  ScPageData,
  ScPageResponse,
  ScResponse,
  SeriousDishonestyInfoVo,
  ShareholderInfoVo,
  TaxBannerInfoVo,
  TaxInfoAVo,
  TaxInfoBVo,
  UserBaseRequest,
  UserInfoRequest,
  UserInfoResponse,
  UserPageInfoResponse,
  UserPermissionRequest,
  UserPermissionResponse,
  UserProductDetailResponse,
  UserProductRequest,
  UserTargetInfo,
  UserTargetRequest,
  YssrVo,
  ZbMonthInfo,
  ZhEvaluationVo,
};

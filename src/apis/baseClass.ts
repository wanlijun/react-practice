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

class ChannelTransferRequest {
  /** 渠道Id */
  channelId = undefined;

  /** ids */
  ids = [];
}

class ChannelUserPageResponse {
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

class DataPermissionVo {
  /** id */
  id = undefined;

  /** 数据权限名称 */
  name = '';

  /** 数据权限类型：CURRENT_ACCOUNT:本账号,CURRENT_DEPT:本部门，SUB_DEPT:子部门，ALL_SUB_DEPT:所有子部门 */
  type = 'CURRENT_ACCOUNT';
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

export const adminApi = {
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
  ApplyAuditRequest,
  ApplyPageResponse,
  ChannelTransferRequest,
  ChannelUserPageResponse,
  CommonProductDetailResponse,
  CommonTargetLibraryInfo,
  CommonTargetLibraryResponse,
  DataPermissionVo,
  LogResponse,
  OrgChannelListResponse,
  OrgChannelSaveRequest,
  PermissionResponse,
  ProductAddRequest,
  ProductPageResponse,
  RechargeRecordResponse,
  RoleDetailResponse,
  RolePageResponse,
  RoleRequest,
  ScListData,
  ScPage,
  ScPageData,
  ScPageResponse,
  ScResponse,
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
};

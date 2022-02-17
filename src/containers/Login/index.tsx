function login() {
  const getCode = () => {
    API.commonApi.common.getCode
      .request({phone: '17338383817', smsCodeType: 'LOGIN'})
  }
  const login = () => {
    API.userApi.user.loginByCode
      .request({}, {phone: '17338383817', code: '111111'})
  }
  return (
    <div className="App">
      <button onClick={getCode}>获取验证码</button>
      <button onClick={login}>登录</button>
    </div>
  )
}
export default login;
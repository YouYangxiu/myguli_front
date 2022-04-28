import request from '@/utils/request'

export default {
  //根据手机号发送验证码
  sendCodeByMobile(phone) {
    return request({
      url: `/edumsm/msm/sendMessage/${phone}`,
      method: 'get'
    })
  },

  //注册
  registerMember(registerVo) {
    return request({
      url: '/educenter/member/register',
      method: 'post',
      data: registerVo
    })
  }
}

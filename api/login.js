import request from '@/utils/request'

export default {
  login(member) {
    return request({
      url: '/educenter/member/login',
      method: 'post',
      data: member
    })
  },
  //根据token获取用户信息
  getMemberInfo(){
    return request({
      url:'/educenter/member/getMemberInfo',
      method: 'get'
    })
  }
}

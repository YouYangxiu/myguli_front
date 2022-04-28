import request from '@/utils/request'

export default {
  getHotIndex() {
    return request({
      url: 'eduservice/indexcontroller/getHotIndex',
      method: 'get'
    })
  }
}

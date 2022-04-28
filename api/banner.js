import request from '@/utils/request'

export default {
  getHotBanners() {
    return request({
      url: '/educms/bannerfront/getHotBanners',
      method: "get"
    })
  }
}

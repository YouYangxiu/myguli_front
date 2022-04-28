import request from "@/utils/request";

export default {
  crateOrder(courseId) {
    return request({
      url: `/eduorder/order/createOrder/${courseId}`,
      method: 'post'
    })
  },
  getOrdersInfo(orderNo) {
    return request({
      url: `/eduorder/order/getOrderInfo/${orderNo}`,
      method: 'get'
    })
  },
  //生成二维码
  createNative(orderNo) {
    return request({
      url: `/eduorder/paylog/createNative/${orderNo}`,
      method: 'get',
    })
  },
  //查询订单支付状态
  queryStatus(orderNo) {
    return request({
      url: `/eduorder/paylog/queryPayStatus/${orderNo}`,
      method: 'get',
    })
  },


}

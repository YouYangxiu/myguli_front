<template>
  <div class="cart py-container">
    <!--主内容-->
    <div class="checkout py-container pay">
      <div class="checkout-tit">
        <h4 class="fl tit-txt">
          <span class="success-icon"></span><span class="success-info">订单提交成功，请您及时付款！订单号：{{
            payObj.out_trade_no
          }}</span>
        </h4>
        <span class="fr"
        ><em class="sui-lead">应付金额：</em
        ><em class="orange money">￥{{ payObj.total_fee }}</em></span
        >
        <div class="clearfix"></div>
      </div>
      <div class="checkout-steps">
        <div class="fl weixin">微信支付</div>
        <div class="fl sao">
          <p class="red">请使用微信扫一扫。</p>
          <div class="fl code">
            <!-- <img id="qrious" src="~/assets/img/erweima.png" alt=""> -->
            <!-- <qriously value="weixin://wxpay/bizpayurl?pr=R7tnDpZ":size="338"/> -->
            <!--code_url为二维码地址，这里需要通过一个vue的组件【qriously】显示-->
            <!--执行npm install vue-qriously下载组件-->
            <qriously :value="payObj.code_url" :size="338"/>
            <div class="saosao">
              <p>请使用微信扫一扫</p>
              <p>扫描二维码支付</p>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
        <!-- <p><a href="pay.html" target="_blank">> 其他支付方式</a></p> -->
      </div>
    </div>
  </div>
</template>
<script>
import orderMethod from "@/api/order";

export default {
  created() {
    this.createCode();
  },
  data() {
    return {
      timer: '',
      payObj: ''
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.queryOrderStatus(this.$route.params.pid)
    }, 3000)
  },
  methods: {
    //生成订单
    createCode() {
      orderMethod.createNative(this.$route.params.pid).then(response => {
        console.log(response);
        this.payObj = response.data.data.info;
      });
    },
    queryOrderStatus(orderNo) {
      orderMethod.queryStatus(orderNo).then(response => {
        if (response.data.code === 20000) {
          this.$message.success("支付成功！")
          clearInterval(this.timer);
          this.$router.push({path: '/course/' + this.payObj.course_id})
        }
      })
    }
  }
}
</script>

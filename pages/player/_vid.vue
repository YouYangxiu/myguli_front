<template>
  <div>
    <!-- 阿里云视频播放器样式 -->
    <link rel="stylesheet"
          href="https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css">
    <!-- 阿里云视频播放器脚本 -->
    <script charset="utf-8" type="text/javascript"
            src="https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js"/>
    <!-- 定义播放器dom -->
    <div id="J_prismPlayer" class="prism-player"/>
  </div>
</template>

<script>
import vodMethod from "@/api/vod";

export default {
  name: "_vid",
  layout: 'video',
  asyncData({params, error}) {
    return vodMethod.getPlayAuth(params.vid).then(response => {
      return {
        playAuth: response.data.data.playAuth,
        vid: params.vid
      }
    })
  },
  mounted() {
    new Aliplayer({
      id: 'J_prismPlayer',
      vid: this.vid,
      playauth: this.playAuth,
      encryptType: '1',
      width: '100%',
      height: '500px',
    }, function (player) {
      console.log("播放器创建成功！");
    })
  }
}
</script>

<style scoped>

</style>

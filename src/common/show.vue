<template>
  <div>
    <p>直播</p>
    <div id="id_test_video" style="width:100%; height:auto;"></div>
  </div>
</template>
<style >
  
</style>
<script>
export default {
  data(){return{

  }},
  mounted() {
    var player =  new TcPlayer('id_test_video', {
    "m3u8": "http://live2.zhouhaotian.club/live/zhengchao.m3u8",
    // "flv": "http://live2.zhouhaotian.club/live/zhengchao_sd.flv", //增加了一个flv的播放地址，用于PC平台的播放 请替换成实际可用的播放地址
    "autoplay" : true,      //iOS下safari浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
    "poster" : "https://www.baidu.com/img/bd_logo1.png?where=super",
    "width" :  '480',//视频的显示宽度，请尽量使用视频分辨率宽度
    "height" : '320'//视频的显示高度，请尽量使用视频分辨率高度
    });
  },  
}
</script>
<template>
  <view>
    <audio style="text-align: left" :src="current.src" :poster="current.poster" :name="current.name" :author="current.author" :action="audioAction" controls></audio>
  </view>
</template>

<script>
export default {
  data() {
    return {
      current: {
        poster: '',
        name: '',
        author: '',
        src: '',
      },
      audioAction: {
        method: 'pause',
      },
    };
  },
  onLoad(options) {
    const data = JSON.parse(options.data);
    if (data && typeof data === 'object') {
      this.current = { ...data };
    } else {
      // 使用默认数据
      this.current = {
        poster: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/music-a.png',
        name: '致爱丽丝',
        author: '暂无',
        src: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3',
      };
    }
  },
};
</script>

<style>
</style>

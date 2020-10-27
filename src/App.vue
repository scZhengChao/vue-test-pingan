<template>
  <div id="app">
    <a-locale-provider :locale="locale">
      <router-view/>
    </a-locale-provider>
  </div>
</template>

<style>
    body,html{
        width: 100%;
        height: 100%;
    }
#app{
    width: 100%;
    height: 100%;
}
</style>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
export default {
   data() {
    return {
      locale: zhCN,
    }
  }
}
</script>


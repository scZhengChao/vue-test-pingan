<template>
  <div>
     <h1>Web Workers</h1>
      <input type="button" @click="someEvent" value="worker">
      <input type="button" @click="someEvent2" value="worker2"><br/>
      {{like}}
      <input type="button" @click="changeMixin" value="mixin数据是否是响应式">
  </div>
</template>
<script>
// 方法三 推荐  见api中的worker.js
import mixin from '../mixin'
export default {
  name:'worker',
  data(){return {
    name:'abc'
  }},
  mounted(){
    this.worker.onmessage = function(res){
        console.log("累加结果 : ",res.data)
    }
  },
  mixins:[mixin],
  created(){
    this.do()
  },
  methods:{
    someEvent(){
      this.worker.postMessage({type:1,data:1000000000})
    },
    someEvent2(){
      this.worker.postMessage({type:2,data:20})
    },
    changeMixin(){
      this.like = 'afasfa'
    }
  }
}
</script>
<style>
  
</style>
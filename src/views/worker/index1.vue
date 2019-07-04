<template>
  <div>
     <h1>Web Workers</h1>
      <input type="button" @click="someEvent" value="worker">
      <input type="button" @click="someEvent2" value="worker2">
  </div>
</template>
<script>
// 方法二
import WebWorker from '@/utils/worker.js'
export default {
  name:'worker',
  mounted(){
      let work = function(){
            self.onmessage = function(e){
              let type = e.data.type
              if(type == '1'){
                  let sum = 0,num = e.data.data;
                  for(var i=1;i<=num;i++){
                      sum += i
                  }
                  postMessage(sum);
              }else if(type == '2'){
                postMessage(e.data.data)
              }
                
            }
        }
        this.worker = new WebWorker(work)
        this.worker.onmessage = function(res){
            console.log("累加结果 : ",res.data)
        }
  },
  methods:{
    someEvent(){
      this.worker.postMessage({type:1,data:1000000000})
    },
    someEvent2(){
      this.worker.postMessage({type:2,data:20})
    }
  }
}
</script>
<style>
  
</style>
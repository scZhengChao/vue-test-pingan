<template>
    <scroll class="wrapper"
            :data="data"
            :pulldown="pulldown"
            @pulldown="loadData">
      <ul class="content">
        <li v-for="item in data">{{item}}</li>
      </ul>
      <div class="loading-wrapper"></div>
    </scroll>
  </template>
<style>
.wrapper{
    width: 400px;
    height: 200px!important;
    border: 1px solid black;
}
</style>
<script>
    import scroll from './scroll'
    export default {
      data() {
        return {
          data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
          pulldown: true,
          i:0,
        }
      },
      components:{
        scroll
      },
      created() {
        this.loadData()
      },
      methods: {
        loadData() {
            this.data = this.reqData().concat(this.data)
        },
        reqData(){
            let arr = []
            var i = 0
            while(i < 5){
                i++
                arr.push(this.i++)
            }
            return arr
        },
      }
    }
  </script>
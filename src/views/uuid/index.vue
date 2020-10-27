<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhengChao
 * @Date: 2019-09-19 11:30:04
 * @LastEditors: zhengChao
 * @LastEditTime: 2019-09-19 13:37:10
 -->
<template>
  <div>
    <p>{{uuid1}}</p>
    <p>{{uuid2}}</p>
    <p>{{uuid3}}</p>
  </div>
</template>
<style>
</style>
<script>
  import uuid from 'uuid';
/**
 * @name: 
 * @test: test font
 * @msg: 1、uuid.v1(); -->基于时间戳生成  （time-based）2、uuid.v4(); -->随机生成  (random)
 * @param {type} 
 * @return: 
 */

export default {
  name:'uuid',
  data(){return{
    uuid1:'s',
    uuid2:'s',
    uuid3:'s'
  }},
  methods:{

  },
  created(){
    this.uuid1 =  uuid.v1()
    this.uuid2 = uuid.v4()
  },
  
}
</script>
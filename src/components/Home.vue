<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhengChao
 * @Date: 2019-08-04 15:49:34
 * @LastEditors: zhengChao
 * @LastEditTime: 2019-09-19 11:32:21
 -->
<template>
    <div class="box">
        <p>自定义组件</p>
        <component is="tiptap" class="comp"></component>
    </div>
</template>
<style scoped>
@import '../style/index.scss';
.box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.comp{
    flex: 1;
    overflow: hidden;
    /* overflow-y: auto; */
}

</style>
<script >
import Vue from 'vue'
import * as types from '../store/types';
import {mapActions,mapGetters} from 'vuex';
import Cookies from 'js-cookie';
export default {
  data(){return{
    obj:{
      name:'aha',
      age:19
    }
  }},
  created(){
    Cookies.set('name', 'value', { expires: new Date(Date.now()+1000*10) })  //过期时间 7天
    clearTimeout(null)
  },
  methods:{
    routerpush(){
        this.$router.push('/test')
    },
    routerreplace(){
        this.$router.replace('/test')
    }
  },
  mounted(){
  
  }
}
</script>



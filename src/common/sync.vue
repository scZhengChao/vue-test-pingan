<template>
  <div>
    <p>{{str}}</p>
    
    <input type="text" v-model="str">
    <input type="text" v-model="msg">
    {{like}}
  </div>
</template>
<style>

</style>
<script>
import {mapGetters} from 'vuex';
import * as types from '@/store/types';
import mixin from '@/views/mixin'
export default {
  name:'abc',
  props:['title'],
  data(){return{
    str:this.title
  }},
  created(){
    // console.log($) 
  },
  mixins:[mixin],
  mounted(){
    this.$parent.par('hahah')
    console.log(this.$root)
  },
  computed:{
    msg:{
      get(){
        return this.$store.state.moda.name
      },
      set(value){
        // console.log(value)
        this.$store.commit(types.update,value)
      }
    }
  },
 
  watch:{
    str:{
      handler:function(newValue,oldValue){
        this.$emit('update:title',newValue)
      }
    }
  }
}
</script>

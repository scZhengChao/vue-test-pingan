<template>
    <div>
      <p>{{$attrs}}</p>{{theme}}<br/>
      <input type="button" value="attr子改父" @click="change">
    </div>
</template>
<style lang="">
  
</style>
<script>
export default {
  data(){return{
    name:'push'
  }},
  inject:['theme'],
  methods:{
    change(){
      // this.$attrs.data = 'hahahah'
      // console.log(this.$listeners.c())
      console.log(this.theme.color = 'red')
    }
  }
}
</script>
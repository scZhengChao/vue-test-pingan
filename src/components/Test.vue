<template>
    <div class="box">
       test
       <a href="#too"> click for hash</a>
       <el-button type="primary" @click='locationherf'>click for location.herf</el-button>
       <el-button type="primary" @click='locationreplace'>click for location replace</el-button>
       <el-button type="primary" @click='historyback'>click for history back</el-button>
       <el-button type="primary" @click='historyforward'>click fot history forward</el-button>
       <el-button type="primary" @click='historygo'>click for history go</el-button>
    </div>
</template>
<style scoped>


</style>
<script >
export default {
  data(){return{
 
  }},
  methods:{
    locationherf(){
        location.href='http://localhost:8080/#/'
    },
    locationreplace(){
        location.replace(
            'http://localhost:8080/#/'
        )
    },
    historyback(){
        history.back()
    },
    historyforward(){
        history.forward()
    },
    historygo(){
        history.go(-1)
    }
  },
  mounted(){
  
  }
}
</script>



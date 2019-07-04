<template>
  <div class="selectDown" ref='selectDown' >
    <div class="select" @click="handler" >
        <div class="icon">
          <i class="fa fa-angle-down " aria-hidden="true" ref="icon" ></i>
        </div>
        <div class="content">{{defaultValue}}</div>
    </div>
    <el-collapse-transition> 
          <div class="test" v-show='show'>
            <div class="moveMenu">
              <div class="arrows"></div>
              <ul class="menu">
                <li v-for='(item,index) of list' :key='index' @click="select(item)" :class="item.value==defaultValue?'is_active':''">{{item.value}}</li>
              </ul>
            </div>
          </div>
    </el-collapse-transition>
  </div>
</template>
<script>
import {removeClass,addClass} from '@/assets/public.js';
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

export default {
  name:'seletMenu',
  components:{
    [CollapseTransition.name]:CollapseTransition
  },
  props:{
    data:{
      type:Array,
      require:true
    }
  },
  computed:{
    list(){
        return this.data
    }
  },
  data(){return{
    show:false,
    defaultValue:'全部',
  }},
  methods:{
    handler(){
        this.show = !this.show
        let node =  document.querySelector('.fa')
        node.className.indexOf('fa-rotate-180s')>0?removeClass(node,'fa-rotate-180s'):addClass(node,'fa-rotate-180s')
    },
    select(data){
      this.show = false;
      this.defaultValue = data.value
      this.$emit('select',data)
    }
  },
  mounted(){
    var that = this
    document.addEventListener('click',function(eve){
      if(!that.show) return 
      let target = eve.target
      if(that.$refs.selectDown.contains(target)) return
        that.handler()
    })
  } 
}
</script>

<style scoped> 
.selectDown{
  width: 95px;
  margin:40px auto;
}
.test{
  float: left;
  width: 100%;
}
.select{
  width: 95px;
  height: 24px;
  background:gray;
  border-radius: 12px;
  cursor: pointer;
}
.icon{
  margin-right: 1em;
  float: right;
  overflow: hidden;
  height: 24px;
  line-height: 24px;
}
.content{
  margin-left: 15px;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
}
.fa-angle-down{
  transition: all .3s;
}
.fa-rotate-180s {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  transform: rotate(-180deg);
}
.moveMenu{
  margin-top: 20px;
  width: 100%;
}
.menu{
  list-style: none;
  background: #399;
  padding-top: 10px;
  padding: 0;
  margin: 0;
  width:100%;
}
.arrows{
  width:0;
  height: 0;
  border-left: 14px solid transparent;
  border-top: 6px solid transparent;
  border-right: 14px solid transparent;
  border-bottom: 6px solid #399;
  margin-left: 50%;
  transform: translate3d(-50%,0,0)
}
.menu li{
  height: 24px;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  padding: 5px 0;
}
.menu li.is_active{
  color: #409EFF;
}
</style>
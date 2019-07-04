<template>
  <div>
    <common :canEdit='true' v-model='str' @input='change' class="input" @mouseup.native="select"></common>  
  </div>
</template>
<style scoped>
  .input{
    width: 300px;
    height: 300px;
    border:1px solid black;
  }
  .input a{
    text-decoration: underline;
    color:#399;
    -moz-user-select:none;/*火狐*/
    -webkit-user-select:none;/*webkit浏览器*/
    -ms-user-select:none;/*IE10*/
    -khtml-user-select:none;/*早期浏览器*/
    user-select:none;
  }
</style>
<script>
import {common } from './components';
export default {
  name:'selectContenteditable',
  data(){return {
    str:''
  }},
  components:{common},
  mounted(){
   
  },
  methods:{
    change(data){
      this.str = data
    },
    select(ev){
      if(ev.target.nodeName =='A') return 
      
      var getSelectedText = function() {
        if (window.getSelection) {
          return window.getSelection();
        } else if (document.getSelection) {
          return document.getSelection();
        }else{
          return "";
        }
      }
      let text = getSelectedText().toString()
        if(text.length>0){
          let rangobject = getSelectedText().getRangeAt(0)
          rangobject.deleteContents();
          let box = document.createElement('a')
          box.setAttribute('href','https://www.baidu.com/')
          box.setAttribute('contenteditable',false)
          box.setAttribute('target','_black')
          box.innerHTML = text
          rangobject.insertNode(box)
        }
    }
    
  }
  
}
</script>

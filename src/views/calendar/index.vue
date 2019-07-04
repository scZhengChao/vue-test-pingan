<template>
  <div>
   <marquee behavior="alternate" direction="left" class="mar" scrollamount='10s'>欢迎来到八斗</marquee>
   <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
      <a-calendar :fullscreen="false" :disabledDate='ondisabledDate' @select = 'select' @panelChange='panelChange'>
          <ul class="events" slot="dateCellRender" slot-scope="value">
              <li v-for="item in getListData(value)" :key="item.content" class="badgeBOX">
                  <a-badge :count="item.content" :numberStyle='styl' :overflowCount="99" ></a-badge>
              </li>
          </ul>
      </a-calendar>
  </div>
</div>
</template>
<style scoped>
.mar{
    width: 500px;
    height: 20px;
    background: #399;
}
.ant-fullcalendar-cell{
    position: relative;
  
}
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.ant-fullcalendar td{
    position: relative;
    padding-top: 10px;
}
.ant-fullcalendar-content{
    position: absolute;
    top: 0;left: 10px;
    
}
</style>
<script>
export default {
   data(){
        return{
            value1:'',
            styl:{opacity:'0.5'}
        }
    },
    methods:{
        clickDay(data) {
            console.log(data); //选中某天
            console.log( data.split("/")[2] )
        },
        changeDate(data) {
            console.log(data); //选中某天
            console.log( data.split("/")[1] )
        },
        clickToday(data) {
            // console.log(data); //跳到了本月
        },
        clickToday(data) {
            // console.log(data); //调到本月今天
        },
        getListData(value) {
          var month = value.month()+1
          var day = value.date()
          var nowmonth = (new Date()).getMonth() + 1
          var nowday = (new Date()).getDate()
          let arr = [{date:1,num:'5'},{date:8,num:'20'},{date:18,num:'10'}]
          let listData;
          if(month == nowmonth && day <= nowday ){
              arr.forEach((item,index)=>{
                  if(item.date == value.date()){
                      listData = [{content:item.num}]
                      return 
                  }
              })
          }
          return listData || [];
        },
        ondisabledDate(currentDate){
            if(currentDate._d.getTime() <= (new Date()).getTime()){
                return false
            }else{
                return true
            }
            
        },
        select(date){
            console.log(date)
        },
        panelChange(date,mode){
            console.log(date,mode)
        }
    },
    mounted(){
        // this.date = parseInt( (new Date()).getTime()/1000)
          var arr = [0,0,0,0,0,0,0,0,0,,0,0,0,1,2,3,4,5,6,6]
        this.$nextTick(function(){
            var box = document.getElementsByClassName('wh_content_item')
            Array.prototype.slice.call(box).forEach(function(item,index){
                if(item.children[0].getAttribute('class').indexOf('wh_other_dayhide') == -1 && item.children[0].getAttribute('class').indexOf('wh_top_tag') == -1 && arr[index] && arr[index] != 0){
                        
                            var mark = document.createElement('div.abc')
                            mark.style.cssText="width:2em;height:2em;border-radius:50%;background:red;text-align:center;line-height:2em;color:white;z-index:99999999;position:absolute;right:0;top:0;font-size:.5em";
                            mark.innerHTML = arr[index]
                            item.appendChild(mark)
                  
                }
            }) 
        })
        // console.log(this.$refs.abc.$el)
        // box.appendChild(mark)
     
    }
}
</script>

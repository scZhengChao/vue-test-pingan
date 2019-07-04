<template>
    <div class="chatroom">
        <ul class="chat_box">
            <li v-for='(item,index) of list' :key='index'>
                <div>
                    <!-- 客户 -->
                    <div class="customer" v-if='item.type == 1'>
                        <div class="customer_photo clearfix">
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551807099207&di=16b39a5cf8a6da76bee8dba39a0d4111&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa8773912b31bb0516a13ec1d387adab44aede0d4.jpg" alt="" style='width:40px;height:40px;background:#ccc;' >
                        </div>
                        <div  class="customer_messagebox">
                            <div class="sanjiao"></div>
                            <div class="customer_message" >{{item.question}}</div>
                        </div>
                    </div>
                    <!-- 客服 -->
                    <!-- <div class="service" v-if='item.type == 2'>
                        <div class="service_photo">
                            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1984942354,925187071&fm=26&gp=0.jpg" alt="" style='width:40px;height:40px;background:#ccc;'>
                        </div>
                        <div class="service_message">
                            <p>{{item.answer}}</p>
                        </div>
                     </div> -->
                </div>
            </li>
        </ul>
        
         
    </div>
</template>
<style scoped>
.clearfix:after {content:"."; display:block; height:0; visibility:hidden; clear:both;}
.chatroom{
    border: 1px solid #ccc;
    width: 100%;
    height: 500px;
}
.chat_box{
    list-style: none;
    margin: 0;padding: 0;
}
.customer{
    overflow: hidden;
    margin: 20px 0  20px 10px;
}
.customer .customer_photo {
    float: left;
    margin-right: 15px;
}
.customer_messagebox{
    position: relative;
    float: left;
}
.customer .customer_message{
    overflow: hidden;
    background: green;
    max-width: 300px;
    border-radius: 4px;
    padding: 10px;
}
/* .customer .customer_message:before{
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    border-right: 8px solid green;
    border-top:  10px solid transparent;
    border-bottom:  10px solid transparent;
    border-left: 8px solid transparent;
    left: -10px;
    top: 10px;
    z-index: 999;
} */
.customer .customer_messagebox .sanjiao{
    width: 0;
    height: 0;
    position: absolute;
    border-right: 8px solid green;
    border-top:  10px solid transparent;
    border-bottom:  10px solid transparent;
    border-left: 8px solid transparent;
    left: -15px;
    top: 10px;
    z-index: 999;
}
</style>
<script>
export default {
    data(){return{
        list:[{question:'千万人',type:'1'},{answer:'asf',type:'2'},{question:'千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人千万人',type:'1'},{answer:'asf',type:'2'},{question:'千万人',type:'1'},{answer:'asf',type:'2'},{question:'千万人',type:'1'},{answer:'asf',type:'2'}]
    }}
}
</script>

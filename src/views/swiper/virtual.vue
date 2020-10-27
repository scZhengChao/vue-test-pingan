<template>
    <div class="swiper-slide my-slide">
        <div class="CustomerIntention">
            <div class="CustomerIntention-title">客户意图：</div>
            <div class="CustomerIntention-data">{{CustomerIntention.msg}}</div>
            <div class="CustomerIntention-icon" >
                <i :class="{'el-icon-edit':true,'isActive':CustomerIntention.status=='1'}" @click="prasie(CustomerIntention)"></i>
                <i :class="{'el-icon-share':true,'isActive':CustomerIntention.status=='2'}" @click="criticism(CustomerIntention)"></i>
            </div>
        </div>
        <div class="ReplyDirection">
            <el-scrollbar style="height:100%;">
                <div v-for='(item,index) in ReplyDirection' class="ReplyDirection-item">
                    <div class="ReplyDirection-item-direction">
                        <div class="ReplyDirection-item-title">答复方向{{NumberToChinese(index+1)}}</div>
                        <div class="ReplyDirection-item-data">{{item.direction}}</div>
                        <div class="ReplyDirection-item-icon">
                            <i class="el-icon-edit"></i>
                            <i class="el-icon-share"></i>
                        </div>
                    </div>
                    <div class="ReplyDirection-item-DemonstrativeSpeech">
                        <span class="ReplyDirection-item-DemonstrativeSpeech-title">示范话术</span><span class="ReplyDirection-item-DemonstrativeSpeech-dec">{{item.DemonstrativeSpeech}}</span>
                    </div>
                </div>
            </el-scrollbar>
        </div>
        <div class="dialogue">
            <div class="dialogue-question">
                <dl class="dialogue-people">
                    <dt class="dialogue-photo"></dt>
                    <dd>坐席</dd>
                </dl>
                <span class="dialogue-Seat-speak">
                    <div>
                        {{dialogue.question}}
                    </div>
                </span>
            </div>
            <div class="dialogue-answer">
                <dl class="dialogue-people">
                    <dt class="dialogue-photo"></dt>
                    <dd>客户</dd>
                </dl>
                <span class="dialogue-customer-speak">
                    <div>
                        {{dialogue.answer}}
                    </div>
                </span>
            </div>
        </div>
        <div class="RelatedObjection">
            <div class="RelatedObjection-title">
                关联异议
            </div>
            <div class="RelatedObjection-contain">
                <el-scrollbar style="height:100%;">
                    <el-collapse v-model="activeNames" accordion>
                        <el-collapse-item  v-for='(item,index) in RelatedObjection' ::key="index" :name='index'>
                            <template slot="title">
                             {{index+1}}.  {{item.title}}
                            </template>
                            {{item.description}}
                        </el-collapse-item>
                    </el-collapse>
                </el-scrollbar>
            </div>
        </div>
    </div>
</template>
<style scoped>
.my-slide{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    z-index: 100;
    top: 0;
}
.CustomerIntention{
    background: #B8D9FC;
    height: 40px;
    display: flex;
    align-items:center;
    padding: 0 10px;
}
.CustomerIntention-data{
    flex: 1;
    font-weight: bolder;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.CustomerIntention-icon{
    width: 50px;
    color: white;
    display: flex;
    justify-content: space-around;
}
.ReplyDirection{
    flex: 1;
    background: #F2F5FC;
    overflow: hidden;
}
.ReplyDirection>>>.el-scrollbar{
    overflow-x: hidden;
}
.dialogue{
    height: 120px;
    border-radius: 4px;
    margin: 10px 0;
    box-shadow: 0px 0px 4px 2px #DCDCDC inset;
    box-sizing: border-box;
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
}
.ReplyDirection-item{
    padding: 0 10px;
    margin: 14px 0;
}
.ReplyDirection-item-direction{
    display: flex;
    align-items:center;
    height: 40px;
}
.ReplyDirection-item-title{
    background: #FEB531;
    padding: 5px 10px;
    border-radius: 15px;
    margin-right: 20px;
}
.ReplyDirection-item-data{
    font-weight: bold;
    flex: 1;
}
.ReplyDirection-item-icon{
    color:#A0A3A9;
    display: flex;
    justify-content: space-around;
    width: 50px;
}

.ReplyDirection-item-DemonstrativeSpeech-title{
    color: #6E7C7D;
    margin-right: 15px;
    font-size: 10px;
}
.ReplyDirection-item-DemonstrativeSpeech-dec{
    color: #073588;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
}
.dialogue-question,.dialogue-answer{
    flex: 1;
    position: relative;
}
.dialogue-people{
    width: 40px;
    text-align: center;
}
.dialogue-photo{
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: gray;
    display: inline-block;
}
.dialogue-answer .dialogue-people{
    position: absolute;
    right: 10px;
}
.dialogue-Seat-speak{
    height: 30px;
    min-width: 100px;
    max-width: 380px;
    line-height: 30px;
    display: inline-block;
    position: absolute;
    left: 60px;
    top: 2px;
    padding: 4px 10px;
    border-radius: 12px;
    background: #CFCFCF;
}
.dialogue-Seat-speak>div{
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.dialogue-Seat-speak::before{
    content:'';
    width:0;
    height: 0;
    border-left: 6px solid transparent;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid #CFCFCF;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -12px;
}
.dialogue-customer-speak{
    height: 30px;
    min-width: 100px;
    max-width: 380px;
    line-height: 30px;
    display: inline-block;
    position: absolute;
    padding: 4px 10px;
    border-radius: 12px;
    background: #CFCFCF;
    right: 60px;
}
.dialogue-customer-speak>div{
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.dialogue-customer-speak::after{
    content:'';
    width:0;
    height: 0;
    border-right: 6px solid transparent;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid #CFCFCF;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -10px;
}
.RelatedObjection{
    display: flex;
    height: 140px;
}
.RelatedObjection-title{
    width: 20px;
    height: 100%;
    font-weight: bolder;
    font-size: 14px;
    text-align: center;
    display: table;
    vertical-align: middle;
    box-sizing: border-box;
    padding-top:40px;
    margin-right: 10px;
}
.RelatedObjection-contain{
    flex: 1;
    box-shadow: 0px 0px 4px 2px #DCDCDC inset;
    border-radius: 6px;
    box-sizing: border-box;
    padding: 5px 5px 5px 15px;
}
.my-slide .isActive{
    color: red;
}
</style>
<script>
    export default {
        name:'slideVirtual',
        props:{
            CustomerIntention:{
                type:Object,
                default: function () {
                    return {  }
                }
            },//客户意图
            ReplyDirection:{
                type:Array,
                default: function () {
                    return  []
                }
            },//答复方向
            dialogue:{
                type:Object,
                default: function () {
                    return { }
                }
            },   //对话
            RelatedObjection:{
                type:Array,
                default: function () {
                    return []
                }
            },//关联异议
        },
        data(){return{
            activeNames:'0'
        }},
        created(){

        },
        methods:{
            NumberToChinese(num){  
                var chnNumChar = ["零","一","二","三","四","五","六","七","八","九"];
                var chnUnitSection = ["","万","亿","万亿","亿亿"];
                var chnUnitChar = ["","十","百","千"];
                function SectionToChinese(section){
                    var strIns = '', chnStr = '';
                    var unitPos = 0;
                    var zero = true;
                    while(section > 0){
                        var v = section % 10;
                        if(v === 0){
                            if(!zero){
                                zero = true;
                                chnStr = chnNumChar[v] + chnStr;
                            }
                        }else{
                            zero = false;
                            strIns = chnNumChar[v];
                            strIns += chnUnitChar[unitPos];
                            chnStr = strIns + chnStr;
                        }
                        unitPos++;
                        section = Math.floor(section / 10);
                    }
                    return chnStr;
                }
                var unitPos = 0;  
                var strIns = '', chnStr = '';  
                var needZero = false;  
                
                if(num === 0){  
                    return chnNumChar[0];  
                }  
                
                while(num > 0){  
                    var section = num % 10000;  
                    if(needZero){  
                    chnStr = chnNumChar[0] + chnStr;  
                    }  
                    strIns = SectionToChinese(section);  
                    strIns += (section !== 0) ? chnUnitSection[unitPos] : chnUnitSection[0];  
                    chnStr = strIns + chnStr;  
                    needZero = (section < 1000) && (section > 0);  
                    num = Math.floor(num / 10000);  
                    unitPos++;  
                }  
                
                return chnStr;  
		    },
            criticism(data){
                data.status = 2
            },
            prasie(data){
                data.status = 1
            }       
        },
        
    }
</script>
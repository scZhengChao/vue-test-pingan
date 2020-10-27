<template>
    <div class="contain">
        <div class="bg">
            易答助手
        </div>
        <i class="el-icon-arrow-up upArrow" @click='prevClick'></i>
        <i class="el-icon-arrow-down downArrow" @click='nextClick'></i>
        <div class="tabs">
            <div class="tabs-title">
                <span>流程建议</span>
            </div>
            <div class="tabs-contain">
                <div class="tabs-name">
                    <div v-for='(item,index) in tabsData'  :class="{ 'tabs-name-item': true,'isActive':index===tabsActiveIndex}" @click='choiseTab(index)'>
                        {{item.name}}
                    </div>
                </div>
                <div class="tabs-data">
                    <div class="CommunicationRequirements tabs-data-container"> 
                        <strong class="tabs-data-title">沟通要求</strong>
                        <div class="tabs-data-contain">
                            <el-scrollbar style="height:100%;">
                                <div v-for='(item,index) in tabsData[tabsActiveIndex].data.CommunicationRequirements' :key="index" class="tabs-Cr-data">
                                    {{index+1}}:{{item}}
                                </div>
                            </el-scrollbar> 
                        </div>
                         
                    </div>
                    <div class="CommonObjection tabs-data-container">
                        <strong class="tabs-data-title">常见异议</strong>
                        <div class="tabs-data-contain ">
                            <el-scrollbar style="height:100%">
                                <div v-for='(item,index) in tabsData[tabsActiveIndex].data.CommonObjection' :key="index" class="tabs-Cr-data">
                                    {{index+1}}:{{item}}
                                </div>
                            </el-scrollbar>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="mySwiper">
            <div class="mySwiper-title">
                <span>异议推荐</span>
            </div>
            <div class="mySwiper-contain">
               <swiper class="swiperComp swiper-no-swiping" ref="swiperComp" :options='swiperOptions'>
                
               </swiper>
            </div>
        </div>
       
    </div>
</template>
<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import slideComp from './virtual'
    import Vue from 'vue'
    export default {
        name:'mySwiper',
        data(){return{
            swiperOptions: {
                // some swiper options/callbacks
                // 所有的参数同 swiper 官方 api 参数
                // ...
                observer:true,
                direction:"vertical",
                observerSlideChildren:true,
                observerSlideParents:true,
                grabCursor:false,
                virtual:{
                    slides:[
                        {
                            CustomerIntention:{msg:'拒绝核对个人信息',status:0},
                            ReplyDirection:[
                                {
                                    direction:"抵北京。兆泰集团、厚朴投资",
                                    DemonstrativeSpeech:'新冠肺炎疫情发生以来，日本东京都政府多次向中国有关地方捐赠防疫物资，包括大量防护服和护目镜，为中国抗击疫情提供了宝贵支持',
                                    status:0
                                },
                                {
                                    direction:"抵北京。兆泰集团、厚朴投资",
                                    DemonstrativeSpeech:'新冠肺炎疫情发生以来，日本东京都政府多次向中国有关地方捐赠防疫物资，包括大量防护服和护目镜，为中国抗击疫情提供了宝贵支持',
                                    status:0
                                },
                                {
                                    direction:"抵北京。兆泰集团、厚朴投资",
                                    DemonstrativeSpeech:'新冠肺炎疫情发生以来，日本东京都政府多次向中国有关地方捐赠防疫物资，包括大量防护服和护目镜，为中国抗击疫情提供了宝贵支持',
                                    status:0
                                },
                                {
                                    direction:"抵北京。兆泰集团、厚朴投资",
                                    DemonstrativeSpeech:'新冠肺炎疫情发生以来，日本东京都政府多次向中国有关地方捐赠防疫物资，包括大量防护服和护目镜，为中国抗击疫情提供了宝贵支持',
                                    status:0
                                },
                            ],
                            dialogue:{
                                question:"近日，东京都政府再次决定向友城北京市捐赠20万套防护服",
                                answer:"这批物资将尽快分批运抵北京。兆泰集团、厚朴投资、国航日本分社、顺丰日本、普洛斯等企业为促成此次捐赠发挥了积极作用。"
                            },
                            RelatedObjection:[
                                {
                                    title:'新冠疫情暴发之后，国际舆论普遍表示对中国政府战胜疫情具有信心。',
                                    description:"然而，部分西方媒体也借疫情释放反华情绪和大搞种族歧视。一些报道带有明显的嘲讽或敌意，在国际社会引起了极大争议。"
                                },
                                {
                                    title:'新冠疫情暴发之后，国际舆论普遍表示对中国政府战胜疫情具有信心。',
                                    description:"然而，部分西方媒体也借疫情释放反华情绪和大搞种族歧视。一些报道带有明显的嘲讽或敌意，在国际社会引起了极大争议。"
                                },
                                {
                                    title:'新冠疫情暴发之后，国际舆论普遍表示对中国政府战胜疫情具有信心。',
                                    description:"然而，部分西方媒体也借疫情释放反华情绪和大搞种族歧视。一些报道带有明显的嘲讽或敌意，在国际社会引起了极大争议。"
                                },
                                {
                                    title:'新冠疫情暴发之后，国际舆论普遍表示对中国政府战胜疫情具有信心。',
                                    description:"然而，部分西方媒体也借疫情释放反华情绪和大搞种族歧视。一些报道带有明显的嘲讽或敌意，在国际社会引起了极大争议。"
                                }
                            ]
                        },
                    ],
                    renderSlide:function(slide,index){
                        const vm = new Vue({
                            render(h) {
                                return h(slideComp,{props:slide})
                            },
                        }).$mount()
                        const comp = vm.$children[0]
                        comp.swiper = this
                        return vm.$el
                    },
                }
            },
            timer:null,
            i:0,
            tabsActiveIndex:0,
            tabsActiveData:null,
            tabsData:[
                {
                    name:'开场白',
                    data:{
                        'CommunicationRequirements':[
                            '开场白',
                            '钻石公主号邮轮已经在横滨港附近的公海上漂泊了 14 天。',
                            '这些天里，这艘载着共 3700 名乘客船员的超豪华邮轮在海上漫无目的地乱转。',
                            '2月19日本该是 14 天隔离观察最后一天，大家重获自由的日子，然而船上不断涌现出新的病例让“隔离观察”的起始日期不断刷新，回归陆地的日子遥遥无期',
                            '钻石公主号漫无目的的漂泊轨迹，',
                            '钻石公主号漫无目的的漂泊轨迹，',
                            '钻石公主号漫无目的的漂泊轨迹，',
                            '钻石公主号漫无目的的漂泊轨迹，',
                            '钻石公主号漫无目的的漂泊轨迹，',
                            '钻石公主号漫无目的的漂泊轨迹，',

                        ],
                        'CommonObjection':[
                            '钻石公主号早前曾搭载一名香港男子，在完成行程于香港下船后，该男子被确诊感染新型冠状病毒。',
                            '邮轮在横滨泊岸后，日本当局要求所有乘客和船员留在船上进行隔离检疫。',
                            '随后，病毒的阴影开始在邮轮上弥漫，乘客和船员接二连三地病倒。'
                        ]
                    }
                },
                {
                    name:'产品介绍',
                    data:{
                        'CommunicationRequirements':[
                            '产品介绍',
                            '钻石公主号邮轮已经在横滨港附近的公海上漂泊了 14 天。',
                            '这些天里，这艘载着共 3700 名乘客船员的超豪华邮轮在海上漫无目的地乱转。',
                            '2月19日本该是 14 天隔离观察最后一天，大家重获自由的日子，然而船上不断涌现出新的病例让“隔离观察”的起始日期不断刷新，回归陆地的日子遥遥无期',
                            '钻石公主号漫无目的的漂泊轨迹，'

                        ],
                        'CommonObjection':[
                            '钻石公主号早前曾搭载一名香港男子，在完成行程于香港下船后，该男子被确诊感染新型冠状病毒。',
                            '邮轮在横滨泊岸后，日本当局要求所有乘客和船员留在船上进行隔离检疫。',
                            '随后，病毒的阴影开始在邮轮上弥漫，乘客和船员接二连三地病倒。'
                        ]
                    }
                },
                {
                    name:'需求分析',
                    data:{
                        'CommunicationRequirements':[
                            '需求分析',
                            '钻石公主号邮轮已经在横滨港附近的公海上漂泊了 14 天。',
                            '这些天里，这艘载着共 3700 名乘客船员的超豪华邮轮在海上漫无目的地乱转。',
                            '2月19日本该是 14 天隔离观察最后一天，大家重获自由的日子，然而船上不断涌现出新的病例让“隔离观察”的起始日期不断刷新，回归陆地的日子遥遥无期',
                            '钻石公主号漫无目的的漂泊轨迹，'

                        ],
                        'CommonObjection':[
                            '钻石公主号早前曾搭载一名香港男子，在完成行程于香港下船后，该男子被确诊感染新型冠状病毒。',
                            '邮轮在横滨泊岸后，日本当局要求所有乘客和船员留在船上进行隔离检疫。',
                            '随后，病毒的阴影开始在邮轮上弥漫，乘客和船员接二连三地病倒。'
                        ]
                    }
                },
                {
                    name:'核对资料',
                    data:{
                        'CommunicationRequirements':[
                            '核对资料',
                            '钻石公主号邮轮已经在横滨港附近的公海上漂泊了 14 天。',
                            '这些天里，这艘载着共 3700 名乘客船员的超豪华邮轮在海上漫无目的地乱转。',
                            '2月19日本该是 14 天隔离观察最后一天，大家重获自由的日子，然而船上不断涌现出新的病例让“隔离观察”的起始日期不断刷新，回归陆地的日子遥遥无期',
                            '钻石公主号漫无目的的漂泊轨迹，'

                        ],
                        'CommonObjection':[
                            '钻石公主号早前曾搭载一名香港男子，在完成行程于香港下船后，该男子被确诊感染新型冠状病毒。',
                            '邮轮在横滨泊岸后，日本当局要求所有乘客和船员留在船上进行隔离检疫。',
                            '随后，病毒的阴影开始在邮轮上弥漫，乘客和船员接二连三地病倒。'
                        ]
                    }
                },
                {
                    name:'支付',
                    data:{
                        'CommunicationRequirements':[
                            '支付',
                            '钻石公主号邮轮已经在横滨港附近的公海上漂泊了 14 天。',
                            '这些天里，这艘载着共 3700 名乘客船员的超豪华邮轮在海上漫无目的地乱转。',
                            '2月19日本该是 14 天隔离观察最后一天，大家重获自由的日子，然而船上不断涌现出新的病例让“隔离观察”的起始日期不断刷新，回归陆地的日子遥遥无期',
                            '钻石公主号漫无目的的漂泊轨迹，'

                        ],
                        'CommonObjection':[
                            '钻石公主号早前曾搭载一名香港男子，在完成行程于香港下船后，该男子被确诊感染新型冠状病毒。',
                            '邮轮在横滨泊岸后，日本当局要求所有乘客和船员留在船上进行隔离检疫。',
                            '随后，病毒的阴影开始在邮轮上弥漫，乘客和船员接二连三地病倒。'
                        ]
                    }
                }
            ]
        }},
        mounted(){
            this.timer = setInterval(()=>{
            //    this.addSlide()
            },1000)
        },
        computed: {
            swiper() {
                return this.$refs.swiperComp.swiper
            }
        },
        components:{
            swiper,swiperSlide
        },
        methods:{
            choiseTab(index) {
                this.tabsActiveIndex = index
            },
            addSlide(){
                let data =  {
                            CustomerIntention:{msg:'拒绝核对个人信息'+ this.i++,status:0},
                            ReplyDirection:[
                                {
                                    direction:"抵北京。兆泰集团、厚朴投资",
                                    DemonstrativeSpeech:'新冠肺炎疫情发生以来，日本东京都政府多次向中国有关地方捐赠防疫物资，包括大量防护服和护目镜，为中国抗击疫情提供了宝贵支持',
                                    status:0
                                },
                                {
                                    direction:"抵北京。兆泰集团、厚朴投资",
                                    DemonstrativeSpeech:'新冠肺炎疫情发生以来，日本东京都政府多次向中国有关地方捐赠防疫物资，包括大量防护服和护目镜，为中国抗击疫情提供了宝贵支持',
                                    status:0
                                },
                                {
                                    direction:"抵北京。兆泰集团、厚朴投资",
                                    DemonstrativeSpeech:'新冠肺炎疫情发生以来，日本东京都政府多次向中国有关地方捐赠防疫物资，包括大量防护服和护目镜，为中国抗击疫情提供了宝贵支持',
                                    status:0
                                },
                                {
                                    direction:"抵北京。兆泰集团、厚朴投资",
                                    DemonstrativeSpeech:'新冠肺炎疫情发生以来，日本东京都政府多次向中国有关地方捐赠防疫物资，包括大量防护服和护目镜，为中国抗击疫情提供了宝贵支持',
                                    status:0
                                },
                            ],
                            dialogue:{
                                question:"近日，东京都政府再次决定向友城北京市捐赠20万套防护服",
                                answer:"这批物资将尽快分批运抵北京。兆泰集团、厚朴投资、国航日本分社、顺丰日本、普洛斯等企业为促成此次捐赠发挥了积极作用。"
                            },
                            RelatedObjection:[
                                {
                                    title:'新冠疫情暴发之后，国际舆论普遍表示对中国政府战胜疫情具有信心。',
                                    description:"然而，部分西方媒体也借疫情释放反华情绪和大搞种族歧视。一些报道带有明显的嘲讽或敌意，在国际社会引起了极大争议。"
                                },
                                {
                                    title:'新冠疫情暴发之后，国际舆论普遍表示对中国政府战胜疫情具有信心。',
                                    description:"然而，部分西方媒体也借疫情释放反华情绪和大搞种族歧视。一些报道带有明显的嘲讽或敌意，在国际社会引起了极大争议。"
                                },
                                {
                                    title:'新冠疫情暴发之后，国际舆论普遍表示对中国政府战胜疫情具有信心。',
                                    description:"然而，部分西方媒体也借疫情释放反华情绪和大搞种族歧视。一些报道带有明显的嘲讽或敌意，在国际社会引起了极大争议。"
                                },
                                {
                                    title:'新冠疫情暴发之后，国际舆论普遍表示对中国政府战胜疫情具有信心。',
                                    description:"然而，部分西方媒体也借疫情释放反华情绪和大搞种族歧视。一些报道带有明显的嘲讽或敌意，在国际社会引起了极大争议。"
                                }
                            ]
                        }
                this.swiper.virtual.appendSlide(data)
                this.toSlide(this.swiper.virtual.slides.length-1)
                console.log(this.swiper.virtual.cache)
                this.cleanCache()
            },
            cleanCache(){
                if( Object.keys(this.swiper.virtual.cache).length>5 ){
                    // clearInterval(this.timer)
                    this.swiper.virtual.cache = {}
                    console.log(this.swiper.virtual.cache)
                    console.log(this.swiper.virtual.slides)
                }
            },
            toSlide(data){
                if(data === 'prev'){
                    this.swiper.slidePrev()
                }else if(data === 'next'){
                    this.swiper.slideNext()
                }else if(typeof data === 'number'){
                    this.swiper.slideTo(data,600)
                }
            },
            prevClick(){
                // this.swiper.slidePrev()
                let data =  {
                            CustomerIntention:{msg:'拒绝核对个人信息'+ this.i++,status:0},
                            ReplyDirection:[
                                {
                                    direction:"抵北京。兆泰集团、厚朴投资",
                                    DemonstrativeSpeech:'新冠肺炎疫情发生以来，日本东京都政府多次向中国有关地方捐赠防疫物资，包括大量防护服和护目镜，为中国抗击疫情提供了宝贵支持',
                                    status:0
                                },
                                {
                                    direction:"抵北京。兆泰集团、厚朴投资",
                                    DemonstrativeSpeech:'新冠肺炎疫情发生以来，日本东京都政府多次向中国有关地方捐赠防疫物资，包括大量防护服和护目镜，为中国抗击疫情提供了宝贵支持',
                                    status:0
                                },
                                {
                                    direction:"抵北京。兆泰集团、厚朴投资",
                                    DemonstrativeSpeech:'新冠肺炎疫情发生以来，日本东京都政府多次向中国有关地方捐赠防疫物资，包括大量防护服和护目镜，为中国抗击疫情提供了宝贵支持',
                                    status:0
                                },
                                {
                                    direction:"抵北京。兆泰集团、厚朴投资",
                                    DemonstrativeSpeech:'新冠肺炎疫情发生以来，日本东京都政府多次向中国有关地方捐赠防疫物资，包括大量防护服和护目镜，为中国抗击疫情提供了宝贵支持',
                                    status:0
                                },
                            ],
                            dialogue:{
                                question:"近日，东京都政府再次决定向友城北京市捐赠20万套防护服",
                                answer:"这批物资将尽快分批运抵北京。兆泰集团、厚朴投资、国航日本分社、顺丰日本、普洛斯等企业为促成此次捐赠发挥了积极作用。"
                            },
                            RelatedObjection:[
                                {
                                    title:'新冠疫情暴发之后，国际舆论普遍表示对中国政府战胜疫情具有信心。',
                                    description:"然而，部分西方媒体也借疫情释放反华情绪和大搞种族歧视。一些报道带有明显的嘲讽或敌意，在国际社会引起了极大争议。"
                                },
                                {
                                    title:'新冠疫情暴发之后，国际舆论普遍表示对中国政府战胜疫情具有信心。',
                                    description:"然而，部分西方媒体也借疫情释放反华情绪和大搞种族歧视。一些报道带有明显的嘲讽或敌意，在国际社会引起了极大争议。"
                                },
                                {
                                    title:'新冠疫情暴发之后，国际舆论普遍表示对中国政府战胜疫情具有信心。',
                                    description:"然而，部分西方媒体也借疫情释放反华情绪和大搞种族歧视。一些报道带有明显的嘲讽或敌意，在国际社会引起了极大争议。"
                                },
                                {
                                    title:'新冠疫情暴发之后，国际舆论普遍表示对中国政府战胜疫情具有信心。',
                                    description:"然而，部分西方媒体也借疫情释放反华情绪和大搞种族歧视。一些报道带有明显的嘲讽或敌意，在国际社会引起了极大争议。"
                                }
                            ]
                        }
                this.swiper.virtual.prependSlide(data)
                this.swiper.slidePrev()
            },
            nextClick(){
                this.swiper.slideNext()
            }
        }
    }
</script>
<style scoped>
.contain{
    flex: 1;
    position: relative;
    font-size: 12px;
}
.contain>>>.el-scrollbar__wrap{
    overflow-x: hidden;
}
.bg{
    height: 150px;
    background: #60A7FF;
    text-indent: 20px;
    box-sizing: border-box;
    padding-top: 20px;
    color: white;
    font-size: 20px;
}
.upArrow{
    position: absolute;
    font-size: 20px;
    background: gray;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 50%;
    text-align: center;
    line-height: 40px;
    transform: translate(-50%);
    top: 20px;
    margin-left: 150px;
    z-index: 99999999;
}
.downArrow{
    position: absolute;
    font-size: 20px;
    background: gray;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    left: 50%;
    text-align: center;
    line-height: 40px;
    transform: translate(-50%);
    bottom: 5px;
    margin-left: 150px;
    z-index: 99999999;
}
.tabs{
    position: absolute;
    top: 50px;
    background: white;
    bottom: 30px;
    width: 300px;
    left: 20px;
    border-radius: 10px;
    box-shadow: 0 0 1px 1px #B5B5B5;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    overflow:hidden;
}
.mySwiper{
    position: absolute;
    top: 50px;
    background: white;
    bottom: 30px;
    border-radius: 10px;
    box-shadow: 0 0 1px 1px #B5B5B5;
    left: 340px;
    right: 20px;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
}
.tabs-title>span , .mySwiper-title>span{
    border-bottom: #E8BA0C 3px solid ;
}
.tabs-contain,.mySwiper-contain{
    flex: 1;
    margin-top: 10px;
    display: flex;
    overflow:hidden;
}
.tabs-name{
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.tabs-name-item{
    box-sizing: border-box;
    padding:20px 10px;
    background: #F3F4F8;
    font-size: 14px;
    color: #999A9E;
    text-align: center;
}
.tabs-name-item.isActive{
    background: #CFE4FF;
    position: relative;
    color: #6CA8ED;
}
.tabs-name-item.isActive::after{
    content:'';
    width:0;
    height: 0;
    border-left: 6px solid transparent;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
}
.tabs-data{
    flex: 1;
    box-sizing: border-box;
    border: 1px solid #DAE2EF;
    padding: 10px;
    overflow: hidden;
}
.CommunicationRequirements{
    height: 70%;
}
.CommonObjection{
    padding-top: 10px;
    border-top: 1px solid #E2E2E2;
    height: 30%;
}
.tabs-data-container{
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.tabs-Cr-data{
    line-height: 20px;
    letter-spacing:2px;
}
.tabs-data-title{
    padding-bottom: 6px;
    display: block;
    height: 20px;
}
.tabs-data-contain{
    flex: 1;
    overflow-y: auto;
}
.swiperComp{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
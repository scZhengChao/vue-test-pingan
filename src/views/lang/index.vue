<template>
<div>
        <ul class="tab"    @mouseover='change'>
            <span class="zhongwen">{{defaultLang}}</span>
            <li v-for="(item,index) in lang" :key='index' v-show="appear" @click='select(index,$event)'>{{item.name}}</li>
        </ul>
        <div style="margin: 100px auto;">
            <h5>{{$t("message.title")}}</h5>
            <input style="width: 300px;" class="form-control" :placeholder="$t('placeholder.enter')">
            <ul>
                <li v-for="(brand,index) in brands" :key="index">{{$t(brand)}}</li>
            </ul>
        </div>
</div>
     
</template>
<style scoped>
 *{margin: 0;padding: 0;}
 .tab{height: 100px;}
 .tab li:hover{
     background: #399;
 }
</style>
<script>
export default {
    data(){return{
         lang:[
            {name:'中文',value:'zh'},
            {name:'英文',value:'en'}
        ],
        brands:['brands.nike', 'brands.adi', 'brands.nb', 'brands.ln'],
        defaultLang:"中文",
        appear:false,
    }},
    methods:{
        change(ev){
           var eve = ev || window.event
           var target = eve.target || eve.srcElement
           this.appear = true
           target.onmouseout = ()=>{
               this.appear = false
           }
       },
        select(id,ev){
           this.defaultLang = this.lang[id].name
           this.appear = false
            // document.cookie = `PLAY_LANG=${this.lang[id].value}` 
            localStorage.setItem('PLAY_LANG',this.lang[id].value)
            this.$i18n.locale = localStorage.getItem('PLAY_LANG')    
        },
    }
}
</script>

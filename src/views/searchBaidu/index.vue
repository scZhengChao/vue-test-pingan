<template>
    <div>
        <p>这里是搜索框</p>
        <!-- 注意v-model 有问题,可以选着用或者不用 -->
        <input type="text" placeholder="请输入搜索内容....." @input="search" :value="searchText">
        <ul>
            <li v-for="(item,index) of list" :key="index">{{item}}</li>
        </ul>
    </div>    

</template>
<style scoped>

</style>

<script>
export default {
    data(){return{
        list:[],
        searchText:''
    }},
    methods:{
        search(ev){
            var target = ev.target || ev.srcElement;
            this.searchText = target.value
            this.$http.jsonp(
                'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
                {
                    params:{
                        wd:this.searchText
                    },
                    jsonp:'cb'
                }
            ).then(res=>{
                this.list = res.body.s
            })
        }
    }
}
</script>

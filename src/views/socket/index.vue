<template>
    <div>
        <p>这里是小编室</p>
        <input type="text" v-model="msg" @keydown.enter="pass">
        <ul>
            <li v-for ='(item,index) of data' :key='index'>{{item.msg}}</li>
        </ul>
    </div>
</template>
<style scoped>

</style>
<script>
export default {
    data(){return{
        msg:'',
        data:[]
    }},
    sockets:{
        message(data){
            console.log(data)
            this.data.push(data)
        }
    },
    mounted(){
        console.log(this.$route.query)
    
    },
    methods:{
        pass(el){
            this.$socket.emit('xiaobian',{msg:this.msg}) 
        }
    }
}
</script>



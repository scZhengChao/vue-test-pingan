<template>
    <div>
        <p>在线聊天人数:{{count}}</p>
        <div class="box">
            输入:
            <input type="text" v-model="content" @keydown.enter="send">
            <button>发送消息</button>
            <ul>
                <li v-for='(item,index) of message' :key='index'  >{{item.msg}}</li>
            </ul>
            <ul class="username">
                <span>在线用户名</span>
                <li v-for='(item,index) of onlineName' :key='index' @click='pri(item)'>{{item}}</li>
            </ul>
        </div>
        <div>
            <p>聊天框</p>
            <ul>
                <li v-for='(item,index) of chatContent' :key='index'>{{item.username}}:{{item.msg}}</li>
            </ul>
        </div>
    </div>
</template>
<style scoped> 
.username{
    float: left;
    margin-left: 200px;
    margin-top: -50px;
}
</style>
<script>
export default {
    data(){return{
        content:'',
        message:[],
        count:0,
        onlineName:[],
        chatContent:[]
    }},
    sockets:{
        login(data){
            this.message.push(data)
            // console.log(data)
        },
        logout(data){
            //   console.log(data)
            this.message.push(data)
        },
        update(data){
            //   console.log(data)
            this.count = data.onlineCount
            this.onlineName = data.onlineName
        },
        message(data){
              console.log(data)
            this.chatContent.push(data)
        },
        privateMessage(data){
            console.log(data)
            this.message.push({msg:data.formUserName+'对你说:'+ data.msg}) //这个是接收私有,只有接收的人可以看
        },
        reconnecting(){
          this.$socket.close()
        }
    },
    methods:{
        send(){
            this.$socket.emit('xiaobian',{msg:this.content})      
        }, 
        pri(id){
            this.$socket.emit('privateMessage',id,{msg:this.content},(data)=>{
                this.message.push({msg:data}) // 这是回执,给自己看的
            })
        }
    },
    mounted(){
        this.$socket.emit('login',{username:Math.round( Math.random()*10)})
    }
}
</script>

<template>
    <div>
        asg 
        <el-button type='primary' @click='send'>send post </el-button>

    </div>
</template>
<script>
    export default {
        name:'XMLHttpRequest',
        data(){return{
            ajax:''
        }},
        created() {
            
        },
        methods:{
            send(){
                /***
                 * loadstart 为客户端收到第一个字节的时间   
                */
                this.ajax = new XMLHttpRequest()
               
                this.ajax.addEventListener('loadEnd',function(){ //传输结束，但是不知道成功还是失败。
                    console.log('loadEnd',Date.now())
                })
                this.ajax.addEventListener('load',function(){  //传输成功完成。
                    console.log('load',Date.now())
                })
                this.ajax.addEventListener('loadstart',function(){ //传输开始。 收到第一个字节
                    console.log('loadstart',Date.now())
                })
                this.ajax.addEventListener('abort',function(){  //传输被用户取消。
                    console.log('abort',Date.now())
                })
                this.ajax.addEventListener('error',function(){  //传输中出现错误
                    console.log('error',Date.now())
                })
                this.ajax.addEventListener('progress',function(){  // 返回进度信息。 下载的
                    console.log('progress download',Date.now())
                })
                this.ajax.addEventListener('timeout',function(){  // 传输超时
                    console.log('timeout',Date.now())
                })
                this.ajax.upload.addEventListener('progress',function(){  // 返回上传进度信息
                    // 上面的代码中，event.total是需要传输的总字节，event.loaded是已经传输的字节。如果event.lengthComputable不为真，则event.total等于0。
                    if (event.lengthComputable) {
            　　　　　　var percentComplete = event.loaded / event.total;
            　　　　}
                    console.log('progress upload',Date.now())
                })
                let data = {
                    a:1,
                    b:2
                }
                this.ajax.open('POST','http://localhost:3001/express')
                var str = ''
                for(var i in data){
                    str += i + '=' + data[i] + '&'
                }
                str = str.slice(0,-1);
                this.ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                let send = this.ajax.send
                this.ajax.send = function(){
                    this.beginTime = Date.now()
                    console.log('sendtime',this.beginTime)
                    this.addEventListener('readystatechange',function(){
                        if(this.readyState == 4 && this.status == 200){
                            console.log('readystatechange', Date.now())
                            console.log('ajax事件:',Date.now()-this.beginTime)
                        }
                    })
                    return send.apply(this,arguments)
                }
                this.ajax.send(str)
            }
        }
    }
</script>

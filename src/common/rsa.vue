<template>
  <div>
    <p>rsa  公认安全性较高的加解密</p>
    <p>{{time | dataFormat('yyyy-MM-dd  hh:mm:ss')}}</p>
  </div>
</template>
<style>
  
</style>
<script>
const NodeRSA = require('node-rsa');

export default {
  name:'rsa',
  data(){return{
    time:'',
  }},
  mounted(){
    //官方的简单demo
    // const key = new NodeRSA({b: 512});
    // const text = 'Hello RSA!';
    // const encrypted = key.encrypt(text, 'base64');
    // console.log('encrypted: ', encrypted);

    // const decrypted = key.decrypt(encrypted, 'utf8');
    // console.log('decrypted: ', decrypted);

  this.time = (new Date()).getTime()

  },
  methods:{

  }
}
</script>
<template>
    <div>
      <input type="file" @change="select" id="file" style="display:none">
      <label for="file">chose file</label>
    </div>
</template>
<style scoped>

</style>
<script>
import axios from 'axios';
export default {
  name:'uploadFile',
  methods:{
    select(e){
      let files = e.target.files || e.target.dataTransfer.files
      console.log(files)
        //图片过滤
        function fileFilter(files) {
          var a = true;
          for (var i = 0, len = files.length; i < len; i++) {
            var file = files[i];
            if (file.type.indexOf("text") == 0) {
              if (file.size >= 1024*1024*10) {// 10M
                  this.$alert('您这张"' + file.name + '"文件过大，应小于10M，请重新上传');
                  a = false;
              }
            } else {
              this.$alert('文件"' + file.name + '"不是text。请重新上传');
              a = false;
            }
          }
          return a;
        }
        if(fileFilter(files)){
          let params = new FormData();
          params.append('file',files[0]);
          // params.append('name','其他信息');
          let config ={
            headers:{
              'Content-Type':'multipart/form-data'
            }
          }
          axios.post('url',params,config).then(res=>{

          })
        }
    },
    download(){
      // fetch(url,{responseType:'blob'})  //注意 responseType:'blob',其他的没什么
      //加入已经拿到res.data
            // function isIE() { //ie?
            //   if (!!window.ActiveXObject || "ActiveXObject" in window)
            //    return true;
            //    else
            //    return false;
            //   }
            // document.write(logFile)
            // if(isIE()){
            //   // iE 浏览器下载表格
            //   console.log(11111)
            //   var excelBlob = new Blob([logFile])
            //   window.navigator.msSaveOrOpenBlob(excelBlob,self.logFilename)
            // }else{
            //   var blob = new Blob([logFile], { type: 'data:text/plain;charset=utf-8' });
            //   href = window.URL.createObjectURL(blob);
            //   var a = document.createElement('a');
            //   a.href =  href 
            //   a.target = '_blank';
            //   a.download = self.logFilename;
            //   document.body.appendChild(a);
            //   a.click();
            //   document.body.removeChild(a);
            //   window.URL.revokeObjectURL(a.href);
            // } 

         function isIE() { //ie?  11
              if (!!window.ActiveXObject || "ActiveXObject" in window)
               return true;
               else
               return false;
              }
          
        if(isIE()){
          // iE 浏览器下载表格
          window.navigator.msSaveOrOpenBlob(new Blob([data]),'message.xlsx')
        }
        //得到文件的链接
        function getObjectURL(file) {
          var url = null;
          if (window.createObjectURL != undefined) {//基础创建url的方法
                  url = window.createObjectURL(file);
          } else if (window.URL != undefined) { // mozilla(firefox)
                  url = window.URL.createObjectURL(file);
          } else if (window.webkitURL != undefined) { // webkit or chrome
                  url = window.webkitURL.createObjectURL(file);
          }
          return url;
        };
      let url = getObjectURL(new Blob([data]))
      let link = document.createElement('a');
      link.style.display = 'none';
      link.setAttribute('href',url)
      link.setAttribute('id','downloadLink')
      link.setAttribute('download','message.xlsx')
      document.appendChild(link)
      link.click();
      let removeLink = document.querySelector('#downloadLink');
      document.removeChild(removeLink);
      // 释放url
      window.URL.revokeObjectURL(url)

    }
  }
}
</script>

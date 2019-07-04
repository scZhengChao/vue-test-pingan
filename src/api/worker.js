export default {
  install:function(Vue,options){
    function work(){
      self.onmessage = function(e){
        // console.log(e.data)
        let type = e.data.type
        if(type == '1'){
            let sum = 0,num = e.data.data;
            for(var i=1;i<=num;i++){
                sum += i
            }
            postMessage(sum);
        }else if(type == '2'){
          postMessage(e.data.data)
        }  
      }
    }
    const code = work.toString();
    const blob = new Blob(["(" + code + ")()"]);
    Vue.prototype.worker = new Worker(URL.createObjectURL(blob))
  }
}
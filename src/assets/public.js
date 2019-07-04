//原生实现addClass
export function addClass(ele,addname){
  if(!ele.className){
      // class非空的时候,再判断要添加的类目是不是已经存在
      ele.className = addname;
      //class名为空的时候,直接赋值           
  }else{
      //非空
      if(!isHasClassName(addname,ele.className.split(" "))){
          //不存在要添加的class名
          ele.className =ele.className.trim() + " " + addname;
      }

  }
  function isHasClassName(target,arr){
      for(var i in arr){
          if(target === arr[i].trim()){
              return true;
          }
      }
  } 
}
//原生是想移除removecalss
export function removeClass(ele,classname){
   ele.className = ele.className.replace(classname,"");
}
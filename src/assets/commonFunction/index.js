
export function addEvent (obj,type,callback) {
  if(obj.addEventListener){
      obj.addEventListener(type,callback)
  }else if ( obj.attachEvent){
      obj.attachEvent("on"+type,callback)
  }else{
      obj["on"+ type] = callback
  }
}

export function removeEvent (obj,type,callback){
  if(obj.removeEventListener){
      obj.removeEventListener(type,callback)
  }else if(Obj.detachEvent){
      obj.detachEvent('on'+type,callback)
  }else{
      obj["on"+tpye] = null
  }
}
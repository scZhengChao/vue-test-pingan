export function htmlEncode(str) {
  var arrEntities = { '<': '&lt;', '>': '&gt;', ' ': '&nbsp;', '&': '&amp;', '"': '&quot;', '\'': '&#39;' }
  return str.replace(/(<|>| |&|"|')/ig,function(all,t){
    return arrEntities[t]
  })
}
export function htmlDecode(str) {
  var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"', '#39': '\'' };
  return str.replace(/&(lt|gt|nbsp|quot|#39);/ig,function(all,t){
    return arrEntities[t];
  })
}

export function dataFormat(value, fmt) {
  if (!value) {
    return ''
  }
  const getDate = new Date(value)
  const o = {
    'M+': getDate.getMonth() + 1,
    'd+': getDate.getDate(),
    'h+': getDate.getHours(),
    'm+': getDate.getMinutes(),
    's+': getDate.getSeconds(),
    'q+': Math.floor((getDate.getMonth() + 3) / 3),
    S: getDate.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (getDate.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return fmt
}
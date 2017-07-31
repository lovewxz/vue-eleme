/**
 *返回Url参数
 * @example ?id=1234&a=b
 * @return {id:'1234',a:'b'}
 */

export function urlParse() {
  let obj = {}
  let url = window.location.search
  let reg = /[?&][^?&]+=[^?&]+/g
  let arr = url.match(reg)
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=')
      let key = decodeURIComponent(tempArr[0])
      let value = decodeURIComponent(tempArr[1])
      obj[key] = value
    })
  }
  return obj
}

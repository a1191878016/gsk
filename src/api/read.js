import request from  '@/utils/request'

export  function  getRead() {
  return request({
    url:'chart/readchart',
    method:'get'
  })
}

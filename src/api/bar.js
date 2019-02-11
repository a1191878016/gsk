import request from '@/utils/request'

export function getBar() {
  return request({
    url: '/chart/barchart',
    method: 'get'
  })
}

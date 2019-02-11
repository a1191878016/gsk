import request from '@/utils/request'

export function getPie() {
  return request({
    url: '/chart/piechart',
    method: 'get'
  })
}

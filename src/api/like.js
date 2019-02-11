import request from '@/utils/request'

export function getLike() {
  return request({
    url: 'chart/likechart',
    method: 'get'
  })
}

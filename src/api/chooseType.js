import request from '@/utils/request'

export function chooseType(types, ids) {
  var str = '/private/content/' + types + '/' + ids
  return request({
    url: str,
    // url:'/content',
    method: 'get',
    params: {
      type: types,
      id: ids
    }
  })
}

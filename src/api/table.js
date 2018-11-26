import request from '@/utils/request'

export function getList(keywords,typeField,currentPage) {
  return request({
    url: '/private/search',
    method: 'get',
    params:{
      keywords:keywords,
      typeField:typeField,
      currentPage:currentPage,
      pageSize:10
    }
  })
}

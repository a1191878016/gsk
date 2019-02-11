import request from '@/utils/request'

export function login(user, pwd) {
  console.log(user, pwd)
  return request({
    url: '/private/users/login',
    method: 'post',
    params: {
      userName: user,
      password: pwd
    }
  })
}
//
// export function login(userName, password) {
//   return request({
//     baseURL: 'http://192.168.63.77:8081/api/v1/private',
//     url: '/users/login',
//     method: 'post',
//     data: { userName, password }
// });
// }


// export function getInfo(token) {
//   return request({
//     url: '/user/info',
//     method: 'get',
//     params: { token }
//   })
// }
//
// export function logout() {
//   return request({
//     url: '/user/logout',
//     method: 'post'
//   })
// }

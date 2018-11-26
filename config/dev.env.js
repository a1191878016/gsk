'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://192.168.149.23/api/api/v1"',
  // BASE_API: '"http://192.168.63.77:8081/api/v1"',
   BASE_API: '"https://www.easy-mock.com/mock/5bce7729eaf09a28dd3eb6b3/example"',
})

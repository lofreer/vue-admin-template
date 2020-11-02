import request from '../utils/request'

const prefix = '/api/v1/back'

/**
 * 产品统计
 * @param {*} query
 */
export const productCount = (query) => {
  return request({
    url: `${prefix}/statistics/productCount`,
    method: 'get',
    params: query
  })
}
/**
 * 商户统计
 * @param {*} query
 */
export const merchantCount = (query) => {
  return request({
    url: `${prefix}/statistics/merchantCount`,
    method: 'get',
    params: query
  })
}
/**
 * 用户统计
 * @param {*} query
 */
export const memberCount = (query) => {
  return request({
    url: `${prefix}/statistics/memberCount`,
    method: 'get',
    params: query
  })
}
/**
 * 订单统计
 * @param {*} query
 */
export const orderCount = (query) => {
  return request({
    url: `${prefix}/statistics/orderCount`,
    method: 'get',
    params: query
  })
}

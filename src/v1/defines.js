/**
 * @apiDefine html_response 返回html内容
 * @apiSuccessExample html
 * 返回html内容
 */

/**
 * @apiDefine api_response 返回json数据
 * @apiSuccess {number} code 状态码
 * @apiSuccess {string} msg 错误信息
 * @apiSuccess {json} data 数据字段
 * @apiSuccess {boolean} success 是否成功
 */

/**
 * @apiDefine user_info
 * @apiExample {object} cookies
 *              - {string} sid session-id,校验登录
 */

/**
 * @apiDefine uploadFileRequest
 * @apiParam {string} hash 先调用`0104接口`上传文件，再使用返回的hash来上传
 * @apiParam {string} token 先调用`0104接口`上传文件，再使用返回的token来上传
 */

/**
 * @apiDefine api_succeed
 * @apiSuccessExample {json} 操作成功
 * {"code":0,"msg":"操作成功","data": null,"success":true}
 */

/**
 * @apiDefine pageLimit 分页
 * @apiParam {number} [page=1] 页码，第几页面，`从1开始`
 * @apiParam {number} [size=10] 页数，一页数量
 * @apiSuccess {number} data.total 记录总数量
 * @apiSuccess {number} data.pages 总页数
 * @apiSuccess {number} data.size 当前页数
 * @apiSuccess {number} data.page 当前页码
 * @apiSuccess {json} data.content 数据内容
 */

/**
 * @apiDefine needLogin 需要登录
 * @apiHeader {string} x-access-token token，后台不需处理
 * @apiDescription `需要登录`
 * @apiSuccessExample {json} 请先登录
 * {"code":9101,"msg":"请先登录","data": null,"success":false}
 */
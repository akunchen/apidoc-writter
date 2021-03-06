/**
 * @api {post} /api/file/upload 0101.上传文件
 * @apiDescription 测试表单在这里，如有问题，在这个表单测试，打开审查元素查看具体发送报文
 * <form class="form-horizontal" target="uploadFileFormResult" method="post" action="/api/file/upload" enctype="multipart/form-data">
 *     <div class="form-group">
 *         <label class="col-md-3 control-label">type</label>
 *         <div class="input-group">
 *             <input type="text" placeholder="type" name="type" class="form-control sample-request-param">
 *             <div class="input-group-addon">string</div>
 *         </div>
 *         <label class="col-md-3 control-label">file</label>
 *         <div class="input-group">
 *             <input type="file" class="form-control" name="file"/>
 *             <div class="input-group-addon">file</div>
 *         </div>
 *     </div>
 *     <div class="form-group">
 *         <div class="controls pull-right">
 *             <button class="btn btn-primary">发送</button>
 *         </div>
 *     </div>
 * </form>
 * <iframe name="uploadFileFormResult" style="width: 100%;height:80px;" sandbox='allow-scripts allow-same-origin'></iframe>
 * @apiName UploadFile
 * @apiVersion 0.0.1
 * @apiGroup 01-base
 * @apiParam {number} type 类型，1-套装组合商品图片
 * @apiUse api_response
 * @apiSuccess {json} data 数据内容
 * @apiSuccess {string} data.hash 文件上传返回key，用于接口提交的key
 * @apiSuccess {string} data.token 校验凭据
 * @apiSuccess {number} data.expired 文件上传失效时间，`10位时间戳`，超过这个时间请用户重新上传
 * @apiSuccess {number} data.url 文件访问地址，拼接上`api地址`即可访问
 * @apiSuccessExample {json} 操作成功
 * {"code":0,"msg":"操作成功","data":{"expired":1560322418,"hash":"user/upload/2019/06/11/1560236018330.mp4","url":"/user/upload/2019/06/11/1560236018330.mp4","token":"DtOAwuutSGIkHGLB"},"success":true}
 */

/**
 * @api {post} /api/login 0201.登录
 * @apiName UserLogin
 * @apiVersion 0.0.1
 * @apiParam {string} account 用户名
 * @apiParam {string} password 密码
 * @apiParam {number} terminal 平台，1-前台，2后台系统
 * @apiGroup 01-base
 * @apiSampleRequest /api/login
 * @apiUse api_response
 * @apiSuccess {json} data 数据字段
 * @apiSuccess {string} data.departmentName 部门名称
 * @apiSuccess {number} data.departmentId 部门id
 * @apiSuccess {string} data.name 姓名
 * @apiSuccess {string} data.description 描述
 * @apiSuccess {number} data.terminal 平台
 * @apiSuccess {number} data.userId 用户id
 * @apiSuccess {string} data.token 登录token
 * @apiSuccess {string} data.account 用户名
 * @apiSuccess {string} data.avatar 头像
 * @apiSuccess {boolean} data.loginBackend 能否登录后台
 * @apiSuccessExample {json} 操作成功
 * { "code": 0, "msg": "操作成功", "data": { "departmentName": null, "departmentId": 0, "name": "", "description": "", "terminal": 1, "userId": 5, "token": "ncxImWlUXCSJhzLCicFxXqfqCuBtmOnp","loginBackend":false }, "success": true }
 */

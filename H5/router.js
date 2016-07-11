/**
 * 这里是接口范例，可根据需求进行修改
 * 可在当前项目文件夹下直接新建 html文件，向对应接口发送请求
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
app.get('/hello', function(req, res) {
	res.send({
		status: 0,
		msg: "hello 饥人谷"
	});
});


/**
 * 发送 GET 请求, 有参数
 * GET /user/100
 * query = { name: 'ruoyu', age: 28 }
 */
app.get('/user/Details', function (req, res) {
	res.send({
		"code": "200",
		"data": {
			"list": [
				{
					"tid": "6", //帖子ID
					"author": "李诛魔", //发帖用户名
					"agreed": "7777", //有帮助数量
					"dateline": "1467682869", //时间
					"firstreply": { //一楼的回复内容
						"content": "来来 看几个优惠来,.,..。。", //具体内容
						"author": "dy1", //回复人
						"dateline": "1467272760" //回复时间
					},
					"attaches": [ //发帖具体内容
						{
							"type": "0", //文本
							"path": {
								"content": "有木有优惠的说？=.="
							}
						}
					],
					"avatar": "https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D200/sign=a219dde79125bc31345d06986ede8de7/a5c27d1ed21b0ef494399077d5c451da80cb3ec1.jpg" //头像
				},
				{
					"tid": "1",
					"author": "赵日天",
					"agreed": "15",
					"dateline": "1466666111",
					"firstreply": {
						"content": "一般般啊啊啊啊,",
						"author": "dy1",
						"dateline": "1466666666"
					},
					"attaches": [
						{
							"type": "0",
							"path": {
								"content": "啦啦啦德玛西亚 看看靠靠靠靠靠"
							}
						},
						{
							"type": "1", //图片
							"path": {
								"content": "http://img5.imgtn.bdimg.com/it/u=746339808,365479481&fm=21&gp=0.jpg",
								"width": "15",
								"height": "16"
							}
						}
					],
					"avatar": "https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D200/sign=a219dde79125bc31345d06986ede8de7/a5c27d1ed21b0ef494399077d5c451da80cb3ec1.jpg"
				}
			],
			"nextpage": "0"
		},
		"msg": "ok"
	});
});


/**
 * 发送 POST 请求， 有参数
 * POST /comment
 * query = { comment: "这是评论内容" }
 */
app.post('/comment', function(req, res) {
	console.log(req.body.comment); // "这是评论内容"
	res.send({
		status: 0,
		data: {
			cid: 100,
			comment: "这是评论内容"
		}
	});
});



/**
 * 页面路由，从模板渲染页面渲染页面, 
 * htttp://localhost:8080/user
 * 支持 ejs, jade 模板
 */
app.get('/user', function(req, res) {
	res.render('user.ejs', {
		username: '饥人谷'
	});
});
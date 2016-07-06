//滑动组件
var ScrollTop=function($node,$heigth,$time){
	this.$node=$node;
	this.node=this.$node[0];
	this.openHeight=this.node.scrollTop;//开始高度
	this.startTime=Date.now();//定义初始时间
	this.height=$heigth;
	this.time=$time;
	this.delta=this.height-this.openHeight;
	this.init();
}
ScrollTop.prototype.init=function(){

		var _this=this;
	var elapsed=Math.min(1, (Date.now() - _this.startTime) / _this.time)
	_this.node.scrollTop=document.getElementsByTagName("body")[0].clientHeight;;
	if(_this.elapsed <1){
		console.log(_this.init)
		setTimeout(function(){
			var elapsed=Math.min(1, (Date.now() - _this.startTime) / _this.time)
			_this.node.scrollTop=document.getElementsByTagName("body")[0].clientHeight;;
		},10);

	
	}
	

}


// 页脚点击部分
$(".footer-overstory").on("tap",function(e){

	e.preventDefault();
	$(this).hide();
})

var clientH=document.getElementsByTagName("body")[0].clientHeight;
//激活提问框
$(".footer-speak-frame").on("focus",function(){
	new ScrollTop($("body"),clientH,1500);
})
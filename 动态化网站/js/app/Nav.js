//nav部分
define(['jquery'],function($){
function Nav($ct,node1,node2,node3,node4,node5){
	this.ct=$ct;
	this.nav=this.ct.find("li");
	console.log(this.nav)
	this.tem=$(window).scrollTop();
	this.height=$(window).height();
	this.init(node1,node2,node3,node4,node5);
}
Nav.prototype={
	init:function(node1,node2,node3,node4,node5){
		var _this=this;
		_this.play(node1,node2,node3,node4,node5);
		_this.set();
	},
	play:function(node1,node2,node3,node4,node5){
		var _this=this;
		_this.node1=node1.offset().top;
		_this.node2=node2.offset().top;
		_this.node3=node3.offset().top;
		_this.node4=node4.offset().top;
		_this.node5=node5.offset().top;

		if(_this.tem+_this.height<_this.node1){
		
		_this.nav.removeClass('move')
		}
		if(_this.tem+_this.height>_this.node1){
		_this.nav.removeClass('move').eq(0).addClass("move")

		}
		if(_this.tem+_this.height>_this.node2){
			_this.nav.removeClass('move').eq(1).addClass("move")
		}
		if(_this.tem+_this.height>_this.node3){
			_this.nav.removeClass('move').eq(2).addClass("move")
		}
		if(_this.tem+_this.height>_this.node4){
			_this.nav.removeClass('move').eq(3).addClass("move")
		}
		if(_this.tem+_this.height>_this.node5){
			_this.nav.removeClass('move').eq(4).addClass("move")
		}
	},
	set:function(){
		var _this=this;
		if(_this.tem>_this.height/5){
 			this.ct.css("background","rgba(34,34,34,.01)")
 		}
 		if(_this.tem>_this.height/4){
 			this.ct.css("background","rgba(34,34,34,.01)")
 		}
 		if(_this.tem>_this.height/3){
 			this.ct.css("background","rgba(34,34,34,.6)")
 		}
 		if(_this.tem>_this.height/2){
 			this.ct.css("background","rgba(34,34,34,.8)")
 		}
 		if(_this.tem>_this.height){
 			this.ct.css("background","rgba(34,34,34,1)")
 		}
	}
}
        return Nav;
})
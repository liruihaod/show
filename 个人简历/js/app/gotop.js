//回到顶部
function Gotop(content,){
	this.content=content
	this.init();

}
Gotop.prototype={
	init:function(){
		var _this=this;
		_this.create();
	},
	create:function(){
		var _this=this;
		vat str="";
			str+='<div class="gototop" id="gototop">'+
					'<div class="bow"></div>'+
					'<div class="arrow"></div>'+
					'<p>'+_this.content+'</p>'+
					'</div>'+
					'<div class="gototop_on" id="gototop_on">'+
					'<div class="bow"></div>'+
					'<div class="arrow"></div>'+
					'</div>';
			_this.node=$(str);
			$("body").append(node);
			_this.play(_this.node);
	},
	play:function(_this.node){
		var tem=_this.node
		tem.on("click",function(){

		})
	}
}
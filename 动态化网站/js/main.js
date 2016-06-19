requirejs.config({
	baseUrl:'./',
	paths:{
		jquery:'lib/jquery.js'
	}
});
require(['jquery','app/goTop','app/Carousel','app/Exposure','app/waterFall','app/Nav']
    , function($,GoTop,Carousel,Exposure,waterFall,Nav){
    	//首页轮播
    	new Carousel($(".mianpage_ct"));
    	//回到顶部
    	new GoTop(500);
    	//瀑布流
    	new waterFall($(".portfolio-bottom"),$(".portfolio-box")).init();
    	//曝光
    	$(".time-line>div").each(function(){
		new Exposure($(this),1/3);
		})
		//nav部分
	$(window).on("scroll",function(){
	new Nav($("#header"),$("#serices .width"),$("#portfolio .portfolio-bottom"),
		$("#about .width"),$("#team .width"),$("#contact .width")
	)	
})

		//点击更多
var $btn=$(".get_more");

var products = [
    {
    	class:'box4',
        img: 'img/task2.png',
        h3: 'Round Icons',
        i: 'Graphic Design'
    },{
    	class:'box3',
        img: 'img/task3.png',
        h3: 'Startup Framework',
        i: 'Website Design'
    },{
    	class:"box2",
        img: 'img/task6.png',
        h3: 'Treehouse',
        i: 'Graphic Design'
    }
    ,{
    	class:"box3",
        img: 'img/task2.png',
        h3: 'Treehouse',
        i: 'Graphic Design'
    }
    ,{
    	class:"box3",
        img: 'img/task4.png',
        h3: 'Treehouse',
        i: 'Graphic Design'
    }
    ,{
    	class:"box1",
        img: 'img/task5.png',
        h3: 'Treehouse',
        i: 'Graphic Design'
    }
];

	$btn.on("click",function(){
	var str="";
	for(var i=0;i<products.length;i++){
		str+='<div class="portfolio-box"><div><a href="#"'+'class="'+products[i].class+'">'+
			'<div class="portfolio-hover"><div class="portfolio-hover-content">'+
			'<i class="fa fa-plus fa-5x"></i></div></div>'+
			'<img src="'+products[i].img+'" alt=""></a>'+
			'<h3>'+products[i].h3+'</h3>'+
			'<i>'+products[i].i+'</i></div></div>';
	}
	var $node=$(str)
	$(".portfolio-bottom").append($node);
	    	new waterFall($(".portfolio-bottom"),$(".portfolio-box")).init();

	scroll_show();
		})
	console.log("hello,我是李瑞")
	console.log("目前正在寻找一份前端机会")
	console.log("本页面js代码已用requirejs打包,关于细节部分说明已在博客贴出")
    	});
requirejs.config({
	baseUrl:'./',
	paths:{
		jquery:'lib/jquery.js'
	}
});

require(['jquery','app/modal.js']
	, function($,Modal){

    	//模态框
    	var node="别忘记点击更多作品与博客哦",
			p="我是李瑞正在寻求一份前端机会"
 var One=new Modal(node,p).init();
});
var $control_cats = $('.control_cats'),
		$container = $('.container'),
		$control_wrapper = $('.control_wrapper'),
		$my_icon_box = $('.my_icon_box'),
		$my_photo = $('.my_photo'),
        $my_photo_outer=$(".photo_outer"),
		$my_name_box = $('.my_name_box'),
		$tap_1 = $('.tap_1'),
		$tap_2 = $('.tap_2'),
		$tap_3 = $('.tap_3'),
		$tap_4 = $('.tap_4'),
		$hover_me = $('.hover_me'),
		$my_skill = $('.my_skill'),
		$my_skill_row_div = $('.my_skill_row>div'),
		$my_intern = $('.my_intern'),
		$my_intern_cont = $('.my_intern_cont'),
		$my_exp = $('.my_exp'),
		$my_exp_box = $('.my_exp_box'),
        $my_exp_div=$('.my_exp_row>div')
		$tv_btn = $('.tv_btn'),
		$tv_blank = $('.tv_blank'),
		$tv_blank_up = $('.tv_blank_up'),
		$tv_blank_down = $('.tv_blank_down'),
		$control_btn = $('.control_btn'),
		$works = $('.works'),
		$wrapper = $('.wrapper'),
		$work_wrapper = $('.work_wrapper'),
		$tv_hand = $('.tv_hand'),
		$work_header = $('.work_header'),
		$back_btn = $('.back_btn'),
		$q_list = $('.q_list'),
		$q_list_1 = $('.q_list_1'),
		$q_list_2 = $('.q_list_2'),
		$q_list_3 = $('.q_list_3'),
		$q_list_4 = $('.q_list_4'),
		$q_list_5 = $('.q_list_5'),
		$q_list_cont = $('.q_list_cont'),
		$a_pre = $('.a_pre'),
		$view_off = $('.fa-toggle-on'),
		$welcome_work_p = $('.welcome_work_p'),
		$my_pic_work = $('.my_pic_work'),
		$my_pic = $('.my_pic_box>.my_pic'),
		$my_a_box = $('.my_a_box'),
		$view = $('.view'),
		$welcome_work_p = $('.welcome_work_p'),
		$q_list_num = $('.q_list_num'),
		$a_1 = $('.a_1'),
		$a_2 = $('.a_2'),
		$a_3 = $('.a_3'),
		$a_4 = $('.a_4'),
		$a_5 = $('.a_5'),
		$a_1_p = $('.a_1_p'),
		$a_2_p = $('.a_2_p'),
		$a_3_p = $('.a_3_p'),
		$a_4_p = $('.a_4_p'),
		$a_5_p = $('.a_5_p'),
		$a_2_img = $('.a_2_img'),
		$a_2_img_img = $('.a_2_img_img'),
		$a_4_img_cry = $('.a_4_img_cry'),
		$a_4_img_flash = $('.a_4_img_flash'),
		$control_view = $('.control_view');
        $fa_key=$(".fa-key"),
        $workl_show_ct = $(".workl_show_ct"),
        $work_show=$(".work_show"),
        $show_prew = $(".show_prew"),
        $show_next = $(".show_next"),
        $show_tip =$(".show_tip"),
        $arrow_show=$(".arrow_show"),
        $close_box=$(".close_box"),
		$modal_btn=$(".modal_btn"),
		$works_gif=$(".works_gif"),
		$works_li=$(".works li"),
		$modal_wrap=$(".modal"),
        $show_num=0,//设置初始值为0；
        $show_key=false,//设置状态锁，放置多次点击
        $imgWidth=$workl_show_ct.find("img").width(),//获取图片宽度
        $imgNum=$workl_show_ct.children().size();//获取图片的数量


	//照片部分
    function rotate(){
       photoRota= setInterval(function(){
            $my_photo_outer.addClass("photo_move");
            setTimeout(function(){
                $my_photo_outer.removeClass("photo_move");
            },1000)
        },3000)
    }
        rotate();

    $my_photo_outer.on("mouseenter",function(){
            clearInterval(photoRota);
             $my_photo_outer.removeClass("photo_move").addClass("photo_hover").delay(1000).hide(0);
    })


	// 把个人资料移到左侧
	function fileLeft(){

		$my_icon_box.fadeOut(200);
		setTimeout(function(){
			$my_photo.addClass('my_photo_move');
			$my_name_box.addClass('my_name_box_move');
			$tap_1.addClass('tap_1_move');
			$tap_2.addClass('tap_2_move');
			$tap_3.addClass('tap_3_move');
			$tap_4.addClass('tap_4_move');
		},200);
	}

	// 点击时去掉所有的动画
	function tvContChange(){
		$my_skill.hide();
		$my_intern.hide();
		$my_exp.hide();
		setTimeout(function(){
            $my_skill_row_div.removeClass('my_skill_move');
			$my_intern_cont.removeClass('my_intern_cont_move');
            $my_exp_div.removeClass("my_skill_move");
		},100);
	}

	// 遥控器上点击不同资料按钮，电视内容切换
	$control_cats.on("click",function(){
		var data_status = $tv_btn.data('status');
		if (data_status == "on") {
			$control_cats.removeClass('cats_active').addClass('cats_negative');
			$(this).addClass('cats_active').removeClass('cats_negative');
			var cats_index = $(this).index();

			setTimeout(function(){
			$control_btn.removeClass("control_btn_move")
		},0)
			// 点击个人资料
			if (cats_index == 0) {
				$my_photo.removeClass('my_photo_move');
				$my_name_box.removeClass('my_name_box_move');
				$tap_1.removeClass('tap_1_move');
				$tap_2.removeClass('tap_2_move');
				$tap_3.removeClass('tap_3_move');
				$tap_4.removeClass('tap_4_move');
				$my_icon_box.delay(500).fadeIn(500);
				tvContChange();
			}
			// 点击技能树
			else if(cats_index == 1){
				tvContChange();
				fileLeft();
				$my_skill.show();
				setTimeout(function(){
					$my_skill_row_div.addClass('my_skill_move');
				},200);

			}
			// 点击前端之路
			else if(cats_index == 2){

				tvContChange();
				fileLeft();
				$my_intern.show();
				setTimeout(function(){
					$my_intern_cont.addClass('my_intern_cont_move');
				},200);
			}
			// 点击关于我
			else if (cats_index == 3) {

				tvContChange();
				fileLeft();
                $my_exp.show();
                setTimeout(function(){
                    $my_exp_div.addClass('my_skill_move');
                },200);
			}
		}

	});

	// 电视开关控制
	function tv_on_toggle(){
		var data_status = $tv_btn.data('status');
		if (data_status == "on") {
			$tv_blank.show();
			$tv_btn.data('status','off');
			setTimeout(function(){
				$tv_blank_up.addClass('tv_blank_up_move');
				$tv_blank_down.addClass('tv_blank_down_move');
			},100);
		}
		else if(data_status == "off"){
            $tv_blank_up.removeClass('tv_blank_up_move').addClass('tv_blank_up');
            $tv_blank_down.removeClass('tv_blank_down_move').addClass("tv_blank_down");
			$tv_btn.data('status','on');
			setTimeout(function(){
                $tv_blank.fadeOut(1000);
			},0);
		}
	}

	// 点击电视上的开关
	$tv_btn.click(function(){
		tv_on_toggle();
	});


	// 点击“更多作品展示”按钮
	$works.click(function(){
		$works_gif.css("z-index",1);//打开gif图片
		var data_status = $tv_btn.data('status');
		if (data_status == "on") {//判断电视是否打开

			$tv_hand.addClass('tv_hand_move');//电视机小手的显示动作
			$work_header.show();//更多作品页头部展现
			setTimeout(function(){
				tv_on_toggle();//关闭电视
                $work_wrapper.show();//更多作品页打开
			},800);
			setTimeout(function(){
				$wrapper.addClass('wrapper_move');//使得首页wrap 向上平移隐藏
				$tv_hand.removeClass('tv_hand_move');//移除电视机小手显示动作
			},1800);
            //改变body背景颜色
			setTimeout(function(){
				$body.addClass('body_move');
			},1000);
		}
		else{
			$work_wrapper.show();
			$work_header.show();
			setTimeout(function(){
				$wrapper.addClass('wrapper_move');
                $tv_hand.removeClass('tv_hand_move');
			},200);
			setTimeout(function(){
				$body.addClass('body_move');
			},1200);
		}
	});

	//鼠标放在作品展示
		
	// 点击“回看电视”按钮
	$back_btn.click(function(){
		// $work_header.removeClass('work_header_now');
		$('body').animate({scrollTop:0},200);
		setTimeout(function(){
			$wrapper.removeClass('wrapper_move');//首页出现.
		},500);
		setTimeout(function(){
			$body.removeClass('body_move');//body背景颜色切换
			$work_wrapper.hide();//底部页面隐藏
			$work_header.hide();//标题隐藏
			$tv_hand.addClass('tv_hand_move');//手部动作
		},1500);
		setTimeout(function(){
			tv_on_toggle();//打开电视
		},2400);
		setTimeout(function(){
			$tv_hand.removeClass('tv_hand_move');//移除手部动作
			$works_gif.css("z-index",-1);
		},2700);
	});

	// 一键面试-标题出现
	function showQList(){
		$view.show();//面试页面展现
        $a_pre.show();
        $welcome_work_p.show();
		var time = new Date().getHours();
		if (time >0 && time <= 2){
			$welcome_work_p.text('夜深了,明天不用上班了吗');
		}
		else if (time >2 && time <=5){
			$welcome_work_p.text('熬夜可要注意身体……');
		}
		else if (time >6 && time <=9){
			$welcome_work_p.text('早上好啊,早饭吃了吗？');
		}
		else if (time >9 && time <=11){
			$welcome_work_p.text('上午好,今天天气怎么样？');
		}
		else if (time >11 && time <= 14){
			$welcome_work_p.text('中午打算吃啥？面试官');
		}
		else if (time >14 && time <=18){
			$welcome_work_p.text('中午午休了么？面试官');
		}
		else {
			$welcome_work_p.text('下班回家了么？面试官');
		}
		setTimeout(function(){
			$welcome_work_p.addClass('welcome_work_p_move');
		},100);
		setTimeout(function(){
			$welcome_work_p.fadeOut(100);
			$my_pic_work.addClass('my_pic_work_move');
			$my_a_box.addClass('my_a_box_move');
		},2200);
		setTimeout(function(){
			$q_list.addClass('q_list_move');
		},3200);
		setTimeout(function(){
			$q_list_1.addClass('q_list_1_move');
			$q_list_2.addClass('q_list_2_move');
			$q_list_3.addClass('q_list_3_move');
			$q_list_4.addClass('q_list_4_move');
			$q_list_5.addClass('q_list_5_move');
		},3700);
        //延时出现
		setTimeout(function(){
			$q_list_cont.eq(0).fadeIn(300);
			$q_list_cont.eq(1).delay(200).fadeIn(300);
			$q_list_cont.eq(2).delay(400).fadeIn(300);
			$q_list_cont.eq(3).delay(600).fadeIn(300);
			$q_list_cont.eq(4).delay(800).fadeIn(300);
			$a_pre.addClass('a_pre_move');//出现
		},4700);
		setTimeout(function(){
			$view_off.addClass('fa-key_move');//出现关闭图标
		},5400);
	}



	// 点击一键面试
	$control_view.click(function(){
		showQList();
	});

	// 关闭一键面试
	$view_off.click(function(){
		// 隐藏view
        $fa_key.removeClass("fa-toggle-on").addClass("fa-toggle-off");
        setTimeout(function(){
            $view.hide();
            $welcome_work_p.removeClass('welcome_work_p_move');//还原，方便下次进入
            // $welcome_work_p.show();
            $my_a_box.removeClass('my_a_box_move');//还原位置
            $q_list.removeClass('q_list_move');//还原位置
            $q_list_1.removeClass('q_list_1_move');
            $q_list_2.removeClass('q_list_2_move');
            $q_list_3.removeClass('q_list_3_move');
            $q_list_4.removeClass('q_list_4_move');
            $q_list_5.removeClass('q_list_5_move');
            $q_list_cont.hide();
            $a_pre.removeClass('a_pre_move');
            $view_off.removeClass('fa-key_move');
            $my_pic_work.removeClass('my_pic_work_move')
            qListMoveOut();
            $fa_key.removeClass("fa-toggle-off").addClass("fa-toggle-on");
        },500)

	});

	// 去掉所有问题的动画
	function qListMoveOut(){
		$a_pre.hide();
		$a_1.hide();
		$a_2.hide();
		$a_3.hide();
		$a_4.hide();
		$a_5.hide();

		$a_1_p.eq(0).removeClass('a_1_p_1');
		$a_1_p.eq(1).removeClass('a_1_p_2');
		$a_1_p.eq(2).removeClass('a_1_p_3');
		$a_1_p.eq(3).removeClass('a_1_p_4');
		$a_1_p.eq(4).removeClass('a_1_p_5');
		$a_1_p.eq(5).removeClass('a_1_p_6');
		$a_1_p.eq(6).removeClass('a_1_p_7');
		$a_1_p.eq(7).removeClass('a_1_p_8');

		$a_2_p.eq(0).removeClass('a_2_p_1');
		$a_2_p.eq(1).removeClass('a_2_p_2');
		$a_2_p.eq(2).removeClass('a_2_p_3');
		$a_2_p.eq(3).removeClass('a_2_p_4');
		$a_2_p.eq(4).removeClass('a_2_p_5');
		$a_2_img.removeClass('a_2_img_show');
		$a_2_img_img.removeClass('a_2_img_img_move');

		$a_3_p.eq(0).removeClass('a_3_p_1');
		$a_3_p.eq(1).removeClass('a_3_p_2');
		$a_3_p.eq(2).removeClass('a_3_p_3');
		$a_3_p.eq(3).removeClass('a_3_p_4');
		$a_3_p.eq(4).removeClass('a_3_p_5');
		$a_3_p.eq(5).removeClass('a_3_p_6');

		$a_4_p.eq(0).removeClass('a_4_p_1');
		$a_4_p.eq(1).removeClass('a_4_p_2');
		$a_4_p.eq(2).removeClass('a_4_p_3');
		$a_4_p.eq(3).removeClass('a_4_p_4');
		$a_4_p.eq(4).removeClass('a_4_p_5');
		$a_4_p.eq(5).removeClass('a_4_p_6');
		$a_4_img_cry.removeClass('a_4_img_cry_move');
		$a_4_img_flash.removeClass('a_4_img_flash_move');

		$a_5_p.eq(0).removeClass('a_5_p_1');
		$a_5_p.eq(1).removeClass('a_5_p_2');
		$a_5_p.eq(2).removeClass('a_5_p_3');
		$a_5_p.eq(3).removeClass('a_5_p_4');
		$a_5_p.eq(4).removeClass('a_5_p_5');
		$a_5_p.eq(5).removeClass('a_5_p_6');
		$a_5_p.eq(6).removeClass('a_5_p_7');
		$a_5_p.eq(7).removeClass('a_5_p_8');
	}

	// 第一个问题答案出现
	$q_list_num.eq(0).click(function(){
        //开始之前先关闭所有的动画
		qListMoveOut();
        //第一个问题答案 显示
		$a_1.show();
		setTimeout(function(){
			$a_1_p.eq(0).addClass('a_1_p_1');
			$a_1_p.eq(1).addClass('a_1_p_2');
			$a_1_p.eq(2).addClass('a_1_p_3');
			$a_1_p.eq(3).addClass('a_1_p_4');
			$a_1_p.eq(4).addClass('a_1_p_5');
			$a_1_p.eq(5).addClass('a_1_p_6');

		},100);
	});

	//第二个问题答案出现
	$q_list_num.eq(1).click(function(){
		qListMoveOut();
		$a_2.show();
		setTimeout(function(){
			$a_2_p.eq(0).addClass('a_2_p_1');
			$a_2_p.eq(1).addClass('a_2_p_2');
			$a_2_p.eq(2).addClass('a_2_p_3');
			$a_2_p.eq(3).addClass('a_2_p_4');
			$a_2_p.eq(4).addClass('a_2_p_5');
		},100);
	});

	// 第三个问题答案出现
	$q_list_num.eq(2).click(function(){
		qListMoveOut();
		$a_3.show();
		setTimeout(function(){
			$a_3_p.eq(0).addClass('a_3_p_1');
			$a_3_p.eq(1).addClass('a_3_p_2');
			$a_3_p.eq(2).addClass('a_3_p_3');
			$a_3_p.eq(3).addClass('a_3_p_4');
			$a_3_p.eq(4).addClass('a_3_p_5');
			$a_3_p.eq(5).addClass('a_3_p_6');
		},100);
	});

	// 第四个问题答案出现
	$q_list_num.eq(3).click(function(){
		qListMoveOut();
		$a_4.show();
		setTimeout(function(){
			$a_4_p.eq(0).addClass('a_4_p_1');
			$a_4_p.eq(1).addClass('a_4_p_2');
			$a_4_p.eq(2).addClass('a_4_p_3');
			$a_4_p.eq(3).addClass('a_4_p_4');
			$a_4_p.eq(4).addClass('a_4_p_5');
			$a_4_p.eq(5).addClass('a_4_p_6');
			$a_4_img_cry.addClass('a_4_img_cry_move');
			$a_4_img_flash.addClass('a_4_img_flash_move');
		},100);
	});

	// 第五个问题答案出现
	$q_list_num.eq(4).click(function(){
		qListMoveOut();
		$a_5.show();
		setTimeout(function(){
			$a_5_p.eq(0).addClass('a_5_p_1');
			$a_5_p.eq(1).addClass('a_5_p_2');
			$a_5_p.eq(2).addClass('a_5_p_3');
			$a_5_p.eq(3).addClass('a_5_p_4');
			$a_5_p.eq(4).addClass('a_5_p_5');
			$a_5_p.eq(5).addClass('a_5_p_6');
			$a_5_p.eq(6).addClass('a_5_p_7');
			$a_5_p.eq(7).addClass('a_5_p_8');
		},100);
	});
    //个人作品无缝轮播

    var auto;

      playAuto();
    $work_show.on("mouseover",function(){
         stopAuto();
         console.log(0);
        $arrow_show.addClass("fa_active");
    });

    $work_show.on("mouseout",function(){
         playAuto();
         console.log(1);
        $arrow_show.removeClass("fa_active");
    });

    $workl_show_ct.css("width",$imgWidth*$imgNum);

    $show_prew.on("click",function(){

        playPrew()
    });

    $show_next.on("click",function(){

        playNext()
    });

    $show_tip.on("click","li",function(){
        var tem=$(this).index();
        if(tem>$show_num){
            playNext(tem-$show_num);
        }else if(tem<$show_num){
            playPrew($show_num-tem);
        }else if(tem==$show_num){

        }
    });

    function playNext(tem){
        var idx=tem||1;
        if($show_key==true){
            return;
        }
        $show_key=true;
        $workl_show_ct.animate({
            "left":"-="+$imgWidth*idx
        },function(){
            $show_num=($show_num+idx)%$imgNum;
            for(var i=0;i<idx;i++){
                $workl_show_ct.append($workl_show_ct.children().first())
            }
            $workl_show_ct.css("left",0);
            $show_key=false;
            setButton();

        })
    }

    function playPrew(tem){
        var idx=tem||1;
        if($show_key==true){
            return;
        }
        $show_key=true;
        for(var i=0;i<idx;i++){
            $workl_show_ct.prepend($workl_show_ct.children().last())
        }
        $workl_show_ct.css("left",0-$imgWidth*idx);
        $workl_show_ct.animate({
            "left":"+="+$imgWidth*idx
        },function(){
            $show_num=($imgNum+$show_num-idx)%$imgNum;
            $show_key=false;
            setButton()
        })
    }
    function setButton(){
        $show_tip.children().removeClass("show_tip_active");
        $show_tip.children().eq($show_num).addClass("show_tip_active");
    }

    function stopAuto(){
        clearInterval(auto)
    }
    function playAuto(){
        if(auto){
            clearInterval(auto)
        }
        auto=setInterval(function(){
            playNext();
        },7000)
    }
			$workl_show_ct.find("li").on("mouseover",function(){
				$(this).find("div").addClass("div_move");
				

			}).on("mouseout",function(){
				$(this).find("div").removeClass("div_move")
				
			})



    // 掌握技能动态加载
        var $myskill_hidden=$(".myskill_hidden"),
            $myskill_html=$(".myskill_html .myskill_box1"),
            $myskill_js=$(".myskill_js .myskill_box1"),
            $myskill_frame=$(".myskill_frame .myskill_box1"),
            $myskill_ps=$(".myskill_ps .myskill_box1"),
            $myskill_browser=$(".myskill_browser .myskill_box1"),
            $myskill_editor=$(".myskill_editor .myskill_box1"),
            $myskill_box1=$(".myskill .myskill_box1");


function creat(content){
		var str="";
			str+='<div class="gototop" id="gototop">'+
					'<div class="bow"></div>'+
					'<div class="arrow"></div>'+
					'<p>'+content+'</p>'+
					'</div>'+
					'<div class="gototop_on" id="gototop_on">'+
					'<div class="bow"></div>'+
					'<div class="arrow"></div>'+
					'</div>';
			$("body").append($(str));
}
creat("为了联盟");


		var $gototop = $('#gototop'),
			$gototop_on = $('#gototop_on'),
			$body = $('body'),
			$gototop_p = $('#gototop>p'),
			$gototop_arrow = $('#gototop>.arrow'),
			$gototop_bow = $('#gototop>.bow'),
			$gototop_on_arrow = $('#gototop_on>.arrow');

	// 回到顶部与掌握技能动态加载
	function gotoTop(min_height){
		$gototop.hover(function(){
			$gototop_p.text('去首页和我聊聊');
		},function(){
			$gototop_p.text('为了联盟');
		});
		// 回到顶部按钮点击后向上平滑滚动
		$gototop.click(function(){

			$gototop_on.show();
			$('body').animate({scrollTop:0},400);
			$gototop_on_arrow.addClass('arrow_move');
			$gototop_arrow.hide();
			$gototop_bow.hide();
			$gototop_on_arrow.hide();
			$gototop_on.fadeOut(1000);
		
		});

		$(window).on("scroll",function(){
			// 获取当前滚动条的垂直位置
			var cur_h = $(window).scrollTop(),
            hidden_top=$myskill_hidden.offset().top,//获取底部容器的位置
            scroll_top=$(window).scrollTop();//获取窗口的滑动的距离
            window_height=$(window).height();//获取窗口的高度

            //如果看到了底部容器，动态加载
            if(hidden_top<(scroll_top+window_height)){
                setTimeout(function(){
                    $myskill_html.addClass("myskill_html_move").children().show();

                },200);
                setTimeout(function(){
                    $myskill_js.addClass("myskill_js_move").children().show();

                },400)
                setTimeout(function(){
                    $myskill_frame.addClass("myskill_frame_move").children().show();

                },600)
                setTimeout(function(){
                    $myskill_ps.addClass("myskill_ps_move").children().show();

                },800)
                setTimeout(function(){
                    $myskill_browser.addClass("myskill_browser_move").children().show();

                },1000)
                setTimeout(function(){
                    $myskill_editor.addClass("myskill_editor_move").children().show();


                },1200)
            };
            if(hidden_top>(scroll_top+window_height)){
                    $myskill_html.removeClass("myskill_html_move")
                    $myskill_js.removeClass("myskill_js_move")
                    $myskill_frame.removeClass("myskill_frame_move")
                    $myskill_ps.removeClass("myskill_ps_move")
                    $myskill_browser.removeClass("myskill_browser_move")
                    $myskill_editor.removeClass("myskill_editor_move")

            };
            if($myskill_box1.width()<30){
                $myskill_box1.children().hide();
            }
			// 滚动超过一定距离时，让goTop出现
            if(cur_h>min_height){
                $gototop.fadeIn(800);
            }else if(cur_h<min_height){
                $gototop.fadeOut(800)
            }
		});
    }
    gotoTop(400);
    $(".photo_outer").addClass('remove')
    console.log("hello,我是李瑞,现在正在寻找一份前端工作")
    console.log("本页面js代码已用requirejs打包,关于细节部分说明已在博客贴出")
    console.log("未做IE兼容")


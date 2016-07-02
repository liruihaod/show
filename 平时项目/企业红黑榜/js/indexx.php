<?php
    // 后端 php 测试接口文件
        $keyword =$_GET['keyWord']; //回答
        $keycontent=$_GET['keyContent']//留言
        $ret=arrary('status'=>1,'keyword'=>$keyword,'keycontent'=>$keycontent)
//{status: 1}
sleep(0.5);
echo json_encode($ret);

<?php
    // 后端 php 测试接口文件
    $answer = $_GET['answer']; //回答答案

  if($answer==="赵日天"){
        $ret = array('status'=>1, 'data'=>$answer);
    }else{
        $ret = array('status'=>2, 'data'=>$answer);
    }

//{status: 1}
sleep(0.5);
echo json_encode($ret);

<?php
require_once 'db.php';
mysqli_query($link,'SET NAMES utf8');
	$newstitle=$_POST['newstitle'];
	$newstime=$_POST['newstime'];
	$newstype=$_POST['newstype'];
	$newsimg=$_POST['newsimg'];
	$newsid=$_POST['newsid'];
	$sql="UPDATE `news` SET `newstype`='{$newstype}',`newstime`='{$newstime}',`newstitle`='{$newstitle}',`newsimg`='{$newsimg}' WHERE `newsid`='{$newsid}'";
	mysqli_query($link,'SET NAMES utf8');
	$result=mysqli_query($link,$sql);
	echo json_encode(array('success'=>$sql));
?>
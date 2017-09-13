<?php
require_once 'db.php';
if ($link) {
mysqli_query($link,'SET NAMES utf8');
	$newstitle=$_POST['newstitle'];
	$newstime=$_POST['newstime'];
	$newstype=$_POST['newstype'];
	$newsimg=$_POST['newsimg'];
	$sql="INSERT INTO `news`( `newstype`, `newstime`, `newstitle`, `newsimg`) VALUES ('{$newstype}','{$newstime}','{$newstitle}','{$newsimg}')";
	$result=mysqli_query($link,$sql);
	echo json_encode($sql);
}
?>
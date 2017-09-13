<?php
require_once 'db.php';
mysqli_query($link,'SET NAMES utf8');
if($link){
	$newsid=$_POST['newsid']; 
	 $sql = "DELETE FROM `news` WHERE `news`.`newsid` = {$newsid}";
	mysqli_query($link,$sql);
	echo json_encode($newsid);
}
mysqli_close($link);
?>

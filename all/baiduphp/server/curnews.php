<?php
require_once 'db.php';
mysqli_query($link,'SET NAMES utf8');
if($link){
	$newsid=$_GET['newsid']; 
	$sql="SELECT * FROM `news` WHERE `newsid`={$newsid}";
	$result=mysqli_query($link,$sql);
	$senddata=array();
	while ($row=mysqli_fetch_assoc($result)) {
		array_push($senddata, array(
			'newsid' => $row['newsid'],
			'newstype'=>$row['newstype'],
			'newstitle' => $row['newstitle'],
			'newsimg'=>$row['newsimg'],
			'newstime'=>$row['newstime']
			));	
	}
	echo json_encode($senddata);
}
mysqli_close($link);
?>

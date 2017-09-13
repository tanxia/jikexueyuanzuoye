<?php
require_once 'db.php';
if($link){
	$sql='SELECT * FROM news';
	mysqli_query($link,'SET NAMES utf8');
	$result=mysqli_query($link,$sql);
	$arc = array();
	while ($row=mysqli_fetch_assoc($result)) {
		array_push($arc, array(
			'newsid' => $row['newsid'],
			'newstype'=>$row['newstype'],
			'newstitle' => $row['newstitle'],
			'newsimg'=>$row['newsimg'],
			'newstime'=>$row['newstime']
			));	
	}
	echo json_encode($arc);
}
else{
	$ar = array('success' =>'no' );
	echo json_encode($ar);
}
?>
<?php

	date_default_timezone_set("PRC");  

	$time = 1502328508;
	
	$stamp = date('Y-m-d H:i:s', $time);
	
	$year = date('Y', $time);
	
	$month = date('m', $time);
	
	$tablematch = 'match_'.$year.'_'.$month;
	
	$today = strtotime(date("Y-m-d"),time());
	
	$todayend = $today+60*60*24-1;
	
	$endstamp = date("Y-m-d H:i:s", $todayend);
	
	
	$nextday = $today + (1*86400);
	$nextdayend = $todayend + (1*86400);
	
	$nextday_stamp = date("Y-m-d H:i:s", $nextday);
	$nextdayend_stamp = date("Y-m-d H:i:s", $nextdayend);
	
	echo $nextday_stamp;
	echo '<br/>';
	echo $nextdayend_stamp;
	echo '<br/>';
	
	$next2day = $today + (2*86400);
	$next2dayend = $todayend + (2*86400);
	
	$next2day_stamp = date("Y-m-d H:i:s", $next2day);
	$next2dayend_stamp = date("Y-m-d H:i:s", $next2dayend);
	
	echo $next2day_stamp;
	echo '<br/>';
	echo $next2dayend_stamp;
	echo '<br/>';
	
	
	$str = "test123_20170810155040";
	$str1 = strstr($str,'_');
	echo $str1;
	echo '<br/>';
	
	$str2 = substr($str1, 1, 4); 
	echo $str2;
	echo '<br/>';
	
	$str3 = substr($str1, 5, 2); 
	echo $str3;
	echo '<br/>';
	
	echo $nowtime=intval(time());

?>
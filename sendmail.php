<?php

	$fromEmail      =  strip_tags($_POST['email']);
    $fromName       =  strip_tags($_POST['name']);
	$phonenumber    =  strip_tags($_POST['phone']);
    $subject        =  strip_tags($_POST['subject']);
    $themessage     =  strip_tags($_POST['message']);
    $themessage     =  $themessage."the sender phone number is ".$phonenumber ;
    $toEmail = 'admin@evolveservers.com';
    $toName = 'Evolve Servers';

    $headers = 'From:' .$fromName . "\r\n" .
    'Reply-To:' .$fromEmail. "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if(mail($toEmail, $subject, $themessage, $headers))
    echo "success";
else
    echo "An error has be occured"; 

?>

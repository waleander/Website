<?php

function my_nl2br($string){
    $string = str_replace("\n", "<br />", $string);
        if(preg_match_all('/\<pre\>(.*?)\<\/pre\>/', $string, $match)){
            foreach($match as $a){
            foreach($a as $b){
            $string = str_replace('<pre>'.$b.'</pre>', "<pre>".str_replace("<br />", "", $b)."</pre>", $string);
            }
        }
    }
return $string;
}

//POST Name
if ((isset($_POST['c_name'])) && (strlen(trim($_POST['c_name'])) > 0)) {
	$c_name = stripslashes(strip_tags($_POST['c_name']));
} else {$c_name = 'No name entered';}

// POST Email
if ((isset($_POST['c_email'])) && (strlen(trim($_POST['c_email'])) > 0)) {
	$c_email = stripslashes(strip_tags($_POST['c_email']));
} else {$c_email = 'No email entered';}

// POST telephone
if ((isset($_POST['c_telephone'])) && (strlen(trim($_POST['c_telephone'])) > 0)) {
	$c_telephone = stripslashes(strip_tags($_POST['c_telephone']));
} else {$c_telephone = 'No telephone entered';}

// POST telephone
if ((isset($_POST['c_company'])) && (strlen(trim($_POST['c_company'])) > 0)) {
	$c_company = stripslashes(strip_tags($_POST['c_company']));
} else {$c_company = 'No telephone entered';}
 
// POST Message
if ((isset($_POST['c_message'])) && (strlen(trim($_POST['c_message'])) > 0)) {
	
	$c_message = nl2br(htmlspecialchars($_POST['c_message']));
	
	// $c_message = stripslashes(strip_tags($_POST['c_message']));
} else {$c_message = 'No message entered';}
ob_start();
?>
<html>
<head>
<style type="text/css">
</style>
</head>
<body>

<p><strong>Name:</strong><br /> <?php echo $c_name;?><br /><br />  
<strong>Telephone:</strong><br /> <?php echo $c_telephone;?><br /><br /> 
<strong>Email:</strong><br /> <?php echo $c_email;?><br /><br /> 
<strong>Company:</strong><br /> <?php echo $c_company;?><br /><br /> 
<strong>Message:</strong><br /> <?php echo $c_message;?><br /><br />
<strong>Sender IP:</strong><br /> <?php echo $ip = $_SERVER['REMOTE_ADDR'];?>

</body>
</html>
<?php
$body = ob_get_contents();
$altbody ="Name: ".$c_name." \n";
$altbody .="Telephone: ".$c_telephone." \n";
$altbody .="Email: ".$c_email." \n";
$altbody .="Company: ".$c_company." \n";
$altbody .="Message: ".$c_message." \n";
$altbody .="Sender IP: ".$_SERVER['REMOTE_ADDR']." \n";

require("phpmailer.php");

$mail = new PHPMailer();

$mail->From     = "$c_email";
$mail->FromName = "$c_name";
$mail->AddAddress("info@bigfielddigital.com","Big Field Digital");

$mail->WordWrap = 50;
$mail->IsHTML(true);

$mail->Subject  =  "New message from $c_name - Big Field Digital website";
$mail->Body     =  $body;
$mail->AltBody  =  $altbody;

if(!$mail->Send()) {
	$recipient = 'info@bigfielddigital.com';
	$subject = 'Contact form failed';
	$content = $body;	
  mail($recipient, $subject, $content, "From: info@bigfielddigital.com\r\nReply-To: $email\r\nX-Mailer: DT_formmail");
  exit;
}
?>

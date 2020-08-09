<?php


if (isset($_POST['submit'])){
	
	if($_POST['other-message'] === ""){
	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$mailFrom = $_POST['email'];
	$phone = $_POST['phone'];
	$message = $_POST['message'];

	$mailTo = "enquiries@tomgtyler.co.uk";
	$personFrom = "from: ".$mailFrom;
	$txt = "You have received an email from ".$name.".\n\n Their email adress is ".$mailFrom.".\n\n Their phone number is ".$phone.".\n\n Their message is \n\n".$message;

	mail($mailTo, $subject, $txt, $personFrom);
	header("location: index.html");

	} else {
		header("location: index.html");
	}

}

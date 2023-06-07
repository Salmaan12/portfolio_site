<?php

$fname = $_POST['fname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// $sql = "insert INTO `contact`(`fname`, `email`, `phone`, `message`) VALUES ('$fname','$email','$phone','$message')";

$subject = "Client are CONTACT YOU";
$sendEmailTo = "salmanchottani123@gmail.com";

$msg = "User: $fname \r\n Email: $email \r\n Number: $phone \r\n Message: $message";

if (mail($sendEmailTo, $subject, $msg)) {
    echo '<script> alert("Email successfully sent to ' + $sendEmailTo + '"); </script>';
} else {
    echo '<script> alert("Email not send"); </script>';
}

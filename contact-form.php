<?php

if (isset($_POST['submit'])) {
    $fullname = $_POST['fullname'];
    $mailfrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "folarinolaore93@gmail.com";
    $headers = "From: ".$mailfrom;
    $txt = "You have received an email from ".$fullname.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: ThankYou.html");
}

?>
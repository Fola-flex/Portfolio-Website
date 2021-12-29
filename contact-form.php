<?php

if (isset($_POST['submit'])) {
    $fullname = $_POST['fullname'];
    $mailfrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "folarinolaore93@gmail.com";
    $headers = "From: ".$mailfrom;
    $txt = "You have received an email from ".$name."."\n\n".$message;

    mail($mailTo, $txt, $headers);
    header("Location: Contact.php?mailsend");
}

?>
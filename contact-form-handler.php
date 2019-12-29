<?php
    $name= $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_form='adamroszcz@gmail.com';
    $email_subject = "New Form Submission";
    $email_body = "User name: $name.\n".
    "User Email:$visitor_email.\n".
    "User Message: $message.\n"; 
    $to = "adamroszcz@gmail.com";
    $headers="Form: $email_form \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);
    header("Location: index.html");
?>
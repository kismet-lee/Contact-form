<?php
$name = htmlspecialchars ($_POST['name']);
$email = htmlspecialchars ($_POST['email']);
$phone = htmlspecialchars($_POST['phone']);
$website = htmlspecialchars($_POST['website']);
$message = htmlspecialchars($_POST['message']);

if (!empty($email) && !empty($message)){ // if the email and message fields are not empty
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){ // if user entered email is valid
    $receiver = "receive_email_address";
    $subject = "From: $name <$email>";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\n\n Message:\n$message\n\nRegards,\n$name";
    $sender = "From $email";
    if (mail ($receiver, $subject, $body, $sender)){
    echo "Your message has been sent";
    }else{
    echo "Sorry, failed to send your message!";
    }
    }else{
    echo "Enter a valid email address!";
    }
}else{
    echo "Email and password field are required!";
}
?>
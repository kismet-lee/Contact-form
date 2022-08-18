<?php
echo "This msg is sent from PHP file";
$name = htmlspecialchars ($_POST['name']);
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$message = $_POST['message'];

echo $name;
echo $email;
?>
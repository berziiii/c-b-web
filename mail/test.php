<?php
// Multiple recipients
$to = 'berzelba@gmail.com'; // note the comma

// Subject
$subject = 'RSVP response for Wedding!';

// RSVP
$rsvp = ''

// Message
$message = 'Hey Candace and Brian!';

// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

// Additional headers
$headers[] = 'To: Mary <mary@example.com>, Kelly <kelly@example.com>';
$headers[] = 'From: Birthday Reminder <birthday@example.com>';
$headers[] = 'Cc: birthdayarchive@example.com';
$headers[] = 'Bcc: birthdaycheck@example.com';

// Mail it
mail($to, $subject, $message, implode("\r\n", $headers));
?>

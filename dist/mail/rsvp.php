<?php

if(isset($_POST['email'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED

    $email_to = "berzelba@gmail.com";

    $email_subject = "RSVP for the best day!";


    function died($error) {

        // your error code can go here

        echo "We are very sorry, but there were error(s) found with the form you submitted. ";

        echo "These errors appear below.<br /><br />";

        echo $error."<br /><br />";

        echo "Please go back and fix these errors.<br /><br />";

        die();

    }



    // validation expected data exists

    if(!isset($_POST['rsvp-names']) ||

        !isset($_POST['rsvp']) ||

        !isset($_POST['rsvp-songs']) {

        died('We are sorry, but there appears to be a problem with the form you submitted.');

    }



    $names = $_POST['rsvp-names']; // required

    $response = $_POST['rsvp']; // required

    $songs = $_POST['rsvp-songs']; // required

    $error_message = "";

    $string_exp = "/^[A-Za-z .'-]+$/";

  if(!preg_match($string_exp,$names)) {

    $error_message .= 'The Names you entered don\'t not appear to be valid.<br />';

  }

  if(!preg_match($string_exp,$songs)) {

    $error_message .= 'The Songs you entered don\'t appear to be valid.<br />';

  }

  if(strlen($error_message) > 0) {

    died($error_message);

  }

    $email_message = "Form details below.\n\n";


    function clean_string($string) {

      $bad = array("content-type","bcc:","to:","cc:","href");

      return str_replace($bad,"",$string);

    }



    $email_message .= "Names: ".clean_string($names)."\n";

    $email_message .= "Response: ".clean_string($response)."\n";

    $email_message .= "Songs: ".clean_string($songs)."\n";


// create email headers

$headers = 'From: Brian &amp; Candace Wedding'

'X-Mailer: PHP/' . phpversion();

mail($email_to, $email_subject, $email_message, $headers);

?>



<!-- include your own success html here -->



Thank you for contacting us. We will be in touch with you very soon.



<?php

}

?>

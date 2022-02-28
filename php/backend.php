<?php 
    // echo 'This is a Get Method';
    // echo '<br>';
    // echo "Hello World";
    // echo '<br>';
    // echo '<br>';
    if (isset($_POST['fname'])) {
        $firstname=$_POST['fname'];
        $lastname=$_POST['lname'];
        // echo $firstname." ".$lastname;
        $dict['firstname']=$firstname;
        $dict['lastname']=$lastname;
        $dict_to_json=json_encode($dict);
        
        echo $dict_to_json;


    }

?>
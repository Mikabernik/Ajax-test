<?php

$array = array("firstname"=>"");


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $array["firstname"]= $_POST["firstname"];
    echo json_encode($array);
};  

?>
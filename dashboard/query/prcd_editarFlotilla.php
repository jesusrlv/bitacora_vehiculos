<?php

include('qc.php');

$id = $_POST['id'];
$nombreFlotilla = $_POST['nombreFlotilla'];
$sql = "UPDATE flotilla SET 
flotilla = '$nombreFlotilla' 
WHERE 
id = '$id'";

if($conn->query($sql) === TRUE) {
    echo json_encode(array(
        "success" => "1"
    )
    );
} else {
    echo json_encode(array(
        "success" => "0",
        "error" => $conn->error
    )
    );
}
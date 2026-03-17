<?php

include('qc.php');
$nombreFlotilla = $_POST['nombreFlotilla'];
$sql = "INSERT INTO flotilla (
flotilla) 
VALUES ('$nombreFlotilla')";
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
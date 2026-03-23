<?php

include('qc.php');

$id = $_POST['id'];
$nombreMantenimiento = $_POST['nombreMantenimiento'];
$sql = "UPDATE mantenimiento SET 
tipo_mantenimiento = '$nombreMantenimiento' 
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
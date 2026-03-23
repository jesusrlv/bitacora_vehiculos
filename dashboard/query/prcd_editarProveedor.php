<?php

include('qc.php');

$id = $_POST['id'];
$nombreProveedor = $_POST['nombreProveedor'];
$sql = "UPDATE proveedor SET 
proveedor = '$nombreProveedor' 
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
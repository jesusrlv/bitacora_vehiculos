<?php

include('qc.php');
$vehiculo = $_POST['vehiculo'];
$noEconomico = $_POST['noEconomico'];
$descripcion = $_POST['descripcion'];
$flotilla = $_POST['flotilla'];

$sql = "INSERT INTO economico (
vehiculo,
no_economico, 
descripcion, 
flotilla) 
VALUES (
'$vehiculo', 
'$noEconomico', 
'$descripcion', 
'$flotilla'
)";
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
<?php

include('qc.php');
$id = $_POST['id'];
$vehiculo = $_POST['vehiculo'];
$noEconomico = $_POST['noEconomico'];
$descripcion = $_POST['descripcion'];
$flotilla = $_POST['flotilla'];

$sql = "UPDATE economico SET
vehiculo = '$vehiculo',
no_economico = '$noEconomico',
descripcion = '$descripcion',
flotilla = '$flotilla'
WHERE id = '$id'";
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
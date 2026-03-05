<?php

require('qc.php');

$id = $_POST['id'];
$numEconomico = $_POST['numEconomico'];
$mantenimiento = $_POST['mantenimiento'];
$ordenServicio = $_POST['ordenServicio'];
$km = $_POST['kilometraje'];
$proveedor = $_POST['proveedor'];
$costo = $_POST['costo'];
$fechaMantenimiento = $_POST['fechaMantenimiento'];

$sql = "UPDATE bitacora SET 
    economico = '$numEconomico', 
    tipo_mantenimiento = '$mantenimiento', 
    orden_servicio = '$ordenServicio', 
    km = '$km', 
    proveedor = '$proveedor', 
    costo = '$costo', 
    fecha_mantenimiento = '$fechaMantenimiento' 
    WHERE 
    id = '$id'";

$resultadoSql = $conn->query($sql);
if($resultadoSql) {
    echo json_encode(array('success' => 1));
} else {
    echo json_encode(array('success' => 0));
}
?>
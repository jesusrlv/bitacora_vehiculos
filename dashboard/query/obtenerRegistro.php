<?php
    require('qc.php');

    $id = $_POST['id'];
   
    $sql = "SELECT * FROM bitacora WHERE id = '$id'";
    $resultadoSql = $conn->query($sql);
    
    $row = $resultadoSql->fetch_assoc();
       if($row) {
        $id = $row['id'];
        $economico = $row['economico'];
        $tipoMantenimiento = $row['tipo_mantenimiento'];
        $ordenServicio = $row['orden_servicio'];
        $km = $row['km'];
        $proveedor = $row['proveedor'];
        $costo = $row['costo'];
        $fecha = $row['fecha_mantenimiento'];

        echo json_encode(array(
            'success' => 1,
            'id' => $id,
            'economico' => $economico,
            'tipoMantenimiento' => $tipoMantenimiento,
            'ordenServicio' => $ordenServicio,
            'km' => $km,
            'proveedor' => $proveedor,
            'costo' => $costo,
            'fecha' => $fecha
        ));
    } else {
        echo json_encode(array('success' => 0));
    }

?>
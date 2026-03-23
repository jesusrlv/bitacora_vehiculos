<?php
    require('qc.php');
   
    $id = $_POST['id'];
    $sql = "DELETE FROM mantenimiento WHERE id = '$id'";
    if($conn->query($sql) === TRUE) {
        echo json_encode(array(
            "success" => "1"
        )
        );
    } else {
        echo json_encode(array(
            "success" => "0"
        )
        );
    }
    
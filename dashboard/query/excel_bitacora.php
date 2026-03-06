<?php

header("Pragma: public");
header("Expires: 0");
$filename = "reporte_bitacora.xls";
header("Content-type: application/x-msdownload");
header("Content-Disposition: attachment; filename=$filename");
header("Pragma: no-cache");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");

echo'
<table>
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Descripción</th>
            <th scope="col">Fecha</th>
            <th scope="col">Estatus</th>
        </tr>
    </thead>
    <tbody">
';
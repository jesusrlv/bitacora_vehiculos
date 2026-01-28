$(document).ready(function () {
        // $("#myInput").on("keyup", function () {
        $('#flotilla').on('change', function() {
            var value = $(this).val().toLowerCase();
            $("#datosBitacora tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });

$(document).ready(function () {

        $('#filtroTexto').on('input', function() {
            var value = $(this).val().toLowerCase();
            $("#datosBitacora tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
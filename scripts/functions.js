$(document).ready(function () {
    var value = document.getElementById('itemDropdown').value;
    alert(value);

    $('.dropdown-menu a').click(function () {
        $('#selectedOption').text($(this).text())
    });

    $("#itemDropdown").change(function () {
        //rehide content on change
        $('.size_chart').hide()
        //shows current item
        $('#' + $(this).val()).show()
    });

    $('#setNewMinutesButton').click(function () {
        var newMinutes = $('#newMinutesInput').val()
        $("#minutesForRefreshing").text(newMinutes)
    });
});
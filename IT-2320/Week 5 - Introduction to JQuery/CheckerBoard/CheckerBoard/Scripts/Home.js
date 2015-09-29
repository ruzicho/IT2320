

$(document).ready(function () {
    var cells = $(".cell");
    var colorCount = 0;
    var Home = {};

    for (var i = 0; i < cells.length; i++) {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }
});

Home.WireClickEvent = function () {
    $(".cell").click(function ()
    {
        this.cell = "empty";
    });
}

Home.WireDragEvent = function () {
    $(".cell").draggable();
    $this.css("background-color", "yellow")

}

Home.WireHideEvent = function () {
    $(".cell").click(function ()
    {
        $(this).hide();
    })
}

Home.WireFadeEvent = function () {
    $(".row").click(function () 
    {
        $(this).fadeOut(400);
    })
}

$(document).ready(function () {

    Home.WireClickEvent();
    Home.WireDragEvent();
    Home.WireHideEvent();
    Home.WireFadeEvent();

    })









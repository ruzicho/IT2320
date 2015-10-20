var Home = {}


$(document).ready(function ()
{

  $(".player-number-button").click(function () {

    $.ajax( {

        url: "Home/GetPlayerInformation",
        success: function (response)
              { $(".output").innerHTML = response;},
        data: { "PlayerNumber": $(".player-number-textbox").val() },
    });

  });

});

    
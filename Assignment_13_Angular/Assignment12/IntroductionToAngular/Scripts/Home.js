var Home = {}
 
function myController($scope) {
    $.get("Home/GetBattingOrder", function (data, status)
    {
        $scope.list = result;
            return (result);
    }

    )
}


function myController($scope) {

    $scope.list = [

   { FirstName: 'Kenny', LastName: 'Lofton' },
   { FirstName: 'Omar', LastName: 'Vizquel' },
   { FirstName: 'Carlos', LastName: 'Baerga' },
   { FirstName: 'Albert', LastName: 'Belle' },
   { FirstName: 'Eddie', LastName: 'Murray' },
   { FirstName: 'Jim', LastName: 'Thome' },
   { FirstName: 'Manny', LastName: 'Ramirez' },
   { FirstName: 'Paul', LastName: 'Sorrento' },
   { FirstName: 'Sandy', LastName: 'Alomar' }

    ];

}
$(document).ready(function()
{

	$(".vacation").mouseover(function()
	{
		$(this).css("border","10px solid yellow");
	});

	
	$(".vacation").mouseout(function()
	{
		$(this).css("border","10px solid black");
	});

	$(".vacation").click(function()
	{
		var vacation = createVacationAsJSON();
		displayVacation(vacation);
	});
});

function displayVacation(vacation)
{
	alert(vacation.city);
	alert(vacation.country);
	alert(vacation.weather[0].month);
	alert(vacation.weather[0].highTemp);
	alert(vacation.weather[0].lowTemp);

	for (var i=0; i<vacation.weather.length; i++)
	{
		var temp = vacation.weather[i];
		alert(temp.month + " " + temp.highTemp + " " + temp.lowTemp + " ");
	}
	
}

function createVacationAsJSON()
{
	return {

		"city" : "Paris",
		"country" : "France",
		"weather" :    [
	{
		"month" : "January",
		"highTemp" : "45 degrees fahrenheit",
		"lowTemp" : "37 degrees fahrenheit"
	},
	{
		"month" : "May",
		"highTemp" : "67 degrees fahrenheit",
		"lowTemp" : "52 degrees fahrenheit"
	},
	{
		"month" : "October",
		"highTemp" : "61 degrees fahrenheit",
		"lowTemp" : "49 degrees fahrenheit"
	}	]

};

}
		
		
		
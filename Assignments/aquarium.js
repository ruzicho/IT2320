var x = document.getElementsByClassName('popup');

	for (var i=0;i<x.length;i++=1)
{

	x[i].onclick = function ()

	{
		window.open(this.href,'popup','arguments');
		return false;
	}
}
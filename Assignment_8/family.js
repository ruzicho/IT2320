var Family = {};

Family.Human = function(firstName, lastName, age, height, weight, eyeColor)
{
	this.FirstName = firstName;
	this.LastName = lastName;
	this.Age = age;
	this.Height = height;
	this.Weight = weight;
	this.EyeColor = eyeColor;
}

Family.Phillip = new Family.Human("Phillip", "Ruzicho", 23, 68, 180, "Brown");
Family.Rosemary = new Family.Human("Rosemary", "Ruzicho", 55, 62, 140, "Brown");
Family.Michael = new Family.Human("Michael", "Ruzicho", 71, 72, 200, "Blue");
Family.James = new Family.Human("James", "Ruzicho", 26, 64, 210, "Brown");
Family.Daniel = new Family.Human("Daniel", "Ruzicho", 37, 66, 186, "Brown");
Family.Michael = new Family.Human("Michael", "Ruzicho", 38, 70, 220, "Brown");
Family.Carol = new Family.Human("Carol", "Ruzicho", 26, 66, 160, "Blue");
Family.Grace = new Family.Human("Grace", "Ruzicho", 6, 42, 50, "Blue");
Family.Jordan = new Family.Human("Jordan", "Ruzicho", 3, 34, 32, "Blue");

Family.Human.prototype.GetFullName = function()
{
	return this.FirstName + " " + this.LastName;
}
Family.Human.prototype.SetFirstName = function(name)
{
	this.FirstName = name;
}
Family.Human.prototype.SetLastName = function(name)
{
	this.LastName = name;
}
Family.Human.prototype.SetAge = function(age)
{
	this.Age = age;
}
Family.Human.prototype.SetHeight = function(height)
{
	this.Height = height;
}
Family.Human.prototype.SetWeight = function(weight)
{
	this.Weight = weight;	
}
Family.Human.prototype.SetEyeColor = function(eyeColor)
{
	this.EyeColor = eyeColor;
}

document.body.innerHTML = Family.Phillip.GetFullName();
document.body.innerHTML = Family.Rosemary.GetFullName();
document.body.innerHTML = Family.Michael.GetFullName();
document.body.innerHTML = Family.Daniel.GetFullName();
document.body.innerHTML = Family.Michael.GetFullName();
document.body.innerHTML = Family.Carol.GetFullName();
document.body.innerHTML = Family.Grace.GetFullName();
document.body.innerHTML = Family.Jordan.GetFullName();



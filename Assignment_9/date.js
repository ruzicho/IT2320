{
var currentDate = new Date()
var day = currentDate.getDate()
var monthNames = [ "January", "February", "March", "April", "May", "June",
 "July", "August", "September", "October", "November", "December" ];
var month = monthNames[currentDate.getMonth()]
var year = currentDate.getFullYear()
document.write("<b>" + month + " " + day + ", " + year + "</b>")
}

          
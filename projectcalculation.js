function calc()
{
var one = Number(document.getElementById("profit").value);
var two = Number(document.getElementById("motor").value);
var three = Number(document.getElementById("insurance").value);
var four = Number(document.getElementById("motortax").value);
var five = Number(document.getElementById("fuel").value);
var six = Number(document.getElementById("repairs").value);
var seven = Number(document.getElementById("equipcost").value);
var eight = Number(document.getElementById("equiphire").value);
var nine = Number(document.getElementById("equiprepairs").value);
var ten = Number(document.getElementById("rent").value);
var eleven = Number(document.getElementById("rates").value);
var twelve = Number(document.getElementById("fixtures").value);
var thirteen = Number(document.getElementById("ads").value);
var fourteen = Number(document.getElementById("loan").value);
var fifteen = Number(document.getElementById("legal").value);
var sixteen = Number(document.getElementById("accountant").value);
var seventeen = Number(document.getElementById("wages").value);
var eighteen = Number(document.getElementById("eprsi").value);
var nineteen = Number(document.getElementById("materials").value);
var twenty = Number(document.getElementById("lightandheat").value);
var twentyone = Number(document.getElementById("pbroad").value);
var twentytwo = Number(document.getElementById("mobile").value);
var twentythree = Number(document.getElementById("webdesign").value);
var twentyfour = Number(document.getElementById("webhosting").value);
var twentyfive = Number(document.getElementById("pso").value);
var twentysix = Number(document.getElementById("publia").value);
var twentyseven = Number(document.getElementById("misc").value);
var twentyeight = Number(document.getElementById("totaltax").value);
var price = Number(document.getElementById("priceperunit").value);

document.getElementById("totalexp").value= two + three + four + five + six + seven + eight + nine + ten + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen + nineteen + twenty + twentyone + twentytwo + twentythree + twentyfour + twentyfive + twentysix + twentyseven;
document.getElementById("minneeds").value= one + two + three + four + five + six + seven + eight + nine + ten + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen + nineteen + twenty + twentyone + twentytwo + twentythree + twentyfour + twentyfive + twentysix + twentyseven + twentyeight;
document.getElementById("sales").value= (one + two + three + four + five + six + seven + eight + nine + ten + eleven + twelve + thirteen + fourteen + fifteen + sixteen + seventeen + eighteen + nineteen + twenty + twentyone + twentytwo + twentythree + twentyfour + twentyfive + twentysix + twentyseven + twentyeight) / price;

}





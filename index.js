var mydata = JSON.parse(data);
// alert(mydata[0].name);


//////// poprawna metoda 
var liczba = Object.keys(mydata).length;
var in_imie = "Marcin";
var found = false;
var numer;
for (i=0;i<liczba;i++){
    if (mydata[i].name == in_imie)
    {
        found = true; 
        numer = i;
    }
}
console.log(i);
if (found) {
    alert("Znaleziono uzytkownika " + mydata[numer].name);
} else {
    alert("Nie znaleziono uzytkownika");
}

// var txt="";
// var numbers=[45,234,34,23];

// numbers.forEach(myFunction);
// document.getElementById("demo").innerHTML = txt;

// function myFunction(value, index){
//   txt = txt + index + " " + value + "<br>";
// }
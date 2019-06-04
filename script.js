// funkcja ostrzeżenia o wygaśnięciu sesji (pojawienie się modala)

setTimeout(sessionAlert, 10000);
function sessionAlert() {
  //alert('Twoja sesja wygaśnie za minutę ');
  document.querySelector('.modal-timeout').style.display = 'flex';
}

// odświeżenie strony w przypadku niekliknięcia przycisku

myvar = setTimeout(sessionReload, 20000);
function sessionReload() {
  location.reload();
}

// funkcja przycisku przedłużenia sesji

btn_timeout = document.getElementById("btn-timeout");
btn_timeout.onclick = function () {
  clearTimeout(myvar);
  document.getElementById("btn-timeout").value = 'Przedłużono sesję';
  console.log("W rzeczywistości czas sesji jest od teraz nieograniczony");
}

// przycisk wyłączenia modala z alertem o czasie sesji

document.querySelector('.close2-timeout').addEventListener('click', function () {
  document.querySelector('.modal-timeout').style.display = 'none';

});



var myemail = JSON.parse(data_email);
var liczba = Object.keys(myemail).length;
console.log(liczba);
console.log(myemail[0].email);
console.log(myemail[1].email);



//console.log(myemail[1].email);

// var name1111 = "asd";
// console.log(name1111);




// modal rejestracji

document.querySelector('.close2').addEventListener('click', function () {
  document.querySelector('.modal-kino').style.display = 'none';

});

document.getElementById('btn-rej').addEventListener('click', function () {
  document.querySelector('.modal-kino').style.display = 'flex';
});

// zamknięcie modala przez kliknięcie obok

var modal = document.querySelector('.modal-kino');
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// modal wyboru kina

document.querySelector('.close2-wybor').addEventListener('click', function () {
  document.querySelector('.modal-kino-wybor').style.display = 'none';

});

document.getElementById('btn-kon').addEventListener('click', function () {
  document.querySelector('.modal-kino-wybor').style.display = 'flex';
});

// zamknięcie modala przez kliknięcie obok - jeśli się go włączy to modal logowania nie wyłącza się w ten sposób

// var modal_wybor = document.querySelector('.modal-kino-wybor');
// window.onclick = function (event) {
//   if (event.target == modal_wybor) {
//     modal_wybor.style.display = "none";
//   }
// }


////////////////////////////////////////////////////////////////////////////
/////// wybór miejsc

for (let j = 0; j < 10; j++) {
  let para_parent = document.createElement("div");
  for (let i = 0; i < 10; i++) {
    let para = document.createElement("span");
    let node = document.createTextNode("rz" + j + "m" + i + " ");
    para.appendChild(node);
    para_parent.appendChild(para);
  }
  var element = document.getElementById("div1");
  element.appendChild(para_parent);
}


var sum = 0;
var elements = document.querySelectorAll('div span');
elements.forEach(function (element) {
  element.addEventListener('click', function () {
    if (element.style.color == 'green') { element.style.color = 'white'; sum = sum - 15; document.getElementById("cena").innerHTML = sum }
    else { element.style.color = 'green'; sum = sum + 15; document.getElementById("cena").innerHTML = sum; }
  });
});;


// wyswietlenie wybranego kina

document.getElementById("wybor").addEventListener("change", function () {
  var selObj = document.getElementById("wybor");
  var selValue = selObj.options[selObj.selectedIndex].value;

  if (selValue == "poznan") {
    document.getElementById("kino_poznan").classList.remove("ukryj");
    document.getElementById("kino_warszawa").classList.add("ukryj")
    document.getElementById("kino_katowice").classList.add("ukryj")
  }
  if (selValue == "warszawa") {
    document.getElementById("kino_warszawa").classList.remove("ukryj");
    document.getElementById("kino_poznan").classList.add("ukryj")
    document.getElementById("kino_katowice").classList.add("ukryj")
  }
  if (selValue == "katowice") {
    document.getElementById("kino_katowice").classList.remove("ukryj");
    document.getElementById("kino_poznan").classList.add("ukryj")
    document.getElementById("kino_warszawa").classList.add("ukryj")
  }
})

document.getElementById("wybor_film").addEventListener("change", function () {
  var selObj = document.getElementById("wybor_film");
  var selValue = selObj.options[selObj.selectedIndex].value;

  if (selValue == "to") {
    document.getElementById("id_to").classList.remove("ukryj");
    document.getElementById("id_cos").classList.add("ukryj")
    document.getElementById("id_ai").classList.add("ukryj")
   }
  if (selValue == "cos") {
    document.getElementById("id_cos").classList.remove("ukryj");
    document.getElementById("id_to").classList.add("ukryj")
    document.getElementById("id_ai").classList.add("ukryj")
  }
  if (selValue == "ai") {
    document.getElementById("id_ai").classList.remove("ukryj");
    document.getElementById("id_cos").classList.add("ukryj")
    document.getElementById("id_to").classList.add("ukryj")
  }
})

document.getElementById("wybor").addEventListener("change", function () {
  var selObj = document.getElementById("wybor");
  var selValue = selObj.options[selObj.selectedIndex].value;

  if (selValue == "poznan") {
    document.getElementById("kino_poznan2").classList.remove("ukryj");
    document.getElementById("kino_warszawa2").classList.add("ukryj")
    document.getElementById("kino_katowice2").classList.add("ukryj")
  }
  if (selValue == "warszawa") {
    document.getElementById("kino_warszawa2").classList.remove("ukryj");
    document.getElementById("kino_poznan2").classList.add("ukryj")
    document.getElementById("kino_katowice2").classList.add("ukryj")
  }
  if (selValue == "katowice") {
    document.getElementById("kino_katowice2").classList.remove("ukryj");
    document.getElementById("kino_poznan2").classList.add("ukryj")
    document.getElementById("kino_warszawa2").classList.add("ukryj")
  }
})

document.getElementById("wybor_film").addEventListener("change", function () {
  var selObj = document.getElementById("wybor_film");
  var selValue = selObj.options[selObj.selectedIndex].value;

  if (selValue == "to") {
    document.getElementById("id_to2").classList.remove("ukryj");
    document.getElementById("id_cos2").classList.add("ukryj")
    document.getElementById("id_ai2").classList.add("ukryj")
  }
  if (selValue == "cos") {
    document.getElementById("id_cos2").classList.remove("ukryj");
    document.getElementById("id_to2").classList.add("ukryj")
    document.getElementById("id_ai2").classList.add("ukryj")
  }
  if (selValue == "ai") {
    document.getElementById("id_ai2").classList.remove("ukryj");
    document.getElementById("id_cos2").classList.add("ukryj")
    document.getElementById("id_to2").classList.add("ukryj")
  }
})



//////////////////////////////////////////////////////////////////////////////////////////////////
// weryfikacja hasła


var myInput = document.getElementById("psw");
var btnzal = document.getElementById("btn-zal");
var litera = document.getElementById("litera");
var litera_duza = document.getElementById("litera-duza");
var cyfra = document.getElementById("cyfra");
var liczba_znakow = document.getElementById("liczba-znakow");
var zalogowano = document.getElementById("zalogowano");
var e_mail = document.getElementById("user-login");
//var in_email = document.getElementById("user-login");

//console.log(in_email);
//var in_email = document.getElementById("user-login");


// walidacja hasła - wyświetlanie wskazówek pod oknem wpisywania
myInput.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    litera.classList.remove("invalid");
    litera.classList.add("valid");
  } else {
    litera.classList.remove("valid");
    litera.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    litera_duza.classList.remove("invalid");
    litera_duza.classList.add("valid");
  } else {
    litera_duza.classList.remove("valid");
    litera_duza.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    cyfra.classList.remove("invalid");
    cyfra.classList.add("valid");
  } else {
    cyfra.classList.remove("valid");
    cyfra.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    liczba_znakow.classList.remove("invalid");
    liczba_znakow.classList.add("valid");
  } else {
    liczba_znakow.classList.remove("valid");
    liczba_znakow.classList.add("invalid");
  }

}



btnzal.onclick = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  var numbers = /[0-9]/g;
  var upperCaseLetters = /[A-Z]/g;
  var emailvalidate = /(^\w.*@\w+\.\w)/g;
  var in_email = document.querySelector(".email");
  console.log(in_email);





  if (myInput.value.match(lowerCaseLetters)) {
    console.log("są małe litery");
    document.getElementById("litera").innerHTML = "";


  } else {
    console.log("hasło musi zawierać małe litery");
    document.getElementById("litera").innerHTML = "hasło musi zawierać małe litery";

  }

  if (myInput.value.match(numbers)) {
    console.log("są cyfry")
    document.getElementById("cyfra").innerHTML = "";

  }

  else {
    console.log("hasło musi zawierać cyfry")
    document.getElementById("cyfra").innerHTML = "hasło musi zawierać cyfry";

  }

  if (myInput.value.match(upperCaseLetters)) {
    console.log("są duże litery")
    document.getElementById("litera-duza").innerHTML = "";

  }

  else {
    console.log("hasło musi zawierać duże litery")
    document.getElementById("litera-duza").innerHTML = "hasło musi zawierać duże litery";

  }

  if (myInput.value.length >= 8) {
    console.log("jest 8 znaków")
    document.getElementById("liczba-znakow").innerHTML = "";

  }

  else {
    console.log("hasło musi zawierać przynajmniej 8 znaków");
    document.getElementById("liczba-znakow").innerHTML = "hasło musi zawierać przynajmniej 8 znaków";

  }

  if (e_mail.value.match(emailvalidate)) {
    console.log("składnia emaila poprawna")

  }

  else {
    console.log("składnia emaila niepoprawna");

  }




  if (myInput.value.match(lowerCaseLetters) && myInput.value.match(upperCaseLetters) && e_mail.value.match(emailvalidate) && (myInput.value.length >= 8)) {
    console.log("wszystkie warunki spełnione");

    zalogowano.classList.remove("invalid");
    zalogowano.classList.add("valid_zal");
    document.getElementById("zalogowano").innerHTML = "Zalogowano";
    document.getElementById("btn-rej").innerHTML = "TWOJE KONTO";



    //var in_email = document.getElementById("user-login");
    //var in_email = "dsa@asd.pl";
    var found = false;
    var numer = 0;
    console.log(liczba);
    function emailDbCheck() {
      for (i = 0; i < liczba; i++) {
        if (myemail[i].email == in_email) {
          found = true;
          numer = i;
        }
      }
      console.log(i);
      if (found) {
        console.log("Znaleziono mail " + myemail[numer].email);
      } else {
        console.log(in_email);
        console.log("Nie znaleziono maila, mimo że powinien to być " + myemail[0].email + " lub " + myemail[1].email);
      }
    }

    emailDbCheck();
  }
  else {
    console.log("brakuje spełnienia któregoś z 4 warunków");
  }

}


// walidacja emaila i hasła, sprawdzenie z danymi JSONa



// if (a = 4){
//   console.log("wszystkie warunki spełnione");
//   document.getElementById("zalogowano").innerHTML = "Zalogowano";
//   zalogowano.classList.remove("invalid");
//   zalogowano.classList.add("valid");
// }



// btnzal.onclick = function () {
//   var a = 0;
//   var lowerCaseLetters = /[a-z]/g;
//   var numbers = /[0-9]/g;
//   var upperCaseLetters = /[A-Z]/g;
//   if (myInput.value.match(lowerCaseLetters) && myInput.value.match(numbers) && myInput.value.match(upperCaseLetters) && myInput.value.length >= 8) {
//     console.log("wszystkie warunki spełnione");
//     document.getElementById("zalogowano").innerHTML = "Zalogowano";
//     zalogowano.classList.remove("invalid");
//     zalogowano.classList.add("valid");
//     var a = 1;

//   }
//   else {
//     console.log("nie wszystkie warunki spełnione");
//   }
// }



// Grab the email input field and also the update div below it
// Why: to listen for changes in the input field, and show live updates in the update div!
const email3 = document.querySelector('.email');
const update = document.querySelector('.update');
console.log(email3);

// Listen to any change to the input we selected above
// Why: to validate the string as we type (on each keystroke)
email3.addEventListener('input', inputEmail);

function inputEmail(e) {
  console.log(email3);
  const input = e.target.value;
  // Check if the input is NOT blank first, and if it's not, make sure it matches our regex test
  // Why: because we don't want to start validating before the user has started typing; after that it's fair game
  if (input && /(^\w.*@\w+\.\w)/.test(input)) {
    update.textContent = 'poprawny email!';
    update.classList.add('success');
    update.classList.remove('failure');
  } else {
    update.textContent = 'wpisuj dalej';
    update.classList.remove('success');
    update.classList.add('failure');
  }
};



//myFunction(3000);




// var startTime = new Date(getMilliseconds),
//     timeoutLength = 60000;

// var interval = setInterval("checkTimeout()",1000);
// function checkTimeout() {
//     var currentTime = new Date(millisecond);
//     if (currentTime > startTime + timeoutLength) {
//         clearInterval(interval);
//         alert ("Your current Session is over due to inactivity.");
//     }
// }



  // function getInfo() {
  //   var username = document.getElementById('username').value
  //   var password = document.getElementById('password').value

  //   for (var i = 0; i < objPeople.length; i++) {
  //     // check is user input matches username and password of a current index of the objPeople array
  //     if (username == objPeople[i].username && password == objPeople[i].password) {
  //       console.log(username + " is logged in!!!")
  //       // stop the function if this is found to be true
  //       return
  //     }
  //   }
  //   console.log("incorrect username or password")
  // }


  // proste logowanie ze sprawdzeniem zgodności

// var objPeople = [
//   { // Object @ 0 index
//     username: "sam",
//     password: "codify"
//   },
//   { // Object @ 1 index
//     username: "matt",
//     password: "academy"
//   },
//   { // Object @ 2 index
//     username: "chris",
//     password: "forever"
//   }

// ]


// function getInfo() {
//   var username = document.getElementById('user-login').value
//   var password = document.getElementById('psw').value

//   for (var i = 0; i < objPeople.length; i++) {
//     // check is user input matches username and password of a current index of the objPeople array
//     if (username == objPeople[i].username && password == objPeople[i].password) {
//       console.log(username + " is logged in!!!")
//       // stop the function if this is found to be true
//       return
//     }
//   }
//   console.log("incorrect username or password")
// }
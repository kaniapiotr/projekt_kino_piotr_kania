//logowanie - zzapisanie zmiennych

var name222 = document.getElementById('user-login');
var name1111 = "asd";
console.log(name1111);

// modal rejestracji

document.querySelector('.close2').addEventListener('click', function () {
  document.querySelector('.modal-kino').style.display = 'none';

});

document.getElementById('btn-rej').addEventListener('click', function () {
  document.querySelector('.modal-kino').style.display = 'flex';
});


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


var modal_wybor = document.querySelector('.modal-kino-wybor');
window.onclick = function (event) {
  if (event.target == modal_wybor) {
    modal_wybor.style.display = "none";
  }
}


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

// function changeTextColor(el){
// 	el.style.color = 'blue';
//   console.log('test');
// }
var sum = 0;
var elements = document.querySelectorAll('div span');
elements.forEach(function (element) {
  element.addEventListener('click', function () {
    if (element.style.color == 'green') { element.style.color = 'black'; sum = sum - 15; document.getElementById("cena").innerHTML = sum }
    else { element.style.color = 'green'; sum = sum + 15; document.getElementById("cena").innerHTML = sum; }
  });
});;


// 
function getInfo() {
  var username = document.getElementById('user-login').value
  var password = document.getElementById('psw').value

  for (var i = 0; i < objPeople.length; i++) {
    // check is user input matches username and password of a current index of the objPeople array
    if (username == objPeople[i].username && password == objPeople[i].password) {
      console.log(username + " is logged in!!!")
      // stop the function if this is found to be true
      return
    }
  }
  console.log("incorrect username or password")
}


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



//////////////////////////////////////////////////////////////////////////////////////////////////
// weryfikacja hasła


var myInput = document.getElementById("psw");

var btnzal = document.getElementById("btn-zal");

var litera = document.getElementById("litera");
var litera_duza = document.getElementById("litera-duza");
var cyfra = document.getElementById("cyfra");
var liczba_znakow = document.getElementById("liczba-znakow");
var zalogowano = document.getElementById("zalogowano");
// var email = document.getElementById("email");
var e_mail = document.getElementById('user-login');







// When the user starts to type something inside the password field
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
  var emailvalidate =  /(^\w.*@\w+\.\w)/g;





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

  } else {
    console.log("hasło musi zawierać cyfry")
    document.getElementById("cyfra").innerHTML = "hasło musi zawierać cyfry";

  }
  if (myInput.value.match(upperCaseLetters)) {
    console.log("są duże litery")
    document.getElementById("litera-duza").innerHTML = "";

  } else {
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
    console.log("email poprawny")
    //document.getElementById("liczba-znakow").innerHTML = "";

  }

  else {
    console.log("email niepoprawny");
    //document.getElementById("liczba-znakow").innerHTML = "hasło musi zawierać przynajmniej 8 znaków";

  }


  var myObj = { email: document.getElementById("user-login"), password: document.getElementById("psw") };
  var myJSON = JSON.stringify(myObj);

  if (myInput.value.match(lowerCaseLetters) && myInput.value.match(upperCaseLetters) && e_mail.value.match(emailvalidate) && (myInput.value.length >= 8)) {
    console.log("wszystkie warunki spełnione");

    zalogowano.classList.remove("invalid");
    zalogowano.classList.add("valid_zal");
    document.getElementById("zalogowano").innerHTML = "Zalogowano";

  }
  else {
    console.log("brakuje spełnienia któregoś z 4 warunków");
  }

  // if(myInput.value.match(lowerCaseLetters) && myInput.value.match(numbers) && myInput.value.match(upperCaseLetters) && (myInput.value.length >= 8) ) {
  //   console.log("wszystkie warunki spełnione");
  //   document.getElementById("zalogowano").innerHTML = "Zalogowano";
  //   zalogowano.classList.remove("invalid");
  //   zalogowano.classList.add("valid");

  // }

}

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
const email = document.querySelector('.email');
const update = document.querySelector('.update');

// Listen to any change to the input we selected above
// Why: to validate the string as we type (on each keystroke)
email.addEventListener('input', inputEmail);

function inputEmail(e) {
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

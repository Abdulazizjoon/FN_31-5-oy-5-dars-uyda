let form = document.querySelector('form')
let lastName = document.querySelector(".lastName");
let firsttName = document.querySelector(".firstName");
let pasword = document.querySelector(".password");
let email = document.querySelector(".email");
let save = document.querySelector(".btn1");
let remove = document.querySelector(".btn2");
let wraper=document.querySelector('.wraper')
let typ1 = document.querySelector(".radio1");
let typ2 = document.querySelector(".radio2");


function newCard() {
  return `
    <div class="card">
        <p>last name: ${lastName.value}</p>
        <p>first name: ${firsttName.value}</p>
        <p>password: ${pasword.value}</p>
        <p>email: ${email.value}</p>
        <p>type: male</p>
    </div>
    `;
}
function chek() {
    // if (lastName.value.length<3) {
    //     lastName.style.borderBottom = "2px solid red";
    //     lastName.focus()
    //     return false
    // }
    // if (firsttName.value.length < 3) {
    //   firsttName.style.borderBottom = "2px solid red";
    //   firsttName.focus();
    //   return false;
    // }
    // if (pasword.value.length < 3) {
    //     pasword.style.borderBottom = "2px solid red";
    //     pasword.focus();
    //   return false;
    // }
    // if (email.value.length < 3) {
    //   email.style.borderBottom = "2px solid red";
    //   email.focus();
    //   return false;
    // }
    return true
}
form.addEventListener('submit', function (e) {
    e.preventDefault()
    // if (typ1.checked()) {
    //   console.log("Option 1 tanlangan");
    // } else if (typ2.checked()) {
    //   console.log("Option 2 tanlangan");
    // } else {
    //     console.log(false);
    // }
    if (chek()) {
      wraper.innerHTML += newCard();
        JSON.stringify(wraper);
  }
 
})
//  remove.forEach((btn) => {
//    btn.addEventListener("click", function (e) {
//      e.preventDefault();
//      btn.closest(".card").remove();
//    });
//  });





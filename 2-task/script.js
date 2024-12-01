let form = document.querySelector('form')
let input= document.querySelector('input')
let btn = document.querySelector('.btn')
let wraper = document.querySelector('.wraper')
let cards = document.querySelector('.card')
// let p=document.querySelector('p')
function card() {
    return `
    <div class="card">
        <p>${input.value}</p>
        <button class="remove">remove</button>
        <button class="finish">finish</button>
    </div>
    `;
}
form.addEventListener('submit', function (e) {
    e.preventDefault()
    wraper.innerHTML += `${card()}`;
    input.value = ''

    let remove = document.querySelectorAll(".remove");
    remove.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        btn.closest(".card").remove();
      });
    });

    let finish = document.querySelectorAll('.finish')
    finish.forEach(function(value) {
        value.addEventListener('click',function(e) {
        e.preventDefault();
        value
          .closest(".card")
          .querySelector("p")
          .classList.add("tiziq");
        })
    })
})



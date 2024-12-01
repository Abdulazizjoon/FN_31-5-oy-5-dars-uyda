function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}
let blok1 = document.querySelector(".block1");
let blok2 = document.querySelector(".block2");
let blok3 = document.querySelector(".block3");
let blok4 = document.querySelector(".block4");
let blok5 = document.querySelector(".block5");
let blok6 = document.querySelector(".block6");
let blok7 = document.querySelector(".block7");
let blok8 = document.querySelector(".block8");
let blok9 = document.querySelector(".block9");
blok1.addEventListener('click', function () {
    blok1.style.backgroundColor = `${getRandomColor()}`;
})
blok2.addEventListener("click", function () {
  blok2.style.backgroundColor = `${getRandomColor()}`;
});
blok3.addEventListener("click", function () {
  blok3.style.backgroundColor = `${getRandomColor()}`;
});
blok3.addEventListener("click", function () {
  blok3.style.backgroundColor = `${getRandomColor()}`;
});
blok4.addEventListener("click", function () {
  blok4.style.backgroundColor = `${getRandomColor()}`;
});
blok5.addEventListener("click", function () {
  blok5.style.backgroundColor = `${getRandomColor()}`;
});
blok6.addEventListener("click", function () {
  blok6.style.backgroundColor = `${getRandomColor()}`;
});
blok7.addEventListener("click", function () {
  blok7.style.backgroundColor = `${getRandomColor()}`;
});
blok8.addEventListener("click", function () {
  blok8.style.backgroundColor = `${getRandomColor()}`;
});
blok9.addEventListener("click", function () {
  blok9.style.backgroundColor = `${getRandomColor()}`;
});


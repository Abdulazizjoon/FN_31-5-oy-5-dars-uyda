let oylar = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentabr",
  "Oktyabr",
  "Noyabr",
  "Dekabr",
];
setInterval(() => {
  let nev = new Date();
  let hours = nev.getHours();
  let minut = nev.getMinutes();
  let second = nev.getSeconds();
  let month = nev.getMonth() + 1;

  console.log(`${hours}:${minut}:${second}`);
  document.querySelector("p").innerHTML = `${hours}:${minut}:${second}`;
  document.querySelector("h2").innerHTML = `${month}: ${oylar[month-1]}`;
}, 1000);

// create 19 november 2023
// last update 20 november 2023

let body = document.body

/** MENDAPATKAN DATA DARI USER **/

// membuat element text
let text = document.createElement("p")
text.innerHTML = "<b>Batu, Gunting atau Kertas</b>"

let text2 = document.createElement("p")
text2.innerHTML = "Tolong input <b>Batu, Gunting</b> atau <b>Kertas</b> saja"

// membuat element input
let input = document.createElement("input")

// membuat element button
let button = document.createElement("button")
button.innerText = "Kirim"

let mainLagi = document.createElement("button")
mainLagi.innerText = "Main Lagi"

let ok = document.createElement("button")
ok.innerText = "oke"

// membuat element jawaban 
let hasil = document.createElement("p")

// menginput data user
function klick(){
  function refreshHalaman() {
    location.href = location.href;
  }
  let data = input.value.toLowerCase()
  // user vs komputer
  switch(data){
    case "gunting":
      if(komp == "batu"){
        hasil.innerHTML = "<b>KALAH</b> kamu (<b>"+data+"</b>) melawan komputer (<b>"+komp+"</b>)."
        body.append(hasil)
      } else if (komp == "kertas"){
        hasil.innerHTML = "<b>MENANG</b> kamu (<b>"+data+"</b>) melawan komputer (<b>"+komp+"</b>)."
        body.append(hasil)
      } else {
        hasil.innerHTML = "<b>SERI</b> kamu (<b>"+data+"</b>) melawan komputer (<b>"+komp+"</b>)."
        body.append(hasil)
      }
      body.append(mainLagi)
      mainLagi.onclick = refreshHalaman
      break
    case "batu":
      if(komp == "kertas"){
        hasil.innerHTML = "<b>KALAH</b> kamu (<b>"+data+"</b>) melawan komputer (<b>"+komp+"</b>)."
        body.append(hasil)
      } else if (komp == "gunting"){
        hasil.innerHTML = "<b>MENANG</b> kamu (<b>"+data+"</b>) melawan komputer (<b>"+komp+"</b>)."
        body.append(hasil)
      } else {
        hasil.innerHTML = "<b>SERI</b> kamu (<b>"+data+"</b>) melawan komputer (<b>"+komp+"</b>)."
        body.append(hasil)
      }
      body.append(mainLagi)
      mainLagi.onclick = refreshHalaman
      break
    case "kertas":
      if(komp == "batu"){
        hasil.innerHTML = "<b>MENANG</b> kamu (<b>"+data+"</b>) melawan komputer (<b>"+komp+"</b>)."
        body.append(hasil)
      } else if (komp == "gunting"){
        hasil.innerHTML = "<b>KALAH</b> kamu (<b>"+data+"</b>) melawan komputer (<b>"+komp+"</b>)."
        body.append(hasil)
      } else {
        hasil.innerHTML = "<b>SERI</b> kamu (<b>"+data+"</b>) melawan komputer (<b>"+komp+"</b>)."
        body.append(hasil)
      }
      body.append(mainLagi)
      mainLagi.onclick = refreshHalaman
      break
    default:
      body.append(text2)
      body.append(ok)
      hasil.remove()
      ok.onclick = refreshHalaman
  }
 }


button.onclick = klick

/** MENDAPATKAN DATA ACAK KOMPUTER **/

let komp = Math.round(Math.random()*3+0.2)

// mengubah data acak ke batu, gunting, kertas 

if (komp == 1){
  komp = "batu"
} else if (komp == 2){
  komp = "kertas"
} else {
  komp = "gunting"
}

console.log(`komputer memilih "${komp}"`)
// test
body.append(input)
body.append(button)
body.prepend(text)

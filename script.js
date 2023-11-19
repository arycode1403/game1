let body = document.body

/** MENDAPATKAN DATA DARI USER **/

// membuat element text
let text = document.createElement("p")
text.innerHTML = "<b>Batu, Gunting atau Kertas</b>"

let text2 = document.createElement("p")
text2.innerHTML = "<b>Tolong input Batu, Gunting atau Kertas saja</b>"

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
  let data = input.value
  let data2 = data.toLowerCase()
  console.log(data2)
  // user vs komputer
  switch(data2){
    case "gunting":
      if(komp == "batu"){
        hasil.innerHTML = "<b>KALAH</b> kamu ("+data2+") melawan komputer ("+komp+")."
        body.append(hasil)
      } else if (komp == "kestas"){
        hasil.innerHTML = "<b>MENANG</b> kamu ("+data2+") melawan komputer ("+komp+")."
        body.append(hasil)
      } else {
        hasil.innerHTML = "<b>SERI</b> kamu ("+data2+") melawan komputer ("+komp+")."
        body.append(hasil)
      }
      body.append(mainLagi)
      mainLagi.onclick = refreshHalaman
      break
    case "batu":
      if(komp == "kertas"){
        hasil.innerHTML = "<b>KALAH</b> kamu ("+data2+") melawan komputer ("+komp+")."
        body.append(hasil)
      } else if (komp == "gunting"){
        hasil.innerHTML = "<b>MENANG</b> kamu ("+data2+") melawan komputer ("+komp+")."
        body.append(hasil)
      } else {
        hasil.innerHTML = "<b>SERI</b> kamu ("+data2+") melawan komputer ("+komp+")."
        body.append(hasil)
      }
      body.append(mainLagi)
      mainLagi.onclick = refreshHalaman
        break
    case "kertas":
      if(komp == "batu"){
        hasil.innerHTML = "<b>MENANG</b> kamu ("+data2+") melawan komputer ("+komp+")."
        body.append(hasil)
      } else if (komp == "gunting"){
        hasil.innerHTML = "<b>KALAH</b> kamu ("+data2+") melawan komputer ("+komp+")."
        body.append(hasil)
      } else {
        hasil.innerHTML = "<b>SERI</b> kamu ("+data2+") melawan komputer ("+komp+")."
        body.append(hasil)
      }
      body.append(mainLagi)
      mainLagi.onclick = refreshHalaman
      break
    default:
      function refreshHalaman2() {
    location.href = location.href;
      }
      body.append(text2)
      body.append(ok)
      hasil.remove()
      ok.onclick = refreshHalaman2
      break
      
  }
  function refreshHalaman() {
    location.href = location.href;
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
body.append(text)

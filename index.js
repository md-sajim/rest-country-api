const restCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => countryInfo(data))
}
restCountry()
const countryInfo = info => {
  const getId = document.getElementById('main-div')
  info.forEach(singelData => {
    // console.log(singelData)
    const { name, cca2, flags } = singelData
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card" style="width: 18rem;">
  <img style="height:170px ;" src="${flags.png}" class="card-img-top" alt="...">
  <div class="card-body" style="background-color:rgb(122, 83, 83);">
    <h5 class="card-title">${name.common}</h5>
    
    <a href="#" class="btn btn-primary" onclick="countryDetail('${cca2}')">DETAIL</a>
  </div>
</div>
        `
    getId.appendChild(div)
  })
}
const customAlert = document.getElementById('customAlert')
function headenAlert() {
  customAlert.style.display = 'none'
}
const countryDetail = detailInfo => {
  const displayDelail = document.getElementById('customAlert')
  displayDelail.style.display = 'block'
  displayDelail.disabled = "bolck"
  fetch(`https://restcountries.com/v3.1/alpha/${detailInfo}`)
    .then(res => res.json())
    .then(data => displayDitail(data[0]))
  const displayDitail = ditail => {
    console.log(ditail)
    const { area, capital, continents, currencies, flags, maps, name, population } = ditail;
    console.log(maps.googleMaps)
    const getCardBox = document.getElementById('cardbox')
    getCardBox.innerHTML = "";
    const div = document.createElement("div")
    div.innerHTML = `
<div style="height:50vh;" class="card">
  
  <img style="height:270px; width:100%;" src="${flags.png}" class="card-img-top" alt="...">
  
  <div class="card-body bg-warning text-start ">
    <h5 class="card-title">${name.common}</h5>
    <p class="card-text">Capital: ${capital}</p>
    <p class="card-text">Area : ${area}</p>
    <p class="card-text">Population: ${population}</p>
    <p class="card-text">Currencies: ${currencies.EUR?.name || currencies.BDT?.name || currencies.DZD?.name || "Currencies not deffind"}</p>
  </div>
</div>
`
    getCardBox.appendChild(div)
  }
}
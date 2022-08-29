const restCountry = () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => countryInfo(data))
}
restCountry()
const countryInfo = info =>{
    const getId = document.getElementById('main-div')
    info.forEach(singelData => {
        // console.log(singelData)
        const {name, cca2, flags} = singelData
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
const countryDetail= detailInfo => {
    const displayDelail = document.getElementById('customAlert')
    displayDelail.style.display = 'block'
    displayDelail.disabled = "bolck"
    fetch(`https://restcountries.com/v3.1/alpha/${detailInfo}`)
    .then(res => res.json())
    .then(data =>displayDitail(data[0]))
   const  displayDitail = ditail =>{
    console.log(ditail)
const {area, capital, continents, currencies, flags, maps, name, population} = ditail;
console.log(maps.googleMaps)
const getCardBox = document.getElementById('cardbox')
getCardBox.innerHTML="";
const div = document.createElement("div")
div.innerHTML = `
<div class="card mb-3 bg-primary">
  <div class="d-flex">
  <img style="height:270px; width:50%;" src="${flags.png}" class="card-img-top" alt="...">
  <div id="varticalLine"></div>
  <img style="height:270px; width:50%;" src="${maps.googleMaps}" class="card-img-top" alt="...">
  </div>
  <div class="card-body bg-warning ">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
  <img src="..." class="card-img-bottom" alt="...">
</div>
`
getCardBox.appendChild(div)
    }
}
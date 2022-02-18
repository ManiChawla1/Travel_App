// http://api.geonames.org/searchJSON?name=delhi&maxRows=1&username=mani1611

// pixabay key 25715536-1865ca738af5e5d0c230f1261

// weatherbitkey 08add123faa546d0bf599ac72af0810a

//https://pixabay.com/api/?key=25715536-1865ca738af5e5d0c230f1261&q=delhi&image_type=photo&pretty=true

import {inputValidation} from './validation';
const tripBtn = document.getElementById('tripBtn');
let count =0;

tripBtn.addEventListener('click', addTrip)

export async function addTrip(){

const destValue = document.getElementById('destination').value;
const startDatetValue = document.getElementById('startDate').value;
const endDateValue = document.getElementById('endDate').value;
const validated = inputValidation(destValue, startDatetValue, endDateValue );
const apiKey = "&maxRows=1&username=mani1611";
const baseUrl = "http://api.geonames.org/searchJSON?name=";
const pixabayBaseUrl = "https://pixabay.com/api/?key=";
const pixabayApiKey = "25715536-1865ca738af5e5d0c230f1261";
const query = `&q=${destValue}&image_type=photo&pretty=true`;


if(validated){
console.log("clicked")
const output = document.querySelector('.output')
const card = document.createElement('div');
const fetchedUrl = `${baseUrl}${destValue}${apiKey}`
card.classList.add('card')

output.appendChild(card);
console.log(fetchedUrl);
card.innerHTML = `<p class="loadingText">Loading...<p>
<div class="loader"></div>`;;
const response = await fetch(fetchedUrl);
const data = await response.json();
const duration = `${endDateValue}-${startDatetValue}`;
console.log(data.geonames[0].countryName);
console.log(data.geonames[0].lat);
console.log(data.geonames[0].lng);
console.log(data);

const date1 = new Date(endDateValue);
const date2 = new Date(startDatetValue);
const diff = (date1-date2)/ (1000 * 3600 * 24);


const imageUrl = `${pixabayBaseUrl}${pixabayApiKey}${query}`;
const imgResponse = await fetch(imageUrl);
const imgData = await imgResponse.json();
console.log(imgData.hits[0].webformatURL);
const weatherbitUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${data.geonames[0].lat}&lon=${data.geonames[0].lng}&key=08add123faa546d0bf599ac72af0810a`
const weatherResponse = await fetch(weatherbitUrl);
const weatherData = await weatherResponse.json();
console.log(weatherData.data[0].valid_date);
console.log(weatherData.data[0].weather.icon);
console.log(weatherData.data[0].weather.description);
count++;
let dateValid = false;
for(let i =0;i < weatherData.data.length;i++) 
{
if(startDatetValue == weatherData.data[i].valid_date)
{   dateValid = true;
    card.innerHTML =   `<div class="image"><img src="${imgData.hits[0].webformatURL}" alt="${destValue}">
    </div>
    <div class="details">
    <p> <b>${destValue}, ${data.geonames[0].countryName}</b> on <b>${startDatetValue}</b></p>
    </div>
    <div class="duration">
    <p><b>Duration:</b> ${diff} day</p>
    </div>
    <div class="temp">
    <span>
    <img src="https://www.weatherbit.io/static/img/icons/${weatherData.data[i].weather.icon}.png" width="30px" height="30px" alt="temp image">
    <div><b>${weatherData.data[i].temp}° Celsius</b></div>
    </span>
    <button class="${count}">Delete</button>
    </div>`;
    const deleteButton = document.getElementsByClassName(`${count}`);
    deleteButton[0].addEventListener('click', removeCard);
}
}
if(dateValid)
{card.setAttribute('id', count)}
else{
    alert("Date is NOT within 16 days from today");
    card.remove();
}


}

else{
    console.log("form validation failed")
}

}


export function removeCard(e){
  
  var currentCard =  document.getElementById(e.target.className);
  currentCard.remove();
}

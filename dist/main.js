var Client;(()=>{"use strict";var e={d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function a(e,t,a){if(""==e)return alert("Where you want to Go ?..Please add destination"),!1;if(""==t)alert("Please enter  trip start Date");else{if(""!=a)return!0;alert("Please enter Trip end date ")}}e.r(t),e.d(t,{addTrip:()=>i,inputValidation:()=>a,removeCard:()=>l});const n=document.getElementById("tripBtn");let o=0;async function i(){const e=document.getElementById("destination").value,t=document.getElementById("startDate").value,n=document.getElementById("endDate").value,i=`&q=${e}&image_type=photo&pretty=true`;if(a(e,t,n)){console.log("clicked");const a=document.querySelector(".output"),s=document.createElement("div"),d=`http://api.geonames.org/searchJSON?name=${e}&maxRows=1&username=mani1611`;s.classList.add("card"),a.appendChild(s),console.log(d),s.innerHTML='<p class="loadingText">Loading...<p>\n<div class="loader"></div>';const r=await fetch(d),c=await r.json();console.log(c.geonames[0].countryName),console.log(c.geonames[0].lat),console.log(c.geonames[0].lng),console.log(c);const m=(new Date(n)-new Date(t))/864e5,g=`https://pixabay.com/api/?key=25715536-1865ca738af5e5d0c230f1261${i}`,p=await fetch(g),u=await p.json();console.log(u.hits[0].webformatURL);const v=`https://api.weatherbit.io/v2.0/forecast/daily?lat=${c.geonames[0].lat}&lon=${c.geonames[0].lng}&key=08add123faa546d0bf599ac72af0810a`,f=await fetch(v),y=await f.json();console.log(y.data[0].valid_date),console.log(y.data[0].weather.icon),console.log(y.data[0].weather.description),o++;let b=!1;for(let a=0;a<y.data.length;a++)if(t==y.data[a].valid_date){b=!0,s.innerHTML=`<div class="image"><img src="${u.hits[0].webformatURL}" alt="${e}">\n    </div>\n    <div class="details">\n    <p> <b>${e}, ${c.geonames[0].countryName}</b> on <b>${t}</b></p>\n    </div>\n    <div class="duration">\n    <p><b>Duration:</b> ${m} day</p>\n    </div>\n    <div class="temp">\n    <span>\n    <img src="https://www.weatherbit.io/static/img/icons/${y.data[a].weather.icon}.png" width="30px" height="30px" alt="temp image">\n    <div><b>${y.data[a].temp}° Celsius</b></div>\n    </span>\n    <button class="${o}">Delete</button>\n    </div>`;document.getElementsByClassName(`${o}`)[0].addEventListener("click",l)}b?s.setAttribute("id",o):(alert("Date is NOT within 16 days from today"),s.remove())}else console.log("form validation failed")}function l(e){document.getElementById(e.target.className).remove()}n.addEventListener("click",i),Client=t})();
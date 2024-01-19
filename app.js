// const APIkey="YOUR API KEY"

// const API="API URL";


async function weather(city){
    const res=await fetch(API+city+`&appid=${APIkey}`);
    const data=await res.json();

    console.log(data);
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C"
document.querySelector(".hum").innerHTML=data.main.humidity+"%"
document.querySelector(".win").innerHTML=data.wind.speed+"kmph"
document.querySelector(".city").innerHTML=data.name
document.querySelector(".desc").innerHTML=data.weather[0].description
const weatherIcon=document.querySelector(".weather-icon")

if(data.weather[0].main=="clear"){
    weatherIcon.src="./assets/clear.png"
}
else if(data.weather[0].main=="Clouds"){
    weatherIcon.src="./assets/cloud.png"
}
else if(data.weather[0].main=="Mist"){
    weatherIcon.src="./assets/mist.png"
}
else if(data.weather[0].main=="Fog"){
    weatherIcon.src="./assets/fog.png"
}

}

const btn=document.querySelector(".btn")
const input=document.querySelector(".input input")
btn.addEventListener("click",()=>{
    weather(input.value);
})


document.querySelector(".copyright").innerHTML="Ⓒ "+new Date().getFullYear()+"  copyright reserved"








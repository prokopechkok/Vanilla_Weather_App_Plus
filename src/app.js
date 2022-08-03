function displayTemperature(response){
    let temperatureElement=document.querySelector(#temperature);
}

let apiKey = "8438301216c2822a596249b61bb568d7";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(displayTemperature);
const loader = document.getElementById("loader");

function updateTime(timezoneOffset){
     const now = new Date();


     const cityTime= new Date(now.getTime() + timezoneOffset * 1000);

     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const dayName = days[cityTime.getUTCDay()];


       const date = cityTime.getUTCDate();
       const month = cityTime.toLocaleString("default", {month: "long"});


      let  hours = cityTime.getUTCHours();
      let  minutes = cityTime.getUTCMinutes();
      
      if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;

document.getElementById("day").innerText = `${dayName}, ${date} ${month}`;
document.getElementById("time").innerText = `${hours}:${minutes}`;

}
async function getUpdate(){
  loader.classList.remove("hidden");

      const city = document.querySelector(".search-box .city").value;
       const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6598d686377de0c1fc284db2ccd59fe2&units=metric`;


        let  response = await fetch(url);
        let data =  await response.json();


        document.getElementById("maxTemp").innerText =  `${Math.round(data.main.temp)}°`;
        
        document.querySelector(".left-panel .city").innerText = data.name;

           document.querySelector(".left-panel .temperature").innerText =`${Math.round(data.main.temp)}°`;

          document.getElementById("maxTemp").innerText = `${data.main.temp_max}°`;
           document.getElementById("minTemp").innerText = `${data.main.temp_min}°`;
            document.getElementById("Humidity").innerText = `${data.main.humidity}%`;
             document.getElementById("cloudy").innerText = `${data.clouds.all}%`;
              document.getElementById("wind").innerText = `${data.wind.speed} km/h`;
               

              updateTime(data.timezone);
                loader.classList.add("hidden");
  }
 document.getElementById("searchbtn").addEventListener("click",getUpdate);
 document.querySelector(".search-box .city").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getUpdate();
  }
});


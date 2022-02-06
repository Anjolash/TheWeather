let weather = {
    apiKey : "f6abe39f60ff72d30425cf0af92b7459",
    fetchWeather : function (city) {
         fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" 
                    + city 
                    + "&units=metric&appid="
                    + this.apiKey
         )

         .then((response) => response.json())
         .then((data) => this.displayWeather(data));

        },

        displayWeather: function(data) {
            const { name } = data;
            const { icon , description } = data.weather[0];
            const { temp, humidity } = data.main;
            const { speed } = data.wind;
            
            document.querySelector(".city").innerText = "Weather in " + name;
            document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".description").innerText = description;
            document.querySelector(".temp").innerText = temp + "°C";
            document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
            document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
            document.querySelector(".weather").classList.remove("loading")
            document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "?skyline')"


            

        },

        search: function() {
            this.fetchWeather(document.querySelector(".search__bar").value);
        }
    };

    document.querySelector("button").addEventListener("click", function() {
        weather.search();
    })

    document.querySelector(".search__bar").addEventListener("keyup", function(event) {
        if (event.key == "Enter"){
        weather.search();
        }
    })

weather.fetchWeather("Denver")


let weatheraround = {
    apiKey : "f6abe39f60ff72d30425cf0af92b7459",
    fetchWeather : function (city) {
         fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=Tokyo" 
                    + "&units=metric&appid="
                    + this.apiKey
         )

         .then((response) => response.json())
         .then((data) => this.displayWeather(data));

        },

        displayWeather: function(data) {
            const { name } = data;
            const { icon , description } = data.weather[0];
            const { temp, humidity } = data.main;
            const { speed } = data.wind;
            console.log(name, icon, description)
            document.querySelector(".city2").innerText = "Weather in " + name;
            document.querySelector(".icon2").src = "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".description2").innerText = description;
            document.querySelector(".temp2").innerText = temp + "°C";
            document.querySelector(".humidity2").innerText = "Humidity: " + humidity + "%";
            document.querySelector(".wind2").innerText = "Wind speed: " + speed + "km/h";
            document.querySelector(".weather2").classList.remove("loading")
            //document.body.style.backgroundImage = "url('')"

        },

        
    };

    
weatheraround.fetchWeather()

let weatheraround2 = {
    apiKey : "f6abe39f60ff72d30425cf0af92b7459",
    fetchWeather : function (city) {
         fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=Johannesberg" 
                    + "&units=metric&appid="
                    + this.apiKey
         )

         .then((response) => response.json())
         .then((data) => this.displayWeather(data));

        },

        displayWeather: function(data) {
            const { name } = data;
            const { icon , description } = data.weather[0];
            const { temp, humidity } = data.main;
            const { speed } = data.wind;
            console.log(name, icon, description)
            document.querySelector(".city5").innerText = "Weather in " + name;
            document.querySelector(".icon5").src = "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".description5").innerText = description;
            document.querySelector(".temp5").innerText = temp + "°C";
            document.querySelector(".humidity5").innerText = "Humidity: " + humidity + "%";
            document.querySelector(".wind5").innerText = "Wind speed: " + speed + "km/h";
            document.querySelector(".weather5").classList.remove("loading")
            //document.body.style.backgroundImage = "url('')"

        },

        
    };

    
weatheraround2.fetchWeather()

let weatheraround3 = {
    apiKey : "f6abe39f60ff72d30425cf0af92b7459",
    fetchWeather : function (city) {
         fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=Moscow" 
                    + "&units=metric&appid="
                    + this.apiKey
         )

         .then((response) => response.json())
         .then((data) => this.displayWeather(data));

        },

        displayWeather: function(data) {
            const { name } = data;
            const { icon , description } = data.weather[0];
            const { temp, humidity } = data.main;
            const { speed } = data.wind;
            console.log(name, icon, description)
            document.querySelector(".city3").innerText = "Weather in " + name;
            document.querySelector(".icon3").src = "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".description3").innerText = description;
            document.querySelector(".temp3").innerText = temp + "°C";
            document.querySelector(".humidity3").innerText = "Humidity: " + humidity + "%";
            document.querySelector(".wind3").innerText = "Wind speed: " + speed + "km/h";
            document.querySelector(".weather3").classList.remove("loading")
            //document.body.style.backgroundImage = "url('')"

        },

        
    };

    
weatheraround3.fetchWeather()

let weatheraround4 = {
    apiKey : "f6abe39f60ff72d30425cf0af92b7459",
    fetchWeather : function (city) {
         fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=Texas" 
                    + "&units=metric&appid="
                    + this.apiKey
         )

         .then((response) => response.json())
         .then((data) => this.displayWeather(data));

        },

        displayWeather: function(data) {
            const { name } = data;
            const { icon , description } = data.weather[0];
            const { temp, humidity } = data.main;
            const { speed } = data.wind;
            console.log(name, icon, description)
            document.querySelector(".city4").innerText = "Weather in " + name;
            document.querySelector(".icon4").src = "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".description4").innerText = description;
            document.querySelector(".temp4").innerText = temp + "°C";
            document.querySelector(".humidity4").innerText = "Humidity: " + humidity + "%";
            document.querySelector(".wind4").innerText = "Wind speed: " + speed + "km/h";
            document.querySelector(".weather4").classList.remove("loading")
            //document.body.style.backgroundImage = "url('')"

        },

        
    };

    
weatheraround4.fetchWeather()
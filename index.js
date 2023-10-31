const api = {
    endpoint:"https://api.openweathermap.org/data/2.5/",
    key:"59e0a2bb288c363cd62829c11a081a6e"
}

const input = document.querySelector("#where");
input.addEventListener("keypress", enter);

function enter(e){
    if (e.keyCode===13) {
        getInfo(input.value);
    }
}

async function getInfo(data){
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const resReceived = await res.json();
    //console.log(resReceived);
    //console.log(resReceived.name);
    //console.log(resReceived.sys.country);
    //console.log(resReceived.weather[0].description);
    displayResult(resReceived);
}

function displayResult(resReceived){
    console.log(resReceived);
    let city = document.querySelector("#city");
    city.textContent = `${resReceived.name}, ${resReceived.sys.country}`;

    getOurDate();

    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(resReceived.main.temp)}<span>°</span>`;

    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = `<span>Humidity:</span> ${resReceived.main.humidity}`;

    let conditions = document.querySelector("#conditions");
    conditions.textContent = `${resReceived.weather[0].description}`

    let variations = document.querySelector("#variations");
    variations.innerHTML = "Min: " + `${Math.round(resReceived.main.temp_min)}`+ " | Max: " + `${Math.round(resReceived.main.temp_max)}`;
}

    function getOurDate() {
        // const myDate = new Date;
        // console.log(myDate)
        // let date = document.querySelector("#date");
        // date.textContent = myDate;

        //Today date

        const myDate = new Date;
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        //Day
        
        let day = document.querySelector("#date").innerHTML = days[myDate.getDay()];

        //Date

        let todayDay = document.querySelector("#date").textContent = myDate.getDate();

        //Month

        let month =  document.querySelector("#date").textContent = months[myDate.getMonth()];

        //Year

        let year =  document.querySelector("#date").textContent = myDate.getFullYear();

        let showDate = document.querySelector("#date");
        showDate.textContent = `${day}`+" "+`${todayDay}`+" "+`${month}`+" "+`${year}`;
    }
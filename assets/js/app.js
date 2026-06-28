console.log("js loaded!!")

let apikey = "a0a82aab60b441c0a7e111104252111&q";

let txtCity = document.getElementById("txt_city");

txtCity.addEventListener("keypress", e => {
    if (e.key == "Enter") {
        apiCall(txtCity.value)
    }
})

let apiCall = async (city) => {
    
    await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`)
    .then(res => res.json())
    .then(data => {
        setWeather(data);
    })

}

let setWeather = (data) =>{
    let city = document.getElementById("city_name");
    let country = document.getElementById("country_name");
    let main_temparature = document.getElementById("main_temparature")
    let sun_rise_time = document.getElementById("sun_rise_time");
    let sun_set_time = document.getElementById("sun_set_time");

    city.innerText = data.location.name;

    main_temparature.innerText = data.current.temp_c;

    main_status_image.src = data.current.condition.icon
}

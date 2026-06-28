console.log("js loaded!!");

console.log("start");

// http://api.weatherapi.com/v1/future.json?key=c062657689194ceaadb75352262806&q=colombo&dt=2026-07-28

fetch("http://api.weatherapi.com/v1/future.json?key=c062657689194ceaadb75352262806&q=colombo&dt=2026-07-28")
.then(res => res.json())
.then(data => console.log(data));

console.log("end");

// console.log(fetch("http://api.weatherapi.com/v1/future.json?key=c062657689194ceaadb75352262806&q=colombo&dt=2026-07-28"))


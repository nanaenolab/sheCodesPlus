let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

// write your code here
let city = prompt("Enter a city");
city = city.trim();
city = city.toLowerCase();

if (city !== undefined) {
    let tempreture = weather[city].temp;
    let humidity = weather[city].humidity;
    alert(`It is currently ${weather[city].temp} in paris with humidity of ${weather[city].humidity} %`);
}else{
    alert(`Sorry! We don't have the weather for this city`);
}
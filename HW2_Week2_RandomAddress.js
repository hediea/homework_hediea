var streetNumber = [1234, 3653, 2121, 135, 5670];
var streetName = ["Mentone", "Overland", "Venice", "Fair Oaks", "Main"];
var cityName = ["Los Angeles", "San Francisco", "Sacramento", "Culver City", "Santa Monica"];
var state = ["CA", "NY", "TX", "NM"];
var zip = [90034, 95628, 90210, 12345];

//Attempt to try something:
//var address = streetNumber + " " + streetName + " " + cityName + " " + state + " "+ zip;
//var mix = address[Math.floor(Math.random() * address.length)];
//console.log(mix);


var streetNumberMath = streetNumber[Math.floor(Math.random() * streetNumber.length)];
var streetNameMath = streetName[Math.floor(Math.random() * streetName.length)];
var cityNameMath = cityName[Math.floor(Math.random() * cityName.length)];
var stateMath = state[Math.floor(Math.random() * state.length)];
var zipMath = zip[Math.floor(Math.random() * zip.length)];


console.log(streetNumberMath + " " + streetNameMath + " " + cityNameMath + " " + stateMath + " " + zipMath);

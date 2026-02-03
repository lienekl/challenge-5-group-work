let searchBtn = document.getElementById("button-form");
let countryField = document.getElementById("countryname");

searchBtn.addEventListener("click", function(){
    let countryName = countryField.value;
    let endpointURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    console.log(endpointURL);
    fetch(endpointURL);
    .then((response) => (response.json())
    .then(data))

    
})
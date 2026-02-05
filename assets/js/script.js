let searchBtn = document.getElementById("button-form");
let countryField = document.getElementById("countryname");


searchBtn.addEventListener("click", function(){
    let countryName = countryField.value;
    let endpointURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    console.log(endpointURL);  // logs the url so u can check if its correct
    fetch(endpointURL) // calls the API. basically go to this URL and get the data. (starts the API request)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0]);  // logs the entire country object so you can see everything
        console.log(data[0].capital[0]);
        console.log(data[0].flags.png);
        console.log(data[0].population);
        

         outcome.innerHTML = `
      <img src="${data[0].flags.png}">
      <h3>Capital: ${data[0].capital[0]}</h3>
      <h3>Population: ${data[0].population}</h3>
      <h3>Region: ${data[0].region}<h3>
     

    `
    })

});
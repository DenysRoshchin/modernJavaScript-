// callback 
// const cities = ['london', 'new york', 'madrid', 'paris', 'berlin'];

// inline callback
// cities.forEach(function(city){
//       console.log(city)
// });

// callback with funct declare
// function callback(city){
//       console.log(city);
// }
// cities.forEach(callback);

const countries = ['france', 'spain', 'portugal', 'austraian', 'england', 'iran'];

function newCountry(country, callback){
      setTimeout(function(){
            console.log('fisrt')
            // add the new country
            countries.push(country);

            // execute the callback
            callback();
      }, 2000)
}

// display the countries after 1 sec 
function displayCountries(){
      setTimeout(function(){
            let html = '';
            countries.forEach(function(country){
                  html += `<li>${country}</li>`
            });
            document.body.innerHTML = html;
      }, 1000);
}

// add a new country
newCountry('germany', displayCountries);

// print the countries
displayCountries();
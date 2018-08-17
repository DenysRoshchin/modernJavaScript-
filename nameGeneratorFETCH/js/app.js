document.querySelector('#generate-names').addEventListener('submit', loadNames);


// execute the function to query API
function loadNames(e){
  e.preventDefault();

  // read the value from the form and create the var
  const region = document.getElementById('country').value;
  const gender = document.getElementById('genre').value;
  const amount = document.getElementById('quantity').value;


  // build the url
  let url = 'http://uinames.com/api/?';

  // read the region and append to the url
  if(region != ''){
    url += `region=${region}&`;
  }
  // read the gender and append to the url
  if(gender != ''){
    url += `gender=${gender}&`;
  }
  // read the amount and append to the url
  if(amount != ''){
    url += `amount=${amount}&`;
  }
console.log(url)
  // fetch api 
  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(names){
      let html = '<h2>generate the names</h2>';
      html +='<ul class="list">';
      names.forEach(function(name){
        html += `
          <li>${name.name}</li>
        `
      })
      html +='</ul>';

      // insert into html
      document.getElementById('result').innerHTML = html;
    })
    .catch(function(error){
      console.log(error);
    })

}


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

  // create ajax call 
  const xhr = new XMLHttpRequest();

  // open the connection
  xhr.open('GET', url, true);

  // execute the function
  xhr.onload = function(){
    
    if(this.status === 200){
      const names = JSON.parse(this.responseText);
      console.log(names);

      // insert into the html
      let html = '<h2>Generated Names</h2>'
      
      html += '<ul class="list">';
      names.forEach(function(name){
        html += `
          <li>${name.name}</li>
        `
      })
      html += '</ul>';

      document.querySelector('#result').innerHTML = html;
    }
  }

  // send the request
  xhr.send();

}


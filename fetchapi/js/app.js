document.getElementById('button1').addEventListener('click', loadTxt);
document.getElementById('button2').addEventListener('click', loadJSON);
document.getElementById('button3').addEventListener('click', loadREST);


// load txt 
function loadTxt(){
   fetch('data.txt')
   .then(function(response){
      return response.text()
   })
   .then(function(data){
      console.log(data)
      document.getElementById('result').innerHTML = data;
   })
   .catch(function(error){
      console.log(error)
   })
}

// load and print JSON
function loadJSON(){
   fetch('employees.json')
   .then(function(response){
      return response.json();
   })
   .then(function(data){
      let html = '';
      data.forEach(function(employee){
         html += `
            <li>${employee.name} ${employee.job}</li>
         `
      });

      // insert into the html
      document.getElementById('result').innerHTML = html;
   })
   .catch(function(error){
      console.log(error);
   })
}

// prints the response from a REST API
function loadREST(){
   fetch('https://picsum.photos/list')
   .then(function(response){
      return response.json();
   })
   .then(function(img){
      let html = '';
      
      img.forEach(function(image){
         html += `
         <li>
            <a target="_blank" href="${image.post_url}">view img</a>
            ${image.author}
         </li>
         `;
      });

      document.getElementById('result').innerHTML = html
   })
   .catch(function(error){
      console.log(error);
   })
}
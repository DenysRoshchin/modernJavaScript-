document.getElementById('button').addEventListener('click', loadData);

function loadData(){

      // create the new XMLHTTPRequest object
      const xhr = new XMLHttpRequest();

      // open the connection
      xhr.open('GET', 'data.txt', true);

      /*
            // execution of the ajax call
            xhr.onload = function(){
                  // codes
                  // 200: correct
                  // 403: forbidden
                  // 404: not found
                  if(this.status === 200){
                        document.getElementById('output').innerHTML = `
                        <h1>${this.responseText}</h1>
                        `
                  }
            }
      */

      xhr.onreadystatechange = function(){
            // ready states
            // 0: unset 
            // 1: opened
            // 2: recived
            // 3: loading
            // 4: done
            if(this.status === 200 && this.readyState === 4){
                  document.getElementById('output').innerHTML = `
                  <h1>${this.responseText}</h1>
                  `
            }
      }

      // send the request
      xhr.send();



}
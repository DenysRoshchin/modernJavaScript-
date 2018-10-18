document.getElementById('button1').addEventListener('click', loadEmployee);

document.getElementById('button2').addEventListener('click', loadEmployees);

// display single employee
function loadEmployee(){
      // create the obj
      const xhr = new XMLHttpRequest();

      // open the connection
      xhr.open('GET', 'employee.json', true);

      // execute the function
      xhr.onload = function(){
            if(this.status === 200){
                  // get the response as a object
                  const employee = JSON.parse(this.responseText);

                  // build the template
                  const output = `
                        <ul>
                              <li>ID: ${employee.id}</li>
                              <li>name: ${employee.name}</li>
                              <li>company: ${employee.company}</li>
                              <li>job: ${employee.job}</li>
                        </ul>
                  `;

                  // print the HTML
                  document.getElementById('employee').innerHTML = output;
            }
      }

      // send the request
      xhr.send();    
}

// display all the employees
function loadEmployees(){
      // create the object
      xhr = new XMLHttpRequest();

      // open the connection
      xhr.open('GET', 'employees.json', true);

      // execute the function
      xhr.onload = function(){
            if(this.status === 200){
                  // get the responce as an object
                  const employees = JSON.parse(this.responseText);
                  
                  let output = '';
                  employees.forEach(function(employee){
                        output += `
                              <ul>
                                    <li>ID: ${employee.id}</li>
                                    <li>name: ${employee.name}</li>
                                    <li>company: ${employee.company}</li>
                                    <li>job: ${employee.job}</li>
                              </ul>
                        `;
                  });

                  // print the HTML
                  document.getElementById('employees').innerHTML = output;
               
            }
      
      }

      // send the request
      xhr.send();
}
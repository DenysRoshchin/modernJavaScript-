class UI {
      constructor() {
         this.init();
      }
      init(){
         this.printCryptoCurrencies();
      }
      // print the option for the form
      printCryptoCurrencies(){
         cryptoAPI.getCryptoCurrenciesList()
            .then(data => {
                  
               const cryptoCurrencies = data.cryptoCurrencies.data;

            //    console.log(cryptoCurrencies);
 
               let a = []
                for(let index in cryptoCurrencies) {
                      a.push(cryptoCurrencies[index])
                }
               
                const select  = document.getElementById('cryptocurrency')

               a.forEach(currency => {
                  // add the option
                  const option = document.createElement('option');
                  option.value = currency.id;
                  option.appendChild(document.createTextNode(currency.name));
                  select.appendChild(option);
               })
            })
      }

      // prints are message
      printMessage(msg, className){
            const div = document.createElement('div');
            div.className = className;
            div.appendChild(document.createTextNode(msg));
            const messageDiv = document.querySelector('.messages');
            messageDiv.appendChild(div);

            // remove the msg
            setTimeout(() =>{
                  document.querySelector('.messages div').remove()
            },3000)
      }
}
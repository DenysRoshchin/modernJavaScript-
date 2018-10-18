// instaciate the classes
const cryptoAPI = new CryptoAPI();
const ui = new UI();

// create the var
const form = document.getElementById('form');


// add event listener
form.addEventListener('submit', (e) => {
   e.preventDefault();

   // read corrency
   const currencySelect = document.getElementById('currency').value;

   // read the crypto
   const cryptoCurrencySelect = document.getElementById('cryptocurrency').value;

   console.log(currencySelect + ': ' + cryptoCurrencySelect);

   // validate that the select have smt 
   if (currencySelect === '' || cryptoCurrencySelect === ''){
      // display an error
      ui.printMessage('All the fields are mandatory', 'deep-orange darken-4 card-panel')
   } else {
      // query the rest api
      cryptoAPI.queryAPI(currencySelect, cryptoCurrencySelect)
         .then(data => {
            console.log(data.result[0]);
         })
   }
})
class CryptoAPI {
   // query the rest api wit a currency
   async queryAPI(currency, cryptoCurrency){
      // query the url
      const url = await fetch(`https://api.coinmarketcap.com/v2/ticker/${cryptoCurrency}/?convert=${currency}`);

      // return as JSON
      const result = await url.json();

      // return the object
      return {
         result
      }
   }

   // get all the crypto
   async getCryptoCurrenciesList(){
      const url = await fetch('https://api.coinmarketcap.com/v2/ticker/');

      // return this as a json
      const cryptoCurrencies = await url.json();

      // return the object
      return {
         cryptoCurrencies
      }
   }

}
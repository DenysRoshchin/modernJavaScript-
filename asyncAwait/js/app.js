// async await

async function getClients(){
   // create a new promise
   const clients = new Promise( (resolve, reject) => {
      setTimeout( () => {
         resolve('client list downloaded...')
      }, 1000 )
   });

   const error = false;

   if(!error){
      const responce = await clients; // hold until clients is executed

      return responce;
   } else {
      await Promise.reject('There was an error');
   }
}

getClients()
   .then(responce => console.log(responce))
   .catch(error => console.log(error))


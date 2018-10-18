// promises

const applyDiscount = new Promise(function(resolve, reject){
      // resolve is going execute when the function i succesfull
      // reject when the function has failed

      const discount = false;

      if(discount){
            resolve('discount applied')
      } else {
            reject('discount failed...')
      }

})

applyDiscount.then(function(result){
      console.log(result)
}).catch(function(result){
      console.log(result)
})

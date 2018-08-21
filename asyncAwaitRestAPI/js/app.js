// async await with a REST API

async function getPosts(params) {
   // wait until the post are downloaded

   const responce = await fetch 
   ('http://jsonplaceholder.typicode.com/photos');

   // execute then
   const data = await responce.json();

   // console.log until the second await finich executing
   return data;
}

getPosts()
   .then(posts => console.log(posts))
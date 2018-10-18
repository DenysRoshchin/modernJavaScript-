class EventBrite {
   // constructor when instanciate
   constructor(){
      this.auth_token = 'KCRZQ45I5RZ3ISE3AFBO';
      this.orderBy = 'date';
   }

   // get the event form API
   async queryAPI(eventName, category){
      const eventsResponse = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.orderBy}&categories=${category}&token=${this.auth_token}`);

      // wait for the response and retunr json
      const events = await eventsResponse.json();

      return {
         events
      }
   }

   // get categories from API
   async getCategoriesAPI(){
      // query the API
      const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);

      // hold for the response and then return as json
      const categories = await categoriesResponse.json();

      return {
         categories
      }
   }
}
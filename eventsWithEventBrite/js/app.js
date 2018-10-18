// inst both class
const eventbrite = new EventBrite();
const ui = new UI();

// create listener for the submit btn
document.getElementById('submitBtn').addEventListener('click', (e) => {
   e.preventDefault();

   // get values from form 
   const eventName = document.getElementById('event-name').value;
   const category = document.getElementById('category').value;

   // console.log(eventName + ' : ' + category);

   if(eventName !== ''){
      // query event brite API
      eventbrite.queryAPI(eventName, category)
         .then(events => {
         
            // check for events
            const eventsList = events.events.events;
            if(eventsList.length > 0){
               // prints the events
               ui.displayEvents(eventsList)
            } else {
               // there are no events, print a message
               ui.printMessage('No results found', 'text-center alert alert-danger mt-4');
            }
         })
   } else {
      // print a message 
      ui.printMessage('Add an event or city', 'text-center alert alert-danger mt-4');
   }
})
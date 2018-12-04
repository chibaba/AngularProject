import { Component } from  '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl: `
    <div>
     <h1>Upcoming Angular Events</h1>
     <hr/>
     <event-thumbnail></event-thumnail>
    </div>
    `
         
     
})

export class EventsListComponent {
   event = {
       id: 1,
       name: 'Angular mmetup',
       date: '23/4/2018',
       price: 599.99,
       imageurl: '/assets/images/download(1).jpeg',
       location: {
           address: 'simpsom street Abuja',
           city: 'Lagos',
           country: 'England'
       }
   }
}
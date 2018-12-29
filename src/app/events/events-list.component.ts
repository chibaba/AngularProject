import { Component } from  '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div>
     <h1>Upcoming Angular Events</h1>
     <hr/>
     <event-thumbnail (eventClick)="handleEventClicked($event)"
     [event]="event1"></event-thumbnail>
    </div>
    `
         
     
})

export class EventsListComponent {
   event1 = {
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
   handleEventClicked(data) {
       console.log('received:', data)
   }
}
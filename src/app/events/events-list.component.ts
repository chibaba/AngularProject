import { Component } from  '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div>
     <h2>Upcoming Angular Events</h2>
     <hr/>
     <div class="well">
     <div>Hello World</div>
     </div>
     <event-thumbnail 
     [event]="event1"></event-thumbnail>
     
    </div>
    `,
    styles: [`
    .well div { color: red; }
    `]
         
     
})

export class EventsListComponent {
   event1 = {
       id: 1,
       name: 'Angular metup',
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
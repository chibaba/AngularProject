import { Component } from  '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div>
     <h2>Upcoming Angular Events</h2>
     <hr/>
     
     <div class="row">
     <div *ngFor="let events of events" class="col-md-5">
     <event-thumbnail  
     [event]="events"></event-thumbnail>
     </div>
    </div>
    </div>
    `,
    styles: [`
    .well div { color: red; }
    `]
         
     
})

export class EventsListComponent {
   events =[ {
       id: 1,
       name: 'Angular metup',
       date: '23/4/2018',
       Time: '10:00am',
       price: 599.99,
       imageurl: '/assets/images/download(1).jpeg',
       location: {
           address: 'simpsom street Abuja',
           city: 'Lagos',
           country: 'England'
       }
   },
   
   {
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
},
{
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
},





    {
        id: 1,
        name: 'react metup',
        date: '23/4/2018',
        price: 345.99,
        imageurl: '/assets/images/download(1).jpeg',
        location: {
            address: '12 lakwee bodihe',
            city: 'Lakla',
            country: 'Angola'
        }
    },
    {
        id: 1,
        name: 'java metup',
        date: '26/4/2018',
        price: 599.99,
        imageurl: '/assets/images/download(1).jpeg',
        location: {
            address: 'simpsom street Abuja',
            city: 'Lagos',
            country: 'Portugal'
        }
    },
    {
        id: 1,
        name: 'laravelcast metup',
        date: '2/4/2018',
        price: 0.99,
        imageurl: '/assets/images/download(1).jpeg',
        location: {
            address: '16 fountain tower Abuja',
            city: 'losangeles',
            country: 'Isand'
        }
    },
    {
        id: 1,
        name: 'Bootrap metup',
        date: '25/4/2018',
        price: 50.99,
        imageurl: '/assets/images/download(1).jpeg',
        location: {
            address: 'kumar street abiujon',
            city: 'palandas',
            country: 'Indiana'
        }
    }
    
    
]
   
}
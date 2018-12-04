import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
   '<events-list>Hello World</events-list>'
  <img src="/assets/images/download.jpeg"/>
  `
})
export class EventsAppComponent {
  title = 'app';
}

import { Component, Input,  EventEmitter } from '@angular/core'
// import { EventEmitter } from 'protractor';
// import { createOutput } from '@angular/compiler/src/core';

@Component({
    selector: 'event-thumbnail',
    template: `  <div class="well hoverwell thumbnail">
    <div>Name: {{event?.name}}</div>
    <div>Date: {{event?.date}}</div>
    <div>Time: {{event?.time}}</div>
    <div [ngSwitch]="event?.time">
        <span *ngSwitchCase="'8: 00am'">Early start</span>
        <span *ngSwitchCase="'10: 00am'">Late Start</span>
        <span *ngSwitchDefault>Normal Start</span>
    </div>
    <div>Price: \${{event?.price}}</div>
    <div *ngIf="event?.location">
    <div>
    <span> Location: {{event?.location.address}} </span>
    <span class ="pad-left">{{event?.location.city}}, {{event?.location.country}}
    </span>
    </div>
    <div>
    <div *ngIf="event?.location">
        Online URL: {{event?.onlineUrl}}
    </div>
   
   </div>
    `,
    styles: [`
       .thumbnail { min-height: 210px; }
       .pad-left { margin-left: 10px; }
       .well div { color: #bbb; }
    `]
})

export class EventThumbnailComponent {
   @Input() event:any

  
}
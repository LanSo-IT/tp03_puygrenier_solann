import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }
  title = 'app-angular-tp02-puygrenier-solann';
  message = '' ;
  receiveMessage($event: string) {
    this.message = $event;
    console.warn($event);//this.profileForm.value
  }
}

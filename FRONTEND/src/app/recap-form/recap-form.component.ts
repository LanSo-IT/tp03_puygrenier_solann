import { Component, OnInit,Input } from '@angular/core';

// Use EventEmitter to keep the form encapsulated and to provide the form value outside the component.
//
@Component({
  selector: 'app-recap-form',
  templateUrl: './recap-form.component.html',
  styleUrls: ['./recap-form.component.css']
})
export class RecapFormComponent implements OnInit {
  @Input() userData;
  public arrayOfKeys;
  constructor() {
    this.userData = '';
    this.arrayOfKeys = Object.keys(this.userData)
  }
  ngOnInit(): void { }

}

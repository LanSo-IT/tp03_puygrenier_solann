import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { NationalPhoneNumberPipe } from '../national-phone-number.pipe';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void { }

  profileForm = new FormGroup({
    login: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    phoneNumber: new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
    address: new FormGroup({
      street: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      postalCode: new FormControl('',Validators.required),
    })
  });
  @Output() messageEvent = new EventEmitter<string>();

  get getControl(){
    return this.profileForm.controls;
  }
  get getAddressControl(){
    let addressBlock: any;
    addressBlock = this.profileForm.get('address');
    return addressBlock.controls;
  }

  get phoneNumber(){
  return this.profileForm.get('phoneNumber') as FormControl;
  }
  onSubmit() {
    this.messageEvent.emit(this.profileForm.value);
  }
  /*
  updateProfile() {
  this.profileForm.patchValue(
    {
      password: 'mysteriousp',
      firstName: 'Solann',
      lastName: 'Puygrenier',
      email: 'aaa@gmail.com',
      phoneNumber: '0677777777',
      address: {
        street: '123 Rue des chiffres',
        city: 'Saverne',
        postalCode: '67700'
      }
    },{emitEvent: false})
  }*/
}

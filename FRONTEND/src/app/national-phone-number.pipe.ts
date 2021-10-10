import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NationalPhoneNumber'
})
export class NationalPhoneNumberPipe implements PipeTransform {

  transform(inputPhone: string): string {
    var internationalCode = (inputPhone[0]==='0' ? '+33' : '');
    var troncatedNumber = inputPhone.substring(1,inputPhone.length);
    return internationalCode + troncatedNumber;//cleanedPhoneNumber'';
  }
}


/*Ressources :
https://www.angularjswiki.com/pipes/custompipe/#custom-pipe-example


*/

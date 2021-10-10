import { NationalPhoneNumberPipe } from './national-phone-number.pipe';

describe('NationalPhoneNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new NationalPhoneNumberPipe();
    expect(pipe).toBeTruthy();
  });
});

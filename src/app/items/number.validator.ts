import {AbstractControl} from '@angular/forms';

export function Validate42(control: AbstractControl) {
  if (control.value !== 42) {
    return {
      message: 'Введите число 42'
    };
  }
  return null;
}

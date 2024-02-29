import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent {
  createItemForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createItemForm = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(10)]],
      subtitle: [null, [Validators.required, Validators.minLength(5)]],
      content: [null, [Validators.required, Validators.minLength(20)]]
    })
  }

}

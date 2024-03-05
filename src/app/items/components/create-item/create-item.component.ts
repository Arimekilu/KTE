import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ItemsService} from "../../items.service";
import {myItem} from "../../item.interface";
import {Validate42} from "../../number.validator";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent {
  createItemForm: FormGroup;
  isBtnDisabled: boolean = false

  constructor(private formBuilder: FormBuilder, private itemService: ItemsService) {
    this.createItemForm = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(5)]],
      subtitle: [null, [Validators.required, Validators.minLength(5)]],
      content: [null, [Validators.required, Validators.minLength(10)]],
      number42: [41, [Validate42]]
    })
  }

  public submit () {
    this.isBtnDisabled = true
    const item: myItem = {
      ...this.createItemForm.value,
      id: ''
    }
    this.itemService.setItem$(item).subscribe((res) => {
      console.log(res)
      this.createItemForm.reset()
      this.isBtnDisabled = false
    })
  }

}

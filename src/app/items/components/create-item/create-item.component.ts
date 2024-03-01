import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ItemsService} from "../../items.service";
import {myItem} from "../../item.interface";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent {
  createItemForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private itemService: ItemsService) {
    this.createItemForm = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(10)]],
      subtitle: [null, [Validators.required, Validators.minLength(5)]],
      content: [null, [Validators.required, Validators.minLength(20)]]
    })
  }

  public submit () {
    const item: myItem = {
      ...this.createItemForm.value,
      id: ''
    }
    this.itemService.setItem$(item).subscribe((res) => {
      console.log(res)
    })
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import {CreateItemComponent} from "./components/create-item/create-item.component";
import {ItemComponent} from "./components/item/item.component";
import {AllItemsComponent} from "./components/all-items/all-items.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CreateItemComponent,
    ItemComponent,
    AllItemsComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class ItemsModule { }

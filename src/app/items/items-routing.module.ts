import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllItemsComponent} from "./components/all-items/all-items.component";
import {CreateItemComponent} from "./components/create-item/create-item.component";
import {ItemComponent} from "./components/item/item.component";

const routes: Routes = [
  {path: '', component: AllItemsComponent},
  {path: 'create-item', component: CreateItemComponent},
  {path: 'item/:id', component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }

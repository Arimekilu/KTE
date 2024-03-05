import {Component, OnInit} from '@angular/core';
import {ItemsService} from "../../items.service";
import {myItem} from "../../item.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})
export class AllItemsComponent implements OnInit{
  items?: myItem[]
  constructor(private itemsService: ItemsService, private router: Router) {
  }
  ngOnInit(): void {
    this.itemsService.allItems$().subscribe((items) => {
      this.items = items
    })
  }
  public navigateToItem(id: string) {
    this.router.navigate(['items/item', id])
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {myItem} from "../../item.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemsService} from "../../items.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item?: myItem
  id: string = ''

  public deleteItem(id: string) {
    this.itemsService.deleteItem$(id).subscribe((res) => {
      console.log(res)
      this.router.navigate(['items'])
    })
  }

  constructor(private itemsService: ItemsService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
        this.id = params["id"]
        this.itemsService.getItemById$(this.id).subscribe( res => this.item = res)
      },
      (error) => {
        console.log(error)
      })

  }


}
